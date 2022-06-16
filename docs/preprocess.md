# Preprocess Data

Data preprocessing consists of two parts, sdf preprocessing and camera-hand-object transformation preprcoessing. 

## Folder structure
```
data/
    cache/
    mesh_sdf/
        SdfSamples/
            obman/all/
                04074963/4e73215ae0f33d23a5e3ac6ff4952f3.npz
            ho3d/all/
                033_spatula.npz
            mow/all/
                gardening_v_d79ApGisN_Y_frame000046.npzw
    obman/
    (obmanobj/)
        04530566/72f4c3c433492d585001cb19c4a0eee4/models/model_normalized.obj
    ho3d/
    (ho3dobj/models/)
    mow/
```

## Use our preprocessed data
We provide our preprocessed `cache` and `mesh_sdf`. These can be downloaded from [here](). You need to unzip it and put it under `data/` folder.


## Create your own cache data
```
python preprocess/generate_sdf.py
```
(Coming soon)
