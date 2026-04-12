# Changelog

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
