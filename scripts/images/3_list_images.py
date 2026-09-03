"""
3_list_images.py — step 3 of the photo pipeline.

Prints the `sliderImages` array for a watch model, ready to paste into the model
file in src/app/data/watchModels/<Brand>/. Nothing is written to disk.

    $ python scripts/images/3_list_images.py Tag_Heuer "C:/.../2007_Tag_Heuer_Carrera_WC2210"
    sliderImages: [
      "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3732.JPG",
      "public/assets/Images/Tag_Heuer/2007_Tag_Heuer_Carrera_WC2210/IMG_3734.JPG",
    ],

Only the full-size originals are listed. The `_200x200` / `_500x500` / `_800x800`
/ `_1200x1200` files that 2_make_variants.py writes beside them are filtered out:
the model file always references the original, and the app appends the size
suffix itself at render time (getImgURLForSizeType). Listing a variant here would
produce a path the loader then tries to add a *second* suffix to.

The emitted `public/assets/Images/...` prefix is the path format every model file
uses; getExternalResource turns it into a `/img/...` URL against the resources
repo. See ADDING_WATCHES_GUIDE.md.

Usage:
    python scripts/images/3_list_images.py <BrandFolder> <folder>
    python scripts/images/3_list_images.py           # uses the defaults below
"""

import os
import re
import sys

# Used when no arguments are passed on the command line.
DEFAULT_BRAND = "Vacheron_Constantin"
DEFAULT_FOLDER = "c:/Users/migue/Downloads/t/1978_Vacheron_Constantin_Patrimony_K1014"

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp"}

# Mirrors VARIANT_SUFFIX in src/app/services/imageLoader.ts.
VARIANT_SUFFIX = re.compile(r"_(200|500|800|1200)x\1$", re.IGNORECASE)

# Served full-size and referenced separately via getSaleReportImage, never from
# sliderImages.
EXCLUDED_NAMES = {"salereport.jpg"}


def generate_image_array(brand_name, folder_path):
    """Print a TypeScript-style sliderImages array for one model folder."""
    try:
        files = os.listdir(folder_path)
    except FileNotFoundError:
        print(f"Error: Folder '{folder_path}' not found.")
        return
    except PermissionError:
        print(f"Error: Permission denied to access '{folder_path}'.")
        return

    image_files = []
    variants = 0
    unusable = []
    for f in sorted(files):
        if not os.path.isfile(os.path.join(folder_path, f)):
            continue
        base, ext = os.path.splitext(f)
        if ext.lower() not in IMAGE_EXTENSIONS:
            continue
        if f.lower() in EXCLUDED_NAMES:
            continue
        if VARIANT_SUFFIX.search(base):
            variants += 1
            continue
        # Same guards as 2_make_variants.py, applied here too because this is
        # the step that actually writes paths into a model file. A lowercase
        # extension or a second dot resolves to a variant that does not exist,
        # so listing one ships a guaranteed 404.
        if f.count(".") != 1 or ext != ext.upper():
            unusable.append(f)
            continue
        image_files.append(f)

    if unusable:
        print(f"// WARNING: {len(unusable)} file(s) omitted - the site would 404 on them.")
        for f in unusable:
            reason = ("rename it: only one dot allowed" if f.count(".") != 1
                      else "lowercase extension: re-run 1_clean_jpg.py")
            print(f"//     {f}  ({reason})")
        print("// Then re-run 2_make_variants.py and this script.")
        print()

    if not image_files:
        print(f"No usable source images found in '{folder_path}'.")
        return

    # Keep only the leaf folder name — that is what the model path uses.
    folder_name = folder_path.rstrip("/\\").replace("\\", "/").split("/")[-1]

    print("sliderImages: [")
    for i, filename in enumerate(image_files):
        comma = "," if i < len(image_files) - 1 else ""
        print(f'  "public/assets/Images/{brand_name}/{folder_name}/{filename}"{comma}')
    print("],")

    print(f"\n// Found {len(image_files)} image(s)", end="")
    print(f", skipped {variants} generated variant(s)" if variants else "")


if __name__ == "__main__":
    brand_name = sys.argv[1] if len(sys.argv) > 2 else DEFAULT_BRAND
    folder_path = sys.argv[2] if len(sys.argv) > 2 else DEFAULT_FOLDER
    generate_image_array(brand_name, folder_path)
