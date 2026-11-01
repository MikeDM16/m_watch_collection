---
name: add-watches
description: Turn a pasted batch of watches into this catalogue's files — watch model files, new movement files, new brands, enum keys and registry entries — planned first and written only after the user approves. Use when the user pastes watch blocks (brand / title - year / type | size | material / "Cal." line / links), asks to add watches, models, movements or brands to the collection, or names photo folders whose images should be listed into models (3_list_images / 2_make_variants).
---

# Add watches

This skill turns a pasted batch into a **review document**, and then, only once
the user approves it, into files. It replaces filling in the dev-only
`/admin/create-model` wizard one field at a time.

**Two stages. Stage 1 never writes to the repo.** Stage 2 runs only after the
user approves the review, with or without corrections.

**Read before Stage 1:**

- `reference/mapping.md`: parsing, naming, enum mapping, defaults and research rules.
- `reference/templates.md`: the exact file shapes. Use it for the movement files
  in the review and for everything in Stage 2.

`ADDING_WATCHES_GUIDE.md` at the repo root is the human version of the same
process. Use it for background only, such as nested series (§D2). Where its enum
tables disagree with `src/app/enums/`, the enum files win.

## Input

One block per watch, separated by blank lines:

```
Record
Bumper Tuxedo – 1950
Automatic | 33mm x 10 | Gold Plated
Cal. Record 171, 20 Jewels, 18000 A/h
https://ranfft.org/caliber/9202-Record-171
Series 161 - 174(CLD-RM)
161, 171: bumper, sub second
```

Lines 1–4 are fixed: brand; title and year; type, size and material; caliber.
After them come URLs and free notes. Optional prefixed lines (`Ref:`, `Series:`,
`Style:`, `Dial:`, `Strap:`, `Images:`, `Sold:`) override the defaults; see
mapping.md §1. If the user invokes the skill without a batch, ask for one and
show this format.

## Stage 1: resolve and review

1. **Parse** every block (mapping.md §1). Carry the user's numbers through as
   typed.
2. **Look up the whole batch in one call**, from the repo root. Pass one
   `--brand` per distinct brand and one `--caliber` per distinct caliber:

   ```
   npx tsx .claude/skills/add-watches/scripts/lookup.ts --brand "<Brand>" ... --caliber "<Maker> <Ref>" ... --enums
   ```

   For each brand it reports: the enum key, the real code folder, the series
   file, the `brandsDB` entry, the existing legends, the logo, and the photo
   folders in `../MWatchCollectionResources`.

   For each caliber it reports: exact and same-digit registry matches with how
   many models use them, mentions inside other movements' variant lists, the
   `CaliberBrandsEnum` key with the maker's naming style, and movement photo
   folders. It ends with every enum key and display value the mapping needs.

3. **Resolve the brands.** If a brand exists, use its key, code folder and series
   file. If it is new, give it a key, an enum line, a `brandsDB` entry, and one
   WebSearch for the brand's description and founding (mapping.md §6). Confirm
   the logo is reported present, or list it as a to-do.
4. **Resolve the movements.**
   - **REUSE** a registry entry with the same maker, reference and jewel count.
     Read its file and confirm the frequency matches.
   - Otherwise propose a **NEW** movement. WebFetch each URL in the block for the
     reserve, functions, description, variants and a cross-check of the jewels
     and frequency.
   - A batch that uses one new caliber twice gets **one** movement file.
   - A caliber that only appears in another movement's variant list (lookup's
     "mentioned in") is still NEW. Say in the review which file mentions it.
5. **Map every field** (mapping.md §3–§5). Any value missing from an enum
   becomes a proposed new key. Never substitute a wrong one.
6. **Fill in the photos.** When lookup lists a matching photo folder, list its
   originals with this command, and pick `srcImage`/`hoverSrc` (⚠):

   ```
   python scripts/images/3_list_images.py <ImageBrandFolder> "<absolute path to the folder>"
   ```

   Never open photo files. The user decided the visual fields come from
   defaults or from their own optional lines, not from inspecting photos.

7. **Check for collisions.** If a proposed legend, model file or movement key
   already exists, stop that watch and ask. It may already be in the catalogue.
8. **Write the review document**, in the format below.
   - **Plan mode active:** write it to the plan file and call ExitPlanMode.
   - **Otherwise:** post it as the reply and stop. Wait for "approve", "go", or
     corrections.

### Review document format

````markdown
# Add watches: review (<n> watches)

## Summary

<n> model files · <n> new movements (<keys>) · <n> reused (<keys>) · <n> new brands (<names>) · <n> new enum keys

## Questions

1. <only real decisions: a source contradicting the input, an ambiguous material, a series choice, a near-duplicate>

## Batch defaults (unverified, applied to every watch below unless shown)

<the mapping.md §5 table, condensed to one line per section: Case … · Dial … · Strap …>
Tip: add `Dial:` / `Strap:` / `Ref:` lines to the next batch to replace these.

## Watches

### <n>. <Title>

`watchModels/<Folder>/<File>.tsx` · legend "<Legend>" · photos: <folder or "none: IMG_XXXX placeholders">

| Field                  | Value                             |
| ---------------------- | --------------------------------- |
| Brand / series         | BrandsEnum.X (NEW) · "<series>" ⚠ |
| Movement               | NEW `<KEY>` / REUSE `<KEY>`       |
| Type · Style           | MECHANIQUE · CASUAL ⚠             |
| Case                   | D_34 · T_9 · GP                   |
| Features               | MECHANICAL, SMALL_SECONDS ✱       |
| Calendar · Strap width | WITHOUT · W_18 ⚠                  |

<one line per tidy-up made to the typed title, if any>

## New movements

<one line: files get the templates.md import block and `// Title`-style comments; `// Qn` marks a value waiting on a question>

### <KEY>: `movements/<Folder>/<File>.tsx`

Sources: <urls fetched, and whether each worked>

```tsx
<the `const <KEY>: Caliber = { … };` object, without the import block or section comments>
```

## New brands

<per brand: the enum line, the full brandsDB entry, the research sources, the logo status>

## Enum and registry edits

- `caseDiameterEnum.tsx`: + `D_29: "29 mm",` (Benrus)
- `movementsData.tsx`: + import, + `<KEY>: <KEY>,` …
- `collectionData.tsx`: + <n> entries (legends listed above)
- Generated on apply: `collection-index.json`, `collectionModules.generated.ts`

## To do outside this repo (MWatchCollectionResources)

- Photos → `Images/<BrandFolder>/<PhotoFolder>/` (run the photo pipeline, see scripts/README.md)
- Movement photos → `Images/Movements/<Folder>/<Folder>_<Ref>/`
- Commit the new logos: <files reported present but untracked>
````

Keep it scannable: the user should be able to approve nine watches in a
couple of minutes. Show only values that differ from the batch defaults. Mark
guesses ⚠ and values taken from a source ✱.

## Stage 2: apply (after approval)

Merge the user's corrections into the plan first. Then, re-reading each file
just before editing it:

1. **Enum keys** in their sorted positions (templates.md, "Enum keys").
2. **New brands:** the `brandsEnum.tsx` line, then the `brandsDB` entry,
   appended before the array's closing `];`.
3. **New movement files**, then for each one an import and an entry in
   `src/app/data/admin/movementsData.tsx`.
4. **Model files.**
5. **`collectionData.tsx` entries**, inserted before
   `\n};\n\nfunction sortCollection`. Grep for that anchor first; if it isn't
   there, stop and report. A watch with **no photo folder** still gets its
   model, movement and brand files, but its entry is written **commented
   out** behind a `// Hidden until photos are added (…)` note
   (templates.md). That way no broken tile goes live. Uncomment it once its
   photos are listed into the model.
6. **Prettier** on every created or edited file. It also sorts the imports:

   ```
   npx prettier --write <files...>
   ```

7. **Checks.** Each must pass before you report success.
   - `npm run generate-index`: it rewrites `collection-index.json` and
     `collectionModules.generated.ts`. A `Key is different from legend` warning
     about a new entry is a failure.
   - `npm run typecheck`
   - `npx eslint <created and edited .ts/.tsx files>`
   - `git status --short`: only the planned files plus the two generated files
     have changed.
8. **Report:**
   - the files created and edited
   - each check's result, with any failure output quoted
   - the new pages as `/collection/<encoded brand>/<encoded legend>`
   - **hidden until photos:** each watch whose entry is commented out, with
     its photo folder name
   - the remaining to-dos: photos, logos to commit in the resources repo, and
     each ⚠ field still worth a look

If a check fails, fix it when the cause is plain (a typo, an unused import, a
missing enum key). Otherwise report it as it is. Never suppress a check to
make it pass.

## When the photos arrive

For a single watch the user may prefer `/admin/models` in `npm run dev`
(`ADDING_WATCHES_GUIDE.md`, Step 3c): it lists the folder's photos, orders the
gallery by drag, sets the tiles and uncomments a hidden entry on save. Mention
it in the report for each watch left hidden. The steps below are for a batch,
or when the user asks you to do it.

The user names the photo folders, usually for several watches at once. For
each folder:

1. **Find the real folder.** Check it exists. A pasted path can be off by a
   character. If it is, use the folder the model already points at and say so.
2. **Normalise it if needed.** If `3_list_images.py` warns about a lowercase
   extension or a second dot, ask whether the file belongs in the gallery
   (it is often a reference picture). If it does, run
   `python scripts/images/1_clean_jpg.py "<folder>"` and list again.
3. **List the photos into the model.** Replace the model's `sliderImages`
   with the `3_list_images.py` output, in its order. Then set the
   `collectionData.tsx` tiles: first and second photo of the main shoot, ⚠.
   If the entry was hidden, uncomment it.
4. **Generate the variants last:**
   `python scripts/images/2_make_variants.py "<folder>"`, only after the
   listing. It writes the 200/500/800/1200 variants and may recompress
   originals in place.
5. **Verify.** Run Stage 2's checks. Also confirm that every listed path, and
   each of its four variants, exists in the resources repo.

Keep each file's line endings (these files are CRLF) when rewriting a block
with a script.

## Never

- Commit, push or stage anything. The user reviews the diff and commits.
- Edit or commit anything in `MWatchCollectionResources`. Only list what it
  needs. The one exception is running the photo pipeline scripts there when
  the user asks ("When the photos arrive"); never commit there.
- Write a `WatchDetails.description` block. It is deprecated and not rendered.
- Hand-edit `collection-index.json` or `collectionModules.generated.ts`. Only
  `npm run generate-index` writes them.
- Add a brand to `mainBrandsOrder`, or mark a model `specialCollectionItem: true`,
  unless asked.
- Invent specs. An unknown reserve is `reserve: undefined`, an unknown reference
  is `"-"`, and an unknown visual field is the flagged default.
- Silently change one of the user's numbers. Raise disagreements as questions.
