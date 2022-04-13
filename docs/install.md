# Installation


- The basic installation
  ```
  conda create -n ihoi python=3.8
  conda activate ihoi

  # Install cuda 
  # Choose versions based on your system. For example:

  # Install pytorch and torchvision 
  conda install -c pytorch pytorch=1.8.1 torchvision=0.9.1 cudatoolkit=10.2

  # Install other required libraries
  pip install -r docs/requirements.txt
  ```

<!-- - Install [Detectron2](https://github.com/facebookresearch/detectron2) (for hand detection)
```
cd external
!git clone --branch v0.6 https://github.com/facebookresearch/detectron2.git detectron2
# install detectron2 from source
!pip install -e detectron2_repo

```
  - If you followed the versions mentioned above (pytorch 1.6.0, CUDA 10.1, on Linux), you may try the following:
  ```
    python -m pip install detectron2==0.6 -f \
    https://dl.fbaipublicfiles.com/detectron2/wheels/cu102/torch1.8/index.html
  ```
  - If it doesn't work, follow the instruction of [Detectron2](https://github.com/facebookresearch/detectron2/blob/master/INSTALL.md) -->
  
- Install pytorch3d (optional, for pytorch3d renderering)
  - We use pytorch3d for rendering.
  - You may try the following (pytorch 1.8.0, on Linux and Mac).
    ```
    conda install pytorch3d -c pytorch3d
    ```
  - If it doesn't work, follow the instruction of [Pytorch3D](https://github.com/facebookresearch/pytorch3d/blob/master/INSTALL.md)


- Install other third-party libraries+ download pretrained models and sample data, including: [FrankMocap](https://github.com/facebookresearch/frankmocap/), [MANO](https://github.com/hassony2/manopth), [Detectron2](https://github.com/facebookresearch/detectron2)
  - Run the following script
  ```
  sh scripts/one_click.sh
  ```
  - If it doesn't work, follow the instruction of [FrankMocap](https://github.com/facebookresearch/frankmocap/blob/main/docs/INSTALL.md)

- Setting SMPL-X/MANO Models
    - We use use SMPL-X and MANO model as 3D pose estimation output. You have to download them from the original website.
    - Download SMPLX Model (Neutral model: SMPLX_NEUTRAL.pkl):
        - You can use SMPL-X model for body mocap instead of SMPL model. 
        - Download ```SMPLX_NEUTRAL.pkl``` in the original [SMPL website](https://smpl-x.is.tue.mpg.de/). You need to register to download the SMPLX data.
        - Put the ```SMPLX_NEUTRAL.pkl``` file in: ./externals/frankmocap/extra_data/smpl/SMPLX_NEUTRAL.pkl
        - This is for hand module and whole body module
    - Download MANO Model (Neutral model: MANO_LEFT.pkl, MANO_RIGHT.pkl):
        - Download ```Models & Code``` in the original [MANO website](https://mano.is.tue.mpg.de/). You need to register to download the MANO data.
        - Put the ```models/MANO_LEFT.pkl``` ```models/MANO_RIGHT.pkl``` file in: `./externals/mano/`
    - (Optional) If you want to run test-time optimization, download contact_zone.pkl from(): 
        - Put the ```contact_zone.pkl``` file in: `./externals/mano/`

    - Once you sucessfully installed and downloaded all, you should have the following files in your directory, here is a list of key :
        ```
        ./externals/frankmocap/extra_data/
        └── smpl
            └── basicModel_neutral_lbs_10_207_0_v1.0.0.pkl
            └── SMPLX_NEUTRAL.pkl
        ./externals
        └── mano
            └── MANO_LEFT.pkl    
            └── MANO_RIGHT.pkl
            └── (contact_zones.pkl)
        ```

### Acknowledgement
Structure of this installation doc is modified from [FrankMocap](https://github.com/facebookresearch/frankmocap/blob/main/docs/INSTALL.md).