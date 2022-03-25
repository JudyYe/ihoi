import importlib
import numpy as np
import os
import os.path as osp
import glob

import torch
import torch.nn as nn
import pytorch_lightning as pl


def latest_ckpt(prop, include_last=False, till=-1):
    if not prop.endswith('.ckpt'):
        if include_last:
            ckpt = os.path.join(prop, 'checkpoints', 'last.ckpt')
            if os.path.exists(ckpt):
                return ckpt
        ckpt_list = glob.glob(os.path.join(prop, 'checkpoints', 'epoch*.ckpt'))
        print(ckpt_list)
        epoch_list = [int(os.path.basename(e)[len('epoch='):].split('-step')[0]) for e in ckpt_list]
        last_ckpt = os.path.join(prop, 'checkpoints/last.ckpt')
        if len(epoch_list) == 0 and os.path.exists(last_ckpt):
            return last_ckpt
        if len(epoch_list) == 0:
            return None
        inds = np.argmax(epoch_list)
        return ckpt_list[inds]


def load_model(cfg, ckpt_dir, ckpt_epoch) -> nn.Module:
    Model = getattr(importlib.import_module(".train.%s" % cfg.MODEL.CLS, 'ihoi'), cfg.MODEL.NAME)

    assert issubclass(Model, pl.LightningModule)
    model = Model(cfg)
    assert isinstance(model, pl.LightningModule)

    ckpt = osp.join(ckpt_dir, 'checkpoints', '%s.ckpt' % ckpt_epoch)
    print('load from', ckpt)
    ckpt = torch.load(ckpt)['state_dict']
    load_my_state_dict(model, ckpt)
    
    model.eval()
    model.cuda()
    return model
            

def load_my_state_dict(model: torch.nn.Module, state_dict, lambda_own=lambda x: x):
    own_state = model.state_dict()
    for name, param in state_dict.items():
        own_name = lambda_own(name)
        # own_name = '.'.join(name.split('.')[1:])
        if own_name not in own_state:
            print('Not found in checkpoint', name, own_name)
            continue
        if isinstance(param, torch.nn.Parameter):
            # backwards compatibility for serialized parameters
            param = param.data
        if param.size() != own_state[own_name].size():
            print('size not match', name, param.size(), own_state[own_name].size())
            continue
        own_state[own_name].copy_(param)

