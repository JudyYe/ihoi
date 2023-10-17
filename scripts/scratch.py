import imageio
gif_name = '.gif'

# read gif_name to list of numpy arrays
image_list = imageio.mimread(gif_name)
imageio.mimwrite