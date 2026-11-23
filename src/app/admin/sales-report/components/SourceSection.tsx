"use client";

import { CollectionIndexEntry } from "@/app/data/collectionIndex";
import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import Link from "next/link";
import { Fragment, useMemo, useState } from "react";

import { dmy, STATUS_LABEL } from "../../ledger/ledgerFormat";
import { UNTAGGED, type SourceReport, type SourceWatch } from "../../ledger/ledgerSources";
import { Financials, formatMoney, formatPercent, profitTotals, ProfitTotals } from "../salesStats";
import { AdminTable, SectionHeader, Th } from "./primitives";

/** Catalogue brand and legend by modelFile, for the watch lists' names and links. */
export type SourceModels = Record<string, { brand: string; legend: string }>;

interface Row {
  /** The source id, or UNTAGGED. */
  key: string;
  label: string;
  bought: number;
  /** Of those, catalogue watches not in the ledger. */
  outside: number;
  spent: number;
  /** The window's catalogue sales of its watches, and their P&L when there is one. */
  sales: ProfitTotals;
}

const COLUMNS = 7;

/** "Roamer/Roamer_Louvre_Cushion_1963" → "Roamer Louvre Cushion 1963", for a model not listed yet. */
const fileName = (modelFile: string) => (modelFile.split("/")[1] ?? modelFile).replace(/_+/g, " ");

function WatchName({ w, models }: { w: SourceWatch; models: SourceModels }) {
  const m = w.modelFile ? models[w.modelFile] : undefined;
  if (m)
    return (
      <Link
        href={routeToCollectionBrandModelPage(m.brand, m.legend)}
        className="underline-offset-4 transition-colors hover:text-brand hover:underline"
        title={w.status === "outside" || w.label === m.legend ? undefined : `Ledger: ${w.label}`}
      >
        {m.legend}
      </Link>
    );
  if (w.status === "outside" && w.modelFile)
    return (
      <span>
        {fileName(w.modelFile)}{" "}
        <span className="text-xs text-muted-foreground">(not in the catalogue yet)</span>
      </span>
    );
  return <span>{w.label}</span>;
}

/** A source's watches, oldest purchase first; catalogue watches outside the ledger last. */
function WatchList({
  watches,
  models,
  fin,
}: {
  watches: SourceWatch[];
  models: SourceModels;
  fin: Financials | null;
}) {
  return (
    <table className="w-full border-collapse text-xs">
      <thead>
        <tr className="text-muted-foreground">
          <th className="py-1 pr-4 text-left font-normal">Bought</th>
          <th className="py-1 pr-4 text-left font-normal">Watch</th>
          <th className="py-1 pr-4 text-left font-normal">Status</th>
          <th className="py-1 pr-4 text-left font-normal">Paid</th>
          <th className="py-1 pr-4 text-left font-normal">Profit</th>
        </tr>
      </thead>
      <tbody>
        {watches.map((w) => {
          const f = w.status === "sold" && w.modelFile ? fin?.[w.modelFile] : undefined;
          return (
            <tr key={w.key} className="border-t border-border/40">
              <td className="num whitespace-nowrap py-1 pr-4">
                {w.acquired ? dmy(w.acquired) : "—"}
              </td>
              <td className="py-1 pr-4">
                <WatchName w={w} models={models} />
                {w.count > 1 && <span className="text-muted-foreground"> · ×{w.count}</span>}
              </td>
              <td className="py-1 pr-4">
                {w.status === "outside" ? "Not in ledger" : STATUS_LABEL[w.status]}
              </td>
              <td className="num py-1 pr-4">{w.paid === null ? "—" : formatMoney(w.paid)}</td>
              <td className="num py-1 pr-4">{f ? formatMoney(f.profit) : "—"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

/**
 * Where the watches were bought, from the back-office ledger's sources (set
 * with `npm run ledger:sources`). Bought and Spent are all time; the sales
 * columns follow the window, like the rest of the report, and their P&L comes
 * from whichever figures the report shows. Open a row for its watches.
 */
export function SourceSection({
  entries,
  fin,
  report,
  models,
}: {
  entries: CollectionIndexEntry[];
  fin: Financials | null;
  report: SourceReport;
  models: SourceModels;
}) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const rows = useMemo<Row[]>(() => {
    const of = (e: CollectionIndexEntry) => report.byModel[e.modelFile] ?? UNTAGGED;
    return report.rows
      .map((r) => ({
        key: r.id ?? UNTAGGED,
        label: r.label,
        bought: r.bought,
        outside: r.outside,
        spent: r.spent,
        sales: profitTotals(
          entries.filter((e) => of(e) === r.label),
          fin ?? {},
        ),
      }))
      .sort((a, b) => (a.key === UNTAGGED ? 1 : b.key === UNTAGGED ? -1 : b.bought - a.bought));
  }, [entries, fin, report]);

  const scale = Math.max(1, ...rows.map((r) => Math.abs(r.sales.profit)));
  const { tagged, total, outside } = report.coverage;

  return (
    <>
      <SectionHeader title="Where they came from" />
      <p className="mb-4 text-sm text-muted-foreground">
        Sources set on <span className="num text-foreground">{tagged}</span> of{" "}
        <span className="num">{total}</span> watches in the back-office ledger
        {outside > 0 && (
          <>
            , plus <span className="num text-foreground">{outside}</span> catalogue watches not in
            the ledger (no cost recorded)
          </>
        )}
        . Bought and spent are all time; sales and profit follow the window. Open a source for its
        watches.
      </p>
      {!report.defined ? (
        <p className="border border-dashed border-border p-6 text-sm text-muted-foreground">
          No sources yet. Add them with{" "}
          <code className="font-mono text-foreground">npm run ledger:sources -- apply</code>.
        </p>
      ) : (
        <AdminTable>
          <thead>
            <tr className="border-b border-border">
              <Th>Source</Th>
              <Th>Bought</Th>
              <Th>Spent</Th>
              <Th>Sold</Th>
              <Th>Profit</Th>
              <Th>Margin</Th>
              <Th>Avg days</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const isOpen = open.has(r.key);
              const watches = report.watches[r.key] ?? [];
              return (
                <Fragment key={r.key}>
                  <tr
                    className={`border-b border-border/60 ${r.key === UNTAGGED ? "text-muted-foreground" : ""}`}
                  >
                    <td className="py-2 pr-4 font-medium">
                      <button
                        type="button"
                        onClick={() => toggle(r.key)}
                        aria-expanded={isOpen}
                        className="flex items-center gap-1.5 text-left transition-colors hover:text-brand"
                      >
                        <span aria-hidden className="inline-block w-3 text-muted-foreground">
                          {isOpen ? "▾" : "▸"}
                        </span>
                        {r.label}
                      </button>
                    </td>
                    <td className="num py-2 pr-4">
                      {r.bought}
                      {r.outside > 0 && (
                        <span className="text-muted-foreground"> ({r.outside} not in ledger)</span>
                      )}
                    </td>
                    <td className="num py-2 pr-4">{formatMoney(r.spent)}</td>
                    <td className="num py-2 pr-4">
                      {r.sales.count}
                      {fin && r.sales.covered < r.sales.count && (
                        <span className="text-muted-foreground">
                          {" "}
                          ({r.sales.covered} with P&amp;L)
                        </span>
                      )}
                    </td>
                    <td className="py-2 pr-4">
                      {fin && r.sales.covered ? (
                        <div className="flex items-center gap-3">
                          <span className="num w-16 shrink-0 text-right">
                            {formatMoney(r.sales.profit)}
                          </span>
                          <span className="hidden h-1.5 w-32 sm:block" aria-hidden>
                            <span
                              className="block h-full rounded-r"
                              style={{
                                width: `${(Math.abs(r.sales.profit) / scale) * 100}%`,
                                background:
                                  r.sales.profit < 0
                                    ? "hsl(var(--muted-foreground))"
                                    : "hsl(var(--chart-1))",
                              }}
                            />
                          </span>
                        </div>
                      ) : (
                        <span className="num">—</span>
                      )}
                    </td>
                    <td className="num py-2 pr-4">{formatPercent(fin ? r.sales.margin : null)}</td>
                    <td className="num py-2 pr-4">
                      {fin && r.sales.meanDaysHeld !== null
                        ? Math.round(r.sales.meanDaysHeld)
                        : "—"}
                    </td>
                  </tr>
                  {isOpen && (
                    <tr className="border-b border-border/60 bg-muted/30">
                      <td colSpan={COLUMNS} className="px-6 py-3">
                        {watches.length ? (
                          <WatchList watches={watches} models={models} fin={fin} />
                        ) : (
                          <p className="text-xs text-muted-foreground">No watches.</p>
                        )}
                        <p className="mt-2 text-xs text-muted-foreground">
                          All time, oldest purchase first. Profit is each sold watch&apos;s own,
                          from the figures this report shows.
                        </p>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </AdminTable>
      )}
    </>
  );
}
