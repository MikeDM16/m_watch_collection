# Operations

Every action this project has: what to run, when, and what it reads and writes. Each
pipeline's own README has the details; this page is the map.

The private parts (money, matches, market values) live only in gitignored folders on this
machine. [What to save before deleting the repo](#local-only-data-what-to-save-before-deleting-the-repo)
lists them.

## Routines

| When                                    | Do                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| After editing the sales workbook        | `npm run sales:sync`, then confirm new matches on `/admin/sales-report/review`        |
| To refresh market values (monthly, say) | Click the **Chrono24 export** bookmark on chrono24.pt, then `npm run chrono24:sync`   |
| New watches to add                      | Paste them to Claude with `/add-watches`                                              |
| New event or collection-set photos      | `/add-journal` with the photo folder                                                  |
| Before a commit                         | `npm run typecheck`, `npm run lint`, then `npm run test:e2e` at milestones            |
| Before deleting or moving the repo      | Save the [local-only folders](#local-only-data-what-to-save-before-deleting-the-repo) |

The admin pages below exist only under `npm run dev`. In production they show
"Development only".

## The site

| Command                            | What it does                                                                                                                              |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`                      | Dev server on port 3000. Regenerates the collection index first.                                                                          |
| `npm run dev:clean`                | Stops a running dev server, deletes `.next`, starts again. Use it when model pages 404.                                                   |
| `npm run build`                    | Production build. Refuses to run beside a live dev server.                                                                                |
| `npm run start`                    | Serves the last build.                                                                                                                    |
| `npm run analyze`                  | Build with the bundle analyzer.                                                                                                           |
| `npm run generate-index`           | Rebuilds `collection-index.json` and `collectionModules.generated.ts` from `collectionData.tsx`. Runs by itself before `dev` and `build`. |
| `npm run typecheck`                | `tsc --noEmit`.                                                                                                                           |
| `npm run lint` / `lint:fix`        | ESLint.                                                                                                                                   |
| `npm run prettier`                 | Formats the whole repo.                                                                                                                   |
| `npm run test:e2e` / `test:e2e:ui` | Playwright suite (`e2e/`), against a fresh production build.                                                                              |

## The catalogue

| Action                         | How                                                                                                                                                                                                                            | Writes                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Add watches, movements, brands | `/add-watches` (plan → review → write). Manual reference: [ADDING_WATCHES_GUIDE.md](ADDING_WATCHES_GUIDE.md)                                                                                                                   | model files, `collectionData.tsx`, enums                          |
| Edit a model                   | `/admin/models` (fields, photo order, tiles, its ledger panel)                                                                                                                                                                 | the model file, the ledger                                        |
| Create a model by form         | `/admin/create-model`                                                                                                                                                                                                          | a model file                                                      |
| Photos                         | `python scripts/images/1_clean_jpg.py <folder>`, then `2_make_variants.py <folder>`, then `3_list_images.py <Brand> <folder>`. See [scripts/README.md](scripts/README.md#photo-pipeline-mwatchcollectionresources-run-by-hand) | the **MWatchCollectionResources** repo, in place: commit it first |
| Journal entry                  | `/add-journal`; captions and watches on `/admin/journal`. Guide: [JOURNAL_GUIDE.md](JOURNAL_GUIDE.md)                                                                                                                          | `src/app/data/journal/entries/`                                   |
| Collection book PDF            | `npm run generate-pdf`. The local-photo loader is still a stub (`getLocalImageAsDataUri` in `commonFunctions.tsx`).                                                                                                            | `public/watch-collection-book.pdf` (gitignored)                   |

## Money: the sales workbook and the ledger

Two sources stand side by side and are compared: the **workbook** in OneDrive
(`Relogios - Vendas.xlsx`, kept up to date by hand) and the **back-office ledger**
(`.ledger/ledger.json`, edited on `/admin/ledger`). Neither is retired. Details:
[scripts/sales/README.md](scripts/sales/README.md), [scripts/ledger/README.md](scripts/ledger/README.md).

| Command / page                                        | When                                           | Reads → writes                                                                                                      |
| ----------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `npm run sales:sync`                                  | After editing the workbook or the catalogue    | workbook → `.sales/` (`ledger.json`, `matches.json`, `financials.json`, reports), then `ledger:snapshot`            |
| `npm run sales:parse` / `sales:match` / `sales:build` | The three steps of `sales:sync`, one at a time | as above                                                                                                            |
| `/admin/sales-report/review`                          | After a sync with new or doubtful matches      | match decisions → `.sales/overrides.json`. Its **Re-sync workbook** button runs `sales:sync`                        |
| `/admin/sales-report`                                 | Any time                                       | P&L, margins, money over time, where watches were bought. `?source=ledger` reads the ledger instead of the workbook |
| `/admin/ledger`                                       | To enter purchases, costs, sales               | `.ledger/ledger.json` (with a backup on every save). Also: compare with the workbook, things to look at             |
| `npm run ledger:snapshot`                             | Runs at the end of `sales:sync`                | the workbook read as a ledger → `.sales/workbook-ledger.json`, for the compare view                                 |
| `npm run ledger:sources`                              | Tagging where watches were bought              | `-- untagged`, `-- find <text>`, `-- apply <file.json> [--dry]` → `.ledger/ledger.json`                             |
| `npm run ledger:import`                               | **Once**, to seed the ledger                   | `.sales/` + `.ledger/baseline/` → `.ledger/ledger.json`. Refuses to overwrite without `--force`                     |
| `npm run ledger:verify`                               | Right after the seed                           | proves the ledger reproduces the workbook's report to the cent                                                      |

## Market values: Chrono24

Chrono24's Watch Collection estimates what each watch is worth. The result shows in the
PDFs and in the **Market value** section of `/admin/sales-report`. Details:
[scripts/chrono24/README.md](scripts/chrono24/README.md).

| Command                        | When                                                           | Reads → writes                                                                           |
| ------------------------------ | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `npm run chrono24:bookmarklet` | **Once**, to make the bookmark                                 | `.chrono24/bookmarklet.html`: open it in Chrome, drag the link to the bookmarks bar      |
| _Chrono24 export_ bookmark     | On chrono24.pt, logged in                                      | downloads `chrono24-collection-<date>.json`                                              |
| `npm run chrono24:sync`        | After each export                                              | the three below in order                                                                 |
| `npm run chrono24:import`      |                                                                | Downloads → `.chrono24/exports/`, `.chrono24/scrape.json`                                |
| `npm run chrono24:apply`       | `-- --links <file>` to add decisions, `-- --dry` to look first | links to ledger watches → `.ledger/market.json`, `.chrono24/match-report.md`             |
| `npm run valuation:report`     | Any time (without an export too: values at cost)               | `.ledger/reports/valuation-<date>.pt.pdf` and `.en.pdf`; `-- --out <folder>` copies them |

## Dormant

`scripts/catawiki/`: pulling buyer reviews from the Catawiki seller dashboard. Only login,
probe and match exist; the scrape and apply steps were never written, and its browser
profile in `.catawiki/` holds an old session.

## Local-only data: what to save before deleting the repo

Git keeps the code. These folders are gitignored, so they exist **only on this machine**.

**First:** commit and push. `git status` should be clean and `git log origin/main..main`
empty; uncommitted work goes with the folder.

**Copy these.** Together they come to about 20 MB:

| Path         | Why it can't be rebuilt                                                                                                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.ledger/`   | **The most important.** `ledger.json` is the only copy of everything entered in the back-office. `market.json` holds every Chrono24 run's snapshot and the value histories. `backups/` keeps the last 30 saves of each, `baseline/` the seed inputs, `reports/` the dated valuation PDFs. |
| `.sales/`    | `overrides.json` holds every sales-match decision. The rest is rebuilt by `npm run sales:sync`, but copy the whole folder; it is small.                                                                                                                                                   |
| `.chrono24/` | `exports/` is the raw record of each Chrono24 export, `decisions-*.json` the link decisions. The rest is rebuilt.                                                                                                                                                                         |
| `.env.local` | The local environment variables.                                                                                                                                                                                                                                                          |

**Don't bother with:**

- `node_modules/`, `.next/`, `test-results/`, `profiling/results/`, `.playwright-cli/`, `.eslintcache`, `*.tsbuildinfo`: all regenerated.
- `.catawiki/`: an old browser session for the dormant pipeline.
- `scripts/New folder/` (about 4.6 GB) and `public/watch-collection-book.pdf`: generated collection books. Keep them only if you want those exact editions.
- `scripts/Relogios - Vendas.xlsx`: an old copy. The workbook the pipeline reads is in OneDrive.

**Outside the repo**, not deleted with it, but part of the setup:

- **The workbook** in OneDrive: OneDrive keeps it.
- **`../MWatchCollectionResources`**: the photos, in their own git repo. Commit and push it too.
- **Claude's memory** for this project: `~/.claude/projects/<the repo path with dashes>/memory/`. It is
  tied to the folder's path: clone back to the same path and it is picked up again; clone
  elsewhere and copy that folder to the new path's project folder.

**Restoring:** clone, `npm install`, copy the folders above back to the repo root, then
`npm run dev`.

**Safer every day:** set `LEDGER_BACKUP_DIR` to a folder outside the repo (a OneDrive folder) as a
**Windows user environment variable**. Every ledger and market save then also lands there.
Set it in the user environment, not only in `.env.local`. The npm scripts (`chrono24:apply`,
`ledger:sources`) don't read `.env.local`; only the admin pages do.
