# Sales margin pipeline

Links every catalogue sale (`saleReport`: the gross hammer price and auction date)
to its section of the private sales ledger, `scripts/Relogios - Vendas.xlsx`, and
computes what each watch really earned: net payout, purchase and extras by
category, profit, margin, return on cost and days held. The local sales report
(`/admin/sales-report`, dev only) shows the result, and `/admin/sales-report/review`
is where matches are confirmed or corrected.

## Privacy

- The workbook and everything derived from it are gitignored: `/scripts/*.xlsx` and
  `/.sales/`. The workbook also holds bank balances and investments, but only its
  four year tabs (`R 17-23`, `R24`, `R25`, `R26`) are ever read.
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
| `3_build.ts`        | `ledger.json`, `matches.json`, `overrides.json` | `financials.json`, `build-report.md`                 | any block does not reconcile                                 |

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
