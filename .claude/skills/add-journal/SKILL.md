---
name: add-journal
description: Turn an event or a collection set into a Journal entry (src/app/data/journal/entries/) — photos listed with their sizes, sections from subfolders, watches linked by model file — planned first and written only after the user approves. Use when the user names a folder of event photos (a car meeting, a museum visit, a race), asks to add something to the Journal, or wants a group shot of several watches published as a collection set.
---

# Add to the Journal

This skill turns an event block plus a photo folder into a **review document**,
and then, only once the user approves it, into a Journal entry.

**Two stages. Stage 1 never writes to either repo.** Stage 2 runs only after the
user approves the review, with or without corrections.

`JOURNAL_GUIDE.md` at the repo root is the human version of the same process,
and the reference for every field of an entry.

## Input

```
Fórmula Mágica
Event | Museu do Caramulo, Portugal | 2026-10-10
Folder: C:/Users/migue/Pictures/2026/Caramulo Formula Magica F1/Favoritos
Dek: Formula 1 cars at the Museu do Caramulo, and four of the collection's racing watches beside them.
Intro: First paragraph. / Second paragraph.
Quote: An optional line.
Link: Event website | https://...
Cover: 6168
Captions:
6075 — Ayrton Senna's name on the sidepod
Watches:
Omega = Speedmaster Racing Schumacher
```

Line 1 is the title, line 2 is `Event` or `Set`, then place (event) or brand (set),
then the date if known. `Folder:` is required. Every other line is optional:

- `Intro:` paragraphs are separated with `/`.
- `Cover:` and `Captions:` name photos by their IMG number.
- `Watches:` maps a subfolder name, or `highlights`, to a catalogue watch, for
  any folder the lookup cannot resolve on its own.

If the user gives only a folder, ask for line 1 and line 2 and show this format.

## Stage 1: resolve and review

1. **List the folder as it is**, without copying anything (a dry run reads the
   EXIF date that step 1 of the pipeline would strip):

   ```
   python scripts/images/3_list_images.py --journal "<folder>"
   ```

   It prints the highlights (the folder's own photos) and one section per
   subfolder (a square photo as `{ src }`, any other with its pixel size), plus
   the EXIF date. The paths it
   prints assume `Images/Journal/<leaf folder>/`; the real folder name is
   decided in step 4.

2. **Resolve the watches in one call**, from the repo root:

   ```
   npx tsx .claude/skills/add-journal/scripts/lookup.ts --folder "<folder>" --watch "<name>" ...
   ```

   Each subfolder name is matched against the catalogue. A single full-score
   match is the section's `watches` (✱). Several equal matches (a bare brand
   name such as "Omega") or none at all go into the review as a **question**;
   never pick one. The user's `Watches:` lines settle them.

3. **Never open photo files.** Captions and per-photo watch tags come from the
   user, as with `/add-watches`. Photos without a caption simply have none.

4. **Plan the names.**
   - Slug: `<year>-<title words>-<place word>`, ASCII, lowercase:
     `2026-formula-magica-caramulo`. Lookup lists the slugs already taken.
   - Resources folder: `Images/Journal/<YYYY>_<Title_Words>/`, underscores, no
     dots, no spaces. Subfolders get a `01_`, `02_` prefix when their order
     matters (the prefix is dropped from the section title).
   - Section titles: from the subfolder names, tidied (⚠), or as the user gave them.

5. **Write the review document** and stop:
   - **Plan mode active:** write it to the plan file and call ExitPlanMode.
   - **Otherwise:** post it as the reply and wait for approval or corrections.

### Review document format

```markdown
# Journal: <title> (review)

`entries/<slug>.ts` · <kind> · <date> · <place or brand> · <n> photos (<n> highlights, <n> sections) · cover IMG\_<n>

## Questions

1. <only real decisions: an ambiguous watch, a missing date, two folders that look like one section>

## Copy into MWatchCollectionResources

`<source folder>` → `public/assets/Images/Journal/<YYYY>_<Name>/`
| Source | Target | Photos |
| --- | --- | --- |
| (top level) | (top level) = highlights | 15 |
| Cuervo | 01_Cuervo | 8 |

## Sections

| #   | Title                       | Watches                                | Photos |
| --- | --------------------------- | -------------------------------------- | ------ |
| 01  | John Player Special Lotus ⚠ | Cuervo y Sobrinos Historiador Habana ✱ | 8      |

## Text

Dek, intro, quote, link and captions as they will be written.
```

## Stage 2: apply (after approval)

1. **Copy the photos** into the planned resources folder, mapping each source
   subfolder to its target name. Copy, never move: the user's own folder stays
   as it is. Skip videos and anything the review left out.
2. **Run the photo pipeline** on the new folder, in order:

   ```
   python scripts/images/1_clean_jpg.py "<resources folder>"
   python scripts/images/2_make_variants.py "<resources folder>"
   python scripts/images/3_list_images.py --journal "<resources folder>"
   ```

   Steps 1 and 2 walk the subfolders too. Check that every listed photo has its
   `_800x800` beside it.

3. **Write `src/app/data/journal/entries/<slug>.ts`**: the listing's `photos` and
   `sections`, the date from the Stage 1 dry run, the resolved `watches` on
   each section, the captions merged in by IMG number, and the text fields.
   The shape is the `JournalEntry` type in
   `src/app/data/journal/journalTypes.ts`; `JOURNAL_GUIDE.md` has an example.
4. **Register it** in `src/app/data/journal/index.ts`, **commented out**, under
   the "Hidden until … pushed" note: the site reads photos from GitHub, so the
   page would show broken images until the user pushes the resources repo.
5. **Prettier** on the files written, then the **checks**, each of which must pass:
   - `npm run typecheck`: this is what verifies every model file path.
   - `npx eslint <entry file> src/app/data/journal/index.ts`
   - `git status --short`, in this repo and in the resources repo: only the
     planned files have changed.
6. **Report:** the entry file, the resources folder and its photo count, and
   each check's result. Then the steps left to the user:
   - write captions, photo watches and section titles in `/admin/journal`
     (`npm run dev`, Admin in the header, then Journal Captions), which shows the photos
     from the local checkout;
   - commit and push MWatchCollectionResources, then uncomment the two lines
     in `index.ts`.

## When the photos are pushed

Uncomment the entry's import and its line in `journalEntries`, run the checks
again, and open `/journal/<slug>` in `npm run dev` to look at it.

## Never

- Commit, push or stage anything, in either repo.
- Move or edit the user's own photo folder. Only copy from it.
- Open photo files, or write a caption the user did not give.
- Guess between several matching watches. Ask.
- Register an entry as live before its photos are on GitHub.
- Hand-edit `collection-index.json` or `collectionModules.generated.ts`.
