# Chrono24 market values → ledger → valuation report

Chrono24's [Watch Collection](https://www.chrono24.pt/user/watch-collection/owned-watches.htm)
estimates what each watch you own is worth and keeps a value history per model. This
pipeline copies that into the private ledger (`.ledger/market.json`) and renders a
valuation report for insurance and for following the collection, in Portuguese and English.

Nothing here is committed or bundled: the export, the store and the PDFs are all in
gitignored folders (`.chrono24/`, `.ledger/`).

## Each update

1. On **chrono24.pt**, logged in, click the **Chrono24 export** bookmark. A box in the
   corner counts through the watches, then `chrono24-collection-<date>.json` lands in
   Downloads.
2. `npm run chrono24:sync`, which runs these three in order:
   - `chrono24:import` moves every export out of Downloads into `.chrono24/exports/`,
     reads the newest into `.chrono24/scrape.json`, and refuses one that doesn't add up
     to Chrono24's total;
   - `chrono24:apply` links each Chrono24 watch to a ledger watch, writes
     `.ledger/market.json` and `.chrono24/match-report.md`;
   - `valuation:report` writes `.ledger/reports/valuation-<date>.pt.pdf` and `.en.pdf`.
3. Read `.chrono24/match-report.md`. Anything under **To decide** is valued at cost until
   it is linked (see Links below).

The bookmark is made once: `npm run chrono24:bookmarklet`, open the
`.chrono24/bookmarklet.html` it writes in Chrome, drag the link to the bookmarks bar. If
clicking it ever does nothing, paste [`export-snippet.js`](export-snippet.js) into
DevTools → Console on chrono24.pt instead.

## Why a bookmark, not an automated browser

Cloudflare refuses automated browsers at Chrono24's login, and since Chrome 136 no script
can attach to your everyday Chrome profile. The snippet runs in your own tab, as you, and
calls the same JSON API the site's pages use:

| Endpoint (`/api/watch-collection/…`)    | What                                                               |
| --------------------------------------- | ------------------------------------------------------------------ |
| `get-items.json?category=Owns`          | the owned watches: id, name, value, purchase date                  |
| `get-overview.json`                     | the collection total, its range, Chrono24's profit and value chart |
| `get-item.json?watchCollectionItemId=…` | one watch: estimate range, purchase details, specs, model history  |

If Chrono24 changes that API, the import fails loudly. Record a fresh HAR to see the new
shape: DevTools → Network, tick Preserve log, reload the owned-watches page, open one
watch, then **Export HAR (sanitized)**, which leaves cookies out. `.chrono24/probe/` holds
the one from 2026-11-24.

## Links

A Chrono24 watch is linked to a ledger watch: a **kept** one (in the report) or a
**for-sale** one (its value is stored, but the report covers kept watches only).
Decisions win, strongest first: `user`, then `claude` (always with a reason). Everything
else is matched automatically against the kept watches on words and reference, purchase
month and purchase price, and taken as `high` only when it is a clear, mutual best and the
references do not disagree.

Decisions go in a JSON file passed with `--links`:

```json
{
  "by": "user",
  "links": {
    "20151746": "w-577e2d706e",
    "18120200": "Seiko/Seiko_6306_7001_1976",
    "22515578": { "to": "w-3e834050b6", "by": "claude", "reason": "why" },
    "12345678": null
  }
}
```

A value is a ledger watch id or a linked modelFile; `null` means "none of my watches".

```bash
npm run chrono24:apply -- --links .chrono24/decisions-2026-11-24.json --dry   # report only
npm run chrono24:apply -- --links .chrono24/decisions-2026-11-24.json
```

To confirm Claude's decisions, write the same links with `"by": "user"`.

## The store, `.ledger/market.json`

Types: `src/app/admin/ledger/market.types.ts`. It is its own file beside `ledger.json`,
so an import never trips the back-office's save check, but it follows the ledger's write
rules: a backup in `.ledger/backups/market-<stamp>.json` (the last 30, plus
`LEDGER_BACKUP_DIR`), an atomic write, and a refusal if it changed meanwhile.

- `items`: each Chrono24 watch's latest estimate and range, Chrono24's purchase data,
  specs, and the model history, merged by date across runs and never truncated. A watch
  missing from a later export is kept and marked `gone`.
- `links`: Chrono24 item → ledger watch, with who decided.
- `snapshots`: the collection total on each run day (a same-day re-run replaces it).
- `collectionHistory`: Chrono24's own series for the whole collection.

`src/app/admin/ledger/valuation.ts` turns ledger + store into per-watch value, cost and
unrealized gain, and the month-by-month value against cost. It is pure: the PDF report and
the admin page both use it.

## On the Sales Report

`/admin/sales-report` has a **Market value** section after "Money over time":

- **Tiles:** estimated value, cost, unrealized gain, and Chrono24's own total.
- **Chart:** value against cost, month by month.
- **Table:** watch by watch, sortable, each with its Chrono24 name, reference and link.
- **Stock:** for-sale watches Chrono24 also values, listed apart.

It reads `.ledger/market.json` through `loadMarket()` in `ledgerStore.ts`, after the
dev-only check, and shows the last export whatever the report's window or source. When the
export is over 45 days old, the section says it is due for a refresh.

## The report

`npm run valuation:report [-- --lang pt|en] [-- --out <folder>]`

It covers the kept collection: the ledger's `kept` watches (the workbook's Collection
tab). Each is valued at Chrono24's estimate when linked, at its ledger cost (purchase,
service, strap…) otherwise. It runs without any export too, with everything at cost.

- **Photos** come from the local MWatchCollectionResources checkout (`WATCH_RESOURCES_DIR`).
- **Specs** come from the model files.
- **A name on the cover:** set `VALUATION_OWNER`. It is not in the code because the repo
  is public.
- **Translations:** Chrono24's Portuguese words (condition, accessories) are translated
  for the English report in `pdf/i18n.ts`. A word missing there prints as-is, and the
  script lists it.
