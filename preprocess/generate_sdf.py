#!/usr/bin/env python3
# Copyright 2004-present Facebook. All Rights Reserved.
# modified from https://github.com/facebookresearch/DeepSDF/blob/main/preprocess_data.py
"""Usage: python generate_sdf.py --split obman_all.json  --source_name obman"""

import argparse
import concurrent.futures
import json
import logging
import os
os.environ['PYOPENGL_PLATFORM'] = 'egl'
import subprocess
from typing import NamedTuple
import numpy as np
import trimesh

import mesh_to_sdf
from mesh_to_sdf import get_surface_point_cloud
from mesh_to_sdf.utils import scale_to_unit_cube

class ws(NamedTuple):
    mesh_inp_subdir = 'MeshInp'
    sdf_samples_subdir = "SdfSamples"
    surface_samples_subdir = "SurfaceSamples"
    normalization_param_subdir = "NormalizationParameters"
    

def process_mesh(mesh_filepath, target_filepath, executable, additional_args):
    print(mesh_filepath + " --> " + target_filepath)
    mesh = trimesh.load(mesh_filename)
    # points, sdf = sample_sdf_near_surface(mesh)
    points, sdf = mesh_to_sdf.sample_sdf_near_surface(mesh, number_of_points = 500000, surface_point_method='scan', sign_method='normal', scan_count=100, scan_resolution=400, sample_point_count=10000000, normal_sample_count=11, min_size=0, return_gradients=False)
    print(points.shape, sdf.shape)

    pts_sdf = np.concatenate([points, sdf[..., None]], -1)
    neg = pts_sdf[sdf < 0, :]
    pos = pts_sdf[sdf > 0, :]

    np.savez_compressed(target_filepath, pos=pos, neg=neg)

    # command = [executable, "-m", mesh_filepath, "-o", target_filepath] + additional_args

    # subproc = subprocess.Popen(command, stdout=subprocess.DEVNULL)
    # subproc.wait()



# Sample some uniform points and some normally distributed around the surface as proposed in the DeepSDF paper
def sample_sdf_near_surface(mesh, number_of_points = 500000, surface_point_method='scan', sign_method='normal', scan_count=100, scan_resolution=400, sample_point_count=10000000, normal_sample_count=11, min_size=0, return_gradients=False):
    mesh = scale_to_unit_cube(mesh) 
    if surface_point_method == 'sample' and sign_method == 'depth':
        print("Incompatible methods for sampling points and determining sign, using sign_method='normal' instead.")
        sign_method = 'normal'

    surface_point_cloud = get_surface_point_cloud(mesh, surface_point_method, 1, scan_count, scan_resolution, sample_point_count, calculate_normals=sign_method=='normal' or return_gradients)

    return surface_point_cloud.sample_sdf_near_surface(number_of_points, surface_point_method=='scan', sign_method, normal_sample_count, min_size, return_gradients)



def setup_code():
    'git clone '
if __name__ == "__main__":

    arg_parser = argparse.ArgumentParser(
        formatter_class=argparse.RawTextHelpFormatter,
        description="Pre-processes data from a data source and append the results to "
        + "a dataset.",
    )
    arg_parser.add_argument(
        "--data_dir",
        "-d",
        dest="data_dir",
        default='/glusterfs/yufeiy2/fair/sdf_test_code/',
        help="The directory which holds all preprocessed data.",
    )
    arg_parser.add_argument(
        "--source",
        "-s",
        dest="source_dir",
        default=None,
        help="The directory which holds the data to preprocess and append.",
    )
    arg_parser.add_argument(
        "--source_name",
        default='obman',
        help="The name to use for the data source. If unspecified, it defaults to the "
        + "directory name.",
    )
    arg_parser.add_argument(
        "--split",
        dest="split_filename",
        default='obman_all', 
        help="A split filename defining the shapes to be processed.",
    )
    arg_parser.add_argument(
        "--skip",
        dest="skip",
        default=False,
        action="store_true",
        help="If set, previously-processed shapes will be skipped",
    )
    arg_parser.add_argument(
        "--threads",
        dest="num_threads",
        default=8,
        help="The number of threads to use to process the data.",
    )
    arg_parser.add_argument(
        "--test",
        "-t",
        dest="test_sampling",
        default=False,
        action="store_true",
        help="If set, the script will produce SDF samplies for testing",
    )
    arg_parser.add_argument(
        "--surface",
        dest="surface_sampling",
        default=False,
        action="store_true",
        help="If set, the script will produce mesh surface samples for evaluation. "
        + "Otherwise, the script will produce SDF samples for training.",
    )
    arg_parser.add_argument(
        "--bin_dir",
        default='.',
        help="bin/",
    )

    args = arg_parser.parse_args()

    additional_general_args = []

    deepsdf_dir = os.path.abspath(args.bin_dir)
    if args.surface_sampling:
        executable = os.path.join(deepsdf_dir, "bin/SampleVisibleMeshSurface")
        subdir = ws.surface_samples_subdir
        extension = ".ply"
    else:
        executable = os.path.join(deepsdf_dir, "bin/PreprocessMesh")
        subdir = ws.sdf_samples_subdir
        extension = ".npz"

        if args.test_sampling:
            additional_general_args += ["-t"]

    with open(os.path.join(args.data_dir, ws.mesh_inp_subdir, args.split_filename), "r") as f:
        split = json.load(f)

    if args.source_dir is None:
        args.source_dir = os.path.join(args.data_dir, ws.mesh_inp_subdir)

    # if args.source_name is None:
    #     args.source_name = os.path.basename(os.path.normpath(args.source_dir))

    dest_dir = os.path.join(args.data_dir, subdir, args.source_name)

    logging.info(
        "Preprocessing data from "
        + args.source_dir
        + " and placing the results in "
        + dest_dir
    )

    if not os.path.isdir(dest_dir):
        os.makedirs(dest_dir)

    if args.surface_sampling:
        normalization_param_dir = os.path.join(
            args.data_dir, ws.normalization_param_subdir, args.source_name
        )
        if not os.path.isdir(normalization_param_dir):
            os.makedirs(normalization_param_dir)

    class_directories = split[args.source_name]

    meshes_targets_and_specific_args = []

    for class_dir in class_directories:
        class_path = os.path.join(args.source_dir, args.source_name, class_dir)
        instance_dirs = class_directories[class_dir]

        logging.debug(
            "Processing " + str(len(instance_dirs)) + " instances of class " + class_dir
        )

        target_dir = os.path.join(dest_dir, class_dir)

        if not os.path.isdir(target_dir):
            os.mkdir(target_dir)

        for instance_dir in instance_dirs:
            
            shape_dir = os.path.join(class_path, instance_dir)

            processed_filepath = os.path.join(target_dir, instance_dir + extension)
            if args.skip and os.path.isfile(processed_filepath):
                logging.debug("skipping " + processed_filepath)
                continue

            mesh_filename = shape_dir + '.obj'

            specific_args = []

            if args.surface_sampling:
                normalization_param_target_dir = os.path.join(
                    normalization_param_dir, class_dir
                )

                if not os.path.isdir(normalization_param_target_dir):
                    os.mkdir(normalization_param_target_dir)

                normalization_param_filename = os.path.join(
                    normalization_param_target_dir, instance_dir + ".npz"
                )
                specific_args = ["-n", normalization_param_filename]

            meshes_targets_and_specific_args.append(
                (
                    os.path.join(shape_dir, mesh_filename),
                    processed_filepath,
                    specific_args,
                )
            )
        print(meshes_targets_and_specific_args)

    for (
            mesh_filepath,
            target_filepath,
            specific_args,
        ) in meshes_targets_and_specific_args:
        process_mesh(mesh_filepath, target_filepath, executable, specific_args)
    # with concurrent.futures.ThreadPoolExecutor(
    #     max_workers=int(args.num_threads)
    # ) as executor:

    #     for (
    #         mesh_filepath,
    #         target_filepath,
    #         specific_args,
    #     ) in meshes_targets_and_specific_args:
    #         executor.submit(
    #             process_mesh,
    #             mesh_filepath,
    #             target_filepath,
    #             executable,
    #             specific_args + additional_general_args,
    #         )

    #     executor.shutdown()