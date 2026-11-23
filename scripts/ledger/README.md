# Back-office ledger

Every watch's money, entered in the site's local back-office (`/admin/ledger`), **beside** the Excel
workbook. The workbook stays: `npm run sales:sync` keeps reading it, and the ledger's
**Compare with workbook** view shows where the two disagree. Retiring the workbook is a separate,
later decision.

## Privacy

- The ledger lives in `.ledger/` at the repo root: gitignored, local only, never in a model file
  (the repo is public), and excluded from build tracing (`next.config.ts`).
- Only dev admin pages and routes read it, with `fs`, after the `NODE_ENV` gate. `/admin/ledger`
  renders "Development only" in production and `/api/admin/ledger` answers 404
  (`e2e/admin-gating.spec.ts` checks both).
- **Back it up.** Once things are entered only in the back-office, `.ledger/ledger.json` is the one
  copy. Every save keeps the last 30 copies in `.ledger/backups/`; set `LEDGER_BACKUP_DIR` (a OneDrive
  folder, say) in `.env.local` to copy each save there too.

## Commands

```bash
npm run sales:sync      # the workbook pipeline, ending with ledger:snapshot
npm run ledger:import   # once: seed .ledger/ledger.json from the workbook
npm run ledger:verify   # prove the seeded ledger reproduces the sales report, to the cent
npm run ledger:snapshot # the workbook read as a ledger → .sales/workbook-ledger.json
```

Seeding, once: `npm run sales:sync`, copy `.sales/financials.json` to `.ledger/baseline/`, then
`npm run ledger:import` and `npm run ledger:verify` (same day: future dates count on the build day).
The import refuses to overwrite an existing ledger (`--force` replaces it, after a backup).

## The store

`.ledger/ledger.json` (types in `src/app/admin/ledger/ledger.types.ts`):

- **watches**: every watch money went into: for sale, kept, sold, returned, gone. A watch may link to
  a catalogue model (`modelFile`, one watch per model). A lot's unsold share stands for `count`
  watches until one is split off.
- **lines**: every movement of money: date, in or out, amount, kind, description, and its
  **holders**: the watches (or `overhead`) it belongs to, by share, adding up to 1. A lot's purchase
  is one line held by every watch in it.
- **groups**: money that belongs together: a workbook block, a lot bought together.

**Rules worth knowing:**

- **Effective cost.** A watch kept out of a group (a lot) whose other watches sold costs, effectively,
  what the group has not earned back. A sale recorded on a lot watch counts toward its group. An extra
  bought later for one watch takes no group, so a lot in profit never makes a strap look free.
- **Parts.** A watch bought for parts for another watch is a `parts` line on the watch it serves:
  an expense, like a strap or a repair (the Lorenz movement donor is the first).
- **Book.** Money for watches kept is the collection's (`book: "collection"`), everything else
  trading. It separates the Collection tab's figures from the year tabs'.

## How the report is built

`src/app/admin/ledger/buildFinancials.ts` turns the store into the same `SalesFinancials` the
workbook pipeline writes, at request time. So the sales report shows either source unchanged:
**Figures from: Workbook | Back-office** in its header (`?source=ledger`).

## Seeding and the snapshot

`_seed.ts` reads the workbook through the pipeline's own interpretation (`scripts/sales`: units,
lots, stock items, kept watches and their links, overrides). Each workbook cell becomes a line
held exactly as the pipeline holds it, at full precision. Ids come from the workbook (a line from
its cell, a watch from its unit or stock key), so the seed and every later snapshot agree.
Pass-throughs (cancelled orders, purchases refunded in full) net to zero and are left out.

## Comparing

After a sync, **Compare with workbook** pairs every ledger line with a workbook line: by the
workbook row's fingerprint first, then by direction, amount (±€0.01) and nearest date within a week.
It lists:

- **workbook only**: lines the ledger lacks. **Pull in** adds one exactly as the workbook reads it,
  with any watch it needs.
- **back-office only**: lines the workbook lacks.
- **figures that differ**: every figure of the sales report, workbook vs ledger, to the cent.

## In the back-office

- `/admin/ledger`: lines (add, edit, split between watches), watches (record a purchase of one
  watch or a lot, link a model, split one off a lot), the comparison, and what to look at.
- The model editor (`/admin/models?file=…`) has a **Ledger** panel: the model's watch, its lines and
  totals, **Add a cost**, and **Record a sale**. A sale saves the payout privately. It also writes the
  public sale report (hammer, date, listing) to the model file, but only once `saleReport.JPG` sits
  beside the photos in the resources checkout, because the model page shows that screenshot for
  every report.

## Sources: where each watch was bought

Each watch can record where it was bought (`LedgerWatch.source`). The value is an id from the
store's own list (`LedgerStore.sources`, e.g. `{ "id": "EBAY", "label": "eBay" }`).

**Privacy.** The list lives in the store, not in code, because a seller can be a private person
and the repo is public. Never put a source's name in a model file, a script or a commit.

**Rules** (`ledgerActions.ts`):

- `save-source`: an id is UPPER_SNAKE, and no two sources share a name.
- `delete-source`: refused while any watch still uses the source.
- `set-source`: sets or clears the source on several watches at once, for a whole lot.
- `save-watch` and `record-purchase` refuse an id that isn't in the list. A purchase recorded with
  a source tags every watch it buys, and puts the source's name in the line's `channel`.

**Commands.** `npm run ledger:sources` does it in bulk:

```bash
npm run ledger:sources                          # how many watches each source has
npm run ledger:sources -- untagged [--status s] # watches with no source, with what they paid and a hint
npm run ledger:sources -- find <text>           # watches whose name, model or purchase text match
npm run ledger:sources -- apply <file.json> [--dry]
```

- The apply file's format is at the top of `sources.ts`. Its keys are a watch id, a linked
  `modelFile`, or `group:<id>` for every watch of a lot.
- A write backs up like a back-office save, and is refused if the ledger changed while it ran.
- A hint comes from a watch's purchase text naming a source ("Compra Ebay…"). It is never applied
  on its own.

**In the back-office:**

- On `/admin/ledger`, the watch form and **Record a purchase** have a **Bought from** dropdown.
  The Watches list has a source column and a filter.
- The model editor's Ledger panel shows each watch's source.

**In the sales report.** The **Where they came from** section has a row per source, plus Untagged:

- Watches bought and spent on purchases, all time.
- Sales, profit, margin and days held, for the time window and from whichever figures the report
  shows.

**Catalogue watches not in the ledger.**

- `LedgerStore.modelSources` holds where a catalogue model with no ledger watch yet was bought
  (modelFile → source id). No money is recorded for these.
- The CLI sets them with `model:<Brand/File>` keys, through `set-model-source`. That covers model
  files kept out of the collection index until their photos are listed.
- They count as bought on the report (shown as "n not in ledger"), and a sale of the model counts
  under its source.
- When a ledger watch is later linked to the model, it takes the source over, unless it has its
  own, and the entry is dropped.
- `set-model-source` is refused for a model a ledger watch already links to: tag the watch instead.
