# Sales margin pipeline

Links every catalogue sale (`saleReport`: the gross hammer price and auction date)
to its section of the private sales ledger, the original workbook in OneDrive
(`~/OneDrive/Documentos/Excel Miguel/Relogios - Vendas.xlsx`, where it is kept up to
date; pass another path to `1_parse_ledger.py` to read a different copy), and
computes what each watch really earned: net payout, purchase and extras by
category, profit, margin, return on cost and days held. It also reads the
workbook's **Collection** tab (the watches kept) and keeps the ledger day by day,
so the report can show how the money has moved over time: everything spent and
received, and the capital held in watches at cost, kept and bought to sell. The
local sales report (`/admin/sales-report`, dev only) shows the result, and
`/admin/sales-report/review` is where matches are confirmed or corrected.

The workbook stands beside a **back-office ledger** (`/admin/ledger`, see
`scripts/ledger/README.md`): every sync ends with `ledger:snapshot`, the workbook read as a
ledger, so the back-office can compare the two line by line and figure by figure.

## Privacy

- The workbook lives outside the repo, and everything derived from it is gitignored
  (`/.sales/`; `/scripts/*.xlsx` still covers any copy dropped there). The workbook
  also holds bank balances and investments, but only its
  four year tabs (`R 17-23`, `R24`, `R25`, `R26`) and its `Collection` tab are ever
  read. `Resumo` is not: its "Coleção Atual" is recomputed from the Collection blocks.
- Nothing is written to `collection-index.json` or to the model files. The index is
  sent to the browser on public pages.
- The admin pages read `.sales/` with `fs` at request time, after the `NODE_ENV`
  gate. In production they render "Development only", `/api/admin/sales-review`
  answers 404, and `next.config.ts` excludes `.sales/` and `scripts/` from file
  tracing, so no build ever carries them (`e2e/admin-gating.spec.ts` checks the gate).
- `next dev` listens on your whole network. On shared Wi-Fi, run
  `npx next dev --turbopack -H 127.0.0.1` so the P&L stays on this machine.
- **Back up** `.sales/overrides.json` along with the workbook: it holds every match
  decision. Everything else in `.sales/` can be regenerated.

## Running it

```bash
npm run sales:sync      # all three steps, after editing the workbook or the catalogue
npm run sales:parse     # 1 — workbook → .sales/ledger.json
npm run sales:match     # 2 — link sales → matches.json, adjudicate.json, match-report.md
npm run sales:build     # 3 — P&L → financials.json, build-report.md
```

The review page's **Re-sync workbook** button runs all three; every decision saved
there re-runs steps 2 and 3.

On the review page, a match you confirm (or a "No entry" you set) moves from **To
confirm** to **Confirmed**, so the first tab only ever lists what is left, most
urgent first. Click the **Sold** header to sort by sale date instead (click again to
flip newest/oldest first), which follows the ledger's own order; **Status** goes back
to urgency. Pick a status chip or search to narrow the list, and **Confirm these
N** confirms that whole group in a single run, for example all the Ledger links. The
server refuses a confirmation if the matcher has moved that sale since the page
loaded. The route calls `python` (`python3` off Windows); set
`SALES_PYTHON` to use another interpreter.

| Step                | Reads                                           | Writes (in `.sales/`)                                | Fails when                                                   |
| ------------------- | ----------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| `1_parse_ledger.py` | the workbook                                    | `ledger.json`                                        | a block's recomputed total differs from Excel's cached total |
| `2_match.ts`        | `ledger.json`, the catalogue, `overrides.json`  | `matches.json`, `adjudicate.json`, `match-report.md` | — (it reports)                                               |
| `3_build.ts`        | `ledger.json`, `matches.json`, `overrides.json` | `financials.json`, `build-report.md`                 | any block, or any money-over-time series, does not reconcile |

## How the ledger is read

Each block in a year tab ends in an H cell holding `=SUM(Ex:Ey)-SUM(Fx:Fy)`; that
range is the block. Column D describes, E is money in, F is money out, G is an
approximate date and H a note. The summary tables off to the right of R24–R26
(L hammer, M received, N "Ganho Real", O name) are extracted too, with the ledger
cells their formulas reference.

`_ledger.ts` splits every row into its E and F parts and classifies each (sale,
refund, purchase, service, strap, box, shipping, fees), then groups them into sold
watches:

- **Single-watch block:** one payout, every cost in the block is its cost.
- **Lot:** each named purchase row is a watch. A payout attaches to the watch its row
  names; a payout naming none comes from the block's lump purchase ("5x Novart
  Povoa"). Lines naming a watch go to it. Everything else is split evenly over
  every watch in the lot, unsold ones included, as the summary tables do (€130 a
  watch). The unsold watches' share is counted as stock.
- **No payout:** stock (a named watch not sold yet), overhead (boxes, straps in
  stock, batteries), or void (cancelled orders, refunded purchases).

Every euro lands in a watch, stock or overhead, and step 3 checks each block
against its own total. The whole ledger's total equals the Balanço on the Resumo tab.

## How sales are matched

There is no shared key: the ledger has no lot ids, and its dates are approximate
(lot rows carry the purchase date). Each catalogue sale is scored against each
sold watch on:

- **price, 45%.** Does the payout fit the hammer under Catawiki's fee arithmetic, to
  the cent? The payout is hammer − 12.5% commission − 23% VAT on it + whole-euro
  buyer shipping. Since mid-2024 a fixed fee plus VAT also comes off: €2–3 under
  €500, €5 under €1,000, €10 above.
- **text, 40%.** Words shared with the model, weighted by rarity. A shared reference
  or calibre number ("516", "CK1111") counts most.
- **date, 15%.** Paid out 3–35 days after the auction. Only used for rows whose date
  really is a payout date.
- **summary tables.** A bonus when a summary row names the model and carries its
  exact hammer.

A pair is accepted automatically only when each side is the other's clear best
choice. Statuses, strongest first:

- `user`: decided on the review page.
- `claude`: decided by Claude, with a written reason.
- `ledger-link`: a summary row points at the entry with this exact hammer.
- `high`: automatic.
- `ambiguous` or `unmatched`: waiting for a decision.
- `no-ledger`: confirmed to have no ledger entry.
- `stale-override`: an override whose ledger row has gone.

To have Claude work the queue, ask it to "resolve the sales review queue". It reads
`adjudicate.json`, which holds each open sale's top candidates and their full ledger
rows, and writes `by: "claude"` decisions to `overrides.json`. You then confirm or
change them on the review page.

## overrides.json

Plain JSON; the comments below are only there to explain it.

```jsonc
{
  "version": 1,
  "matches": {
    // keyed by modelFile; unit null = "no ledger entry"
    "Omega/Omega_Seamaster_Cal_267_1956": {
      "unit": "R24|omega seamaster vintage 50s|515.60|200.00",
      "by": "user",
      "at": "2026-09-28T22:00:00Z",
    },
    // one payout shared by two models, split by hammer
    "Calypso/Calypso_OS10_Chrono_2001": {
      "unit": "R 17-23|pagamento catawiki emes calypso|224.70|",
      "by": "claude",
      "reason": "One payout for Emes + Calypso",
      "share": 0.55,
      "at": "2026-09-28T22:00:00Z",
    },
  },
  // optional, keyed by a row fingerprint plus the side (:E or :F):
  // reclassify that side (sale, refund, ignore, or a cost category)…
  "rowTypes": { "<sheet>|<row text>|<received>|<spent>:E": "refund" },
  // …or hand that line to a sold watch, by its unit key
  "attributions": { "<sheet>|<row text>|<received>|<spent>:F": "<unit key>" },
}
```

A unit key is a row fingerprint, `sheet|text|received|spent`, with `#n` added when
two rows are identical. It leaves out row numbers and dates, so inserting rows or
fixing a date in the workbook does not break decisions. If a row's text or
amounts change, the report lists the override as stale and that sale falls back to
automatic matching.

## Watches kept and money over time

**The Collection tab** (`_collection.ts`) is read like a year tab, into its own
`collection` key of `ledger.json`, never into `blocks`, so a kept watch is never
taken for stock or its money for the year tabs'. Rows split into parts exactly as
there (`rowTypes` overrides apply), then:

- a named purchase row is a kept watch; so is a named row bought and cancelled
  (E = F, re-bought on a later row) and a named row with no money but a price
  noted beside it (`"350"`, kept as `noteNumber`);
- a named "purchase" under 15% of the block's first one is an extra on it
  ("Riders tabs"); a trade-in row ("Retoma", "troca") is part of the first
  watch's cost and is flagged `trade-in`; an unnamed cost in a block whose watch
  has no purchase left is that purchase (the re-buy after a cancelled order);
- everything else goes to the watch it names, else is split evenly. Each block
  must add up to its own total.

**Stock items.** `_ledger.ts` groups the stock it already counts into items: one
per named watch not sold yet (`…:stock`) and one per lot's unsold share
(`…:rest`, "Omega Polaris 8 Watches"). They are a view: `stock` itself is
unchanged, and each block's items must add up to its stock.

**Kept ↔ catalogue and ↔ stock** (`_kept.ts`, in step 2). Each kept watch is
matched to a catalogue model with no sale report, on words alone, rarity counted
over the whole catalogue; a clear, mutual best is accepted (`high`). A kept watch
whose money is not in the Collection tab (`no-cost`, `no-purchase`) is proposed a
link to the stock item holding it; once linked, that item's money counts as kept,
from the same days, and leaves "bought to sell". A lot share covering N unsold
watches gives min(1, kept/N) of itself, split evenly. A watch kept out of a
year-tab block whose other watches sold (the Polaris lot, the Cuervo Habana)
costs **effectively** what that block has not earned back: nothing, once the
others' sales covered the whole block. Its own Collection-tab money (a later
strap) still counts. A kept watch with its own purchase that reads like a stock
item is flagged `possible-double-count`; "No link" on the review page clears it.

Decisions live in `overrides.json` as `keptModels` and `keptLinks` (keyed by kept
key, `Collection|text|received|spent`), set on the review page's **Watches kept**
section or written by Claude with a reason. "Not in the catalogue" stays decided
until a model no other kept watch is clearly matches it (it was added to the
catalogue since): then the watch comes back for review.

**Day by day.** `financials.json` `daily` holds, per date: payouts (`received`),
year-tab spending net of refunds (`spent`), Collection spending
(`collectionSpent`), and the change in capital at cost held as stock
(`stockDelta`) and as kept watches (`keptDelta`). A sold watch holds its costs
from the day each was paid until it sold (the payout day when the ledger's date is
one, else the catalogue's auction day); a line paid after the sale counts on the
sale day. Future dates count on the build day and are listed in `build-report.md`.
Step 3 refuses to write unless:

- received − spent − collectionSpent = the year tabs' total + the Collection's;
- the stock series ends at the stock still for sale, and the kept series at the
  Collection's cost plus the stock linked to it.

## Reading the figures

- **Profit** = received + refunds − costs.
- **Margin** = profit ÷ received, the summary tables' own definition. Over a group it
  is Σprofit ÷ Σreceived, not an average of ratios.
- **Return on cost** = profit ÷ cost.
- **Days held** = purchase date → auction date.
- A watch with no purchase line in its block (`no-purchase`), or with costs netting
  negative, stays out of margin rankings. Brands need 3 sales with a P&L to rank.
- `build-report.md` lists where a computed profit differs from the summary tables'
  "Ganho Real". It is usually a strap or repair the summary's formula skipped.
