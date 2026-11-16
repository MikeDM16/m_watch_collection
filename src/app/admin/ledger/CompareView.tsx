"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { AdminTable, StatTile, Th } from "../sales-report/components/primitives";
import type { CompareData } from "./editorTypes";
import type { LedgerLine, LedgerWatch } from "./ledger.types";
import type { LedgerAction } from "./ledgerActions";
import { button, dmy, KIND_LABEL, money, percent } from "./ledgerFormat";

const SHOWN = 60;

/**
 * The workbook and the back-office ledger side by side, after a sync: the
 * report's figures that disagree, and the lines one side has and the other
 * does not. A workbook line the ledger lacks can be pulled in, already split
 * between its watches as the workbook reads it.
 */
export function CompareView({
  compare,
  watchById,
  busy,
  send,
  setBusy,
  setStatus,
}: {
  compare: CompareData;
  watchById: Map<string, LedgerWatch>;
  busy: boolean;
  send: (a: LedgerAction) => Promise<boolean>;
  setBusy: (b: boolean) => void;
  setStatus: (s: { text: string; error?: boolean } | null) => void;
}) {
  const router = useRouter();
  const [showAllDiffs, setShowAllDiffs] = useState(false);
  const holderName = (id: string) =>
    id === "overhead"
      ? "Overhead"
      : (watchById.get(id)?.label ?? compare.workbookWatches[id]?.label ?? id);

  // Differences, grouped by where they are: a watch, the totals, a day.
  const grouped = useMemo(() => {
    const m = new Map<string, CompareData["figureDiffs"]>();
    for (const d of compare.figureDiffs) m.set(d.where, [...(m.get(d.where) ?? []), d]);
    return [...m];
  }, [compare.figureDiffs]);

  async function resync() {
    setBusy(true);
    setStatus({
      text: "Re-reading the workbook and re-running the sync — this takes a few seconds…",
    });
    try {
      const res = await fetch("/api/admin/sales-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "resync" }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error([json.error, json.detail].filter(Boolean).join("\n"));
      setStatus({ text: "Workbook synced." });
      router.refresh();
    } catch (e) {
      setStatus({ text: e instanceof Error ? e.message : String(e), error: true });
    } finally {
      setBusy(false);
    }
  }

  const holders = (l: LedgerLine) =>
    l.holders.map((h) => (
      <span key={h.id} className="mr-2 inline-block">
        {holderName(h.id)}
        {h.share < 0.9999 && <span className="num text-muted-foreground"> {percent(h.share)}</span>}
      </span>
    ));
  const allMatch =
    !compare.figureDiffs.length && !compare.workbookOnly.length && !compare.ledgerOnly.length;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {compare.syncedAt
            ? `Workbook last synced ${compare.syncedAt.slice(0, 16).replace("T", " ")} UTC.`
            : "The workbook has not been synced yet."}{" "}
          {compare.stale && (
            <span className="text-brand">It has changed since: re-sync to compare the latest.</span>
          )}
        </p>
        <button type="button" className={button} disabled={busy} onClick={resync}>
          {busy ? "Working…" : "Re-sync workbook"}
        </button>
      </div>

      <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
        <StatTile
          label="Lines paired"
          value={String(compare.paired)}
          sub="the same money on both sides"
        />
        <StatTile
          label="Workbook only"
          value={String(compare.workbookOnly.length)}
          sub="not in the ledger yet"
        />
        <StatTile
          label="Back-office only"
          value={String(compare.ledgerOnly.length)}
          sub="not in the workbook yet"
        />
        <StatTile
          label="Figures that differ"
          value={String(compare.figureDiffs.length)}
          sub={`in ${grouped.length} places`}
        />
      </div>

      {allMatch && (
        <p className="mt-6 border border-border p-6 text-center text-sm">
          Both sides match: every line is paired and every figure agrees to the cent.
        </p>
      )}

      {compare.problems.length > 0 && (
        <div className="mt-6 border border-brand/40 bg-brand/5 px-4 py-3 text-sm">
          The workbook did not read cleanly, so its side may be partial:
          <ul className="mt-1 list-disc pl-5 text-xs">
            {compare.problems.slice(0, 8).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      {compare.workbookOnly.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-1 font-display text-lg font-medium">
            In the workbook, not in the ledger ·{" "}
            <span className="num">{compare.workbookOnly.length}</span>
          </h2>
          <p className="mb-3 text-sm text-muted-foreground">
            Pull one in to add it to the ledger exactly as the workbook reads it, split between the
            same watches. A watch the ledger lacks comes with it.
          </p>
          <LineTable
            lines={compare.workbookOnly}
            holders={holders}
            action={(l) => (
              <button
                type="button"
                className={button}
                disabled={busy}
                onClick={() => send({ action: "pull-line", id: l.id })}
              >
                Pull in
              </button>
            )}
          />
        </section>
      )}

      {compare.ledgerOnly.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-1 font-display text-lg font-medium">
            In the ledger, not in the workbook ·{" "}
            <span className="num">{compare.ledgerOnly.length}</span>
          </h2>
          <p className="mb-3 text-sm text-muted-foreground">
            Entered in the back-office only (or changed there). Add the same row to the workbook, or
            edit the line, and they pair at the next sync.
          </p>
          <LineTable lines={compare.ledgerOnly} holders={holders} />
        </section>
      )}

      {grouped.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-3 font-display text-lg font-medium">
            Figures that differ · <span className="num">{compare.figureDiffs.length}</span>
          </h2>
          <AdminTable>
            <thead>
              <tr className="border-b border-border">
                <Th>Where</Th>
                <Th>Figure</Th>
                <Th>Workbook</Th>
                <Th>Ledger</Th>
              </tr>
            </thead>
            <tbody>
              {grouped.slice(0, showAllDiffs ? undefined : SHOWN).flatMap(([where, ds]) =>
                ds.map((d, i) => (
                  <tr
                    key={`${where}-${d.field}-${i}`}
                    className="border-b border-border/60 align-top"
                  >
                    <td className="py-1.5 pr-4 text-xs">{i === 0 ? where : ""}</td>
                    <td className="py-1.5 pr-4 text-xs text-muted-foreground">{d.field}</td>
                    <td className="num py-1.5 pr-4 text-xs">{d.workbook}</td>
                    <td className="num py-1.5 pr-4 text-xs">{d.ledger}</td>
                  </tr>
                )),
              )}
            </tbody>
          </AdminTable>
          {grouped.length > SHOWN && !showAllDiffs && (
            <button
              type="button"
              className={`${button} mt-3`}
              onClick={() => setShowAllDiffs(true)}
            >
              Show all {grouped.length} places
            </button>
          )}
        </section>
      )}
    </div>
  );
}

function LineTable({
  lines,
  holders,
  action,
}: {
  lines: LedgerLine[];
  holders: (l: LedgerLine) => React.ReactNode;
  action?: (l: LedgerLine) => React.ReactNode;
}) {
  return (
    <AdminTable>
      <thead>
        <tr className="border-b border-border">
          <Th>Date</Th>
          <Th>Kind</Th>
          <Th>Description</Th>
          <Th>In</Th>
          <Th>Out</Th>
          <Th>Held by</Th>
          <Th>From</Th>
          {action && <Th>{""}</Th>}
        </tr>
      </thead>
      <tbody>
        {lines.map((l) => (
          <tr key={l.id} className="border-b border-border/60 align-top">
            <td className="num whitespace-nowrap py-2 pr-4">{dmy(l.date)}</td>
            <td className="py-2 pr-4 text-xs">{KIND_LABEL[l.kind]}</td>
            <td className="py-2 pr-4">
              {l.text}
              {l.note && <span className="block text-xs text-muted-foreground">{l.note}</span>}
            </td>
            <td className="num py-2 pr-4">{l.direction === "in" ? money(l.amount) : ""}</td>
            <td className="num py-2 pr-4">{l.direction === "out" ? money(l.amount) : ""}</td>
            <td className="py-2 pr-4 text-xs">{holders(l)}</td>
            <td className="num py-2 pr-4 text-xs text-muted-foreground">
              {l.origin ?? "back-office"}
            </td>
            {action && <td className="py-2">{action(l)}</td>}
          </tr>
        ))}
      </tbody>
    </AdminTable>
  );
}
