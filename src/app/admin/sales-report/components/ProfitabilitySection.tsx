"use client";

import { CollectionIndexEntry } from "@/app/data/collectionIndex";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";

import {
  brandProfitability,
  bucketProfitOverTime,
  Financials,
  Flip,
  flips,
  formatMoney,
  formatPercent,
  profitTotals,
  TimeWindowOption,
  withFinancials,
} from "../salesStats";
import { BrandProfitTable } from "./BrandProfitTable";
import { PnlTable } from "./PnlTable";
import { SectionHeader, StatTile, WatchLink } from "./primitives";
import { ProfitOverTimeChart } from "./ProfitOverTimeChart";

function SubHeader({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-3 mt-10 flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="font-display text-lg font-medium">{title}</h3>
      {note && <p className="text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

function FlipList({
  title,
  rows,
  value,
}: {
  title: string;
  rows: Flip[];
  value: (x: Flip) => string;
}) {
  return (
    <div className="border-b border-r border-border p-5">
      <div className="lab">{title}</div>
      <ol className="mt-3 space-y-2 text-sm">
        {rows.map((x) => (
          <li key={x.entry.modelFile} className="flex items-baseline justify-between gap-3">
            <span className="min-w-0 truncate">
              <WatchLink entry={x.entry} />
            </span>
            <span className="num shrink-0 font-medium">{value(x)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Real profit per sale, from the private sales ledger (scripts/sales). The
 * window selector above applies here too, by auction date.
 */
export function ProfitabilitySection({
  entries,
  fin,
  opt,
  stale,
}: {
  entries: CollectionIndexEntry[];
  fin: Financials;
  opt: TimeWindowOption;
  stale: boolean;
}) {
  const totals = useMemo(() => profitTotals(entries, fin), [entries, fin]);
  const buckets = useMemo(() => bucketProfitOverTime(entries, fin, opt), [entries, fin, opt]);
  const brands = useMemo(() => brandProfitability(entries, fin), [entries, fin]);
  const best = useMemo(() => flips(entries, fin), [entries, fin]);
  const rows = useMemo(() => withFinancials(entries, fin), [entries, fin]);

  const coverage = totals.count ? Math.round((totals.covered / totals.count) * 100) : 0;

  return (
    <>
      <SectionHeader title="Profitability" />
      <p className="mb-4 text-sm text-muted-foreground">
        Profit data for <span className="num text-foreground">{totals.covered}</span> of{" "}
        <span className="num">{totals.count}</span> sales in this window ({coverage}%): net payouts
        and costs from the sales ledger, not hammer prices.
      </p>
      {stale && (
        <p className="mb-4 border border-brand/40 bg-brand/5 px-4 py-3 text-sm">
          The ledger workbook changed after the last sync, so these figures may be out of date. Run{" "}
          <code className="font-mono">npm run sales:sync</code>, or Re-sync on the review page.
        </p>
      )}

      {totals.covered === 0 ? (
        <div className="border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
          No sales with profit data in this window.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-3 lg:grid-cols-6">
            <StatTile label="Net received" value={formatMoney(totals.received)} />
            <StatTile
              label="Cost"
              value={formatMoney(totals.cost)}
              sub="purchase, service, straps, shipping"
            />
            <StatTile label="Profit" value={formatMoney(totals.profit)} />
            <StatTile label="Margin" value={formatPercent(totals.margin)} sub="profit ÷ received" />
            <StatTile
              label="Return on cost"
              value={formatPercent(totals.roi)}
              sub="profit ÷ cost"
            />
            <StatTile
              label="Median days held"
              value={
                totals.medianDaysHeld === null ? "—" : String(Math.round(totals.medianDaysHeld))
              }
              sub="purchase → auction"
            />
          </div>

          <SubHeader title="Profit over time" />
          <Card>
            <CardHeader className="pb-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Each bar is the period&apos;s payouts: what the watches cost, and the profit left
                over
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ProfitOverTimeChart data={buckets} />
            </CardContent>
          </Card>

          <SubHeader title="Brand profitability" note="Click a column to rank by it." />
          <BrandProfitTable rows={brands} />

          <SubHeader title="Best & worst sales" />
          <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-3">
            <FlipList
              title="Most profit"
              rows={best.byProfit}
              value={(x) => formatMoney(x.f.profit)}
            />
            <FlipList
              title="Best margin"
              rows={best.byMargin}
              value={(x) => formatPercent(x.f.margin)}
            />
            <FlipList
              title="Least profit"
              rows={best.worst}
              value={(x) => formatMoney(x.f.profit)}
            />
          </div>

          <SubHeader
            title="Every sale"
            note="Open a row for its cost lines and how it was matched."
          />
          <PnlTable rows={rows} />
        </>
      )}
    </>
  );
}
