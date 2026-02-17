# HEIC to JPG image format batch conversion script for Python 3. Tested on Windows 10.
# You will need to have ImageMagick installed: https://www.imagemagick.org/

import os, subprocess
from tqdm import tqdm

directory = "D:/[2] Media/[3] Imagens/"
directory = "C:/Users/migue/Desktop/tt"
directory = "C:/Users/migue/Pictures/tes/iPhone 2026"

folders = os.walk(directory, topdown=False)

for root, dirs, files in tqdm(folders):
    if not dirs:
        dirs = [directory]
    for path in dirs:
        source_path = os.path.join(root, "")
        for filename in os.listdir(directory):
            if filename.endswith(".aae"):
                filename = os.path.join(source_path, filename).replace("\\", "/")
                os.remove(filename)
                continue
            elif (
                filename.endswith(".MOV")
                and filename.replace(".MOV", ".JPG") in files
            ):
                print(f"removing mov from {filename}")
                filename = os.path.join(source_path, filename).replace("\\", "/")
                os.remove(filename)
                continue
            elif filename.endswith(".HEIC"):
                if filename.replace(".HEIC", ".JPG") not in files:
                    filename = os.path.join(source_path, filename).replace("\\", "/")
                    # print("Converting %s..." % filename)
                    cmd = f'magick "{filename}" "{filename[0:-5] + ".JPG"}" '
                    print(cmd)
                    os.system(cmd)
                os.remove(filename)
                continue
