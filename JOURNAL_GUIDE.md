# Journal Guide

The Journal (`/journal`) is the third kind of page, beside brands and watches.
Each entry is one of:

- **an event**: cars and watches, a museum, a meeting. It links to the watches
  from the collection that appear in its photographs.
- **a collection set**: several watches photographed together, usually from one
  brand. That brand's page lists it.

The `/add-journal` skill does all of this from a photo folder and a few lines of
text, with a review before anything is written. This guide is the manual version.

---

## A. Checklist

- [ ] **1. Photos** in `MWatchCollectionResources/public/assets/Images/Journal/<YYYY>_<Name>/`
      (a set can use a folder under its brand instead)
- [ ] **2. Photo pipeline**: `1_clean_jpg.py`, `2_make_variants.py`, then `3_list_images.py --journal`
- [ ] **3. Entry file** at `src/app/data/journal/entries/<slug>.ts`
- [ ] **4. Register** it in `src/app/data/journal/index.ts`, commented out until the photos are pushed
- [ ] **5. Captions and watches** in `/admin/journal` (see section C2)
- [ ] **6. Checks**: `npm run typecheck`, `npm run lint`
- [ ] **7. Push** MWatchCollectionResources, then uncomment the entry

Everything else follows on its own: the Journal index, the brand page's "In the
Journal" row, the line on each linked watch's page, search, the sitemap, and
the social card.

---

## B. Photos

**The folder is the layout.** Photos at the top of the entry's folder are the
**highlights**, shown first. Each subfolder becomes a **section** below them,
titled from its name:

```
Journal/2026_Formula_Magica_Caramulo/
  IMG_6072.JPG ...            <-- highlights
  01_Cuervo/IMG_6131.JPG ...  <-- section 01, "Cuervo"
  02_Omega/...                <-- section 02, "Omega"
  05_Museu_Collection/...     <-- section 05, "Museu Collection"
```

A `01_` prefix only fixes the order; it is dropped from the title. A photo may
sit in the highlights and in a section at once; it then shows in both.

**Naming rules** are the catalogue's: one dot per file name and an uppercase
`.JPG` (step 1 fixes both), and no dots in folder names. Underscores keep the
URLs readable; spaces work but encode as `%20`.

**The pipeline**, from this repo:

```
python scripts/images/3_list_images.py --journal "<original folder>"   # optional dry run: reads the EXIF date
python scripts/images/1_clean_jpg.py "<resources folder>"
python scripts/images/2_make_variants.py "<resources folder>"
python scripts/images/3_list_images.py --journal "<resources folder>"
```

Step 1 strips EXIF, so read the date with the dry run on the originals first.
The last command prints the `photos` and `sections` to paste into the entry. A
square photo is just `{ src }`. A photo that is not square (most event shots)
also gets its pixel size, `w` and `h`, because the page lays photos out at their
real proportions before they load. Within 2% counts as square.

**Event albums are heavy.** Every photo is stored five times (the original and
four variants), and the resources repo is already several gigabytes. Pick the
photos worth showing rather than the whole card.

---

## C. The entry file

`src/app/data/journal/entries/<slug>.ts`. The type, with a comment on every
field, is `JournalEntry` in `src/app/data/journal/journalTypes.ts`.

```ts
import type { JournalEntry } from "../journalTypes";

const entry: JournalEntry = {
  slug: "2026-formula-magica-caramulo", // the URL: /journal/2026-formula-magica-caramulo
  kind: "event",
  title: "Fórmula Mágica",
  date: "2026-10-10", // or "2026-10", or "2026"
  place: "Museu do Caramulo, Portugal",
  dek: "Formula 1 cars at the Museu do Caramulo, and four of the collection's racing watches beside them.",
  intro: ["First paragraph.", "Second paragraph."],
  quote: "An optional pull-quote.",
  link: { label: "Event website", href: "https://..." },
  cover: "public/assets/Images/Journal/2026_Formula_Magica_Caramulo/IMG_6168.JPG",
  photos: [
    {
      src: "public/assets/Images/Journal/2026_Formula_Magica_Caramulo/IMG_6074.JPG", // square: no size
      caption: "The John Player Special Lotus, number 12",
    },
    {
      src: "public/assets/Images/Journal/2026_Formula_Magica_Caramulo/IMG_6097.JPG",
      w: 3024, // not square: its size, so the row is laid out right
      h: 1701,
    },
    // ...
  ],
  sections: [
    {
      title: "John Player Special Lotus",
      // date: "2026-10-11", // only when it differs: a set shot over several sessions
      watches: ["Cuervo_y_Sobrinos/Cuervo_y_Sobrinos_Hanava_Landeron_159_1950"],
      photos: [
        /* from 3_list_images.py */
      ],
    },
  ],
};

export default entry;
```

**Watches are linked by model file**: the path under `src/app/data/watchModels/`,
without `.tsx`. Put them where they apply:

- `sections[].watches`: the watch a whole section was photographed with. A
  subfolder named after a watch needs this once, not on every photo.
- `photos[].watches`: a watch visible in one particular photograph. It is
  linked under that photo.
- `watches`: anything else the entry features.
- `watchGroups`: sets only, the watch list under headings.

Every one of them is checked by `npm run typecheck`. A typo, a renamed file or
a watch hidden in `collectionData.tsx` fails the check instead of rendering a
dead link. To find a watch's model file:

```
npx tsx .claude/skills/add-journal/scripts/lookup.ts --watch "Tag Link"
```

**Captions** are optional, and most photos need none. Write them in the editor
below rather than here, so you can see each photo.

**A collection set** is the same file with `kind: "set"`, a `brand`
(`BrandsEnum.OMEGA`), usually no sections, and `watchGroups` for its headings.
The seven sets in `entries/` are working examples.

**Dates** say when the photographs were taken. A set shot in one session gets
the entry's `date`. A set shot over several sessions dates each section instead
(Tag Heuer: 2019 and 2024), and the entry then sorts by its latest one; don't
write the same date twice.

---

## C2. Captions and watches: `/admin/journal`

A local tool, like Create Watch Model and Sales Report: `npm run dev`, then
**Admin** in the header, then **Journal Captions**. It is never served in
production.

1. Pick the entry at the top. Hidden entries are listed too, marked "hidden".
2. Every photo shows as a thumbnail with:
   - a caption box;
   - a **Watches in this photo** picker (type to search the catalogue);
   - a **Cover** radio.
     Enter in a caption jumps to the next one, so a whole event can be typed
     straight through.
3. Each section has its **title**, a **note** and **Photographed with** (the
   watch the whole section was shot with). Retitle the folder names here.
4. At the top: the **dek**, the **intro** (a blank line between paragraphs) and
   the **pull-quote**.
5. **Save to entry file**, then review the change with `git diff`.

The thumbnails come from your local MWatchCollectionResources checkout, so
captioning works before the photos are pushed. Save only changes what you
edited; the rest of the file, `BrandsEnum` reference and all, is untouched.
Clearing a caption removes the field again.

---

## D. Registering, and hiding until the photos are live

`src/app/data/journal/index.ts` lists every published entry. The site reads
photos from GitHub through the `/img` proxy, so until the resources repo is
pushed the new photos 404. An entry goes in **commented out**, under the
"Hidden until … pushed" note, the same rule as a watch without photos in
`collectionData.tsx`. Once pushed, uncomment its import and its line.

---

## E. What the page does with it

- **Hero**: the cover, the title, the dek.
- **Strip**: date, place, sections, photos and watches (an event), or brand,
  pieces, years, photos and when it was photographed (a set: "14 Feb 2024",
  "Jun-Jul 2024" or "2019-2024" across its sections). Only the fields the
  entry has.
- **Intro and quote**, when written.
- **In this report**: jump links, only when there are sections.
- **Highlights**, then each **section** (its date, when it has one, beside its
  photo count), as justified rows: the row breaks are
  chosen at build time so every row's height lands close to the target, and
  each row fills the width at any screen size. Phones get their own grouping.
  A block longer than two rows opens on its first two and a "Show all" button.
  Every photo opens the lightbox, which pages through the whole entry.
- **On the wrist at the event** / **In this set**: the linked watches, as the
  catalogue's own tiles. A set's watches read newest first by catalogue year,
  in every list and under every heading, whatever order the file gives; an
  event's follow its photographs.
- **Older / newer** entry links.

Outside the page: the Journal index card, an "In the Journal" row on the brand
page (its sets, and events its watches appear at), "In the Journal" on each
linked watch's page (the brand row's previews on a wide screen; a
line of links on a phone), a Journal result in search, a sitemap entry, and a
social card.

---

## F. Files

```
src/app/
  data/journal/
    journalTypes.ts              <-- JournalEntry, JournalSection, JournalPhoto
    index.ts                     <-- the registry
    entries/<slug>.ts            <-- one per entry
  services/journalService.ts     <-- sorting, watch resolution, brand and model lookups
  components/journal/            <-- the page's pieces; justify.ts is the row breaking
  (site)/journal/                <-- /journal and /journal/[slug], with the social card
scripts/images/3_list_images.py  <-- --journal mode
.claude/skills/add-journal/      <-- the skill and its lookup script
```
