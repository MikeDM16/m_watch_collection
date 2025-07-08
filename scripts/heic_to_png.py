# HEIC to JPG image format batch conversion script for Python 3. Tested on Windows 10.
# You will need to have ImageMagick installed: https://www.imagemagick.org/

import os, subprocess
from tqdm import tqdm

directory = "D:/[2] Media/[3] Imagens/"
directory = "C:/Users/migue/Desktop/tt"
directory = "D:/New folder"

folders = os.walk(directory, topdown=False)

for root, dirs, files in tqdm(folders):
    if not dirs:
        dirs = [directory]
    print(dirs)
    for path in dirs:
        source_path = os.path.join(root, "")
        for filename in os.listdir(directory):
            if filename.lower().endswith(".aae"):
                filename = os.path.join(source_path, filename).replace("\\", "/")
                os.remove(filename)
                continue
            elif (
                filename.lower().endswith(".mov")
                and filename.lower().replace(".mov", ".jpg") in files
            ):
                print(f"removing mov from {filename}")
                filename = os.path.join(source_path, filename).replace("\\", "/")
                os.remove(filename)
                continue
            elif filename.lower().endswith(".heic"):
                if filename.lower().replace(".heic", ".jpg") not in files:
                    filename = os.path.join(source_path, filename).replace("\\", "/")
                    # print("Converting %s..." % filename)
                    cmd = f'magick "{filename}" "{filename[0:-5] + ".JPG"}" '
                    print(cmd)
                    os.system(cmd)
                os.remove(filename)
                continue
