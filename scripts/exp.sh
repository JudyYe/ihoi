
python -m models.ihoi --config experiments/mow.yaml 

python -m models.ihoi --config experiments/ho3d.yaml  --ckpt 

python -m models.ihoi --config experiments/obman.yaml  --slurm 

python ihoi.py --config experiments/pifu.yaml MODEL.BATCH_SIZE 32 \
