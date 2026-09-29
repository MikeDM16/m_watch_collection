"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { BrandProfitRow, formatMoney, formatPercent, MIN_BRAND_SALES } from "../salesStats";
import { AdminTable, Th } from "./primitives";

type SortKey = "profit" | "margin" | "roi" | "covered" | "meanDaysHeld";

const COLUMNS: { key: SortKey; label: string; ascending?: boolean }[] = [
  { key: "covered", label: "Sales" },
  { key: "profit", label: "Profit" },
  { key: "margin", label: "Margin" },
  { key: "roi", label: "Return" },
  // Fewer days held is better, so this one sorts shortest first.
  { key: "meanDaysHeld", label: "Avg days", ascending: true },
];

/**
 * Brands ranked by what they earned. The bar beside each profit is scaled to
 * the top row, so the ranking reads at a glance; the numbers carry the rest.
 * Margins over one or two sales are noise, so by default only brands with at
 * least MIN_BRAND_SALES sales with a P&L are listed.
 */
export function BrandProfitTable({ rows }: { rows: BrandProfitRow[] }) {
  const [sort, setSort] = useState<SortKey>("profit");
  const [enoughOnly, setEnoughOnly] = useState(true);

  const shown = useMemo(() => {
    const col = COLUMNS.find((c) => c.key === sort)!;
    const base = enoughOnly ? rows.filter((r) => r.covered >= MIN_BRAND_SALES) : rows;
    // Missing values (no cost, no dates) always sink to the bottom.
    const value = (r: BrandProfitRow) => r[sort] ?? (col.ascending ? Infinity : -Infinity);
    return [...base].sort((a, b) => (col.ascending ? value(a) - value(b) : value(b) - value(a)));
  }, [rows, sort, enoughOnly]);

  const scale = Math.max(1, ...shown.map((r) => Math.abs(r.profit)));
  const hidden = rows.length - rows.filter((r) => r.covered >= MIN_BRAND_SALES).length;

  return (
    <div>
      <label className="mb-3 flex w-fit cursor-pointer items-center gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={enoughOnly}
          onChange={(e) => setEnoughOnly(e.target.checked)}
          className="accent-[hsl(var(--brand))]"
        />
        Only brands with {MIN_BRAND_SALES}+ sales
        {enoughOnly && hidden > 0 ? ` (${hidden} hidden)` : ""}
      </label>
      <AdminTable>
        <thead>
          <tr className="border-b border-border">
            <Th>Brand</Th>
            {COLUMNS.map((c) => (
              <th
                key={c.key}
                className="lab py-2 pr-4 text-left font-medium"
                aria-sort={sort === c.key ? (c.ascending ? "ascending" : "descending") : "none"}
              >
                <button
                  type="button"
                  onClick={() => setSort(c.key)}
                  className={`uppercase transition-colors hover:text-foreground ${sort === c.key ? "text-foreground" : ""}`}
                >
                  {c.label}
                  {sort === c.key ? (c.ascending ? " ↑" : " ↓") : ""}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shown.map((r) => (
            <tr key={r.brand} className="border-b border-border/60">
              <td className="py-2 pr-4 font-medium">
                <Link
                  href={`/collection/${encodeURIComponent(r.brand)}`}
                  className="underline-offset-4 transition-colors hover:text-brand hover:underline"
                >
                  {r.brand}
                </Link>
              </td>
              <td className="num py-2 pr-4">
                {r.covered}
                {r.covered < r.count && <span className="text-muted-foreground">/{r.count}</span>}
              </td>
              <td className="py-2 pr-4">
                <div className="flex items-center gap-3">
                  <span className="num w-16 shrink-0 text-right">{formatMoney(r.profit)}</span>
                  <span className="hidden h-1.5 w-32 sm:block" aria-hidden>
                    <span
                      className="block h-full rounded-r"
                      style={{
                        width: `${(Math.abs(r.profit) / scale) * 100}%`,
                        background:
                          r.profit < 0 ? "hsl(var(--muted-foreground))" : "hsl(var(--chart-1))",
                      }}
                    />
                  </span>
                </div>
              </td>
              <td className="num py-2 pr-4">{formatPercent(r.margin)}</td>
              <td className="num py-2 pr-4">{formatPercent(r.roi)}</td>
              <td className="num py-2 pr-4">
                {r.meanDaysHeld === null ? "—" : Math.round(r.meanDaysHeld)}
              </td>
            </tr>
          ))}
        </tbody>
      </AdminTable>
    </div>
  );
}
