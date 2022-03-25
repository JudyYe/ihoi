import numpy as np
import importlib

import torch
import torch.nn as nn

from pytorch3d.renderer.cameras import PerspectiveCameras

from nnutils.hand_utils import ManopthWrapper

from jutils import mesh_utils

def get_embedder(multires=10, **kwargs):
    if multires == -1:
        return nn.Identity(), kwargs.get('input_dims', 3)

    embed_kwargs = {
        'include_input': True,
        'input_dims': kwargs.get('input_dims', 3),
        'max_freq_log2': multires - 1,
        'num_freqs': multires,
        'log_sampling': True,
        'band_width': kwargs.get('band_width', 1),
        'periodic_fns': [torch.sin, torch.cos],
    }

    embedder_obj = Embedder(**embed_kwargs)
    # embed = lambda x, eo=embedder_obj: eo.embed(x)
    return embedder_obj, embedder_obj.out_dim


class ThetaEmbedder(nn.Module):
    def __init__(self, method, out_dim, **kwargs):
        super().__init__()
        self.method = method  # linear or pca
        self.out_dim = out_dim
        self.hand_wrapper = ManopthWrapper(**kwargs)

    def forward(self, hA):
        """
        :param hA: (N, 45)
        :return:
        """
        if self.method == 'linear':
            hA = self.linear(hA)
        elif self.method == 'pca':
            # project to pca, select the first out_dim. 
            hA = self.hand_wrapper.pose_to_pca(hA, self.out_dim)
        elif self.method == 'none':
            hA = hA
        else:
            raise NotImplementedError
        return hA


class BaseSdf(nn.Module):
    def __init__(self, hA_dim):
        super().__init__()
        self.th_embedder = ThetaEmbedder('pca', hA_dim)
    
    def forward(self, points, z, hA):
        raise NotImplementedError



class PixCoord(nn.Module):
    def __init__(self, cfg, z_dim, hA_dim, freq):
        super().__init__(cfg, z_dim, hA_dim, freq)
        J = 16
        self.net = ImplicitNetwork(z_dim + J*3, multires=freq, 
            **cfg.SDF)

    def get_dist_joint(self, nPoints, jsTn):
        N, P, _ = nPoints.size()
        num_j = jsTn.size(1)
        nPoints_exp = nPoints.view(N, 1, P, 3).expand(N, num_j, P, 3).reshape(N * num_j, P, 3)
        jsPoints = mesh_utils.apply_transform(nPoints_exp, jsTn.reshape(N*num_j, 4, 4)).view(N, num_j, P, 3)
        jsPoints = jsPoints.transpose(1, 2).reshape(N, P, num_j * 3) # N, P, J, 3
        return jsPoints  # (N, P, J)

    def forward(self, xPoints, z, hA, cTx=None, 
                cam: PerspectiveCameras=None, jsTx=None, mv=False):
        N, P, _ = xPoints.size()

        glb, local = z
        local = self.sample_multi_z(xPoints, local, hA, cTx, cam, jsTx, mv)
        # (N, P, 3) * (N, J, 12)  --> N, J, P, 3  -> N, P, J
        dstPoints = self.get_dist_joint(xPoints, jsTx)
        if mv:
            glb = torch.mean(glb, dim=0, keepdim=True).repeat(len(local), 1)
        latent = self.cat_z_hA((glb, local, dstPoints), hA)
        points = self.net.cat_z_point(xPoints, latent)
        sdf_value = self.net(points)
        sdf_value = sdf_value.view(N, P, 1)
        return sdf_value

    def gradient(self, xPoints, sdf):
        """
        Args:
            x ([type]): (N, P, 3)
        Returns:
            Grad sdf_x: (N, P, 3)
        """
        xPoints.requires_grad_(True)
        y = sdf(xPoints)  # (N, P, 1)
        d_output = torch.ones_like(y, requires_grad=False, device=y.device)
        gradients = torch.autograd.grad(
            outputs=y,
            inputs=xPoints,
            grad_outputs=d_output,
            create_graph=True,
            retain_graph=True,
            only_inputs=True)[0]
        # only care about xyz dim
        # gradients = gradients[..., -3:]

        # only care about sdf within cube
        xyz = xPoints[..., -3:]
        within_cube = torch.all(torch.abs(xyz) < 1, dim=-1, keepdim=True).float()  # (NP, )
        gradients = within_cube * gradients + (1 - within_cube) * 1 / np.sqrt(gradients.size(-1))

        if self.cfg.GRAD == 'clip':
            mask = (y.abs() <= 0.1).float()
            gradients = mask * gradients
        else:
            pass
        return gradients

    def cat_z_hA(self, z, hA):
        glb, local, dst_points = z
        out = torch.cat([(glb.unsqueeze(1) + local), dst_points], -1)
        return out


class ImplicitNetwork(nn.Module):
    def __init__(
            self,
            latent_dim,
            feature_vector_size=0,
            d_in=3,
            d_out=1,
            DIMS=[ 512, 512, 512, 512, 512, 512, 512, 512 ], 
            GEOMETRIC_INIT=False,
            bias=1.0,
            SKIP_IN=(4, ),
            weight_norm=True,
            multires=10,
            th=True,
            **kwargs
    ):
        self.xyz_dim = d_in
        super().__init__()
        dims = [d_in + latent_dim] + list(DIMS) + [d_out + feature_vector_size]

        self.embed_fn = None
        if multires > 0:
            embed_fn, input_ch = get_embedder(multires, input_dims=d_in)
            self.embed_fn = embed_fn
            dims[0] = input_ch + latent_dim

        self.num_layers = len(dims)
        self.skip_in = SKIP_IN
        self.layers = nn.ModuleDict()
        for l in range(0, self.num_layers - 1):
            if l + 1 in self.skip_in:
                out_dim = dims[l + 1] - dims[0]
            else:
                out_dim = dims[l + 1]

            lin = nn.Linear(dims[l], out_dim)

            if GEOMETRIC_INIT:
                if l == self.num_layers - 2:
                    torch.nn.init.normal_(lin.weight, mean=np.sqrt(np.pi) / np.sqrt(dims[l]), std=0.0001)
                    torch.nn.init.constant_(lin.bias, -bias)
                elif multires > 0 and l == 0:
                    torch.nn.init.constant_(lin.bias, 0.0)
                    torch.nn.init.normal_(lin.weight, 0.0, np.sqrt(2) / np.sqrt(out_dim))
                    # torch.nn.init.constant_(lin.weight[:, 0:latent_dim], 0.0)
                    torch.nn.init.constant_(lin.weight[:, latent_dim+3:], 0.0)
                elif multires > 0 and l in self.skip_in:
                    torch.nn.init.constant_(lin.bias, 0.0)
                    torch.nn.init.normal_(lin.weight, 0.0, np.sqrt(2) / np.sqrt(out_dim))
                    torch.nn.init.constant_(lin.weight[:, -(dims[0] - 3):], 0.0)
                else:
                    torch.nn.init.constant_(lin.bias, 0.0)
                    torch.nn.init.normal_(lin.weight, 0.0, np.sqrt(2) / np.sqrt(out_dim))

            if weight_norm:
                lin = nn.utils.weight_norm(lin)

            # setattr(self, "lin" + str(l), lin)
            self.layers.add_module("lin" + str(l), lin)

        self.softplus = nn.Softplus(beta=100)
        if th:
            self.th = nn.Tanh()
        else:
            self.th = nn.Identity()
        
    def forward(self, input, compute_grad=False):
        xyz = input[:, -self.xyz_dim:]
        latent = input[:, :-self.xyz_dim]

        if self.embed_fn is not None:
            xyz = self.embed_fn(xyz)
        input = torch.cat([latent, xyz], dim=1)
        x = input

        for l in range(0, self.num_layers - 1):
            # lin = getattr(self, "lin" + str(l))
            lin = self.layers["lin" + str(l)]

            if l in self.skip_in:
                x = torch.cat([x, input], 1) / np.sqrt(2)
            x = lin(x)

            if l < self.num_layers - 2:
                x = self.softplus(x)
        
        x = self.th(x)
        within_cube = torch.all(torch.abs(xyz) <= 1, dim=-1, keepdim=True).float()  # (NP, )
        # with torch.no_grad():
            # apprx_dist= (torch.norm(xyz, dim=-1, keepdim=True) - 1).clamp(min=.3)
        apprx_dist= .3
        x = within_cube * x + (1 - within_cube) * (apprx_dist)
        return x

    def gradient(self, x, sdf=None):
        """
        :param x: (sumP, D?+3)
        :return: (sumP, 1, 3)
        """
        x.requires_grad_(True)
        if sdf is None:
            y = self.forward(x)[:, :1]
        else:
            y = sdf(x)
        d_output = torch.ones_like(y, requires_grad=False, device=y.device)
        gradients = torch.autograd.grad(
            outputs=y,
            inputs=x,
            grad_outputs=d_output,
            create_graph=True,
            retain_graph=True,
            only_inputs=True)[0]
        # only care about xyz dim
        gradients = gradients[..., -3:]

        # only care about sdf within cube
        xyz = x[..., -self.xyz_dim:]
        within_cube = torch.all(torch.abs(xyz) < 1, dim=-1, keepdim=True).float()  # (NP, )
        gradients = within_cube * gradients + (1 - within_cube) * 1 / np.sqrt(gradients.size(-1))
        return gradients.unsqueeze(1)

    def cat_z_point(self, points, z):
        """
        :param points: (N, P, 3)
        :param z: (N, (P, ), D)
        :return: (NP, D+3)
        """
        if z.ndim == 3:
            N, P, D = z.size()
            return torch.cat([z, points], dim=-1).reshape(N*P, D+3)
        N, D = z.size()
        if points.ndim == 2:
            points = points.unsqueeze(0)
        NP, P, _ = points.size()
        assert N == NP

        z_p = torch.cat([z.unsqueeze(1).repeat(1, P, 1), points], dim=-1)
        z_p = z_p.reshape(N * P, D + 3)
        return z_p


def build_net(cfg, z_dim=None) -> BaseSdf:
    # try:
    Dec = getattr(importlib.import_module(".models.sdf_net", 'ihoi'), cfg.DEC)
    if z_dim is None:
        z_dim = cfg.Z_DIM
    dec = Dec(cfg, z_dim, cfg.THETA_DIM, cfg.FREQ)
    # except:
        # dec = None
        # raise NotImplementedError("models.sdf_net" + cfg.DEC)
    return dec

