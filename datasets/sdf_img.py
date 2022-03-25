# --------------------------------------------------------
# Written by Yufei Ye (https://github.com/JudyYe)
# --------------------------------------------------------
from __future__ import print_function
import numpy as np
import torch
import torch.nn as nn
from torchvision.transforms import transforms
import pytorch3d.ops as op_3d

from nnutils.hand_utils import ManopthWrapper, get_nTh
from jutils import mesh_utils, geom_utils, image_utils


class SdfImg(nn.Module):
    """SDF Wrapper of datasets"""
    def __init__(self, cfg, dataset, is_train, data_dir='../data/', base_idx=0):
        super().__init__()
        self.cfg = cfg
        self.dataset = dataset
        self.train = is_train
        
        self.anno = {
            'index': [],  # per grasp
            'cad_index': [],
            'hA': [],   # torch.Float (45? )
            'hTo': [],  # torch Float (4, 4)
            'cTh': [],  # torch.Float (4, 4)
        }

        self.base_idx = base_idx
        self.data_dir = data_dir

        self.subsample = cfg.DB.NUM_POINTS
        self.hand_wrapper = ManopthWrapper().to('cpu')

        self.transform = transforms.Compose([
            transforms.ColorJitter(.4,.4,.4),
            transforms.ToTensor(),
        ]) if self.train else transforms.ToTensor()

    def preload_anno(self):
        self.dataset.preload_anno(self.anno.keys())
        for key in self.anno:
            self.anno[key] = self.dataset.anno[key]
        self.obj2mesh = self.dataset.obj2mesh
        self.map = self.dataset.map

    def __getitem__(self, idx):
        sample = {}
        idx = self.map[idx] if self.map is not None else idx
        # load SDF
        cad_idx = self.anno['cad_index'][idx]
        filename = self.dataset.get_sdf_files(cad_idx)

        oPos_sdf, oNeg_sdf = unpack_sdf_samples(filename, None)
        hTo = torch.FloatTensor(self.anno['hTo'][idx])
        hA = torch.FloatTensor(self.anno['hA'][idx])
        nTh = get_nTh(self.hand_wrapper, hA, self.cfg.DB.RADIUS)

        nPos_sdf = self.norm_points_sdf(oPos_sdf, nTh @ hTo) 
        nNeg_sdf = self.norm_points_sdf(oNeg_sdf, nTh @ hTo) 

        oSdf = torch.cat([
                self.sample_points(oPos_sdf, self.subsample),
                self.sample_points(oNeg_sdf, self.subsample),
            ], dim=0)
        sample['oSdf'] = oSdf

        hSdf = self.norm_points_sdf(oSdf, hTo)
        sample['hSdf'] = hSdf

        nPos_sdf = self.sample_unit_cube(nPos_sdf, self.subsample)
        nNeg_sdf = self.sample_unit_cube(nNeg_sdf, self.subsample)
        nSdf = torch.cat([nPos_sdf, nNeg_sdf], dim=0)
        sample['nSdf'] = nSdf

        # load pointcloud
        mesh = self.obj2mesh[cad_idx]
        if self.cfg.MODEL.BATCH_SIZE == 1:
            sample['mesh'] = mesh
        xyz, color = op_3d.sample_points_from_meshes(mesh, self.subsample * 2, return_textures=True)
        sample['oObj'] = torch.cat([xyz, color], dim=-1)[0]  # (1, P, 6)
        hObj = torch.cat([
                mesh_utils.apply_transform(xyz, hTo[None]),
                color,
            ], dim=-1)[0]
        sample['hObj'] = hObj

        xyz = mesh_utils.apply_transform(xyz, (nTh @ hTo)[None])
        nObj = torch.cat([xyz, color], dim=-1)[0]  # (1, P, 6)
        nObj = self.sample_unit_cube(nObj, self.subsample)
        sample['nObj'] = nObj

        sample['hA'] = self.rdn_hA(hA)
        sample['nTh'] = geom_utils.matrix_to_se3(nTh)
        sample['hTo'] = geom_utils.matrix_to_se3(hTo)
        sample['indices'] = idx + self.base_idx

        # add crop?? 
        sample['cTh'] = geom_utils.matrix_to_se3(self.anno['cTh'][idx].squeeze(0))
        
        sample['bbox'] = self.get_bbox(idx)
        sample['cam_f'], sample['cam_p'] = self.get_f_p(idx, sample['bbox'])
        sample['image'] = self.get_image(idx, sample['bbox'])
        sample['obj_mask'] = self.get_obj_mask(idx, sample['bbox'])

        sample['index'] = self.get_index(idx)
        return sample   

    def rdn_hA(self, hA):
        if self.train:
            hA = hA + (torch.rand([45]) * self.cfg.DB.JIT_ART * 2 - self.cfg.DB.JIT_ART)
        return hA
    
    def norm_points_sdf(self, obj, nTh):
        """
        :param obj: (P, 4)
        :param nTh: (4, 4)
        :return:
        """
        D = 4

        xyz, sdf = obj[None].split([3, D - 3], dim=-1)  # (N, Q, 3)
        nXyz = mesh_utils.apply_transform(xyz, nTh[None])  # (N, Q, 3)
        _, _, scale = geom_utils.homo_to_rt(nTh)  # (N, 3)
        # print(scale)  # only (5 or 1???)
        sdf = sdf * scale[..., 0:1, None]  # (N, Q, 1) -> (N, 3)
        nObj = torch.cat([nXyz, sdf], dim=-1)
        return nObj[0]

    def sample_points(self, points, num_points):
        """

        Args:
            points ([type]): (P, D)
        Returns:
            sampled points: (num_points, D)
        """
        P, D = points.size()
        ones = torch.ones([P])
        inds = torch.multinomial(ones, num_points, replacement=True).unsqueeze(-1)  # (P, 1)
        points = torch.gather(points, 0, inds.repeat(1, D))
        return points

    def sample_unit_cube(self, hObj, num_points, r=1):
        """
        Args:
            points (P, 4): Description
            num_points ( ): Description
            r (int, optional): Description
        
        Returns:
            sampled points: (num_points, 4)
        """
        D = hObj.size(-1)
        points = hObj[..., :3]
        prob = (torch.sum((torch.abs(points) < r), dim=-1) == 3).float()
        if prob.sum() == 0:
            prob = prob + 1
            print('oops')
        inds = torch.multinomial(prob, num_points, replacement=True).unsqueeze(-1)  # (P, 1)

        handle = torch.gather(hObj, 0, inds.repeat(1, D))
        return handle

    def get_index(self, idx):
        index =  self.anno['index'][idx]
        if isinstance(index, tuple) or isinstance(index, list):

            index = '/'.join(index)
        return index

    def get_bbox(self, idx):
        bbox =  self.dataset.get_bbox(idx)  # in scale of pixel torch.floattensor 
        bbox = image_utils.square_bbox(bbox)
        bbox = self.jitter_bbox(bbox)
        return bbox

    def get_f_p(self, idx, bbox):
        cam_intr = self.dataset.get_cam(idx)  # with pixel?? in canvas
        cam_intr = image_utils.crop_cam_intr(cam_intr, bbox, 1)
        f, p = image_utils.screen_intr_to_ndc_fp(cam_intr, 1, 1)
        f, p = self.jitter_fp(f, p) 
        return f, p

    def get_image(self, idx, bbox):
        image = np.array(self.anno['image'][idx])
        image = image_utils.crop_resize(image, bbox, return_np=False)
        return self.transform(image) * 2 - 1
        
    def get_obj_mask(self, idx, bbox):
        obj_mask = np.array(self.anno['obj_mask'][idx])
        obj_mask = image_utils.crop_resize(obj_mask, bbox,return_np=False)
        return (self.transform(obj_mask) > 0).float()

    def jitter_bbox(self, bbox):
        if self.train:
            bbox = image_utils.jitter_bbox(bbox, 
                self.cfg.DB.JIT_SCALE, self.cfg.DB.JIT_TRANS)
        return bbox
    
    def jitter_fp(self, f, p):
        if self.train:
            stddev_p = self.cfg.DB.JIT_P / 224 * 2
            dp = torch.rand_like(p) * stddev_p * 2 - stddev_p
            p += dp
        return f, p


def unpack_sdf_samples(filename, subsample=None):
    npz = np.load(filename)
    pos_tensor = remove_nans(torch.from_numpy(npz["pos"]))
    neg_tensor = remove_nans(torch.from_numpy(npz["neg"]))

    if subsample is None:
        return pos_tensor, neg_tensor

    # split the sample into half
    half = int(subsample / 2)

    random_pos = (torch.rand(half) * pos_tensor.shape[0]).long()
    random_neg = (torch.rand(half) * neg_tensor.shape[0]).long()

    sample_pos = torch.index_select(pos_tensor, 0, random_pos)
    sample_neg = torch.index_select(neg_tensor, 0, random_neg)

    samples = torch.cat([sample_pos, sample_neg], 0)

    return samples


def remove_nans(tensor):
    tensor_nan = torch.isnan(tensor[:, 3])
    return tensor[~tensor_nan, :]

