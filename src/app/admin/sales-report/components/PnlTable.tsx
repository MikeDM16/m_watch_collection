"use client";

import { Fragment, useMemo, useState } from "react";

import type { Confidence, CostCategory } from "../salesData.types";
import { Flip, formatMoney, formatPercent, netCostOf, parseSaleDate } from "../salesStats";
import { AdminTable, Th, WatchLink } from "./primitives";

type SortKey = "date" | "received" | "cost" | "profit" | "margin" | "days";

const COLUMNS: { key: SortKey; label: string }[] = [
  { key: "date", label: "Sold" },
  { key: "received", label: "Received" },
  { key: "cost", label: "Cost" },
  { key: "profit", label: "Profit" },
  { key: "margin", label: "Margin" },
  { key: "days", label: "Days" },
];

const SORTERS: Record<SortKey, (x: Flip) => number> = {
  date: (x) => parseSaleDate(x.entry.saleReport!.date).getTime(),
  received: (x) => x.f.received,
  cost: (x) => netCostOf(x.f),
  profit: (x) => x.f.profit,
  margin: (x) => x.f.margin ?? -Infinity,
  days: (x) => x.f.daysHeld ?? -Infinity,
};

export const CONFIDENCE_LABEL: Record<Confidence, string> = {
  user: "You",
  claude: "Claude",
  "ledger-link": "Ledger",
  high: "Auto",
};

const CATEGORY_LABEL: Record<CostCategory, string> = {
  purchase: "Purchase",
  service: "Service",
  strap: "Strap",
  shipping: "Shipping",
  box: "Box & papers",
  fees: "Fees",
  other: "Other",
};

/** What a flag means, in words. Unknown flags show as they are. */
export const FLAG_LABEL: Record<string, string> = {
  "no-purchase": "no purchase line: margin overstated",
  "lot-share": "cost is a share of a lot",
  "shared-payout": "payout shared with another model",
  "paired-by-order": "paired to its purchase by row order",
  "attached-among-equals": "one of several equal-priced purchases",
  "bought-after-auction": "purchase dated after the auction",
  "negative-cost": "costs net negative",
};

const PAGE = 25;

export function PnlTable({ rows }: { rows: Flip[] }) {
  const [sort, setSort] = useState<SortKey>("date");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [all, setAll] = useState(false);

  const sorted = useMemo(() => {
    const q = query.trim().toLowerCase();
    const hit = (x: Flip) =>
      !q || `${x.entry.legend} ${x.entry.brand} ${x.f.label}`.toLowerCase().includes(q);
    const by = SORTERS[sort];
    return rows.filter(hit).sort((a, b) => by(b) - by(a));
  }, [rows, sort, query]);
  const visible = all ? sorted : sorted.slice(0, PAGE);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter by watch, brand or ledger name…"
        className="mb-3 h-9 w-full max-w-sm rounded-md border border-input bg-transparent px-3 text-sm outline-none focus:ring-1 focus:ring-ring"
      />
      <AdminTable>
        <thead>
          <tr className="border-b border-border">
            <Th>Watch</Th>
            {COLUMNS.map((c) => (
              <th
                key={c.key}
                className="lab py-2 pr-4 text-left font-medium"
                aria-sort={sort === c.key ? "descending" : "none"}
              >
                <button
                  type="button"
                  onClick={() => setSort(c.key)}
                  className={`uppercase transition-colors hover:text-foreground ${sort === c.key ? "text-foreground" : ""}`}
                >
                  {c.label}
                  {sort === c.key ? " ↓" : ""}
                </button>
              </th>
            ))}
            <Th>Match</Th>
          </tr>
        </thead>
        <tbody>
          {visible.map(({ entry, f }) => {
            const isOpen = open === entry.modelFile;
            return (
              <Fragment key={entry.modelFile}>
                <tr className="border-b border-border/60 align-top">
                  <td className="py-2 pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : entry.modelFile)}
                      aria-expanded={isOpen}
                      aria-label={`${isOpen ? "Hide" : "Show"} costs for ${entry.legend}`}
                      className="mr-2 w-4 text-muted-foreground hover:text-foreground"
                    >
                      {isOpen ? "▾" : "▸"}
                    </button>
                    <WatchLink entry={entry} />
                    {f.flags.includes("no-purchase") && (
                      <span
                        className="ml-2 text-xs text-muted-foreground"
                        title={FLAG_LABEL["no-purchase"]}
                      >
                        no purchase
                      </span>
                    )}
                  </td>
                  <td className="num whitespace-nowrap py-2 pr-4">{entry.saleReport!.date}</td>
                  <td className="num py-2 pr-4">{formatMoney(f.received)}</td>
                  <td className="num py-2 pr-4">{formatMoney(netCostOf(f))}</td>
                  <td
                    className={`num py-2 pr-4 font-medium ${f.profit < 0 ? "text-muted-foreground" : ""}`}
                  >
                    {formatMoney(f.profit)}
                  </td>
                  <td className="num py-2 pr-4">{formatPercent(f.margin)}</td>
                  <td className="num py-2 pr-4">{f.daysHeld ?? "—"}</td>
                  <td className="py-2 pr-4">
                    <span className="lab rounded-sm border border-border px-1.5 py-0.5">
                      {CONFIDENCE_LABEL[f.confidence]}
                    </span>
                  </td>
                </tr>
                {isOpen && (
                  <tr className="border-b border-border/60 bg-muted/30">
                    <td colSpan={COLUMNS.length + 2} className="px-6 py-3 text-xs">
                      <CostBreakdown f={f} />
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </AdminTable>
      {sorted.length > PAGE && (
        <button
          type="button"
          onClick={() => setAll(!all)}
          className="mt-3 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          {all ? `Show the first ${PAGE}` : `Show all ${sorted.length}`}
        </button>
      )}
    </div>
  );
}

function CostBreakdown({ f }: { f: Flip["f"] }) {
  return (
    <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <table className="w-full border-collapse">
        <tbody>
          {f.costLines.map((l) => (
            <tr key={`${l.ref}-${l.label}`} className="border-b border-border/40">
              <td className="py-1 pr-3 text-muted-foreground">{CATEGORY_LABEL[l.category]}</td>
              <td className="py-1 pr-3">
                {l.label}
                {l.share < 1 && (
                  <span className="text-muted-foreground">
                    {" "}
                    · {Math.round(l.share * 100)}% share
                  </span>
                )}
              </td>
              <td className="num py-1 pr-3 text-right">{formatMoney(l.amount)}</td>
              <td className="num py-1 text-muted-foreground">{l.ref}</td>
            </tr>
          ))}
          {f.refunds !== 0 && (
            <tr className="border-b border-border/40">
              <td className="py-1 pr-3 text-muted-foreground">Refunds</td>
              <td className="py-1 pr-3">Money back on costs</td>
              <td className="num py-1 pr-3 text-right">−{formatMoney(f.refunds)}</td>
              <td />
            </tr>
          )}
        </tbody>
      </table>
      <div className="space-y-1 text-muted-foreground">
        <div>
          Ledger: <span className="text-foreground">{f.label}</span> · {f.block.ref}
          {f.block.kind === "lot" && ` · lot of ${f.block.units}`}
        </div>
        <div>
          Hammer {formatMoney(f.gross)} → received {formatMoney(f.received)}
          {f.purchaseDate && ` · bought ${f.purchaseDate}`}
        </div>
        {f.userGain !== null && (
          <div>Ledger summary&apos;s own gain: {formatMoney(f.userGain)}</div>
        )}
        {f.flags.map((flag) => (
          <div key={flag}>⚑ {FLAG_LABEL[flag] ?? flag}</div>
        ))}
        {f.evidence.slice(0, 4).map((e) => (
          <div key={e}>· {e}</div>
        ))}
      </div>
    </div>
  );
}
