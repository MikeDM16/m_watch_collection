"use client";

import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useMemo } from "react";

import type { MarketView, ValuationRow } from "../../ledger/valuation";
import { formatMoney, formatPercent } from "../salesStats";
import { MarketValueChart } from "./MarketValueChart";
import { AdminTable, SectionHeader, StatTile, SubHeader } from "./primitives";
import { sortRows, SortTh, useSort, type SortDir } from "./sortable";

/** An export older than this is flagged as due for a refresh. */
const STALE_DAYS = 45;

/** "2024-02-14" → "14/02/2024", the catalogue's own order. */
const dmy = (iso: string | null): string => (iso ? iso.split("-").reverse().join("/") : "—");

const signed = (n: number) => (n > 0 ? "+" : "") + formatMoney(n);

type Key = "watch" | "bought" | "cost" | "value" | "gain" | "pct" | "basis";

const COLUMNS: { key: Key; label: string; firstDir?: SortDir }[] = [
  { key: "watch", label: "Watch", firstDir: "asc" },
  { key: "bought", label: "Bought" },
  { key: "cost", label: "Cost" },
  { key: "value", label: "Market value" },
  { key: "gain", label: "Gain" },
  { key: "pct", label: "Gain %" },
  { key: "basis", label: "Valued at", firstDir: "asc" },
];

const nameOf = (r: ValuationRow) => r.model?.legend ?? r.label;

function sortValue(key: Key): (r: ValuationRow) => number | string | null {
  switch (key) {
    case "watch":
      return nameOf;
    case "bought":
      return (r) => r.acquired;
    case "cost":
      return (r) => r.cost;
    case "value":
      return (r) => r.value;
    case "gain":
      return (r) => r.gain;
    case "pct":
      return (r) => r.gainPct;
    case "basis":
      return (r) => r.basis;
  }
}

/** The watch's name, linked to its catalogue page, and what Chrono24 calls it. */
function WatchCell({ r }: { r: ValuationRow }) {
  const name = r.model ? (
    <Link
      href={routeToCollectionBrandModelPage(r.model.brand, r.model.legend)}
      className="underline-offset-4 transition-colors hover:text-brand hover:underline"
    >
      {r.model.legend}
    </Link>
  ) : (
    r.label
  );
  return (
    <>
      <div>{name}</div>
      {r.item && (
        <a
          href={r.item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
        >
          Chrono24: {r.item.title}
          {r.item.reference ? ` · ${r.item.reference}` : ""} ↗
        </a>
      )}
    </>
  );
}

function ValuationTable({ rows: unsorted, total }: { rows: ValuationRow[]; total: boolean }) {
  const [sort, toggleSort] = useSort<Key>({ key: "value", dir: "desc" });
  const rows = useMemo(() => sortRows(unsorted, sortValue(sort.key), sort.dir), [unsorted, sort]);
  const sum = (f: (r: ValuationRow) => number) => rows.reduce((s, r) => s + f(r), 0);
  const tracked = rows.filter((r) => r.gain !== null);
  const gain = tracked.reduce((s, r) => s + (r.gain ?? 0), 0);
  const trackedCost = tracked.reduce((s, r) => s + r.cost, 0);
  return (
    <AdminTable>
      <thead>
        <tr className="border-b border-border">
          {COLUMNS.map((c) => (
            <SortTh
              key={c.key}
              k={c.key}
              label={c.label}
              sort={sort}
              onSort={toggleSort}
              firstDir={c.firstDir}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.watchId} className="border-b border-border/60 align-top">
            <td className="py-2 pr-4">
              <WatchCell r={r} />
            </td>
            <td className="num whitespace-nowrap py-2 pr-4">{dmy(r.acquired)}</td>
            <td className="num py-2 pr-4">{formatMoney(r.cost)}</td>
            <td
              className="num py-2 pr-4 font-medium"
              title={
                r.item?.valueRange
                  ? `Chrono24 range ${formatMoney(r.item.valueRange.min)} – ${formatMoney(r.item.valueRange.max)}`
                  : undefined
              }
            >
              {formatMoney(r.value)}
            </td>
            <td className="num py-2 pr-4">{r.gain === null ? "—" : signed(r.gain)}</td>
            <td className="num py-2 pr-4 text-muted-foreground">
              {r.gainPct === null ? "—" : formatPercent(r.gainPct / 100)}
            </td>
            <td className="py-2 pr-4 text-xs text-muted-foreground">
              {r.basis === "chrono24" ? "Chrono24" : "cost"}
            </td>
          </tr>
        ))}
      </tbody>
      {total && (
        <tfoot>
          <tr>
            <td className="py-2 pr-4 font-medium" colSpan={2}>
              {rows.length} watches
            </td>
            <td className="num py-2 pr-4 font-medium">{formatMoney(sum((r) => r.cost))}</td>
            <td className="num py-2 pr-4 font-medium">{formatMoney(sum((r) => r.value))}</td>
            <td className="num py-2 pr-4 font-medium">{signed(gain)}</td>
            <td className="num py-2 pr-4 text-muted-foreground">
              {trackedCost > 0 ? formatPercent(gain / trackedCost) : "—"}
            </td>
            <td className="py-2 pr-4 text-xs text-muted-foreground">
              gain on the {tracked.length} on Chrono24
            </td>
          </tr>
        </tfoot>
      )}
    </AdminTable>
  );
}

/**
 * What the kept watches are worth: Chrono24's estimate for those it tracks,
 * cost for the rest, against what they cost. Always from the back-office
 * ledger and the market store, whichever figures the report shows, and always
 * as of the last Chrono24 export, whatever the window.
 */
export function MarketSection({ data }: { data: MarketView }) {
  const { totals, asOf } = data;
  const untracked = totals.count - totals.tracked;
  const age = data.asOfDays;

  return (
    <>
      <SectionHeader title="Market value" />
      <p className="mb-4 text-sm text-muted-foreground">
        What the {totals.count} kept watches are worth: Chrono24&apos;s estimate for the{" "}
        {totals.tracked} it tracks, cost for the other {untracked}. Kept watches and their cost come
        from the back-office ledger, whichever figures the report shows. As of the last Chrono24
        export, {dmy(asOf)}, whatever the window.
      </p>
      {age !== null && age > STALE_DAYS && (
        <p className="mb-4 border border-brand/40 bg-brand/5 px-4 py-3 text-sm">
          The last Chrono24 export is {age} days old. Click the export bookmark on chrono24.pt, then
          run <code className="font-mono">npm run chrono24:sync</code>.
        </p>
      )}

      <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
        <StatTile
          label="Estimated value"
          value={formatMoney(totals.value)}
          sub={`${totals.tracked} on Chrono24 · ${untracked} at cost`}
        />
        <StatTile
          label="At cost"
          value={formatMoney(totals.cost)}
          sub={`${totals.count} kept watches, extras included`}
        />
        <StatTile
          label="Unrealized gain"
          value={signed(totals.gain)}
          sub={`${totals.gainPct === null ? "—" : formatPercent(totals.gainPct / 100)} over cost, on the ${totals.tracked} Chrono24 values`}
        />
        <StatTile
          label="Chrono24 total"
          value={data.c24Total === null ? "—" : formatMoney(data.c24Total)}
          sub={
            data.c24Range
              ? `its whole collection, stock included · range ${formatMoney(data.c24Range.min)} – ${formatMoney(data.c24Range.max)}`
              : "its whole collection, stock included"
          }
        />
      </div>

      <SubHeader
        title="Value against cost"
        note="Month by month since the first kept watch was bought."
      />
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            The watches kept at each month&apos;s end: Chrono24&apos;s value (cost where it does not
            track one) and what they cost
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <MarketValueChart data={data.series} />
        </CardContent>
      </Card>

      <SubHeader
        title="Watch by watch"
        note="Hover a market value for Chrono24's range. Click a column to sort, again to reverse."
      />
      <ValuationTable rows={data.rows} total />

      {data.stock.length > 0 && (
        <>
          <SubHeader
            title="Bought to sell, on Chrono24"
            note="Stock Chrono24 also values; not in the figures above."
          />
          <ValuationTable rows={data.stock} total={false} />
        </>
      )}

      {data.unlinked.length > 0 && (
        <p className="mt-4 text-xs text-muted-foreground">
          On Chrono24 but linked to no ledger watch: {data.unlinked.join(", ")}. See{" "}
          <code className="font-mono">.chrono24/match-report.md</code>.
        </p>
      )}
    </>
  );
}
