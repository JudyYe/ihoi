# --------------------------------------------------------
# Written by Yufei Ye (https://github.com/JudyYe)
# --------------------------------------------------------
from __future__ import print_function
import imageio
from scipy.spatial.transform import Rotation as Rt
import pandas
import os
import os.path as osp
import pickle
import numpy as np
from tqdm import tqdm
from PIL import Image

import torch
from nnutils.hand_utils import ManopthWrapper, cvt_axisang_t_i2o
from datasets.base_data import BaseData

from nnutils import mesh_utils, geom_utils, image_utils

mapping = [
    '', 'ToyCar', 'Mug', 'Laptop', 'StorageFurniture', 'Bottle',
    'Safe', 'Bowl', 'Bucket', 'Scissors', '', 'Pliers', 'Kettle',
    'Knife', 'TrashCan', '', '', 'Lamp', 'Stapler', '', 'Chair'
]
rigid = [
    'Bowl', 'Bottle', 'Mug', 'ToyCar', 'Knife', 'Kettle',
]



def pad_box(bbox, pad=0.2):
    x1, y1, x2, y2 = bbox
    w = x2 - x1
    h = y2 - y1
    x1 -= w * pad
    y1 -= h * pad
    x2 += w * pad
    y2 += h * pad
    return np.array([x1, y1, x2, y2])


class HOI4D(BaseData):
    def __init__(self, cfg, dataset: str, split='train', is_train=True,
                 data_dir='../data/', cache=None):
        data_dir = '/private/home/yufeiy2/scratch/data/ihoi/HOI4D'
        super().__init__(cfg, 'hoi4d', split, is_train, data_dir)
        # self.num_points = cfg.DB.NUM_POINTS
        self.cache = cache if cache is not None else self.cfg.DB.CACHE
        self.anno = {
            'index': [],  # per grasp
            'cad_index': [],
            'hA': [],        # tensor in shape of (45, )
            'cTh': [],       # tensor in shape of (4, 4)
            'hTo': [],       # tensor in shape of (4, 4)
            'bbox': [],
            'cam': [],
        }
        self.suf = dataset[len('hoi4d'):]

        if split == 'val':
            self.split = 'test'
        
        self.local_dir = '/private/home/yufeiy2/scratch/data/HOI4D/'
        self.set_dir = osp.join(self.local_dir, f'Sets/all_contact_{self.split}_hand.csv')
        self.cache_file = osp.join(osp.dirname(self.data_dir), 'cache', '%s_%s.pkl' % (dataset, self.split))
        self.cache_mesh = osp.join(osp.dirname(self.data_dir), 'cache', '%s_%s_mesh.pkl' % (dataset, self.split))
        
        self.mask_dir = osp.join(self.data_dir, 'results/{0}/{0}_mask.png')
        self.image_dir = osp.join(self.data_dir, 'results/{0}/{0}.jpg')
        self.shape_dir = osp.join(self.local_dir, 'HOI4D_CAD_Model_for_release/rigid/{}.obj')

        self.hand_wrapper = ManopthWrapper().to('cpu')

    def preload_anno_light(self, load_keys=...):
        data_dir = self.local_dir
        df = pandas.read_csv(self.set_dir)
        # filter if class is in rigid? 
        df = df[df['class'].isin(rigid)]
        if 'mini' in self.suf:
            df = df.sample(10)

        for i, row in tqdm(df.iterrows(), total=len(df), desc='preload anno'):
            index = row['vid_index'], row['frame_number']
            fnum = int(row['frame_number'])
            obj_id = int(row['vid_index'].split('/')[3][1:])
            cad_index = row['class'] + '/' + f'{obj_id:03d}'
            self.anno['index'].append(index)
            self.anno['cad_index'].append(cad_index)

            vid = row['vid_index']
            cam_id = vid.split('/')[0]
            cam_intr = torch.FloatTensor(np.load(osp.join(data_dir, 'camera_params/%s/intrin.npy' % cam_id)))[None]
            self.anno['cam'].append(cam_intr[0])

        self.preload_mesh()

    def get_anno(self, ind):
        anno = {}
        index = vid, fnum = self.anno['index'][ind]
        hA, cTh = self.get_hand_pose(vid, fnum)
        
        bbox2d = self.calc_hoi_bbox(index)
        cTo = self.get_cTo(index)

        hTo = geom_utils.inverse_rt(mat=cTh, return_mat=True) @ cTo
        anno['bbox'] =torch.FloatTensor(bbox2d)
        anno['cTh'] =cTh[0]
        anno['hTo'] =hTo[0]
        anno['hA'] =hA[0]

        return anno

    def preload_anno(self, load_keys=...):
        data_dir = self.local_dir
        df = pandas.read_csv(self.set_dir)
        # filter if class is in rigid? 
        df = df[df['class'].isin(rigid)]
        if 'mini' in self.suf:
            df = df.sample(10)
        cam_dict = {}
        for i, row in tqdm(df.iterrows(), total=len(df), desc='preload anno'):
            index = row['vid_index'], row['frame_number']
            fnum = int(row['frame_number'])
            obj_id = int(row['vid_index'].split('/')[3][1:])
            cad_index = row['class'] + '/' + f'{obj_id:03d}'
            self.anno['index'].append(index)
            self.anno['cad_index'].append(cad_index)

            vid = row['vid_index']
            cam_id = vid.split('/')[0]
            if cam_id not in cam_dict:
                cam_dict[cam_id] = torch.FloatTensor(np.load(osp.join(data_dir, 'camera_params/%s/intrin.npy' % cam_id)))[None]

            cam_intr = cam_dict[cam_id]
            # cam_intr = torch.FloatTensor(np.load(osp.join(data_dir, 'camera_params/%s/intrin.npy' % cam_id)))[None]
            self.anno['cam'].append(cam_intr[0])
        
            hA, cTh = self.get_hand_pose(vid, fnum)
            
            bbox2d = self.calc_hoi_bbox(index)
            cTo = self.get_cTo(index)

            hTo = geom_utils.inverse_rt(mat=cTh, return_mat=True) @ cTo
            self.anno['bbox'].append(torch.FloatTensor(bbox2d))
            self.anno['cTh'].append(cTh[0])
            self.anno['hTo'].append(hTo[0])
            self.anno['hA'].append(hA[0])
            
        os.makedirs(osp.dirname(self.cache_file), exist_ok=True)
        print('save cache', self.cache_file)
        pickle.dump(self.anno, open(self.cache_file, 'wb'))

        self.preload_mesh()

    def preload_mesh(self):
        if self.cache and osp.exists(self.cache_mesh):
            print('!! Load from cache !!')
            self.obj2mesh = pickle.load(open(self.cache_mesh, 'rb'))
        else:
            self.obj2mesh = {}
            print('load mesh')
            for i, cls_id in enumerate(tqdm(self.anno['cad_index'])):
                key = cls_id
                if key not in self.obj2mesh:
                    fname = self.shape_dir.format(cls_id)
                    self.obj2mesh[key] = mesh_utils.load_mesh(fname, scale_verts=1)
            print('save cache', self.cache_mesh)
            os.makedirs(osp.dirname(self.cache_mesh), exist_ok=True)
            pickle.dump(self.obj2mesh, open(self.cache_mesh, 'wb'))

    def get_bbox(self, idx):
        return self.anno['bbox'][idx]
    
    def get_cam(self, idx):
        """
        intrinsics in screen space of the original frames. 
        :param idx: _description_
        :return: _description_
        """
        return self.anno['cam'][idx]

    def get_hoi_mask(self, index):
        index, t = index
        data_dir = self.local_dir

        # 'ZY20210800001/H1/C11/N11/S125/s03/T1/2Dseg/mask/'
        fname = osp.join(data_dir, 'HOI4D_annotations', index, f'2Dseg/mask/{t:05d}.png')
        if not osp.exists(fname):
            fname = osp.join(data_dir, 'HOI4D_annotations', index, f'2Dseg/shift_mask/{t:05d}.png')
            if not osp.exists(fname):
                raise FileNotFoundError(fname)
        mask = imageio.imread(fname)[..., :3]
        th = mask.max() / 2
        green_only = (mask[..., 0] < th) * (mask[..., 2] < th) * (mask[..., 1] > th)

        bbox_file = osp.join(data_dir, f'handpose/refinehandpose_right/{index}/{t:d}.pickle')
        if not osp.exists(bbox_file):
            raise FileNotFoundError(bbox_file)
        with open(bbox_file, 'rb') as f:
            bbox = pickle.load(f)
        kpts = bbox['kps2D']
        hand_bbox = np.array([kpts[:, 0].min(), kpts[:, 1].min(), kpts[:, 0].max(), kpts[:, 1].max()])
        # pad hand_box in x1y1x2y2 format by 20%
        hand_bbox = pad_box(hand_bbox, 0.4)
        # xyxy box cannot be larger than mask.shape
        x1, y1, x2, y2 = hand_bbox
        x1 = max(0, x1)
        x2 = min(mask.shape[1], x2)
        y1 = max(0, y1)
        y2 = min(mask.shape[0], y2)
        hand_bbox = np.array([x1, y1, x2, y2])

        # green_only is true only if coordinate is within hand_bbox
        # first draw a white rectange with hand_bbox with the same shape as green_only
        canvas = np.zeros_like(green_only)
        canvas[int(hand_bbox[1]):int(hand_bbox[3]), int(hand_bbox[0]):int(hand_bbox[2])] = 1
        wrist_mask = green_only.copy()
        green_only = wrist_mask * canvas

        # mask is not green, not black
        hoi_mask = np.any(mask > th, -1)
        obj_mask = hoi_mask * (1-wrist_mask)
        return obj_mask, green_only
    
    def get_obj_mask(self, index):
        """
        :param index: _description_
        :raises FileNotFoundError: _description_
        :return: Image of single channel object maske, (0/255) 
        """        
        obj_mask, hand_mask = self.get_hoi_mask(index)
        obj_mask = (obj_mask * 255).astype(np.uint8)
        return Image.fromarray(obj_mask)
    
    def calc_hoi_bbox(self, index):
        obj_mask, hand_mask = self.get_hoi_mask(index)
        # save_dir = '/home/yufeiy2/scratch/result/ihoi/vis_sdf'

        # import pdb; pdb.set_trace()
        
        th = obj_mask.max() / 2
        bbox = image_utils.mask_to_bbox((obj_mask + hand_mask) > th)

        x, y = (bbox[0:2] + bbox[2:4]) / 2
        m = 75
        min_box = np.array([x - m, y - m, x+m, y+m])
        bbox = image_utils.joint_bbox(bbox, min_box)
        bbox = pad_box(bbox, 0.4)
        return bbox

    def get_image(self, index):
        index, t = index
        data_dir = self.local_dir
        return Image.open(osp.join(data_dir, 'HOI4D_release', index, f'align_rgb/{t:05d}.jpg'))

    def get_hand_pose(self, vid, fnum):
        device = 'cpu'
        data_dir = self.local_dir
        right_bbox_dir = osp.join(data_dir, 'handpose/refinehandpose_right/{}/{:d}.pickle')
        if osp.exists(right_bbox_dir.format(vid, fnum)):
            with open(right_bbox_dir.format(vid, fnum), 'rb') as fp:
                obj = pickle.load(fp)
        else:
            raise FileNotFoundError(right_bbox_dir.format(vid, fnum))
        
        pose = obj['poseCoeff']
        beta = obj['beta']
        trans = obj['trans']
        rot, hA = pose[:3], pose[3:]
        hA = torch.FloatTensor(hA, ).to(device)[None]
        rot = torch.FloatTensor(rot, ).to(device)[None]
        trans = torch.FloatTensor(trans, ).to(device)[None]
        beta = torch.FloatTensor(beta, ).to(device)[None]
        
        rot, trans = cvt_axisang_t_i2o(rot, trans)
        cTw = geom_utils.axis_angle_t_to_matrix(rot, trans)
        pose = torch.FloatTensor(pose[None]).to(device)

        return hA, cTw

    def get_cTo(self, index,):
        """
        :param index: _description_
        :return: (1, 45)
        """
        vid, fnum = index
        data_dir = self.local_dir
        pose_dir = osp.join(data_dir, 'HOI4D_annotations/{}/objpose/{:d}.json')
        rt, trans, dim = read_rtd(pose_dir.format(vid, fnum), 0)

        rt = torch.FloatTensor(rt)[None]
        trans = torch.FloatTensor(trans)[None]

        cTo = geom_utils.rt_to_homo(rt, trans)

        return cTo


def read_rtd(file, num=0):
    with open(file, 'r') as f:
        cont = f.read()
        cont = eval(cont)
    if "dataList" in cont:
        anno = cont["dataList"][num]
    else:
        anno = cont["objects"][num]

    trans, rot, dim = anno["center"], anno["rotation"], anno["dimensions"]
    trans = np.array([trans['x'], trans['y'], trans['z']], dtype=np.float32)
    rot = np.array([rot['x'], rot['y'], rot['z']])
    dim = np.array([dim['length'], dim['width'], dim['height']], dtype=np.float32)
    rot = Rt.from_euler('XYZ', rot).as_matrix()
    return np.array(rot, dtype=np.float32), trans, dim


