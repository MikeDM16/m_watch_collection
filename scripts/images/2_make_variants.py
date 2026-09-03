"""
2_make_variants.py — step 2 of the photo pipeline.

For every full-size photo in a folder tree, writes the four square variants the
site actually serves — 200 / 500 / 800 / 1200 — beside it, and gives the
full-size original one pass of JPEG recompression.

    IMG_3732.JPG
    IMG_3732_200x200.JPG      <-- ContactSheet tiles, search results, sale strip
    IMG_3732_500x500.JPG      <-- slider, and the 2x source for 200px tiles
    IMG_3732_800x800.JPG      <-- WatchTile grid, gallery, Open Graph
    IMG_3732_1200x1200.JPG    <-- model hero, lightbox

All four sizes are live (see SizeType in services/commonFunctions.tsx and its
callers) — none can be dropped. The site resolves them purely by filename via
services/imageLoader.ts, which is why the naming rules below are strict.

WHY THE FILENAME GUARDS
The app rebuilds a variant name as `path.split(".")[0] + "_800x800." +
path.split(".")[1]` (getImgURLForSizeType). Two filename shapes silently break
that, producing a 404 rather than an error you would notice:

  * A lowercase extension. This script writes variants uppercased, so a
    `photo.jpg` original makes the site ask for `photo_800x800.jpg` while the
    file on disk is `photo_800x800.JPG`. GitHub raw is case-sensitive.
  * A second dot. `my.photo.JPG` splits into the wrong base and extension on
    both sides.

Step 1 (1_clean_jpg.py) normalises the case for you. Rather than repair such
files here — the old `#PANDORA#` rename dance this script used to carry — both
shapes are reported and skipped, so the problem surfaces at import time instead
of as a missing image in production.

ORIGINAL RECOMPRESSION
The originals come off 1_clean_jpg.py at quality 95 and are the only files in
the tree with real headroom left; the variants below are already written at
quality 70. The original is re-encoded at quality 82 and kept ONLY if that saves
at least MIN_ORIGINAL_SAVING. That guard is also what makes the pass safe to
re-run: a second pass produces roughly the same size, fails the threshold, and
leaves the file alone, so repeated runs cannot grind an image down.
(This replaces the old standalone optimize_images.py, whose multi-encoder
machinery spent almost all of its effort on the q70 variants it then correctly
refused to touch.)

WHICH REPO THIS TOUCHES: the photos live in MWatchCollectionResources, not in
this repo. It is a git repo, so commit before running — `git diff` is your undo.

Dependencies:
    pip install pillow tqdm

Usage:
    python scripts/images/2_make_variants.py <folder>
    python scripts/images/2_make_variants.py           # uses DEFAULT_FOLDER below
"""

import io
import os
import re
import sys

from PIL import Image, ImageOps
from tqdm import tqdm

# Used when no folder is passed on the command line.
DEFAULT_FOLDER = "C:/Users/migue/Documentos/GitHub/MWatchCollectionResources/public/assets/Images/" \
"Movements/Vacheron_Constantin"

# Must stay in sync with SizeType in src/app/services/commonFunctions.tsx and
# VARIANTS in src/app/services/imageLoader.ts.
VARIANT_SIZES = (200, 500, 800, 1200)
VARIANT_QUALITY = 70

# Full-size original recompression. See ORIGINAL RECOMPRESSION above.
ORIGINAL_QUALITY = 82
MIN_ORIGINAL_SAVING = 0.04   # keep the re-encode only if it saves >= 4%

SOURCE_EXTENSIONS = {".JPG", ".JPEG", ".PNG"}

# Mirrors VARIANT_SUFFIX in src/app/services/imageLoader.ts — enumerated rather
# than `_(\d+)x\1` so an unrelated filename can never be mistaken for a variant.
VARIANT_SUFFIX = re.compile(r"_(200|500|800|1200)x\1$", re.IGNORECASE)

# The sale-report scan is served full-size (getSaleReportImage asks for it by
# name, and imageLoader passes it through untouched), so it is excluded from
# both the variant pass and the recompression pass — it is a document scan that
# needs to stay readable, not a photograph.
SALE_REPORT_NAME = "salereport.jpg"


def _variant_path(root, base, ext, size):
    return os.path.join(root, f"{base}_{size}x{size}{ext}")


def _recompress_original(src):
    """Re-encode a JPEG original at ORIGINAL_QUALITY, keeping it only if smaller.

    Returns the number of bytes saved (0 if the file was left alone).
    """
    orig_size = os.path.getsize(src)
    try:
        with Image.open(src) as im:
            # Bake orientation before re-saving so dropping metadata can never
            # rotate the photo.
            im = ImageOps.exif_transpose(im)
            if im.mode not in ("L", "RGB"):
                im = im.convert("RGB")
            buf = io.BytesIO()
            im.save(buf, "JPEG", quality=ORIGINAL_QUALITY,
                    optimize=True, progressive=True)
        data = buf.getvalue()
    except Exception as e:
        print(f"  ! could not recompress {src}: {e}")
        return 0

    if len(data) > orig_size * (1 - MIN_ORIGINAL_SAVING):
        return 0

    # tmp + atomic replace: a crash can never leave a truncated photo behind.
    tmp = src + ".tmp"
    try:
        with open(tmp, "wb") as f:
            f.write(data)
        os.replace(tmp, src)
    except Exception as e:
        if os.path.exists(tmp):
            os.remove(tmp)
        print(f"  ! could not write {src}: {e}")
        return 0

    return orig_size - len(data)


def _make_variants(src, root, base, ext):
    """Write any missing/stale variants for one source photo. Returns count written."""
    source_mtime = os.path.getmtime(src)
    pending = [
        size for size in VARIANT_SIZES
        if not (
            os.path.exists(_variant_path(root, base, ext, size))
            and os.path.getmtime(_variant_path(root, base, ext, size)) >= source_mtime
        )
    ]
    if not pending:
        return 0

    written = 0
    for size in pending:
        dst = _variant_path(root, base, ext, size)
        try:
            with Image.open(src) as img:
                img = ImageOps.exif_transpose(img)
                img.thumbnail((size, size), Image.LANCZOS)
                img.save(dst, optimize=True, quality=VARIANT_QUALITY)
            written += 1
        except Exception as e:
            print(f"  ! {os.path.basename(dst)}: {e}")
    return written


def make_variants(folder_path):
    """Walk `folder_path`, recompress each original, and write its four variants."""
    photos = []
    for root, _dirs, files in os.walk(folder_path):
        for name in files:
            photos.append((root, name))

    written = recompressed = saved_bytes = 0
    bad_case = []
    bad_dots = []

    for root, name in tqdm(photos):
        base, ext = os.path.splitext(name)

        if ext.upper() not in SOURCE_EXTENSIONS:
            continue
        if VARIANT_SUFFIX.search(base) or name.lower() == SALE_REPORT_NAME:
            continue

        # --- filename guards: report, never repair. See WHY THE FILENAME GUARDS.
        if name.count(".") != 1:
            bad_dots.append(os.path.join(root, name))
            continue
        if ext != ext.upper():
            bad_case.append(os.path.join(root, name))
            continue

        src = os.path.join(root, name)

        # Recompress FIRST, then derive the variants from the result. Doing it
        # in this order keeps the run idempotent: the recompression bumps the
        # original's mtime, so the variants written after it always look newer
        # and the next run skips everything.
        if ext.upper() in (".JPG", ".JPEG"):
            gained = _recompress_original(src)
            if gained:
                recompressed += 1
                saved_bytes += gained

        written += _make_variants(src, root, base, ext)

    _report(len(photos), written, recompressed, saved_bytes, bad_case, bad_dots)


def _report(scanned, written, recompressed, saved_bytes, bad_case, bad_dots):
    print("\n" + "=" * 60)
    print(f"Scanned      : {scanned} files")
    print(f"Variants     : {written} written")
    print(f"Originals    : {recompressed} recompressed "
          f"({saved_bytes / 1024 / 1024:.1f} MB saved)")

    if bad_case:
        print(f"\nSKIPPED - lowercase extension ({len(bad_case)}). The site would 404 on")
        print("these; re-run 1_clean_jpg.py over them first:")
        for path in bad_case[:10]:
            print(f"    {path.replace(os.sep, '/')}")
        if len(bad_case) > 10:
            print(f"    ... and {len(bad_case) - 10} more")

    if bad_dots:
        print(f"\nSKIPPED - more than one dot in the filename ({len(bad_dots)}). Rename")
        print("these to a single dot before the extension:")
        for path in bad_dots[:10]:
            print(f"    {path.replace(os.sep, '/')}")
        if len(bad_dots) > 10:
            print(f"    ... and {len(bad_dots) - 10} more")

    print("=" * 60)
    print("\nNext: python scripts/images/3_list_images.py <brand> <folder>")


if __name__ == "__main__":
    folder = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_FOLDER
    if not os.path.isdir(folder):
        print(f"Not a folder: {folder}")
        sys.exit(1)
    print(f"Generating variants under: {folder}\n")
    make_variants(folder)
