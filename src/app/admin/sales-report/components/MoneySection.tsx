"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fragment, useMemo } from "react";

import {
  capitalOverTime,
  daysSince,
  extrasOf,
  formatHeld,
  forSaleNet,
  keptNotes,
  moneyOverTime,
  moneyTotals,
  yearMoneyRows,
} from "../collectionStats";
import type { KeptWatchFinancials, SalesFinancials, StockItemFinancials } from "../salesData.types";
import { formatMoney, type TimeWindowOption } from "../salesStats";
import { CapitalAtCostChart, type CapitalSeries } from "./CapitalAtCostChart";
import { MoneyOverTimeChart } from "./MoneyOverTimeChart";
import { AdminTable, SectionHeader, StatTile, SubHeader, Th } from "./primitives";
import { sortRows, SortTh, useSort, type SortDir } from "./sortable";

// Kept at the bottom of the stack (the steady part), bought-to-sell above it.
// The brand red and the cost blue: the pair validated for the profit chart.
const CAPITAL_SERIES: CapitalSeries[] = [
  { key: "kept", label: "Kept", light: "#c50d2e", dark: "#e74b68" },
  { key: "stock", label: "Bought to sell", light: "#2a78d6", dark: "#3987e5" },
];

/** "2024-02-14" → "14/02/2024", the catalogue's own order. */
const dmy = (iso: string | null): string => (iso ? iso.split("-").reverse().join("/") : "—");

/** The columns both holding tables sort by; Held runs opposite to Bought. */
type HoldingKey = "watch" | "bought" | "held" | "purchase" | "extras" | "cost" | "ledger";

const HOLDING_COLUMNS: { key: HoldingKey; label: string; firstDir?: SortDir }[] = [
  { key: "watch", label: "Watch", firstDir: "asc" },
  { key: "bought", label: "Bought" },
  { key: "held", label: "Held" },
  { key: "purchase", label: "Purchase" },
  { key: "extras", label: "Extras" },
  { key: "cost", label: "At cost" },
  { key: "ledger", label: "Ledger", firstDir: "asc" },
];

type Holding = StockItemFinancials | KeptWatchFinancials;

/** What a holding sorts by in a column, given its name and its capital at cost. */
function holdingValue<T extends Holding>(
  key: HoldingKey,
  name: (x: T) => string,
  atCost: (x: T) => number,
): (x: T) => number | string | null {
  switch (key) {
    case "watch":
      return name;
    case "bought":
      return (x) => x.purchaseDate;
    case "held":
      return (x) => daysSince(x.purchaseDate);
    case "purchase":
      return (x) => x.costByCategory.purchase ?? 0;
    case "extras":
      return (x) => extrasOf(x);
    case "cost":
      return atCost;
    case "ledger":
      return (x) => x.ref;
  }
}

function HoldingHeads({
  sort,
  onSort,
  notes = false,
}: {
  sort: { key: HoldingKey; dir: SortDir };
  onSort: (key: HoldingKey, firstDir: SortDir) => void;
  /** The kept table's Notes column, unsorted, before Ledger. */
  notes?: boolean;
}) {
  return (
    <tr className="border-b border-border">
      {HOLDING_COLUMNS.map((c) => (
        <Fragment key={c.key}>
          {notes && c.key === "ledger" && <Th>Notes</Th>}
          <SortTh k={c.key} label={c.label} sort={sort} onSort={onSort} firstDir={c.firstDir} />
        </Fragment>
      ))}
    </tr>
  );
}

const keptLabel = (k: KeptWatchFinancials) => k.label;
const stockLabel = (i: StockItemFinancials) => i.label;

function KeptTable({
  watches: unsorted,
  link,
  name = keptLabel,
}: {
  watches: KeptWatchFinancials[];
  link?: (k: KeptWatchFinancials) => React.ReactNode;
  /** The name shown for it, so Watch sorts by what is read. */
  name?: (k: KeptWatchFinancials) => string;
}) {
  const [sort, toggleSort] = useSort<HoldingKey>({ key: "bought", dir: "desc" });
  const watches = useMemo(
    () =>
      sortRows(
        unsorted,
        holdingValue(sort.key, name, (k) => k.net),
        sort.dir,
      ),
    [unsorted, sort, name],
  );
  const total = watches.reduce((s, k) => s + k.net, 0);
  const effective = watches.reduce((s, k) => s + k.effective, 0);
  return (
    <AdminTable>
      <thead>
        <HoldingHeads sort={sort} onSort={toggleSort} notes />
      </thead>
      <tbody>
        {watches.map((k) => {
          const notes = keptNotes(k);
          return (
            <tr key={k.key} className="border-b border-border/60 align-top">
              <td className="py-2 pr-4">{link?.(k) ?? k.label}</td>
              <td className="num whitespace-nowrap py-2 pr-4">{dmy(k.purchaseDate)}</td>
              <td className="num whitespace-nowrap py-2 pr-4">
                {formatHeld(daysSince(k.purchaseDate))}
              </td>
              <td className="num py-2 pr-4">{formatMoney(k.costByCategory.purchase ?? 0)}</td>
              <td className="num py-2 pr-4 text-muted-foreground">
                {extrasOf(k) ? formatMoney(extrasOf(k)) : "—"}
              </td>
              <td className="num py-2 pr-4 font-medium">{formatMoney(k.net)}</td>
              <td className="py-2 pr-4 text-xs text-muted-foreground">
                {notes.length ? notes.join(" · ") : ""}
              </td>
              <td className="num py-2 pr-4 text-xs text-muted-foreground">{k.ref}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td className="py-2 pr-4 font-medium" colSpan={5}>
            {watches.length} watches
          </td>
          <td className="num py-2 pr-4 font-medium">{formatMoney(total)}</td>
          <td className="py-2 pr-4 text-xs text-muted-foreground" colSpan={2}>
            {Math.abs(effective - total) >= 1 && `effectively ${formatMoney(effective)}`}
          </td>
        </tr>
      </tfoot>
    </AdminTable>
  );
}

/** Bought to sell and not sold yet; an item a kept watch claims in part shows the rest. */
function StockTable({ items: unsorted }: { items: StockItemFinancials[] }) {
  const [sort, toggleSort] = useSort<HoldingKey>({ key: "bought", dir: "desc" });
  const items = useMemo(
    () => sortRows(unsorted, holdingValue(sort.key, stockLabel, forSaleNet), sort.dir),
    [unsorted, sort],
  );
  const total = items.reduce((s, i) => s + forSaleNet(i), 0);
  return (
    <AdminTable>
      <thead>
        <HoldingHeads sort={sort} onSort={toggleSort} />
      </thead>
      <tbody>
        {items.map((i) => (
          <tr key={i.key} className="border-b border-border/60">
            <td className="py-2 pr-4">
              {i.label}
              {i.kind === "lot-share" && (
                <span className="text-xs text-muted-foreground">
                  {" "}
                  · {i.count === 1 ? "1 unsold watch" : `${i.count} unsold watches`} of the lot
                </span>
              )}
              {i.keptShare > 0 && (
                <span className="text-xs text-muted-foreground">
                  {" "}
                  · {Math.round(i.keptShare * 100)}% of it kept
                </span>
              )}
            </td>
            <td className="num whitespace-nowrap py-2 pr-4">{dmy(i.purchaseDate)}</td>
            <td className="num whitespace-nowrap py-2 pr-4">
              {formatHeld(daysSince(i.purchaseDate))}
            </td>
            <td className="num py-2 pr-4">{formatMoney(i.costByCategory.purchase ?? 0)}</td>
            <td className="num py-2 pr-4 text-muted-foreground">
              {extrasOf(i) ? formatMoney(extrasOf(i)) : "—"}
            </td>
            <td className="num py-2 pr-4 font-medium">{formatMoney(forSaleNet(i))}</td>
            <td className="num py-2 pr-4 text-xs text-muted-foreground">{i.ref}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="py-2 pr-4 font-medium" colSpan={5}>
            {items.length} items
          </td>
          <td className="num py-2 pr-4 font-medium">{formatMoney(total)}</td>
          <td />
        </tr>
      </tfoot>
    </AdminTable>
  );
}

function YearMoneyTable({ rows }: { rows: ReturnType<typeof yearMoneyRows> }) {
  const sum = (f: (r: (typeof rows)[number]) => number) => rows.reduce((s, r) => s + f(r), 0);
  return (
    <AdminTable>
      <thead>
        <tr className="border-b border-border">
          <Th>Year</Th>
          <Th>Received</Th>
          <Th>Spent</Th>
          <Th>On watches kept</Th>
          <Th>Net</Th>
          <Th>Kept, at year end</Th>
          <Th>Bought to sell, at year end</Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.year} className="border-b border-border/60">
            <td className="num py-2 pr-4 font-medium">{r.year}</td>
            <td className="num py-2 pr-4">{formatMoney(r.received)}</td>
            <td className="num py-2 pr-4">{formatMoney(r.spent)}</td>
            <td className="num py-2 pr-4 text-muted-foreground">
              {r.keptSpent ? formatMoney(r.keptSpent) : "—"}
            </td>
            <td className="num py-2 pr-4 font-medium">{formatMoney(r.net)}</td>
            <td className="num py-2 pr-4 text-muted-foreground">{formatMoney(r.keptAtYearEnd)}</td>
            <td className="num py-2 pr-4 text-muted-foreground">{formatMoney(r.stockAtYearEnd)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="py-2 pr-4 font-medium">All years</td>
          <td className="num py-2 pr-4 font-medium">{formatMoney(sum((r) => r.received))}</td>
          <td className="num py-2 pr-4 font-medium">{formatMoney(sum((r) => r.spent))}</td>
          <td className="num py-2 pr-4 font-medium">{formatMoney(sum((r) => r.keptSpent))}</td>
          <td className="num py-2 pr-4 font-medium">{formatMoney(sum((r) => r.net))}</td>
          <td colSpan={2} />
        </tr>
      </tfoot>
    </AdminTable>
  );
}

/**
 * Where the money has gone over time, from the ledger's day-by-day money (the
 * year tabs and the Collection tab): what was spent and received to date, the
 * capital held in watches at cost — kept, and bought to sell — the watches
 * themselves, and the same per year. Follows the window selector: flows are
 * the window's own, balances are as at its end.
 */
export function MoneySection({
  data,
  opt,
  keptLink,
  keptName,
  source = "workbook",
}: {
  data: SalesFinancials;
  opt: TimeWindowOption;
  /** Renders a kept watch's name, linked to its catalogue page when it has one. */
  keptLink?: (k: KeptWatchFinancials) => React.ReactNode;
  /** The name keptLink shows, as text, for sorting by it. */
  keptName?: (k: KeptWatchFinancials) => string;
  /** Which source the figures come from, for the section's wording. */
  source?: "workbook" | "ledger";
}) {
  const daily = useMemo(() => data.daily ?? [], [data.daily]);
  // Items wholly kept (linked from the Collection tab) are listed with the kept watches.
  const items = useMemo(
    () => (data.stockItems ?? []).filter((i) => (i.keptShare ?? 0) < 1),
    [data.stockItems],
  );
  const kept = useMemo(() => data.kept ?? [], [data.kept]);
  const totals = useMemo(() => moneyTotals(daily, opt), [daily, opt]);
  const money = useMemo(() => moneyOverTime(daily, opt), [daily, opt]);
  const capital = useMemo(() => capitalOverTime(daily, opt), [daily, opt]);
  const years = useMemo(() => yearMoneyRows(daily), [daily]);

  if (!data.daily) {
    return (
      <>
        <SectionHeader title="Money over time" />
        <p className="border border-dashed border-border p-6 text-sm text-muted-foreground">
          These figures were synced before the ledger kept its money day by day. Run{" "}
          <code className="font-mono text-foreground">npm run sales:sync</code> to see spending,
          payouts, the watches kept and unsold stock over time here.
        </p>
      </>
    );
  }

  const net = totals.received - totals.spent;
  const allTime = opt.id === "all";
  const effectiveKept = kept.reduce((s, k) => s + k.effective, 0);
  const keptNow = kept.reduce((s, k) => s + k.net, 0);
  const series = data.kept ? CAPITAL_SERIES : CAPITAL_SERIES.slice(1);

  return (
    <>
      <SectionHeader title="Money over time" />
      <p className="mb-4 text-sm text-muted-foreground">
        Every euro of{" "}
        {source === "ledger"
          ? "the back-office ledger"
          : "the workbook's year tabs and Collection tab"}
        , by the date it moved: purchases and extras net of refunds, payouts as received. Totals are
        for the window; balances are as at its end.
      </p>

      <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-3 lg:grid-cols-5">
        <StatTile
          label="Spent"
          value={formatMoney(totals.spent)}
          sub={
            allTime
              ? `${formatMoney(totals.keptSpent)} of it on watches kept`
              : `${formatMoney(totals.allSpent)} all time`
          }
        />
        <StatTile
          label="Received"
          value={formatMoney(totals.received)}
          sub={allTime ? "payouts" : `${formatMoney(totals.allReceived)} all time`}
        />
        <StatTile
          label={net < 0 ? "Net outlay" : "Net gain"}
          value={formatMoney(Math.abs(net))}
          sub="received − spent"
        />
        <StatTile
          label="Kept"
          value={formatMoney(totals.keptAtEnd)}
          sub={
            allTime
              ? `at cost · ${kept.length} watches${Math.abs(effectiveKept - keptNow) >= 1 ? ` · effectively ${formatMoney(effectiveKept)}` : ""}`
              : "at cost, at the window's end"
          }
        />
        <StatTile
          label="Bought to sell"
          value={formatMoney(totals.stockAtEnd)}
          sub={allTime ? `at cost · ${items.length} not sold yet` : "at cost, at the window's end"}
        />
      </div>

      <SubHeader title="Spent and received" note="Running totals since the first ledger entry." />
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Everything spent (watches kept included) and everything received, to the end of each
            period
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <MoneyOverTimeChart data={money} />
        </CardContent>
      </Card>

      <SubHeader
        title="Capital in watches"
        note="A watch counts from the day money went into it until it sold."
      />
      <Card>
        <CardHeader className="pb-0">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Watches kept, and watches bought to sell and not sold yet, at cost
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <CapitalAtCostChart data={capital} series={series} />
        </CardContent>
      </Card>

      {data.kept && (
        <>
          <SubHeader
            title="Watches kept"
            note="The Collection tab, today, whatever the window. Click a column to sort, again to reverse."
          />
          {kept.length ? (
            <KeptTable watches={kept} link={keptLink} name={keptName} />
          ) : (
            <p className="text-sm text-muted-foreground">The Collection tab is empty.</p>
          )}
        </>
      )}

      <SubHeader
        title="Bought to sell, not sold yet"
        note="Today, whatever the window. Click a column to sort, again to reverse."
      />
      {items.length ? (
        <StockTable items={items} />
      ) : (
        <p className="text-sm text-muted-foreground">Nothing in stock.</p>
      )}

      <SubHeader title="By year" note="By the date each line moved, like the workbook's Resumo." />
      <YearMoneyTable rows={years} />
    </>
  );
}
