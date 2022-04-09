set -x 

# Install Frankmocap
rm -r external/frankmocap
mkdir -p external
git clone https://github.com/facebookresearch/frankmocap.git external/frankmocap
cd external/frankmocap
bash scripts/install_frankmocap.sh

# install manopth
pip install "git+https://github.com/hassony2/manopth.git"
