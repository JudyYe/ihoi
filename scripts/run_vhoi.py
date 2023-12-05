import os
import pickle
from tqdm import tqdm
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
from nnutils.hand_utils import get_nTh

# import sys
# sys.path.append('externals/frankmocap/')
# sys.path.append('externals/frankmocap/detectors/body_pose_estimator/')

from config.defaults import get_cfg_defaults

# from nnutils.handmocap import get_handmocap_predictor, process_mocap_predictions, get_handmocap_detector
from nnutils import model_utils
# from nnutils import image_utils
from jutils import mesh_utils, image_utils, geom_utils, hand_utils


import torch
assert torch.cuda.is_available()
from nnutils.hoiapi import vis_hand_object, Predictor


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


def get_data(vid, data_dir):
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


def save_inp_out(data, out, fname):
    data = model_utils.to_cuda(data, 'cpu')
    out = model_utils.to_cuda(out, 'cpu')
    os.makedirs(osp.dirname(fname), exist_ok=True)
    with open(fname, 'wb') as fp:
        pickle.dump({'data': data, 'out': out}, fp)
    return 

def render_video(data_list, video_dir, hoi_predictor, device, H):
    name_list = ['input', 'render_0', 'render_1', 'jHoi', 'jObj', 'vHoi', 'vObj', 'vObj_t', 'vHoi_fix']
    image_list = [[] for _ in name_list]

    T = len(data_list) - 1
    for t, data in enumerate(tqdm(data_list)):
        data = model_utils.to_cuda(data, device)
        out = hoi_predictor.forward_to_mesh(data)

        save_inp_out(data, out, osp.join(video_dir, f'data/{t:04d}.pkl'))
        jHand = out['hHand']
        jObj = out['hObj']
        jObj.textures = mesh_utils.pad_texture(jObj, 'yellow')
        cam_f = data['cam_f']
        cam_p = data['cam_p']
        cTh = data['cTh']
        cTh_mat = geom_utils.se3_to_matrix(cTh)

        K_ndc = mesh_utils.get_k_from_fp(cam_f, cam_p)
    
        image_list[0].append(data['image'] * 0.5 + 0.5)
        hoi, _ = mesh_utils.render_hoi_obj_overlay(jHand, jObj, cTj=cTh_mat, H=H, K_ndc=K_ndc, bin_size=None)
        image_list[1].append(hoi)

        # rotate by 90 degree in world frame 
        # 1. 
        jTcp = mesh_utils.get_wTcp_in_camera_view(np.pi/2, cTw=cTh_mat)
        hoi, _ = mesh_utils.render_hoi_obj_overlay(jHand, jObj, jTcp, H=H, K_ndc=K_ndc, bin_size=None)
        image_list[2].append(hoi)

        # in object frame

        if t == T//2:
            # coord = plot_utils.create_coord(device, size=1)
            jHoi = mesh_utils.join_scene([jHand, jObj])
            image_list[3] = mesh_utils.render_geom_rot(jHoi, scale_geom=True, out_size=H, bin_size=32) 
            image_list[4] = mesh_utils.render_geom_rot(jObj, scale_geom=True, out_size=H, bin_size=32) 
            
            # rotation around z axis
            vTj = torch.FloatTensor(
                [[np.cos(np.pi/2), -np.sin(np.pi/2), 0, 0],
                [np.sin(np.pi/2), np.cos(np.pi/2), 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]]).to(device)[None].repeat(1, 1, 1)
            vHoi = mesh_utils.apply_transform(jHoi, vTj)
            vObj = mesh_utils.apply_transform(jObj, vTj)
            image_list[5] = mesh_utils.render_geom_rot(vHoi, scale_geom=True, out_size=H, bin_size=32) 
            image_list[6] = mesh_utils.render_geom_rot(vObj, scale_geom=True, out_size=H, bin_size=32) 

        jHoi = mesh_utils.join_scene([jHand, jObj])                
        vTj = torch.FloatTensor(
            [[np.cos(np.pi/2), -np.sin(np.pi/2), 0, 0],
            [np.sin(np.pi/2), np.cos(np.pi/2), 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]]).to(device)[None].repeat(1, 1, 1)
        vObj = mesh_utils.apply_transform(jObj, vTj)
        iObj_list = mesh_utils.render_geom_rot(vObj, scale_geom=True, out_size=H, bin_size=32) 
        image_list[7].append(iObj_list[t%len(iObj_list)])
        
        # HOI from fixed view point 
        scale = mesh_utils.Scale(5.0).to(device)
        trans = mesh_utils.Translate(0, 0.4, 0).to(device)
        fTj = scale.compose(trans)
        fHand = mesh_utils.apply_transform(jHand, fTj)
        fObj = mesh_utils.apply_transform(jObj, fTj)
        iHoi, iObj = mesh_utils.render_hoi_obj(fHand, fObj, 0, scale_geom=False, scale=1, bin_size=32)
        image_list[8].append(iHoi)

    # save 
    for n, im_list in zip(name_list, image_list):
        for t, im in enumerate(im_list):
            image_utils.save_images(im, osp.join(video_dir, n, f'{t:03d}'))


def save_render(save_dir, t, data, out, H=512, W=512):
    device = data['image'].device
    ww = hh = data['image'].size(-1)
    gt = data['image']

    degree_list = [0, 45, 60, 90, 180, 360-60, 360-90]
    name_list = ['gt', 'overlay_hoi', 'overlay_obj']
    for d in degree_list:
        name_list += ['%d_hoi' % d, '%d_obj' % d]  
    image_list = [[] for _ in name_list]

    hObj = out['hObj']
    hHand = out['hHand']
    cTh = data['cTh']
    cam_f = data['cam_f']
    cam_p = data['cam_p']

    gt = F.adaptive_avg_pool2d(gt, (H, W))
    K_ndc = mesh_utils.get_k_from_fp(cam_f, cam_p)
    hoi, obj = mesh_utils.render_hoi_obj_overlay(hHand, hObj, cTj=cTh, H=H, K_ndc=K_ndc)
    
    image_list[0].append(gt*0.5+0.5)
    image_list[1].append(hoi)
    image_list[2].append(obj)

    for i, az in enumerate(degree_list):
        img1, img2 = mesh_utils.render_hoi_obj(hHand, hObj, az, cTj=cTh, H=H, W=W)
        image_list[3 + 2*i].append(img1)  
        image_list[3 + 2*i+1].append(img2) 

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
    model_dir = '/private/home/yufeiy2/scratch/result/ihoi/light_mow/hoi4d'

    if args.data == 'hoi4d':
        cat_list = "Mug,Bottle,Kettle,Bowl,Knife,ToyCar".split(',')
        ind_list = [1,2]
        index_list = [f"{cat}_{ind}" for ind in ind_list for cat in cat_list ]
        # index_list = ['Bowl_1', 'Kettle_1']
        data_dir = '/private/home/yufeiy2/scratch/result/HOI4D/'

    elif args.data == '3rd':
        index_list = 'kettle6,knife1,bowl2,mug1,bottle2,bowl1,knife2,knife3,mug3,mug2,knife6,bottle6,kettle4'.split(',')
        data_dir = '/private/home/yufeiy2/scratch/result/3rd_nocrop'
    elif args.data == '1st':
        index_list = 'bottle_1,bottle_2,mug_3,mug_1,kettle_4,kettle_2,kettle_5,knife_3,bowl_2,bowl_4,bowl_1'.split(',')
        data_dir = '/private/home/yufeiy2/scratch/result/1st_nocrop'
    elif args.data == 'ho3d':
        data_dir = '/private/home/yufeiy2/scratch/result/HO3D_nocrop/'
        index_list = '003_cracker_box,006_mustard_bottle,011_banana,021_bleach_cleanser,035_power_drill,004_sugar_box,010_potted_meat_can,019_pitcher_base,025_mug,037_scissors'.split(',')
        index_list = [f'{e}_0' for e in index_list]
        model_dir = '/private/home/yufeiy2/scratch/pretrain/ihoi/release_model/ho3d/'

    elif args.data == 'mow':
        cat_list = "Mug,Bottle,Kettle,Bowl,Knife,ToyCar".split(',')
        ind_list = [1,2]
        index_list = [f"{cat}_{ind}" for ind in ind_list for cat in cat_list ]
        # index_list = ['Bowl_1', 'Kettle_1']
        data_dir = '/private/home/yufeiy2/scratch/result/HOI4D/'

        model_dir = '/private/home/yufeiy2/scratch/pretrain/ihoi/release_model/mow/'

    hoi_predictor = get_hoi_predictor(model_dir)
    new_hand_wrapper = hand_utils.ManopthWrapper().to(device)
    for vid in tqdm(index_list):
        mesh_dir = osp.join(model_dir, vid, 'meshes')
        render_dir = osp.join(model_dir, vid, 'vis_clip')
        video_dir = osp.join(model_dir, vid, 'vis_video')
        nsdf_dir = osp.join(model_dir, vid, 'nSdf_data')

        data_list = get_data(vid, data_dir)
        T = len(data_list) - 1
        
        T_num = args.T_num
        if T_num is None:
            T_list = [0, T//2, T-1]
        else:
            T_list = np.linspace(0, T-1, T_num).astype(np.int).tolist() 
        print('len', T, T_list)

        render_step = T_list
        render_video(data_list, video_dir, hoi_predictor, device, 512)
        
        # for t, data in enumerate(data_list):
        #     data = model_utils.to_cuda(data, device)
            
        #     # save_nSdf(data, hoi_predictor, osp.join(nsdf_dir, f'{t:03d}'), new_hand_wrapper)
        #     out = hoi_predictor.forward_to_mesh(data)
        #     # mesh_utils.dump_meshes([osp.join(mesh_dir, f'{t:03d}_hObj')], out['hObj'], )
        #     # mesh_utils.dump_meshes([osp.join(mesh_dir, f'{t:03d}_hHand')], out['hHand'], )
        #     # mesh_utils.dump_meshes([osp.join(mesh_dir, f'{t:03d}_cObj')], out['cObj'], )
        #     # mesh_utils.dump_meshes([osp.join(mesh_dir, f'{t:03d}_cHand')], out['cHand'], )

        #     if t in render_step:
        #         print(render_dir)
        #         save_render(render_dir, t, data, out,)


    return 

@torch.no_grad()
def save_nSdf(data, hoi_predictor, save_name, hand_wrapper):

    os.makedirs(osp.dirname(save_name), exist_ok=True)

    out = hoi_predictor.forward_to_mesh(data)
    save_inp_out(data, out, save_name + '_mesh.pkl')

    reso = 64
    bs = len(data['hA'])
    nSdf_func = hoi_predictor.get_hSdf_func(data)
    nXyz = mesh_utils.create_sdf_grid(bs, reso, 1.5, device=device)  # (bs, H, H, H, 3)
    nXyz = nXyz.reshape(bs, -1, 3)  # (bs, H*H*H, 3)
    hTn = hand_utils.get_nTh(hA=data['hA'], hand_wrapper=hand_wrapper, inverse=True)
    
    nSdf = nSdf_func(nXyz).squeeze(-1)  # (bs, HHH, )
    nSdf = nSdf.reshape(bs, reso, reso, reso)
    # nSdf_mesh = mesh_utils.batch_grid_to_meshes(nSdf, bs, half_size=1.5, )
    # nHand, _ = hand_wrapper(nTh, data['hA'])
    # nSdf_mesh.textures = mesh_utils.pad_texture(nSdf_mesh, 'pink')
    # nHand.textures = mesh_utils.pad_texture(nHand, 'blue')
    # image_list = mesh_utils.render_geom_rot_v2(mesh_utils.join_scene([nSdf_mesh, nHand]))
    # image_utils.save_gif(image_list, save_name)
    cTh = geom_utils.se3_to_matrix(data['cTh'])
    batch = model_utils.to_cuda(data, 'cpu')
    with open(save_name + '_grid.pkl', 'wb') as fp:
        pickle.dump({'nSdf': nSdf.cpu().numpy()[0], 'hA': data['hA'].cpu().numpy()[0], 'cTh': cTh.cpu().numpy()[0], 'data': batch}, fp)
    return nSdf


import argparse
def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--data', type=str, default='hoi4d')
    parser.add_argument('--T_num', type=int, default=None)
    return parser.parse_args()

if __name__ == '__main__':
    args = parse_args()
    main()    
