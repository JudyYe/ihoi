"""
Usage:
python -m demo.demo_hoi -e xxx  --image xxx.png [--weight ....ckpt] [--out ]

Usage:
    # Run on image for bicycle class.
    python demo.py --filename my_image.jpg --class_name bicycle
    # Run on image without coarse interaction loss.
    python demo.py --filename my_image.jpg --class_name bicycle --lw_inter 0
    # Run on image with higher weight on depth ordering loss.
    python demo.py --filename my_image.jpg --class_name bicycle --lw_depth 1.
"""
import argparse
import logging
import os.path as osp
from demo import demo_utils

import numpy as np
from PIL import Image

import sys
from nnutils.hand_utils import ManopthWrapper
sys.path.append('externals/frankmocap/')
sys.path.append('externals/frankmocap/detectors/body_pose_estimator/')

from renderer.screen_free_visualizer import Visualizer

from nnutils.handmocap import get_handmocap_predictor, process_mocap_predictions, get_handmocap_detector
from nnutils.hoiapi import get_hoi_predictor, vis_hand_object


def get_args():
    parser = argparse.ArgumentParser(description="Optimize object meshes w.r.t. human.")
    parser.add_argument(
        "--filename", default="demo/test.jpg", help="Path to image."
    )
    parser.add_argument("--out", default="/glusterfs/yufeiy2/fair/tmp", help="Dir to save output.")

    parser.add_argument(
        "--experiment",
        "-e",
        dest="experiment_directory",
        default='/glusterfs/yufeiy2/fair/ihoi_model/release_model/mow'
    )
    parser.add_argument("opts",  default=None, nargs=argparse.REMAINDER)

    args = parser.parse_args()
    return args


def main(args):

    visualizer = Visualizer('pytorch3d')
    image = Image.open(args.filename).convert("RGB")
    image = np.array(image)
    print(image.shape)
    
    bbox_detector = get_handmocap_detector()
    # Process Human Estimations.
    detect_output = bbox_detector.detect_hand_bbox(image[::-1].copy())
    body_pose_list, body_bbox_list, hand_bbox_list, raw_hand_bboxes = detect_output
    
    res_img = visualizer.visualize(image, hand_bbox_list = hand_bbox_list)
    demo_utils.save_image(res_img, osp.join(args.out, 'hand_bbox.jpg'))
    
    hand_predictor = get_handmocap_predictor()
    mocap_predictions = hand_predictor.regress(
        image[..., ::-1], hand_bbox_list
    )

    hand_wrapper = ManopthWrapper().to('cpu')
    data = process_mocap_predictions(
        mocap_predictions, image, hand_wrapper
    )

    hoi_predictor = get_hoi_predictor(args)
    output = hoi_predictor.forward_to_mesh(data)
    vis_hand_object(output, data, image, args.out + '/test')

    

if __name__ == "__main__":
    main(get_args())
