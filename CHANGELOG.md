# Changelog

## [Unreleased] - 2026-04-11 — Dev Mode Performance Optimization

### Problem

The app was noticeably slow in dev mode — slow startup and slow HMR (Hot Module Replacement). The root cause was the **module graph size**: `collectionData.tsx` eagerly loaded all 289 watch model files via synchronous `require()` calls on every page, including the homepage. Each model file imported ~20 enum files plus the entire `MovementsDataDB` hub (116 movement files). This created ~6,500+ import edges that Turbopack had to resolve on startup and partially re-process on every file save.

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
