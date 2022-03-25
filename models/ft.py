# TODO: neccessary??? 

import argparse
import functools
import os.path as osp
import importlib
from omegaconf.omegaconf import OmegaConf

import torch
import pytorch_lightning as pl
from pytorch_lightning.callbacks import ModelCheckpoint
from pytorch3d.renderer.cameras import PerspectiveCameras

from nnutils.logger import MyLogger
from models.loss import contact_loss, repulsive_loss
from models.ihoi import IHoi, get_hTx
from nnutils.model_utils import latest_ckpt
from config.defaults import get_cfg_defaults

from jutils import mesh_utils, geom_utils, slurm_utils


class FtIHoi(IHoi):
    def __init__(self, cfg, **kwargs) -> None:
        super().__init__(cfg, **kwargs)
        self._logger = kwargs.get('logger')

    def vis_input(self, out, batch, prefix):
        self.logger.save_images(self.global_step, batch['obj_mask'], '%s_obj_mask' % prefix)
        return super().vis_input(out, batch, prefix)

    def load_state_dict(self, state_dict, strict: bool = True):
        return super().load_state_dict(state_dict, strict=strict)

    def step(self, batch, batch_idx):
        image_feat = self.enc(batch['image'], mask=batch['obj_mask'])  # (N, D, H, W)
        
        xXyz = batch[self.sdf_key][..., :3]
        N, P, _ = xXyz.size()
        hTx = get_hTx(self.cfg.MODEL.FRAME, batch)
        xTh = geom_utils.inverse_rt(hTx)
        cTx = geom_utils.compose_se3(batch['cTh'], hTx)
        cameras = PerspectiveCameras(batch['cam_f'], batch['cam_p'], device=xXyz.device)

        hTjs = self.hand_wrapper.pose_to_transform(batch['hA'], False)  # (N, J, 4, 4)
        N, num_j, _, _ = hTjs.size()
        jsTh = geom_utils.inverse_rt(mat=hTjs, return_mat=True)
        hTx_exp = geom_utils.se3_to_matrix(hTx
                  ).unsqueeze(1).repeat(1, num_j, 1, 1)
        jsTx = jsTh @ hTx_exp

        pred_sdf = self.dec(xXyz, image_feat, batch['hA'], cTx, cameras, jsTx=jsTx, )
        ndcPoints = mesh_utils.transform_points(mesh_utils.apply_transform(xXyz, cTx), cameras)
        
        out = {self.sdf_key: pred_sdf, 'z': image_feat, 'jsTx': jsTx}

        loss, losses = 0., {}
        cfg = self.cfg.LOSS

        recon_loss = self.sdf_loss(pred_sdf, batch[self.sdf_key][..., -1:], ndcPoints,
            cfg.RECON, cfg.ENFORCE_MINMAX, )
        loss = loss + recon_loss
        losses['recon'] = recon_loss

        sdf = functools.partial(self.dec, 
            z=image_feat, hA=batch['hA'], cTx=cTx, cam=cameras, jsTx=jsTx)
        # add regularizer
        # smooth
        grad = functools.partial(self.dec.gradient, sdf=sdf)
        if self.training and cfg.SMOOTH > 0:
            surface_points = batch[self.sdf_key][..., :3]  # in N
            reg_l = self.smooth_loss(grad, surface_points, losses, cfg.SMOOTH, cfg.EIK)
            loss += reg_l
        if self.training and cfg.EIK > 0:
            surface_points = batch[self.sdf_key][..., :3]  # in N
            points = torch.rand(N, P//2, 3, device=batch['image'].device)  * 2 - 1  # [-1, 1]
            points = torch.cat([surface_points, points], 1)
            reg_l = self.eikonal_loss(grad, points, losses, cfg.EIK)
            loss += reg_l

        # contact
        hHand, _ = self.hand_wrapper(None, batch['hA'], mode='inner')
        if cfg.CONTACT > 0:
            contact_l = cfg.CONTACT * contact_loss(self.hand_wrapper, sdf, hHand, geom_utils.inverse_rt(hTx))
            losses['contact'] = contact_l
            loss += contact_l
        
        # intersetion
        if cfg.REPULSE > 0:
            xHand = mesh_utils.apply_transform(hHand, xTh)
            repul_l = cfg.REPULSE * repulsive_loss(xHand.verts_padded(), sdf)
            losses['repulse'] = repul_l
            loss += repul_l
        losses['loss'] = loss
        return losses, out

    def smooth_loss(self, grad, surface_points, losses, wgt_smooth, wgt_eik):
        """

        Args:
            sdf ([type]): [description]
            points ([type]): (N, P, 3)
        Return: loss
        """
        N, P, _ = surface_points.size()
        surface_points_neig = surface_points + (torch.rand_like(surface_points) - 0.5) * 0.002  
        with torch.enable_grad():
            g_pos = grad(surface_points).reshape(N*P, 1, 3)
            g_nei = grad(surface_points_neig).reshape(N*P, 1, 3)

        g = torch.cat([g_pos, g_nei], dim=0)
        g_norm = g[:, 0, :].norm(2, dim=1).unsqueeze(-1)
        normals_ = g[:, 0, :] / (g_norm + 10**(-5))

        losses['smooth'] =  wgt_smooth * torch.norm(normals_[:N*P] - normals_[N*P:], dim=-1).mean()

        loss = losses['smooth']
        return loss

    def eikonal_loss(self, grad, surface_points, losses, wgt_eik):
        """

        Args:
            sdf ([type]): [description]
            points ([type]): (N, P, 3)
        Return: loss
        """
        N, P, _ = surface_points.size()
        with torch.enable_grad():
            g = grad(surface_points).reshape(N*P, 1, 3)
        # todo: if truncated?
        g_norm = g[:, 0, :].norm(2, dim=1).unsqueeze(-1)

        losses['eikonal'] = wgt_eik * ((g_norm - 1) ** 2).mean()

        loss = losses['eikonal']
        return loss


def main(args, cfg, save_dir):
    pl.seed_everything(cfg.SEED)
    logger = MyLogger(save_dir=osp.dirname(cfg.MODEL_PATH),
                      name='',
                      version=osp.basename(cfg.MODEL_PATH),
                      subfolder=osp.basename(save_dir) if args.eval else '',
                      resume=args.slurm or args.ckpt is not None,
                      )

    Model = getattr(importlib.import_module("train.%s" % cfg.MODEL.CLS), cfg.MODEL.NAME)
    model = Model(cfg)

    if not args.scratch:
        inconsistent = model.load_state_dict(torch.load(
            latest_ckpt(args.ckpt, True))['state_dict'])
        print(inconsistent)

    checkpoint_callback = ModelCheckpoint(
        save_top_k=1,
        monitor='val_loss/dataloader_idx_0',
        mode='min',
        save_last=True,
    )

    if args.eval:
        trainer = pl.Trainer(gpus='0,',
                             default_root_dir=cfg.MODEL_PATH,
                             logger=logger,
                             resume_from_checkpoint=args.ckpt,
                             )
        print(cfg.MODEL_PATH, trainer.weights_save_path, args.ckpt)

        model.freeze()
        # trainer.test(test_dataloaders=[val_dataloader, ycb_dataloader], model=model, verbose=False)
        trainer.test(model=model, verbose=False)
    else:
        trainer = pl.Trainer(
                            gpus=-1,
                            accelerator='dp',
                            num_sanity_val_steps=1,
                            limit_val_batches=2,
                            check_val_every_n_epoch=cfg.TRAIN.EVAL_EVERY,
                            default_root_dir=cfg.MODEL_PATH,
                            logger=logger,
                            max_epochs=cfg.TRAIN.EPOCH,
                            callbacks=[checkpoint_callback],
                            resume_from_checkpoint=None,
                            progress_bar_refresh_rate=0 if args.slurm else None,            
                            )
        print(cfg.MODEL_PATH)
        trainer.fit(model)



def parse_args():
    arg_parser = argparse.ArgumentParser(description="Image Finetune")
    arg_parser.add_argument('--config', default='experiments/ft3d.yaml', type=str)
    arg_parser.add_argument('--ckpt', default='../output/aug/pifu_MODEL.DECPixCoord', type=str)
    arg_parser.add_argument('--epoch', default='last', type=str)
    arg_parser.add_argument('--exp', default='ft3d', type=str)
    arg_parser.add_argument('--scratch', action='store_true')
    arg_parser.add_argument("opts",  default=None, nargs=argparse.REMAINDER)
    return arg_parser


if __name__ == '__main__':
    arg_parser = parse_args()
    arg_parser = slurm_utils.add_slurm_args(arg_parser)
    args = arg_parser.parse_args()

    save_cfg = OmegaConf.load(osp.join(args.ckpt, 'hparams.yaml'))
    save_cfg.SLURM = None
    cfg = OmegaConf.merge(
        OmegaConf.create(get_cfg_defaults().dump()), 
        save_cfg,
        OmegaConf.load(osp.join(args.config)), 
        OmegaConf.from_dotlist(['%s=%s' % (a,b) for a,b in zip(args.opts[::2], args.opts[1::2])])
    )

    if args.eval:
        save_dir = osp.join(args.ckpt, '%s' % args.exp + '_'.join(args.opts))
    else:
        save_dir = osp.join(args.ckpt, '%s' % args.exp, 
            osp.basename(args.config).split('.')[0] +  '_'.join(args.opts)) 
        cfg.MODEL_PATH = save_dir

    slurm_utils.slurm_wrapper(args, save_dir, main, {'args': args, 'cfg': cfg, 'save_dir': save_dir})
