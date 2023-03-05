from glob import glob
from torchvision.transforms import ToTensor
from PIL import Image
from pytorch3d.renderer.cameras import PerspectiveCameras
import torch.nn.functional as F
import numpy as np
import os.path as osp
from omegaconf.omegaconf import OmegaConf
import logging 
logging.getLogger().setLevel(logging.ERROR)

# import sys
# sys.path.append('externals/frankmocap/')
# sys.path.append('externals/frankmocap/detectors/body_pose_estimator/')

from config.defaults import get_cfg_defaults

from nnutils.hand_utils import ManopthWrapper
# from nnutils.handmocap import get_handmocap_predictor, process_mocap_predictions, get_handmocap_detector
from nnutils.hoiapi import vis_hand_object, Predictor
from nnutils import model_utils
# from nnutils import image_utils
from jutils import mesh_utils, image_utils, geom_utils




import torch
assert torch.cuda.is_available()
from nnutils.hoiapi import vis_hand_object, Predictor

data_dir = '/home/yufeiy2/scratch/result/HOI4D/'

device = 'cuda:0'
def get_hoi_predictor(experiment_directory='weights/mow'):
    cfg_def = get_cfg_defaults()
    cfg_def = OmegaConf.create(cfg_def.dump())
    cfg = OmegaConf.load(osp.join(experiment_directory, 'hparams.yaml'))
    cfg = OmegaConf.merge(cfg_def, cfg)
    cfg.MODEL.BATCH_SIZE = 1
    model = model_utils.load_model(cfg, experiment_directory, 'last')

    predictor = Predictor(model)
    return predictor


def get_data(vid):
    vid_dir = osp.join(data_dir, vid,)
    image_file_list = sorted(glob(osp.join(vid_dir, 'image', '*.*g')))
    data_list = []
    camera_dict = np.load(osp.join(vid_dir, 'cameras_hoi_smooth_100.npz'), )
    hand_dict = np.load(osp.join(vid_dir, 'hands_smooth_100.npz'), )
        # camera_dict['cTw'].append(cTw.cpu().detach().numpy()[0])
        # camera_dict['K_pix'].append(cam_intr_crop.cpu().detach().numpy()[0])
        # hand_dict['hA'].append(hA.cpu().detach().numpy()[0])
        # hand_dict['beta'].append(beta.cpu().detach().numpy()[0])
    for i, image_file in enumerate(image_file_list):
        data = {}
        image = Image.open(image_file)
        orig_W, orig_H = image.size
        image = image.resize((224, 224))
        mask = Image.open(image_file.replace('image', 'obj_mask')).resize((224, 224))
        data['image'] = ToTensor()(image).unsqueeze(0) * 2 - 1
        data['obj_mask'] = ToTensor()(mask).reshape(1, 1, 224, 224)
        cTh = torch.FloatTensor(camera_dict['cTw'][i])[None]
        data['cTh'] = geom_utils.matrix_to_se3(cTh)
        data['hA'] = torch.FloatTensor(hand_dict['hA'][i])[None]
        K_pix = torch.FloatTensor(camera_dict['K_pix'][i])[None]
        k_ndc = mesh_utils.intr_from_screen_to_ndc(K_pix, orig_H, orig_W)
        cam_f, cam_p = get_fp_from_k(k_ndc)
        data['cam_f'] = cam_f
        data['cam_p'] = cam_p

        data_list.append(data)

    return data_list

def get_fp_from_k(k_ndc):
    fx = k_ndc[:, 0, 0]
    fy = k_ndc[:, 1, 1]
    px = k_ndc[:, 0, 2]
    py = k_ndc[:, 1, 2]
    f = torch.stack([fx, fy], dim=-1)
    p = torch.stack([px, py], dim=-1)
    return f, p


def save_render(save_dir, t, data, out, H=512, W=512):
    device = data['image'].device
    ww = hh = data['image'].size(-1)
    gt = data['image']
    degree_list = [0, 45, 60, 90, 360-60, 360-90]
    name_list = ['gt', 'overlay', ] + \
        ['%d_hoi' % d for d in degree_list] + \
            ['%d_obj' % d for d in degree_list]
    image_list = [[] for _ in name_list]
    hObj = out['hObj']
    hHand = out['hHand']
    cTh = data['cTh']
    cam_f = data['cam_f']
    cam_p = data['cam_p']

    gt = F.adaptive_avg_pool2d(gt, (H, W))

    cameras = PerspectiveCameras(cam_f, cam_p, device=device)
    cHoi = merge_hoi(out['cHand'], out['cObj'])
    iHoi = mesh_utils.render_mesh(cHoi, cameras, out_size=H,)
    image1, mask1 = iHoi['image'], iHoi['mask']
    
    image_list[0].append(gt)
    image_list[1].append(image_utils.blend_images(image1, gt, mask1))  # view 0

    for i, az in enumerate(degree_list):
        image1, mask1 = render_az(hHand, hObj, cTh, az, H=H, W=W)
        image_list[2 + i].append(torch.cat([image1, mask1], 1))

    off = 2 + len(degree_list)
    for i, az in enumerate(degree_list):
        image1, mask1 = render_az(None, hObj, cTh, az, H=H, W=W, f=cam_f[0, 0])
        image_list[off + i].append(torch.cat([image1, mask1], 1))
    
    # save 
    for n, im_list in zip(name_list, image_list):
        im = im_list[-1]
        image_utils.save_images(im, osp.join(save_dir, f'{t:03d}_{n}'))

def merge_hoi(jHand, jObj):
    jObj.textures = mesh_utils.pad_texture(jObj, 'white')
    jHand.textures = mesh_utils.pad_texture(jHand, 'blue')
    jMeshes = mesh_utils.join_scene([jHand, jObj])
    return jMeshes

def render_az(jHand, jObj, cTh, az, H, W, f=2):
    jObj.textures = mesh_utils.pad_texture(jObj, 'white')
    if jHand is not None:
        jHand.textures = mesh_utils.pad_texture(jHand, 'blue')
        jMeshes = mesh_utils.join_scene([jHand, jObj])
    else:
        jMeshes = jObj
    cMeshes = mesh_utils.apply_transform(
        jMeshes, cTh)

    image = mesh_utils.render_geom_azel(cMeshes, [az,0], out_size=H, f=f)
    return image['image'], image['mask']



def main():
    model_dir = '/home/yufeiy2/scratch/result/ihoi/light_mow/hoi4d'

    cat_list = "Mug,Bottle,Kettle,Bowl,Knife,ToyCar".split(',')
    ind_list = [1,2]
    index_list = [f"{cat}_{ind}" for ind in ind_list for cat in cat_list ]

    hoi_predictor = get_hoi_predictor(model_dir)
    for vid in index_list:
        mesh_dir = osp.join(model_dir, vid, 'meshes')
        render_dir = osp.join(model_dir, vid, 'vis_clip')

        data_list = get_data(vid)
        T = len(data_list) - 1
        render_step = [0, T//2, T-1]
        for t, data in enumerate(data_list):
            data = model_utils.to_cuda(data, device)
            out = hoi_predictor.forward_to_mesh(data)
            mesh_utils.dump_meshes([osp.join(mesh_dir, f'{t:03d}_hObj')], out['hObj'], )
            mesh_utils.dump_meshes([osp.join(mesh_dir, f'{t:03d}_hHand')], out['hHand'], )
            mesh_utils.dump_meshes([osp.join(mesh_dir, f'{t:03d}_cObj')], out['cObj'], )
            mesh_utils.dump_meshes([osp.join(mesh_dir, f'{t:03d}_cHand')], out['cHand'], )
    
            if t in render_step:
                save_render(render_dir, t, data, out,)


if __name__ == '__main__':
    main()    
