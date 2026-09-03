"""
1_clean_jpg.py — step 1 of the photo pipeline.

Rewrites every image in a folder tree as a plain, metadata-free JPG with an
UPPERCASE .JPG extension. This is what you run on a fresh dump off the iPhone,
before anything else.

Two jobs, both load-bearing for the steps that follow:

  * Format. HEIC/HEIF (the iPhone default), PNG, WEBP, BMP and GIF all become
    JPEG. Re-encoding the pixels and passing no exif=/xmp= block strips EXIF,
    GPS, orientation tags and iOS Live Photo / motion-photo markers, including
    any appended video payload. `ImageOps.exif_transpose` bakes the rotation in
    first, so dropping the orientation tag can never turn a photo sideways.

  * Case. The output extension is always ".JPG", and a differently-cased
    original is deleted. This matters more than it looks: the app rebuilds
    variant filenames from the *source* extension (getImgURLForSizeType in
    services/commonFunctions.tsx) while step 2 writes them uppercased, so a
    surviving lowercase ".jpg" original would point the site at a file that
    does not exist. GitHub raw is case-sensitive — it 404s rather than guessing.
    Step 2 refuses to process anything this step missed.

WHICH REPO THIS TOUCHES: the photos live in MWatchCollectionResources, not in
this repo. Point it at a folder there (or at a Downloads staging folder before
you move the photos across). Originals are replaced in place, so work on a copy
until you trust it.

Dependencies:
    pip install pillow tqdm
    pip install pillow-heif      # only needed for HEIC/HEIF input

Usage:
    python scripts/images/1_clean_jpg.py <folder>
    python scripts/images/1_clean_jpg.py           # uses DEFAULT_FOLDER below
"""

import os
import re
import sys

from PIL import Image, ImageOps
from tqdm import tqdm

# Enable HEIC/HEIF support (iPhone default format). The script still works for
# JPG/PNG/etc. without this package installed.
try:
    from pillow_heif import register_heif_opener

    register_heif_opener()
    HEIF_OK = True
except ImportError:
    HEIF_OK = False
    print("pillow-heif not installed: HEIC/HEIF files will be skipped. "
          "Install with: pip install pillow-heif")

# Used when no folder is passed on the command line.
DEFAULT_FOLDER = "C:/Users/migue/Downloads/t/"

# Extensions we will read and re-encode as clean JPGs.
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".heic", ".heif", ".webp", ".bmp", ".gif"}

# JPEG output quality. High on purpose: this is the archival full-size image,
# and step 2 is what produces the small, heavily-compressed web variants.
JPEG_QUALITY = 95

# Never re-encode step 2's output. Those variants are written at q70, so running
# this script over a folder that already has them would re-save each one at q95
# — inflating a 200x200 thumbnail by ~50% and adding a generation of lossy loss
# every time. Mirrors VARIANT_SUFFIX in src/app/services/imageLoader.ts.
VARIANT_SUFFIX = re.compile(r"_(200|500|800|1200)x\1$", re.IGNORECASE)

# The sale-report scan is deliberately kept at maximum quality and served
# full-size; it is a document, not a photograph, so leave it as it is.
SALE_REPORT_NAME = "salereport.jpg"


def _already_clean(path):
    """True if this file is already this script's own output.

    Without this check the script re-encodes every original at q95 on each run,
    which undoes the q82 recompression 2_make_variants.py applies and makes it
    regenerate all four variants. The two steps would fight each other forever,
    shedding quality every round. A metadata-free RGB JPEG has nothing left for
    this step to do.
    """
    try:
        with Image.open(path) as im:
            return im.format == "JPEG" and im.mode == "RGB" and not im.getexif()
    except Exception:
        return False


def convert_to_clean_jpg(folder_path):
    """Walk `folder_path` and rewrite every image as a plain uppercase-.JPG."""
    converted = skipped = errors = 0

    for root, _dirs, files in tqdm(list(os.walk(folder_path))):
        for name in files:
            base, ext = os.path.splitext(name)
            ext = ext.lower()
            if ext not in SUPPORTED_EXTENSIONS:
                continue
            if VARIANT_SUFFIX.search(base) or name.lower() == SALE_REPORT_NAME:
                continue
            if ext in (".heic", ".heif") and not HEIF_OK:
                print(f"Skipping (no HEIC support): {name}")
                skipped += 1
                continue

            src = os.path.join(root, name)
            if name.endswith(".JPG") and _already_clean(src):
                skipped += 1
                continue

            dst = os.path.splitext(src)[0] + ".JPG"
            tmp = dst + ".tmp"

            try:
                with Image.open(src) as img:
                    # Keep the correct visual orientation before the tag is dropped.
                    img = ImageOps.exif_transpose(img)
                    img = img.convert("RGB")
                    # No exif=/xmp= argument -> all metadata is discarded.
                    img.save(tmp, "JPEG", quality=JPEG_QUALITY, optimize=True)

                # Atomically put the clean JPG in place.
                os.replace(tmp, dst)

                # Remove the original if it had a different extension/case.
                if os.path.normcase(src) != os.path.normcase(dst) and os.path.exists(src):
                    os.remove(src)
                converted += 1
            except Exception as e:
                if os.path.exists(tmp):
                    os.remove(tmp)
                print(f"Error processing {src}")
                print(e)
                errors += 1

    print("\n" + "=" * 60)
    print(f"Converted : {converted} files")
    if skipped:
        print(f"Skipped   : {skipped} files (already clean)")
    if errors:
        print(f"Errors    : {errors} files")
    print("=" * 60)
    print("\nNext: python scripts/images/2_make_variants.py <folder>")


if __name__ == "__main__":
    folder = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_FOLDER
    if not os.path.isdir(folder):
        print(f"Not a folder: {folder}")
        sys.exit(1)
    print(f"Cleaning images under: {folder}\n")
    convert_to_clean_jpg(folder)
