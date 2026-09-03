# scripts/

Two unrelated groups live here: build-time codegen that runs against **this** repo,
and a photo pipeline that runs against the **MWatchCollectionResources** repo.

## Codegen (this repo, driven by npm)

| Script                         | Run via                                                                             | What it does                                                                                                                                                                                                                                                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `generate-collection-index.ts` | `npm run generate-index` — also `predev` and `prebuild`, so it is usually automatic | Rebuilds `src/app/data/collection-index.json` (the runtime data source) and `collectionModules.generated.ts` (one literal `import()` per model, which is what keeps the bundler from emitting a 343-file context module) from `data/admin/collectionData.tsx`. Run it after editing collectionData. |
| `generate-pdf-book.tsx`        | `npm run generate-pdf`                                                              | Renders the collection to a PDF book. Output is gitignored (`*.pdf`).                                                                                                                                                                                                                               |

## Photo pipeline (MWatchCollectionResources, run by hand)

The photos are not in this repo. Commit the resources repo before running any of
these — they edit in place, and `git diff` is the only undo.

Run in order. Each script takes the folder as its first argument and falls back
to a default at the top of the file.

```bash
python scripts/images/1_clean_jpg.py  <folder>          # HEIC/PNG/... -> clean, metadata-free .JPG
python scripts/images/2_make_variants.py <folder>       # write the 200/500/800/1200 variants
python scripts/images/3_list_images.py <Brand> <folder> # print the sliderImages array to paste
```

1. **`1_clean_jpg.py`** — re-encodes everything to JPEG with an UPPERCASE `.JPG`
   extension, baking in EXIF orientation and stripping all metadata (including
   iOS Live Photo payloads). Needs `pillow-heif` for iPhone HEIC input.
2. **`2_make_variants.py`** — writes the four square variants beside each photo and
   gives the full-size original one recompression pass. Safe to re-run: existing
   variants are skipped, and the original is only rewritten if it actually shrinks.
3. **`3_list_images.py`** — prints the `sliderImages` array for a model file. Lists
   originals only; the generated variants are filtered out.

All three are safe to re-run. Step 1 skips files it has already cleaned and never
touches step 2's variants — without that it would re-encode q70 thumbnails at q95,
inflating them ~50% per pass. Step 2 skips variants that are newer than their
source, and only rewrites an original that actually shrinks.

### The naming rules are load-bearing

The site never lists variants anywhere. It stores the original path and rebuilds
the variant filename at render time — `getImgURLForSizeType` in
`src/app/services/commonFunctions.tsx`, resolved by `src/app/services/imageLoader.ts`.

That means a filename with a **lowercase extension** or a **second dot** silently
resolves to a file that does not exist, and GitHub raw 404s rather than guessing.
Step 1 normalises the case; step 2 refuses to process anything that slipped
through and tells you which files to fix. Do not "fix" that by loosening the guard.

### All four sizes are in use

`200x200` (ContactSheet tiles, SearchPalette, SalesResults), `500x500` (slider, and
the 2x source for 200px tiles), `800x800` (WatchTile grid, gallery, Open Graph),
`1200x1200` (model hero, LightboxViewer). Dropping one to save space in the
resources repo breaks whichever surface used it. `saleReport.JPG` is the one
exception — it is served full-size and deliberately has no variants.
