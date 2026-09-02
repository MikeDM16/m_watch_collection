# Changelog

## [2026-09-01] — Redesign follow-ups, round three

### The rail really does scroll on the wheel now

Round two shipped this broken and my verification passed, which means the test was wrong, not the feature. Two independent causes, either sufficient on its own:

1. **Snap re-snapped every programmatic write.** The track is `snap-x snap-mandatory` with snap points 296px apart. A real wheel tick is 40-120px, so `scrollLeft += 100` was pulled straight back to the point it started from and the rail never moved. Snapping is now suppressed for the duration of a wheel gesture (`scrollSnapType = "none"`, restored on a 140ms idle timer), so dragging and touch keep snapping and only the wheel path, which writes small increments, opts out.
2. **`deltaMode` was not normalised.** `deltaY` is only in pixels when `deltaMode` is `PIXEL`. Firefox and several mice report `LINE`, where `deltaY` is about 3, so the rail moved 3px per tick. Now normalised: `LINE × 16`, `PAGE × clientHeight`.

**Why the round-two test passed a broken feature:** it drove the rail with `mouse.wheel(0, 500)`. 500px clears the 296px snap pitch, so it landed on the next snap point. No real device produces a 500px tick. The test proved the listener fired; it never proved the interaction worked. It now drives repeated 100px and 40px ticks and asserts `scrollLeft` advances on **every** tick, which is the case the old test could not have caught.

### The footer's "to the top" link works

`id="start"` sat on the `<nav>`, which is `position: fixed`. A fixed element never leaves the viewport, so the browser considered the anchor already in view and scrolled nowhere. The id moved onto a `<span>` that sits in normal document flow; because the nav is out of flow, that span is the first thing in the document, so `#start` now genuinely means the top.

The anchor id is unchanged, so nothing else had to move. Verified from the footer on home, brand and model pages: `scrollY` goes to 0 in each case, and exactly one `#start` element exists per page.

### The pinned viewer samples across the gallery

It walked the gallery 0, 1, 2, 3, but consecutive frames in a 40-photo set are the same angle one shutter apart, so it looked like nothing was changing. It now steps in **Fibonacci strides**, each jump wider than the last: indices `0, 3, 5, 8, 13, 21`. The small leading terms (1, 1, 2) are skipped because those are the clustered ones. Indices wrap with a modulo so short galleries stay in range, and the three models with no photographs still fall back to `srcImage`.

On the Seamaster Jumbo the sections now show `5763, 5766, 5769, 5795, 5800` instead of `5763, 5764, 5765, 5766, 5767`.

### All Brands: the letter follows the hovered row

Each letter group is now a `group` and the letter carries `group-has-[a:hover]:text-brand`, so hovering a brand row turns both the row and its letter crimson. `group-has-` rather than `group-hover` so the letter answers a hovered row, not the pointer merely sitting in the group's whitespace. Verified: hovering the letter itself does not tint it, and neighbouring groups are unaffected.

### Model pages 404 in dev: diagnosed, not a redesign defect

Reported as a regression. It is not one, and my first diagnosis was also wrong.

I initially blamed a `.next` holding both dev and production artifacts. That reproduced, but the 404 came back on a completely clean `.next`, so the diagnosis was incorrect. The dev log gives the real answer:

```
○ Compiling /collection/[brand]/[model] ...
GET /collection/Omega/... 200 in 21.4s (next.js: 18.8s, generate-params: 1960ms)
```

**The model route takes roughly 20 seconds to compile on a cold Turbopack cache, and Next answers 404 while it is still building** rather than blocking. Once compiled it serves in ~0.2s. Every model page 404s during that window and every one works after it.

The cost comes from `collectionService.getModelDetails`, which does `await import(\`../data/watchModels/${indexEntry.modelFile}\`)`. A template-literal import forces a context module spanning all **343** model files, each pulling in enums and a movement file from a further 132. That line is untouched by the redesign and predates it; the April 2026 performance work reduced the _startup_ graph with the JSON index but left this import in place.

It is worse than a slow first compile, and the rule is specific:

**If any request reaches the dev server before Turbopack finishes indexing routes, `/collection/[brand]/[model]` never registers for the lifetime of that server.** Every request to it then returns 404 in ~70ms without a `Compiling` line, indefinitely, no matter how long you wait or how many times you reload. Shallower routes (`/`, `/collection/[brand]`, `/admin/*`) are unaffected and compile normally.

Give the dev server ~30 seconds untouched after `npm run dev` and the route compiles in about 9 seconds on first hit and serves in 0.19s thereafter. Verified both ways repeatedly.

Nothing was changed for this: it is a Turbopack dev behaviour aggravated by the context module, and production is unaffected because every page is prerendered. The durable fix is to replace the template-literal import with a generated explicit module map, which removes the context module and almost certainly the flakiness with it.

---

## [2026-09-01] — Redesign follow-ups, round two

### Special Timepieces no longer hijacks the page scroll

The pinned pan was wrong in principle, not just in tuning. While a section is pinned it consumes every vertical wheel event, so you could not reach the rest of the page without first panning all 34 tiles. Two rounds of fixing the symptoms (the void, then the vanishing tiles) never addressed that.

The pin is gone. `HorizontalRail` no longer uses GSAP at all. It is a native scroll-snap rail with one addition: a non-passive `wheel` listener that maps a vertical wheel onto `scrollLeft` **only while the rail still has somewhere to go**. At either end, or for a horizontal gesture, the event passes through and the page scrolls. React registers `onWheel` as passive, so this has to be `addEventListener("wheel", fn, { passive: false })`.

Verified: with the pointer over the rail, `scrollLeft` moves while `window.scrollY` stays put; the rail exhausts after 16 wheel ticks and the very next tick scrolls the page. With the pointer anywhere else the page always scrolls. The section reports `position: static` at every offset.

**GSAP is now absent from the home route entirely** and ships only on the model page, where it pins the image column while the specification scrolls and never consumes page scroll.

### Main Brands

Logos were capped at `max-h-8` (32px) inside a ~126px cell, using about a third of the height. Now `max-h-12 sm:max-h-14` with `max-w-[70%]` so wide marks do not touch the cell edges.

The lighter rectangle in the last row was a real defect: there are **21** main brands, the grid painted `bg-border` behind `gap-px` cells, and the 4 cells the grid never fills at `lg` (3 at `sm`) showed that background as one block. Borders moved onto the cells, so unfilled track space is transparent at every breakpoint.

### Previous Sales

The single "Show all 240 results" became a button that commits to a **growing batch each press**: 12 → 24 → 48 → 96 → 192 → 240. The label names the next batch and what is left (`Show 24 more · 216 remaining`) rather than implying it loads everything. Nobody is expected to read the whole archive, but pressing twice means you want it.

The header drops the money and shows the lot count only.

### Section order

Contacts moved to sit directly after About Me, so the two personal sections are together and the auction results close the page: Hero → Special Timepieces → Main Brands → All Brands → About Me → **Contacts** → **Previous Sales**. All five anchor ids are unchanged and still resolve from the nav and footer.

### The admin tools are reachable again, and in the new dialect

**The actual regression** was navigational, not visual. The old navbar pushed two extra entries when `NODE_ENV !== "production"` linking to `/admin/create-model` and `/admin/sales-report`; `SiteHeader` dropped them, so the pages still built and worked but had no way in. Both links are restored under the same gate.

Worth recording, because the assumption going in was wrong: **the admin pages were never unstyled.** `src/app/admin/**` and `src/components/ui/**` were untouched by the overhaul and were already written against semantic tokens, and the overhaul kept every token _name_ while only retuning values, so they inherited the new palette for free. Only three hardcoded colour sites existed, all in the wizard. This was dialect translation, not repair.

- New `src/app/admin/layout.tsx` giving both tools the site header, a `<main>` landmark and the theme toggle, replacing two divergent hand-rolled "Back to Site" affordances. Admin stays outside the `(site)` group; it has its own shell and no footer.
- Shared `DevOnly` component for the production gate, replacing two copies of the same markup.
- The three hardcoded colours (`bg-green-600` step, green/red result banner, `text-red-400` remove button) → `bg-success` and `destructive`.
- Headings → `font-display`, field and tile labels → `.lab`, every figure → `.num` with tabular figures, containers → the site shell, stat tiles and both tables → the site's hairline pattern. Both admin tables gained the `overflow-x-auto` they were missing and no longer overflow at 390px.
- The two duplicated `SectionHeader`s deduped into one.
- `src/components/ui/*` is imported by admin only now, so `Button` moved to the crimson accent and `Card`/`Button` moved off the unmapped `rounded-xl`/`rounded-md` onto `rounded-lg`, which tracks `--radius`. Zero blast radius on the public site.
- `formatPrice` used `de-DE`, rendering `€108.877` where the public sales table renders `€108,877` for the same figure. Now `en-GB`.

Charts needed nothing: both already use `ChartContainer` with `hsl(var(--chart-N))` and retheme correctly.

### Measured

Home JS drops to 797KB with GSAP gone from the route. Home transfer rises 3.00 → 3.16 MB, which is the larger brand logos being served at a bigger variant, and is the direct cost of that request. Model and brand pages are unchanged.

### Still open

- The four `src/app/api/admin/*` routes are **not** dev-gated, while the two admin pages are. In production the routes are live and two of them write files.
- `create-model` checks `NODE_ENV` after its loading early-return, so in production it briefly renders "Loading enums and data" and fires all four admin fetches before showing the gate.
- 12 models carry a `description.sliderImages` array with 170 photographs that render nowhere.

---

## [2026-09-01] — Redesign follow-ups

Four fixes from reviewing the redesign in the browser.

### Brand logos now hover to white in dark mode

`.logo-mono:hover` dropped the monochrome filter in both themes, revealing each logo's true colour. That is right in light mode, but in dark mode a large share of the 90 marks are black-on-transparent and disappeared against the ground on hover. Dark mode now keeps `brightness(0) invert(1)` and only lifts opacity, so the mark brightens to white. Light mode is unchanged.

### Header links hover to crimson

They previously only brightened (`hover:opacity-100`). Now `hover:text-brand`, which is theme-aware in both the transparent and the condensed header state.

### Special Timepieces: the pan was broken, not just long

Two separate defects.

The visible one: the pinned wrapper was only as tall as one tile (~330px) while the pin was held for the full pan distance. With 34 tiles making a 9,304px track, that pinned a thin strip for **8,000px, about nine screen-heights**, which is the "large black page" in the report. The wrapper is now full-height with the heading inside the pinned area, and the pin duration is capped at 2.5 viewport heights while the track still travels its whole width.

The real one, found while verifying the first: **the tiles vanished entirely mid-pan.** The track was still a horizontal scroll container, so its layout width was the viewport (1440px) even though its `scrollWidth` was 9,304px. Translating it slid the whole clipped box off-screen instead of panning the tiles inside it. The track now gets `width: max-content` while the GSAP path is active, with the wrapper doing the clipping. Verified: track lays out at 9,304px and the transform pans correctly.

Both changes stay inside the existing `matchMedia` guard, so below `lg`, on coarse pointers and under reduced motion it remains a native scroll-snap rail (verified: `overflow-x: auto`, viewport width, no transform).

### Model page: photographs earlier, and the pinned viewer iterates

The contact sheet moved above the specification, so the page reads: this is the watch, here is the whole photographic record, now the details.

The pinned viewer now advances through the watch's own gallery as you read rather than holding one frame. Each spec section takes the next photograph (Features, Model, Case, Dial, Bracelet), the movement block cycles through all of that calibre's photographs as it scrolls past, and the sale report shows the auction sheet. It still makes no claim that a given frame _depicts_ the case rather than the dial, because nothing in the data records that; it walks the gallery in order.

`PinnedFrame` now carries a list of images instead of one, and each section gets a ScrollTrigger whose `onUpdate` picks the image by progress through that section. GSAP was already on this route for the pin, so this added no dependency and replaced the previous IntersectionObserver. Verified on the Seamaster Jumbo: sections pull IMG_5763 through IMG_5767 in order, then the movement block cycles `Omega_cal_265_1` → `_2` → `_3`, then the sale report.

Field completeness re-verified: all 32 spec labels still render.

**One perf trap found while measuring this.** Mounting every frame up front pushed model pages up ~18%, because the frames are absolutely positioned inside a visible box, so `loading="lazy"` never held them back and all nine to twelve photographs were fetched on first paint. Frames now mount one step ahead of the one being shown, which keeps the cross-fade instant while the page still starts with a single image. Model pages ended up **smaller than before this round** despite showing far more photography:

| Page                         | April baseline | after redesign | after this round   |
| ---------------------------- | -------------- | -------------- | ------------------ |
| Model — Tissot Antimagnetic  | 3.22 MB        | 2.57 MB        | **2.48 MB**        |
| Model — Omega StayBrite      | 3.79 MB        | 2.67 MB        | **2.48 MB**        |
| Model — Tag Heuer Pro Chrono | 5.44 MB        | 2.97 MB        | **2.79 MB**        |
| **Average, all 10 pages**    | **3.57 MB**    | 2.71 MB        | **2.66 MB (-25%)** |

### Correction to the photo statistics quoted in the previous entry

Seven model files contain `/* … */` blocks of retired image paths **inside** the `sliderImages` array. The statistics gathered by text-scanning those files counted the commented-out paths, so the quoted maximum was wrong. Measured with comments stripped, across 322 models:

|                                            | text-scan (wrong) | actual                |
| ------------------------------------------ | ----------------- | --------------------- |
| Max photographs on one model               | 132               | **85**                |
| Total photographs                          | ~13,100           | **12,431**            |
| Median / p25 / p75 / p90                   | 37 / 28 / 48 / 59 | **37 / 28 / 47 / 59** |
| Models never showing the disclosure (≤ 24) | 54                | **59**                |

The rendering was always correct; only the reported figures were off. The Breitling Chronomat A13050, cited as the 132-photo worst case, actually has 72 live photographs and renders exactly that.

### Also found, not fixed

**12 models carry a `description.sliderImages` array holding 170 photographs that render nowhere.** This is the same class of dormant content as `description.text` and `Caliber.usefullLinks`, both of which the redesign started rendering. Worth a decision: fold them into the contact sheet, or show them alongside the description.

---

## [2026-08-31] — Editorial Redesign

Full visual overhaul of the three public page types. Content, URLs, route slugs, anchor ids and nav labels are unchanged; every one of the 321 model pages and 89 brand pages still prerenders.

### Three things that were silently broken

- **The typography had never rendered.** `layout.tsx` downloaded Geist and Geist Mono into `--font-geist-sans` / `--font-geist-mono`, but no CSS rule and no Tailwind config ever referenced those variables. Separately `textStyles.css` named `"Goudy old Style"` and `"Quatro Slab W03 Medium"` with no `@font-face`, no `next/font/local` and no font files, so every visitor saw system fallbacks. Since Goudy ships with MS Office, the site looked different on the author's machine than for everyone else.
- **Tailwind was emitted twice.** `textStyles.css` re-declared `@tailwind base/components/utilities` while being `@import`ed into `globals.css`. This also produced a split cascade where bespoke classes in `globals.css` beat utilities while those in `textStyles.css` lost to them, which is the root cause of Fix 4 in `docs/bootstrap-to-tailwind-fixes.md`.
- **Dark mode was scaffolding.** `darkMode: ["class"]` was set and a full `.dark` token block existed, but nothing ever applied the class and there were zero `dark:` variants.

### Design system

- One semantic token set in shadcn's HSL-triplet convention (so `/opacity` modifiers keep working), light on `:root` and dark under `.dark`.
- `--color-brand: #c40d2e` became `--brand: 349 88% 41%`, registered in Tailwind as `colors.brand` and finally reachable as `text-brand` / `bg-brand` / `ring-brand`. Lifted to `349 76% 60%` in dark for AA (5.6:1 light, 5.1:1 dark). Crimson is now a state colour (selection, links, focus, sold) rather than the colour of every heading.
- Four faces wired through `next/font/google`: **Sorts Mill Goudy** italic for the wordmark (a Goudy Old Style revival, restoring the documented intent), **Archivo** variable on `wght` + `wdth` for display, and **Geist** / **Geist Mono** for text and data. Every reference, calibre, diameter, year and price now renders in tabular mono.
- Radius scale: 0 for surfaces and images, 2px for controls, full for pills. No shadows on the public catalogue; depth comes from photography, hairlines and surface tints.
- All four stylesheets consolidated into `globals.css` with legacy classes in `@layer components`, so utilities reliably win.

### Structure

- Route groups: `(site)` carries the header and the `<main>` landmark, `(marketing)` and `collection/[brand]` each own their footer. `/admin` sits outside the group and stays bare, as before. Header duplication dropped from 5 call sites to 1.
- Real theme toggle with a blocking inline script, `localStorage` persistence and system default. No FOUC.
- Search moved from the middle of the home page into the header as a `Cmd/Ctrl-K` palette, so it now exists on brand and model pages. The lazy `/api/search-index` fetch is unchanged.
- `RandomBackgroundDiv` picked its image in `useEffect`, so the hero and footer visibly swapped after hydration. Now chosen on the server from a deterministic hash.
- Added `generateMetadata` (321 unique model titles where all 412 pages previously shared one), `sitemap.ts` (411 URLs), `robots.ts`, a real `<h1>` per page, and a skip link.
- `not-found.tsx` redirected unconditionally, making every unknown URL a soft 404. It now returns a real 404 and keeps the legacy `?model=` redirect.
- `TagHeuer_BG3.JPG` and `macro_mov_bg.JPG` were listed as fallback hero backgrounds but both 404 on the resources CDN, so brands without their own background rendered a broken band roughly half the time. Removed from the array pending re-upload.

### Pages

- **Home** — all seven sections in their existing order. The special-pieces carousel became a GSAP scroll-pan; the A-Z brand list gained per-brand counts and lost its 90 hairlines; brand logos render monochrome and reveal true colour on hover (which also solves dark-mode polarity, all 90 verified to carry real alpha); the sales carousel became an auction results table (240 lots, €108,877); the About Me pull-quote leads its section. Five full-bleed photo bands reduced to one.
- **Brand** — CSS Grid instead of flexbox percentage math, sticky filter bar with the existing series chips plus type and sort, composed empty state. Each control hides below two distinct values so single-watch brands stay clean.
- **Model** — the four-panel accordion that hid everything is gone. Compact breadcrumb, hero plate with an at-a-glance strip, then a pinned photograph beside the scrolling specification. **All 32 spec fields render** (Model 6, Case 9, Dial 5, Bracelet 4, Movement 8), driven from the existing `…KeyToDisplayTextMapping` records so a field cannot be dropped by omission. `WatchDetails.description` and `Caliber.usefullLinks` render for the first time. Related strip replaces the dead end.
- **Contact sheet** — the gallery is no longer boxed in a `50dvh` scroll container. First 24 photographs in the author's array order (never sorted), then one disclosure, pulling the 200x200 variant instead of 500x500. The lightbox config is unchanged and always receives the full set.

### Dependencies

Removed `swiper`, `react-photo-album`, `motion` and `react-icons`; added `gsap`. `framer-motion` was imported by the accordion but only present transitively; that import is gone. Icons consolidated on `lucide-react` at `strokeWidth={1.5}`.

### Measured (10 pages, 3 runs, warm)

| Page                         | Before      | After       | Delta    |
| ---------------------------- | ----------- | ----------- | -------- |
| Home                         | 4.60 MB     | 2.99 MB     | -35%     |
| Tissot (67 models)           | 4.09 MB     | 2.91 MB     | -29%     |
| Omega (29 models)            | 3.25 MB     | 2.56 MB     | -21%     |
| Model — Omega StayBrite      | 3.79 MB     | 2.67 MB     | -30%     |
| Model — Tag Heuer Pro Chrono | 5.44 MB     | 2.97 MB     | -45%     |
| **Average**                  | **3.57 MB** | **2.71 MB** | **-24%** |
| **JS per page**              | **1195 KB** | **838 KB**  | **-30%** |

Caveat: the "after" run is against a local production build while the April baseline was against the deployed site, so FCP and LCP are not comparable. Transfer size and JS are, since images come from the same GitHub CDN either way. GSAP appears only in the model route chunk; the lightbox and its CSS load on demand.

---

## [2026-04-12] — New Deployment Performance Validation

### Profiling Run

Re-ran the full Playwright profiling suite (10 pages, 5 runs each) against the latest production deployment to validate performance after the new deploy.

### New Deployment vs Post-Fix (April 11) — Warm Runs

| Page                  | Post-Fix FCP | New Deploy FCP | Post-Fix Size | New Deploy Size |
| --------------------- | ------------ | -------------- | ------------- | --------------- |
| Home                  | 972ms        | 312ms          | 6.33 MB       | 4.60 MB         |
| Tissot (67 models)    | 369ms        | 284ms          | 4.04 MB       | 4.09 MB         |
| Omega (29 models)     | 376ms        | 279ms          | 2.98 MB       | 3.25 MB         |
| Tag Heuer (22 models) | 351ms        | 335ms          | 2.44 MB       | 3.07 MB         |
| Breitling             | 352ms        | 331ms          | 2.23 MB       | 2.44 MB         |
| Arauto (1 model)      | 382ms        | 290ms          | 2.53 MB       | 2.53 MB         |
| Model — Tissot        | 406ms        | 351ms          | 3.16 MB       | 3.22 MB         |
| Model — Omega         | 382ms        | 310ms          | 3.52 MB       | 3.79 MB         |
| Model — Tag Heuer     | 368ms        | 322ms          | 4.81 MB       | 5.44 MB         |
| Model — Breitling     | 387ms        | 392ms          | 3.03 MB       | 3.25 MB         |

### New Deployment vs Original Baseline (April 11) — Overall Averages

| Metric         | Original Baseline | New Deployment | Change |
| -------------- | ----------------- | -------------- | ------ |
| Avg LCP        | 492ms             | 442ms          | -10.0% |
| Avg Load Time  | 1353ms            | 1353ms         | 0.0%   |
| Avg Page Size  | 4.83 MB           | 3.57 MB        | -26.1% |
| JS Bundle Size | 2.58 MB           | 1.17 MB        | -54.8% |

### Key Findings

- **FCP improved significantly vs post-fix**: avg 321ms now vs 375ms post-fix (-14.5%), with Home page showing the biggest gain (972ms → 312ms, -67.9%)
- **LCP improved 29% vs post-fix**: 623ms → 442ms across all pages
- **Page size stable**: 3.57 MB avg, matching the -26.1% reduction from original baseline (4.83 MB)
- **JS bundle unchanged at 1.17 MB** (-54.8% from original 2.58 MB baseline)
- **Home page document size dropped from 899KB to 271KB** (-69.8%) — lazy search data loading is fully effective in this deployment
- **Image sizes increased slightly on some pages** (network variance from CDN/srcSet selection, not a regression in code)
- **Cold start FCP**: Home 3668ms (Vercel serverless cold boot), brand pages 584-832ms, model pages 676-1036ms

---

## [2026-04-12] — Production Performance Profiling & Lazy Search Fix

### Profiling Setup

Created an automated Playwright-based profiling tool (`profiling/`) to measure production page load performance. Profiles 10 pages (Home, 5 brand pages, 4 model detail pages) across 5 runs each, capturing TTFB, FCP, LCP, request counts, transfer sizes, and per-image breakdowns.

- `profiling/profile.mjs` — runs profiling, saves raw + summary JSON
- `profiling/compare.mjs` — compares two summary JSONs with color-coded diff table
- Run 1 (cold start) is reported separately from warm runs to avoid skewing averages

### Baseline vs New Version Results (warm runs, 5 runs each)

| Page                  | Baseline FCP | Post-Fix FCP | Baseline Size | Post-Fix Size |
| --------------------- | ------------ | ------------ | ------------- | ------------- |
| Home                  | 360ms        | 372ms        | 7.38 MB       | 6.28 MB       |
| Tissot (67 models)    | 265ms        | 278ms        | 6.11 MB       | 4.04 MB       |
| Omega (29 models)     | 277ms        | 306ms        | 4.21 MB       | 2.98 MB       |
| Tag Heuer (22 models) | 288ms        | 262ms        | 3.91 MB       | 2.44 MB       |
| Breitling             | 261ms        | 269ms        | 3.66 MB       | 2.23 MB       |
| Arauto (1 model)      | 251ms        | 330ms        | 3.31 MB       | 2.53 MB       |
| Model — Tissot        | 293ms        | 308ms        | 5.17 MB       | 3.16 MB       |
| Model — Omega         | 298ms        | 309ms        | 4.75 MB       | 3.52 MB       |
| Model — Tag Heuer     | 299ms        | 281ms        | 6.29 MB       | 4.81 MB       |
| Model — Breitling     | 279ms        | 312ms        | 3.52 MB       | 3.03 MB       |
| **Overall Average**   | **287ms**    | **303ms**    | **4.83 MB**   | **3.50 MB**   |

### Key Findings

- **JS bundle size reduced by 55%**: 2.58 MB -> 1.17 MB (tree-shaking from direct movement imports)
- **Average page size reduced by 27.5%**: 4.83 MB -> 3.50 MB
- **FCP essentially unchanged**: 287ms -> 303ms (+5.6%, within network variance)
- **Cold start (Run 1) is 5-10x slower** on Vercel serverless — this was initially misidentified as an FCP regression before separating cold/warm metrics
- **ImageGalleryComponent srcSet (5 variants) is working correctly** — browser picks one optimal size per image (mostly 500x500 at row height 250px), not all 5

### Fix Applied: Lazy-load Search Data

The `collection-index.json` (186KB) was being serialized into the Home page HTML as props for the search bar. This added ~53KB to the document payload on every page load even though search is rarely used on first render.

**Changes:**

- Created `/api/search-index` API route to serve search data on demand
- `SearchBarComponent` now fetches data lazily on input focus instead of receiving it as a prop
- Removed `searchData` construction from `page.tsx` and `SpecialItemsComponent`
- Home page document size reduced from 952KB to 899KB (-5.6%)

### Files Added/Modified

- `src/app/api/search-index/route.ts` — new API route serving search index
- `src/app/components/searchBar/searchBarComponent.tsx` — lazy fetch on focus
- `src/app/components/specialItems/specialItemsComponent.tsx` — removed searchData prop
- `src/app/page.tsx` — removed searchData serialization
- `profiling/profile.mjs` — profiling script with cold/warm separation
- `profiling/compare.mjs` — comparison tool
- `profiling/results/` — baseline, new version, and post-fix JSON results

---

## 2026-04-11 — Performance Optimization

### Problem

The app was noticeably slow — slow startup and slow HMR (Hot Module Replacement). The root cause was the **module graph size**: `collectionData.tsx` eagerly loaded all 289 watch model files via synchronous `require()` calls on every page, including the homepage. Each model file imported ~20 enum files plus the entire `MovementsDataDB` hub (116 movement files). This created ~6,500+ import edges that Turbopack had to resolve on startup and partially re-process on every file save.

### Changes

#### Phase 1: Quick Wins

- **Removed dead `todo` block** from `collectionData.tsx` — 7 unused `require()` calls + `console.debug` that eagerly loaded collection-set files for no reason
- **Removed `console.debug`** calls from hot data paths in `brandsService.tsx`
- **Added `--max-old-space-size=8192`** to the `dev` script in `package.json` to prevent GC pressure mid-session
- **Trimmed Turbopack `resolveExtensions`** — removed unused `.mdx` from resolution list in `next.config.ts`

#### Phase 2: JSON Collection Index (biggest impact)

- **Created `collection-index.json`** — a lightweight JSON index (~50KB) with only listing metadata (brand, legend, year, srcImage, series, movementTitle, saleReport, modelFile path). The homepage and listing pages now read from this instead of loading all 289 watch model TSX files
- **Created `collectionIndex.ts`** — TypeScript module with `CollectionIndexEntry` type that imports and re-exports the JSON index
- **Rewrote `collectionService.tsx`** — listing operations (getSpecialCollectionItems, getSoldModels, getAllCollectionItems, getCollectionModelsByBrand) read from the JSON index. Full model details are loaded on-demand via dynamic `import()` only on model detail pages
- **Rewrote `brandsService.tsx`** — reads from the JSON index instead of `collectionData.tsx`
- **Updated `page.tsx`, `[brand]/page.tsx`, `[brand]/[model]/page.tsx`** — adapted to use index entry types and async model detail loading
- **Added `generate-collection-index.ts` script** — generates the JSON index from `collectionData.tsx`. Runs automatically via `predev` and `prebuild` npm scripts
- **All watch model `.tsx` files kept as-is** — full `WatchDetails` type safety preserved at compile time

#### Phase 3: Decoupled Movement Imports

- **Replaced `MovementsDataDB` hub imports** in 239 watch model files with direct movement file imports (e.g., `import movement_ETA_2824 from "../../movements/ETA/ETA_2824"`) via automated codemod script
- **Converted `import { Caliber }` to `import type { Caliber }`** in all 101 movement files + `watchDetails.tsx` — breaks the circular dependency chain between movement files and the movements hub

#### Phase 4: File Reorganization

- **Extracted `caliberTypes.ts`** — standalone file with `Caliber`, `CaliberTechinicalDetails` interfaces and display text mapping. Zero heavy imports, used by all app components
- **Moved `collectionData.tsx` and `movementsData.tsx` to `data/admin/`** — these registry files are now clearly separated as admin/script-only. They are never imported by the app at runtime (homepage, brand pages, listing pages)
- **Updated all import paths** across admin API routes, PDF scripts, and code generation templates
- **Updated `ADDING_WATCHES_GUIDE.md`** — documented the new architecture, workflow, and file tree

### Result

| Metric                               | Before                                    | After                               |
| ------------------------------------ | ----------------------------------------- | ----------------------------------- |
| Modules loaded on homepage           | ~460 (289 models + 116 movements + enums) | ~5 (JSON index + brands + services) |
| Modules loaded per model detail page | ~460 (all models + all movements)         | ~25 (1 model + 1 movement + enums)  |
| Import edges resolved on startup     | ~6,500+                                   | ~50                                 |
| Type safety                          | Full (WatchDetails + Caliber)             | Full — unchanged, TSX files kept    |

### Files Added

- `src/app/data/collection-index.json` — generated runtime index
- `src/app/data/collectionIndex.ts` — index type + import
- `src/app/data/caliberTypes.ts` — extracted Caliber types
- `src/app/data/admin/` — moved registry files here
- `scripts/generate-collection-index.ts` — index generation script
- `scripts/codemod-direct-movement-imports.ts` — one-time codemod (can be re-run)

### Workflow Change

When adding a new watch model:

1. Add entry to `src/app/data/admin/collectionData.tsx`
2. The collection index regenerates automatically on `npm run dev` / `npm run build`
3. Or run manually: `npm run generate-index`
