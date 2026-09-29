"use client";

import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import { SearchableSelect } from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useMemo, useState } from "react";

import { AdminTable, Th } from "../components/primitives";
import type { LedgerUnitSummary, MatchesFile, MatchStatus, ModelMatch } from "../salesData.types";
import { formatMoney, parseSaleDate } from "../salesStats";

const STATUS_LABEL: Record<MatchStatus, string> = {
  user: "You",
  claude: "Claude",
  "ledger-link": "Ledger",
  high: "Auto",
  ambiguous: "Ambiguous",
  unmatched: "Unmatched",
  "no-ledger": "No ledger entry",
  "stale-override": "Stale",
};

/**
 * Most urgent first: open cases, then Claude's calls, then the ledger's own
 * links, then automatic matches. The To confirm tab lists them in this order.
 */
const URGENCY: MatchStatus[] = [
  "stale-override",
  "unmatched",
  "ambiguous",
  "claude",
  "ledger-link",
  "high",
  "no-ledger",
  "user",
];

/** Decided by you: a confirmed or reassigned match, or a "no ledger entry" you set. */
const isConfirmed = (m: ModelMatch) =>
  m.status === "user" || (m.status === "no-ledger" && m.by === "user");

type Tab = "open" | "confirmed" | "all";

const TABS: { id: Tab; label: string }[] = [
  { id: "open", label: "To confirm" },
  { id: "confirmed", label: "Confirmed" },
  { id: "all", label: "All" },
];

type ReviewBody =
  | { action: "confirm" | "assign"; modelFile: string; unit: string }
  | { action: "none" | "reset"; modelFile: string }
  | { action: "confirm-many"; items: { modelFile: string; unit: string }[] }
  | { action: "resync" };

const unitLine = (u: LedgerUnitSummary) =>
  `${u.label} · ${u.sheet}!${u.saleRow} · ${formatMoney(u.received)}${u.payoutDate ? ` · ${u.payoutDate}` : ""}`;

const saleTime = (m: ModelMatch) => parseSaleDate(m.date).getTime();

/** Urgency groups open cases first; the date orders follow the ledger's own chronology. */
type Sort = "urgency" | "newest" | "oldest";

const SORTERS: Record<Sort, (a: ModelMatch, b: ModelMatch) => number> = {
  urgency: (a, b) =>
    URGENCY.indexOf(a.status) - URGENCY.indexOf(b.status) || saleTime(b) - saleTime(a),
  newest: (a, b) => saleTime(b) - saleTime(a),
  oldest: (a, b) => saleTime(a) - saleTime(b),
};

export default function MatchReview({ matches }: { matches: MatchesFile }) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("open");
  const [status, setStatus] = useState<MatchStatus | null>(null);
  const [sort, setSort] = useState<Sort>("urgency");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const all = useMemo(
    () => Object.values(matches.byModel).sort((a, b) => saleTime(b) - saleTime(a)),
    [matches],
  );
  const confirmedCount = all.filter(isConfirmed).length;
  const tabCount = (t: Tab) =>
    t === "all" ? all.length : t === "confirmed" ? confirmedCount : all.length - confirmedCount;

  // The tab narrows first; the status chips then narrow within it.
  const inTab = useMemo(
    () => all.filter((m) => tab === "all" || (tab === "confirmed") === isConfirmed(m)),
    [all, tab],
  );
  const counts = useMemo(() => {
    const c: Partial<Record<MatchStatus, number>> = {};
    for (const m of inTab) c[m.status] = (c[m.status] ?? 0) + 1;
    return c;
  }, [inTab]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    const shown = inTab.filter(
      (m) =>
        (!status || m.status === status) &&
        (!q || `${m.legend} ${m.brand}`.toLowerCase().includes(q)),
    );
    return shown.sort(SORTERS[sort]);
  }, [inTab, status, query, sort]);

  // What the batch button would confirm: the visible rows with a match, not yet
  // yours. Offered only once a status chip or the search has narrowed the list,
  // so it is always a deliberate "these 20 Ledger links", never all 240 at once.
  const confirmable = rows.filter((m) => m.unit && !isConfirmed(m));
  const narrowed = status !== null || query.trim() !== "";

  const pickTab = (t: Tab) => {
    setTab(t);
    setStatus(null);
  };

  // Any unit a sale could be moved to: its own candidates first, then every payout nobody claimed.
  const optionsFor = (m: ModelMatch) => {
    const keys = [...new Set([...m.candidates.map((c) => c.unit), ...matches.unclaimed])];
    return keys
      .filter((k) => matches.units[k] && k !== m.unit)
      .map((k) => {
        const score = m.candidates.find((c) => c.unit === k)?.score;
        return {
          value: k,
          label: `${score !== undefined ? `${score.toFixed(2)} · ` : ""}${unitLine(matches.units[k])}`,
        };
      });
  };

  async function send(body: ReviewBody) {
    setBusy("modelFile" in body ? body.modelFile : body.action);
    setError(null);
    try {
      const res = await fetch("/api/admin/sales-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (!res.ok) throw new Error([json.error, json.detail].filter(Boolean).join("\n"));
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(null);
    }
  }

  function confirmAllShown() {
    const n = confirmable.length;
    const ok = window.confirm(
      `Confirm ${n} ${n === 1 ? "match" : "matches"} as correct?\n\n` +
        "They move to the Confirmed tab. You can still reset any of them later.",
    );
    if (ok) {
      send({
        action: "confirm-many",
        items: confirmable.map((m) => ({ modelFile: m.modelFile, unit: m.unit! })),
      });
    }
  }

  const button =
    "rounded-sm border border-border px-2 py-0.5 text-xs transition-colors hover:border-brand hover:text-brand disabled:opacity-40";

  return (
    <div className="pb-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="lab">Local tool</p>
          <h1 className="mt-2 font-display text-display-m font-medium">Ledger matches</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Each catalogue sale and the sales-ledger entry its profit comes from. Confirm each match
            once and it moves to Confirmed, so To confirm only ever shows what is left. Every change
            re-runs the matcher.
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm">
            <span className="h-1.5 w-40 overflow-hidden rounded-full bg-muted" aria-hidden>
              <span
                className="block h-full rounded-full bg-brand"
                style={{ width: `${(confirmedCount / Math.max(1, all.length)) * 100}%` }}
              />
            </span>
            <span className="text-muted-foreground">
              Confirmed <span className="num text-foreground">{confirmedCount}</span> of{" "}
              <span className="num">{all.length}</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className={button}
            disabled={busy !== null}
            onClick={() => send({ action: "resync" })}
            title="Re-read the workbook, then re-match and rebuild"
          >
            {busy === "resync" ? "Re-syncing…" : "Re-sync workbook"}
          </button>
          <Link
            href="/admin/sales-report"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
          >
            ← Sales report
          </Link>
        </div>
      </div>

      <div role="tablist" aria-label="Matches" className="mb-4 flex gap-6 border-b border-border">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => pickTab(t.id)}
            className={`-mb-px border-b-2 pb-2 text-sm transition-colors ${
              tab === t.id
                ? "border-brand font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label} <span className="num">· {tabCount(t.id)}</span>
          </button>
        ))}
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <FilterChip active={status === null} onClick={() => setStatus(null)}>
          Everything · {inTab.length}
        </FilterChip>
        {URGENCY.filter((s) => counts[s]).map((s) => (
          <FilterChip key={s} active={status === s} onClick={() => setStatus(s)}>
            {STATUS_LABEL[s]} · {counts[s]}
          </FilterChip>
        ))}
        {tab !== "confirmed" && narrowed && confirmable.length > 0 && (
          <button
            type="button"
            className={button}
            disabled={busy !== null}
            onClick={confirmAllShown}
            title="Confirm every match listed below in one go"
          >
            {busy === "confirm-many" ? "Confirming…" : `Confirm these ${confirmable.length}`}
          </button>
        )}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by watch or brand…"
          className="ml-auto h-8 w-full max-w-xs rounded-md border border-input bg-transparent px-3 text-sm outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      {busy && (
        <p className="mb-4 text-sm text-muted-foreground" role="status">
          Saving and re-running the matcher — this takes a few seconds…
        </p>
      )}
      {error && (
        <pre className="mb-4 whitespace-pre-wrap border border-brand/40 bg-brand/5 p-3 text-xs">
          {error}
        </pre>
      )}

      {rows.length === 0 ? (
        <p className="border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
          {tab === "open" && !status && !query
            ? "Everything is confirmed."
            : tab === "confirmed" && !status && !query
              ? "Nothing confirmed yet. Matches you confirm move here."
              : "Nothing here."}
        </p>
      ) : (
        <AdminTable>
          <thead>
            <tr className="border-b border-border">
              <Th>Watch</Th>
              <th
                className="lab py-2 pr-4 text-left font-medium"
                aria-sort={
                  sort === "newest" ? "descending" : sort === "oldest" ? "ascending" : "none"
                }
              >
                <button
                  type="button"
                  onClick={() => setSort(sort === "newest" ? "oldest" : "newest")}
                  title="Sort by sale date: newest first, click again for oldest first"
                  className={`uppercase transition-colors hover:text-foreground ${sort !== "urgency" ? "text-foreground" : ""}`}
                >
                  Sold{sort === "newest" ? " ↓" : sort === "oldest" ? " ↑" : ""}
                </button>
              </th>
              <Th>Hammer</Th>
              <th className="lab py-2 pr-4 text-left font-medium">
                <button
                  type="button"
                  onClick={() => setSort("urgency")}
                  title="Sort by urgency: open cases first, then Claude's calls, Ledger, Auto"
                  className={`uppercase transition-colors hover:text-foreground ${sort === "urgency" ? "text-foreground" : ""}`}
                >
                  Status{sort === "urgency" ? " ↓" : ""}
                </button>
              </th>
              <Th>Ledger entry</Th>
              <Th>Profit</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m) => {
              const u = m.unit ? matches.units[m.unit] : null;
              const isOpen = open === m.modelFile;
              const disabled = busy !== null;
              return (
                <Fragment key={m.modelFile}>
                  <tr className="border-b border-border/60 align-top">
                    <td className="py-2 pr-4">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : m.modelFile)}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Hide" : "Show"} evidence for ${m.legend}`}
                        className="mr-2 w-4 text-muted-foreground hover:text-foreground"
                      >
                        {isOpen ? "▾" : "▸"}
                      </button>
                      <Link
                        href={routeToCollectionBrandModelPage(m.brand, m.legend)}
                        className="underline-offset-4 hover:text-brand hover:underline"
                      >
                        {m.legend}
                      </Link>
                    </td>
                    <td className="num whitespace-nowrap py-2 pr-4">{m.date}</td>
                    <td className="num py-2 pr-4">{formatMoney(m.gross)}</td>
                    <td className="py-2 pr-4">
                      <span className="lab whitespace-nowrap rounded-sm border border-border px-1.5 py-0.5">
                        {STATUS_LABEL[m.status]}
                      </span>
                    </td>
                    <td className="py-2 pr-4 text-xs">
                      {u ? (
                        <>
                          {unitLine(u)}
                          {m.share < 1 && (
                            <span className="text-muted-foreground">
                              {" "}
                              · {Math.round(m.share * 100)}% share
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="num py-2 pr-4">
                      {u ? formatMoney(u.profit * (m.share || 1)) : "—"}
                    </td>
                    <td className="py-2 pr-4">
                      <div className="flex items-center gap-1.5 whitespace-nowrap">
                        {u && !isConfirmed(m) && (
                          <button
                            type="button"
                            className={button}
                            disabled={disabled}
                            onClick={() =>
                              send({ action: "confirm", modelFile: m.modelFile, unit: m.unit! })
                            }
                          >
                            Confirm
                          </button>
                        )}
                        {/* "No entry" is itself a decision: offered to confirm Claude's, or to set one. */}
                        {!isConfirmed(m) && (
                          <button
                            type="button"
                            className={button}
                            disabled={disabled}
                            onClick={() => send({ action: "none", modelFile: m.modelFile })}
                          >
                            {m.status === "no-ledger" ? "Confirm no entry" : "No entry"}
                          </button>
                        )}
                        {(isConfirmed(m) || m.status === "claude" || m.status === "no-ledger") && (
                          <button
                            type="button"
                            className={button}
                            disabled={disabled}
                            onClick={() => send({ action: "reset", modelFile: m.modelFile })}
                            title="Forget this decision and let the matcher decide again"
                          >
                            Reset
                          </button>
                        )}
                        {busy === m.modelFile && (
                          <span className="text-xs text-muted-foreground">saving…</span>
                        )}
                      </div>
                    </td>
                  </tr>
                  {isOpen && (
                    <tr className="border-b border-border/60 bg-muted/30">
                      <td colSpan={7} className="px-6 py-3 text-xs">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-1 text-muted-foreground">
                            {m.reason && (
                              <div>
                                <span className="text-foreground">Decision:</span> {m.reason}
                              </div>
                            )}
                            {m.evidence.map((e) => (
                              <div key={e}>· {e}</div>
                            ))}
                            {u?.flags.map((f) => (
                              <div key={f}>⚑ {f}</div>
                            ))}
                            {m.url && (
                              <a
                                href={m.url}
                                target="_blank"
                                rel="noreferrer"
                                className="underline-offset-4 hover:underline"
                              >
                                Catawiki lot ↗
                              </a>
                            )}
                          </div>
                          <div>
                            <div className="lab mb-2">Move to another ledger entry</div>
                            <SearchableSelect
                              options={optionsFor(m)}
                              value=""
                              placeholder="Candidates, then unclaimed payouts…"
                              onChange={(key) =>
                                send({ action: "assign", modelFile: m.modelFile, unit: key })
                              }
                            />
                            {m.candidates.length > 0 && (
                              <ol className="mt-3 space-y-1 text-muted-foreground">
                                {m.candidates.map((c) => (
                                  <li key={c.unit}>
                                    <span className="num text-foreground">
                                      {c.score.toFixed(2)}
                                    </span>{" "}
                                    (p {c.p} · t {c.t} · d {c.d}){" "}
                                    {matches.units[c.unit]
                                      ? unitLine(matches.units[c.unit])
                                      : c.unit}
                                  </li>
                                ))}
                              </ol>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </AdminTable>
      )}

      <UnclaimedList matches={matches} />
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-sm border px-2.5 py-1 text-xs transition-colors ${
        active
          ? "border-brand text-brand"
          : "border-border text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

/** Payouts no catalogue sale claimed: private sales, or sales missing from the catalogue. */
function UnclaimedList({ matches }: { matches: MatchesFile }) {
  const [show, setShow] = useState(false);
  const units = matches.unclaimed.map((k) => matches.units[k]).filter(Boolean);
  if (!units.length) return null;
  return (
    <div className="mt-12 border-t border-border pt-6">
      <button
        type="button"
        onClick={() => setShow(!show)}
        aria-expanded={show}
        className="font-display text-title font-medium hover:text-brand"
      >
        {show ? "▾" : "▸"} Unclaimed ledger payouts · {units.length}
      </button>
      <p className="mt-1 text-sm text-muted-foreground">
        Sold watches in the ledger that no catalogue sale points at: private sales, or watches
        missing from the catalogue.
      </p>
      {show && (
        <div className="mt-4">
          <AdminTable>
            <thead>
              <tr className="border-b border-border">
                <Th>Ledger name</Th>
                <Th>Row</Th>
                <Th>Paid</Th>
                <Th>Received</Th>
                <Th>Profit</Th>
              </tr>
            </thead>
            <tbody>
              {units.map((u) => (
                <tr key={u.key} className="border-b border-border/60">
                  <td className="py-2 pr-4">{u.label}</td>
                  <td className="num py-2 pr-4 text-muted-foreground">
                    {u.sheet}!{u.saleRow}
                  </td>
                  <td className="num py-2 pr-4">{u.payoutDate ?? "—"}</td>
                  <td className="num py-2 pr-4">{formatMoney(u.received)}</td>
                  <td className="num py-2 pr-4">{formatMoney(u.profit)}</td>
                </tr>
              ))}
            </tbody>
          </AdminTable>
        </div>
      )}
    </div>
  );
}
