# What's in your hands? 3D Reconstruction of Generic Objects in Hands
Yufei Ye, Abhinav Gupta, Shubham Tulsiani
in CVPR 2022

[[Project Page]](https://judyye.github.io/ihoi) [[Colab Demo]](https://colab.research.google.com/drive/1FdaBn4HQpf9p192CnEl25BQCxAzVfnzT#scrollTo=9qvQ375HnMlH) [[Arxiv]]() 

# teaser


## Installation 
See [`install.md`](docs/install.md)

## Quick Start 
```
python -m demo.demo_image --filename demo/test.jpg --out output/ -e weights/
```


## Evaluation 
```
python -m models.ihoi   --eval --ckpt PATH_TO_YOUR_CKPT/checkpoints/last.ckpt  

python -m models.ihoi   --eval --ckpt PATH_TO_YOUR_CKPT/checkpoints/last.ckpt  [--config experiments/[ho3d,mow].yaml  --slurm]

```

## Train your own model

### Preprocess data
[`preprocess.md`](docs/preprocess.md)

### Start training
```
# obman
python -m models.ihoi --config experiments/obman.yaml  --slurm 

# finetune
python -m models.ihoi --config experiments/mow.yaml  --ckpt PATH_TO_OBMAN_MODEL/obman/checkpoints/last.ckpt --slurm

python -m models.ihoi --config experiments/ho3d.yaml  --ckpt PATH_TO_OBMAN_MODEL/obman/checkpoints/last.ckpt --slurm
```

## Citation
If you use find this code helpful, please consider citing:

```

@article{ye2022hand,
    author = {Ye, Yufei
                and Gupta, Abhinav
                and Tulsiani, Shubham},
    title = {What's in your hands?3D Reconstruction of Generic Objects in Hands},
    booktitle = {CVPR},
    year={2022}
}
```

## TODO
- Demo:
    + [ ] support left hand
- preprocess:
    + [ ] provide cached data
    + [ ] how to create cached data
- eval:
    + [ ] test time refinement
    + [ ] predicted hand eval