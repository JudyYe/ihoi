set -x 

# Install Frankmocap
rm -r externals/frankmocap
mkdir -p externals
# my modification on relative path
git clone https://github.com/judyye/frankmocap.git externals/frankmocap
cd externals/frankmocap
bash scripts/install_frankmocap.sh
cd ../..

# install manopth
pip install "git+https://github.com/hassony2/manopth.git"

cd ../
# See https://detectron2.readthedocs.io/tutorials/install.html for other installation options

sh scripts/download_models.sh