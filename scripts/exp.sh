python -m scripts.run_vhoi  --T_num 10


# FT on HOI4D
CUDA_VISIBLE_DEVICES=5 python -m models.ihoi \
    --config experiments/hoi4d.yaml  \
    --ckpt /home/yufeiy2/scratch/pretrain/ihoi/release_model/mow/checkpoints/last.ckpt \
    EXP light_mow_slurm 
    --slurm



CUDA_VISIBLE_DEVICES=5 python -m models.ihoi \
    --config experiments/hoi4d.yaml  \
    --ckpt /home/yufeiy2/scratch/pretrain/ihoi/release_model/mow/checkpoints/last.ckpt \
    EXP light_mow 
    --slurm

CUDA_VISIBLE_DEVICES=6 python -m models.ihoi \
    --config experiments/hoi4d.yaml  \
    --ckpt /home/yufeiy2/scratch/pretrain/ihoi/release_model/obman/checkpoints/last.ckpt \
    EXP light_obman


-
python -m models.ihoi --config experiments/obman.yaml  --slurm EXP dev


eval:
python -m models.ihoi   --eval --ckpt /checkpoint/yufeiy2/hoi_output/release_model/obman/checkpoints/last.ckpt  --slurm 

python -m models.ihoi   --eval --config experiments/ho3d.yaml --ckpt /checkpoint/yufeiy2/hoi_output/release_model/ho3d/checkpoints/last.ckpt  --slurm

python -m models.ihoi   --eval --config experiments/mow.yaml --ckpt /checkpoint/yufeiy2/hoi_output/release_model/mow/checkpoints/last.ckpt   --slurm


train: 
python -m models.ihoi --config experiments/obman.yaml  --slurm 


python -m models.ihoi --config experiments/mow.yaml  --ckpt /checkpoint/yufeiy2/hoi_output/release_model/obman/checkpoints/last.ckpt --slurm

python -m models.ihoi --config experiments/ho3d.yaml  --ckpt /checkpoint/yufeiy2/hoi_output/release_model/obman/checkpoints/last.ckpt --slurm


-
python -m models.ihoi --config experiments/obman.yaml  --slurm 

python ihoi.py --config experiments/pifu.yaml MODEL.BATCH_SIZE 32 \


 python -m demo.demo_hoi -e /checkpoint/yufeiy2/hoi_output/release_model/obman