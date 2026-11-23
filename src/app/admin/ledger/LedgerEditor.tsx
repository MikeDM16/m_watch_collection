"use client";

import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import { Button } from "@/components/ui/button";
import { SearchableSelect } from "@/components/ui/select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { AdminTable, Th } from "../sales-report/components/primitives";
import { CompareView } from "./CompareView";
import type { LedgerPageData, LedgerView, ModelOption } from "./editorTypes";
import type { LedgerLine, LedgerSource, LedgerWatch, WatchStatus } from "./ledger.types";
import { OVERHEAD, WATCH_STATUSES, type LedgerAction } from "./ledgerActions";
import {
  button,
  dmy,
  field,
  inlineField,
  KIND_LABEL,
  money,
  percent,
  STATUS_LABEL,
  todayIso,
  watchLabel,
} from "./ledgerFormat";
import { LineForm } from "./LineForm";
import { useLedgerSend } from "./useLedgerSend";

const TABS: { id: LedgerView; label: string }[] = [
  { id: "lines", label: "Lines" },
  { id: "watches", label: "Watches" },
  { id: "compare", label: "Compare with workbook" },
  { id: "issues", label: "To look at" },
];

const PAGE = 100;

/** The Watches filter's value for watches with no source yet. */
const NO_SOURCE = "__none__";

export default function LedgerEditor({ data }: { data: LedgerPageData }) {
  const { busy, setBusy, status, setStatus, send } = useLedgerSend(data.version);
  const models = useMemo(() => new Map(data.models.map((m) => [m.modelFile, m])), [data.models]);
  const watchById = useMemo(
    () => new Map(data.store.watches.map((w) => [w.id, w])),
    [data.store.watches],
  );

  const issueCount = data.issues.length + data.unmatched.length;
  return (
    <div>
      <div
        role="tablist"
        aria-label="Ledger"
        className="mb-6 flex flex-wrap gap-6 border-b border-border"
      >
        {TABS.map((t) => (
          <Link
            key={t.id}
            href={`/admin/ledger?view=${t.id}`}
            role="tab"
            aria-selected={data.view === t.id}
            className={`-mb-px border-b-2 pb-2 text-sm transition-colors ${
              data.view === t.id
                ? "border-brand font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
            {t.id === "lines" && <span className="num"> · {data.store.lines.length}</span>}
            {t.id === "watches" && <span className="num"> · {data.store.watches.length}</span>}
            {t.id === "issues" && issueCount > 0 && <span className="num"> · {issueCount}</span>}
          </Link>
        ))}
      </div>

      {status && (
        <p
          role="status"
          className={`mb-4 text-sm ${status.error ? "border border-brand/40 bg-brand/5 px-3 py-2" : "text-muted-foreground"}`}
        >
          {status.text}
        </p>
      )}

      {data.view === "lines" && (
        <LinesView data={data} models={models} watchById={watchById} busy={busy} send={send} />
      )}
      {data.view === "watches" && (
        <WatchesView data={data} models={models} busy={busy} send={send} />
      )}
      {data.view === "compare" && data.compare && (
        <CompareView
          compare={data.compare}
          watchById={watchById}
          busy={busy}
          send={send}
          setBusy={setBusy}
          setStatus={setStatus}
        />
      )}
      {data.view === "issues" && <IssuesView data={data} models={models} />}
    </div>
  );
}

// ─── Lines ──────────────────────────────────────────────────────────────────

function LinesView({
  data,
  models,
  watchById,
  busy,
  send,
}: {
  data: LedgerPageData;
  models: Map<string, ModelOption>;
  watchById: Map<string, LedgerWatch>;
  busy: boolean;
  send: (a: LedgerAction) => Promise<boolean>;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [book, setBook] = useState("");
  const [shown, setShown] = useState(PAGE);
  const [editing, setEditing] = useState<LedgerLine | "new" | null>(null);

  const years = useMemo(
    () => [...new Set(data.store.lines.map((l) => l.date.slice(0, 4)))].sort().reverse(),
    [data.store.lines],
  );
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.store.lines
      .filter((l) => !data.watchFilter || l.holders.some((h) => h.id === data.watchFilter))
      .filter((l) => !year || l.date.startsWith(year))
      .filter(
        (l) =>
          !book ||
          (book === "overhead" ? l.holders.some((h) => h.id === OVERHEAD) : l.book === book),
      )
      .filter((l) => {
        if (!q) return true;
        const holders = l.holders.map((h) => watchLabel(watchById.get(h.id), h.id)).join(" ");
        return `${l.text} ${l.note ?? ""} ${l.origin ?? ""} ${l.channel ?? ""} ${holders}`
          .toLowerCase()
          .includes(q);
      })
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [data.store.lines, data.watchFilter, year, book, query, watchById]);
  const filterWatch = data.watchFilter ? watchById.get(data.watchFilter) : undefined;

  return (
    <div>
      {editing && (
        <LineForm
          key={editing === "new" ? "new" : editing.id}
          initial={editing === "new" ? null : editing}
          watches={data.store.watches}
          groups={data.store.groups}
          models={models}
          busy={busy}
          onSave={(line) => send({ action: "save-line", line })}
          onCancel={() => setEditing(null)}
          onDelete={
            editing !== "new"
              ? async () => {
                  if (await send({ action: "delete-line", id: editing.id })) setEditing(null);
                }
              : undefined
          }
        />
      )}

      <div className="mb-4 flex flex-wrap items-center gap-2">
        {!editing && (
          <Button size="sm" onClick={() => setEditing("new")}>
            Add a line
          </Button>
        )}
        <select className={inlineField} value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Every year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <select className={inlineField} value={book} onChange={(e) => setBook(e.target.value)}>
          <option value="">Trading and collection</option>
          <option value="trade">Trading</option>
          <option value="collection">Collection (kept)</option>
          <option value="overhead">Overhead</option>
        </select>
        {filterWatch && (
          <button
            type="button"
            className={button}
            onClick={() => router.push("/admin/ledger?view=lines")}
          >
            {filterWatch.label} ×
          </button>
        )}
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search text, watch, cell…"
          className={`${inlineField} ml-auto w-full max-w-xs`}
        />
      </div>

      <p className="mb-2 text-xs text-muted-foreground">
        <span className="num">{rows.length}</span> lines · in{" "}
        <span className="num">
          {money(rows.filter((l) => l.direction === "in").reduce((s, l) => s + l.amount, 0))}
        </span>{" "}
        · out{" "}
        <span className="num">
          {money(rows.filter((l) => l.direction === "out").reduce((s, l) => s + l.amount, 0))}
        </span>
      </p>
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
            <Th>{""}</Th>
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, shown).map((l) => (
            <tr key={l.id} className="border-b border-border/60 align-top">
              <td className="num whitespace-nowrap py-2 pr-4">
                {dmy(l.date)}
                {l.dateGuessed && (
                  <span className="text-muted-foreground" title="Date taken from its block">
                    *
                  </span>
                )}
              </td>
              <td className="py-2 pr-4 text-xs">
                {KIND_LABEL[l.kind]}
                {l.book === "collection" && (
                  <span className="block text-muted-foreground">collection</span>
                )}
              </td>
              <td className="py-2 pr-4">
                {l.text}
                {l.note && <span className="block text-xs text-muted-foreground">{l.note}</span>}
              </td>
              <td className="num py-2 pr-4">{l.direction === "in" ? money(l.amount) : ""}</td>
              <td className="num py-2 pr-4">{l.direction === "out" ? money(l.amount) : ""}</td>
              <td className="py-2 pr-4 text-xs">
                {l.holders.map((h) => (
                  <span key={h.id} className="mr-2 inline-block">
                    {watchLabel(watchById.get(h.id), h.id)}
                    {h.share < 0.9999 && (
                      <span className="num text-muted-foreground"> {percent(h.share)}</span>
                    )}
                  </span>
                ))}
              </td>
              <td className="num py-2 pr-4 text-xs text-muted-foreground">
                {l.origin ?? "back-office"}
              </td>
              <td className="py-2">
                <button type="button" className={button} onClick={() => setEditing(l)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </AdminTable>
      {rows.length > shown && (
        <button type="button" className={`${button} mt-3`} onClick={() => setShown(shown + PAGE)}>
          Show {Math.min(PAGE, rows.length - shown)} more
        </button>
      )}
    </div>
  );
}

// ─── Watches ────────────────────────────────────────────────────────────────

function WatchForm({
  initial,
  data,
  models,
  busy,
  onSave,
  onCancel,
}: {
  initial: LedgerWatch | null;
  data: LedgerPageData;
  models: Map<string, ModelOption>;
  busy: boolean;
  onSave: (w: Omit<LedgerWatch, "id"> & { id?: string }) => Promise<boolean>;
  onCancel: () => void;
}) {
  const [label, setLabel] = useState(initial?.label ?? "");
  const [status, setStatus] = useState<WatchStatus>(initial?.status ?? "for-sale");
  const [modelFile, setModelFile] = useState(initial?.modelFile ?? "");
  const [acquired, setAcquired] = useState(initial?.acquired ?? "");
  const [sold, setSold] = useState(initial?.sold ?? "");
  const [count, setCount] = useState(initial?.count ? String(initial.count) : "");
  const [paidNote, setPaidNote] = useState(initial?.paidNote ? String(initial.paidNote) : "");
  const [note, setNote] = useState(initial?.note ?? "");
  const [source, setSource] = useState(initial?.source ?? "");
  const taken = useMemo(
    () =>
      new Set(
        data.store.watches
          .filter((w) => w.id !== initial?.id && w.modelFile)
          .map((w) => w.modelFile!),
      ),
    [data.store.watches, initial],
  );
  const options = useMemo(
    () => [
      { value: "", label: "Not in the catalogue" },
      ...data.models
        .filter((m) => !taken.has(m.modelFile))
        .map((m) => ({ value: m.modelFile, label: `${m.legend}${m.sold ? " · sold" : ""}` })),
    ],
    [data.models, taken],
  );

  async function submit() {
    const ok = await onSave({
      ...(initial ?? {}),
      label: label.trim(),
      status,
      modelFile: modelFile || null,
      acquired: acquired || undefined,
      sold: sold || undefined,
      count: count ? Number(count) : undefined,
      paidNote: paidNote ? Number(paidNote) : undefined,
      note: note.trim() || undefined,
      source: source || undefined,
    });
    if (ok) onCancel();
  }

  const lab = "lab mb-1 block";
  const model = modelFile ? models.get(modelFile) : undefined;
  return (
    <div className="mb-6 border border-border p-4">
      <h3 className="mb-3 font-display text-lg font-medium">
        {initial ? "Edit watch" : "New watch"}
      </h3>
      <div className="grid gap-3 md:grid-cols-4">
        <label className="md:col-span-2">
          <span className={lab}>Name</span>
          <input className={field} value={label} onChange={(e) => setLabel(e.target.value)} />
        </label>
        <label>
          <span className={lab}>Status</span>
          <select
            className={field}
            value={status}
            onChange={(e) => setStatus(e.target.value as WatchStatus)}
          >
            {WATCH_STATUSES.map((s) => (
              <option key={s} value={s}>
                {STATUS_LABEL[s]}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className={lab}>Lot share of (watches)</span>
          <input
            className={`${field} num`}
            inputMode="numeric"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </label>
        <label className="md:col-span-2">
          <span className={lab}>Catalogue model</span>
          <SearchableSelect options={options} value={modelFile} onChange={setModelFile} />
          {model && (
            <Link
              href={routeToCollectionBrandModelPage(model.brand, model.legend)}
              className="mt-1 inline-block text-xs text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
            >
              Open the model page ↗
            </Link>
          )}
        </label>
        <label>
          <span className={lab}>Bought</span>
          <input
            type="date"
            className={field}
            value={acquired}
            onChange={(e) => setAcquired(e.target.value)}
          />
        </label>
        <label>
          <span className={lab}>Left stock (if not its sale line&apos;s date)</span>
          <input
            type="date"
            className={field}
            value={sold}
            onChange={(e) => setSold(e.target.value)}
          />
        </label>
        <label>
          <span className={lab}>Price noted (€)</span>
          <input
            className={`${field} num`}
            inputMode="decimal"
            value={paidNote}
            onChange={(e) => setPaidNote(e.target.value)}
          />
        </label>
        <SourceSelect sources={data.store.sources} value={source} onChange={setSource} />
        <label className="md:col-span-2">
          <span className={lab}>Note</span>
          <input className={field} value={note} onChange={(e) => setNote(e.target.value)} />
        </label>
      </div>
      <div className="mt-4 flex gap-2">
        <Button size="sm" disabled={busy} onClick={submit}>
          {busy ? "Saving…" : "Save watch"}
        </Button>
        <button type="button" className={button} disabled={busy} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

/** Where a watch was bought, from the ledger's own list of sources. */
function SourceSelect({
  sources,
  value,
  onChange,
}: {
  sources: LedgerSource[] | undefined;
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <label>
      <span className="lab mb-1 block">Bought from</span>
      <select className={field} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Not set</option>
        {(sources ?? []).map((s) => (
          <option key={s.id} value={s.id}>
            {s.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/** A purchase: one watch, or a lot (one name per line), bought on one payment. */
function PurchaseForm({
  sources,
  busy,
  send,
  onDone,
}: {
  sources: LedgerSource[] | undefined;
  busy: boolean;
  send: (a: LedgerAction) => Promise<boolean>;
  onDone: () => void;
}) {
  const [names, setNames] = useState("");
  const [status, setStatus] = useState<"for-sale" | "kept">("for-sale");
  const [date, setDate] = useState(todayIso());
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const list = names
    .split("\n")
    .map((n) => n.trim())
    .filter(Boolean);

  async function submit() {
    setError(null);
    const value = Number(amount.replace(",", "."));
    if (!list.length) return setError("Name the watch, or every watch of the lot (one per line).");
    if (!(value > 0)) return setError("Enter what was paid.");
    const ok = await send({
      action: "record-purchase",
      watches: list.map((label) => ({ label })),
      status,
      purchase: { date, amount: value, text },
      source: source || undefined,
    });
    if (ok) onDone();
  }

  const lab = "lab mb-1 block";
  return (
    <div className="mb-6 border border-border p-4">
      <h3 className="mb-3 font-display text-lg font-medium">Record a purchase</h3>
      <div className="grid gap-3 md:grid-cols-4">
        <label className="md:col-span-2 md:row-span-2">
          <span className={lab}>Watches (one per line: several make a lot)</span>
          <textarea
            className={`${field} h-[5.5rem] py-1`}
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />
        </label>
        <label>
          <span className={lab}>Bought</span>
          <input
            type="date"
            className={field}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          <span className={lab}>Paid € (all of it)</span>
          <input
            className={`${field} num`}
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          <span className={lab}>To</span>
          <select
            className={field}
            value={status}
            onChange={(e) => setStatus(e.target.value as "for-sale" | "kept")}
          >
            <option value="for-sale">Sell (trading)</option>
            <option value="kept">Keep (collection)</option>
          </select>
        </label>
        <SourceSelect sources={sources} value={source} onChange={setSource} />
        <label className="md:col-span-4">
          <span className={lab}>Description</span>
          <input
            className={field}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Compra eBay…"
          />
        </label>
      </div>
      {list.length > 1 && (
        <p className="mt-2 text-xs text-muted-foreground">
          A lot of {list.length}: each takes an even share of the price, and they form a group, so a
          watch kept out of it costs effectively what the others&apos; sales have not paid back.
        </p>
      )}
      {error && <p className="mt-3 text-sm text-brand">{error}</p>}
      <div className="mt-4 flex gap-2">
        <Button size="sm" disabled={busy} onClick={submit}>
          {busy ? "Saving…" : "Record the purchase"}
        </Button>
        <button type="button" className={button} disabled={busy} onClick={onDone}>
          Cancel
        </button>
      </div>
    </div>
  );
}

function WatchesView({
  data,
  models,
  busy,
  send,
}: {
  data: LedgerPageData;
  models: Map<string, ModelOption>;
  busy: boolean;
  send: (a: LedgerAction) => Promise<boolean>;
}) {
  const [status, setStatus] = useState<WatchStatus | "">("");
  /** "" every source, NO_SOURCE the untagged, else a source id. */
  const [from, setFrom] = useState("");
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<LedgerWatch | "new" | null>(null);
  const [buying, setBuying] = useState(false);
  const [shown, setShown] = useState(PAGE);
  const sourceLabel = useMemo(
    () => new Map((data.store.sources ?? []).map((s) => [s.id, s.label])),
    [data.store.sources],
  );

  const counts = useMemo(() => {
    const c: Partial<Record<WatchStatus, number>> = {};
    for (const w of data.store.watches) c[w.status] = (c[w.status] ?? 0) + 1;
    return c;
  }, [data.store.watches]);
  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.store.watches
      .filter((w) => !status || w.status === status)
      .filter((w) => !from || (from === NO_SOURCE ? !w.source : w.source === from))
      .filter((w) => {
        if (!q) return true;
        const m = w.modelFile ? models.get(w.modelFile) : undefined;
        return `${w.label} ${m?.legend ?? ""} ${w.origin ?? ""}`.toLowerCase().includes(q);
      })
      .sort((a, b) => (b.acquired ?? "").localeCompare(a.acquired ?? ""));
  }, [data.store.watches, status, from, query, models]);

  return (
    <div>
      {editing && (
        <WatchForm
          key={editing === "new" ? "new" : editing.id}
          initial={editing === "new" ? null : editing}
          data={data}
          models={models}
          busy={busy}
          onSave={(watch) => send({ action: "save-watch", watch })}
          onCancel={() => setEditing(null)}
        />
      )}
      {buying && (
        <PurchaseForm
          sources={data.store.sources}
          busy={busy}
          send={send}
          onDone={() => setBuying(false)}
        />
      )}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {!editing && !buying && (
          <>
            <Button size="sm" onClick={() => setBuying(true)}>
              Record a purchase
            </Button>
            <button type="button" className={button} onClick={() => setEditing("new")}>
              New watch
            </button>
          </>
        )}
        {(["", ...WATCH_STATUSES] as const).map((s) => (
          <button
            key={s || "all"}
            type="button"
            aria-pressed={status === s}
            onClick={() => setStatus(s)}
            className={`rounded-sm border px-2.5 py-1 text-xs transition-colors ${
              status === s
                ? "border-brand text-brand"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {s ? STATUS_LABEL[s] : "Every watch"} ·{" "}
            <span className="num">{s ? (counts[s] ?? 0) : data.store.watches.length}</span>
          </button>
        ))}
        <select
          aria-label="Bought from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className={`${inlineField} w-auto`}
        >
          <option value="">Any source</option>
          <option value={NO_SOURCE}>No source yet</option>
          {(data.store.sources ?? []).map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search watch, model, cell…"
          className={`${inlineField} ml-auto w-full max-w-xs`}
        />
      </div>
      <AdminTable>
        <thead>
          <tr className="border-b border-border">
            <Th>Watch</Th>
            <Th>Status</Th>
            <Th>Bought</Th>
            <Th>From</Th>
            <Th>Cost</Th>
            <Th>Received</Th>
            <Th>Profit</Th>
            <Th>Lines</Th>
            <Th>{""}</Th>
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, shown).map((w) => {
            const s = data.summaries[w.id];
            const m = w.modelFile ? models.get(w.modelFile) : undefined;
            return (
              <tr key={w.id} className="border-b border-border/60 align-top">
                <td className="py-2 pr-4">
                  {w.label}
                  {w.count ? (
                    <span className="text-xs text-muted-foreground"> · lot share of {w.count}</span>
                  ) : null}
                  {m && (
                    <Link
                      href={routeToCollectionBrandModelPage(m.brand, m.legend)}
                      className="block text-xs text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
                    >
                      {m.legend}
                    </Link>
                  )}
                </td>
                <td className="py-2 pr-4 text-xs">{STATUS_LABEL[w.status]}</td>
                <td className="num whitespace-nowrap py-2 pr-4">{dmy(w.acquired)}</td>
                <td className="py-2 pr-4 text-xs">
                  {w.source ? (sourceLabel.get(w.source) ?? w.source) : "—"}
                </td>
                <td className="num py-2 pr-4">{s ? money(s.cost - s.refunds) : "—"}</td>
                <td className="num py-2 pr-4">{s?.received ? money(s.received) : "—"}</td>
                <td className="num py-2 pr-4">
                  {w.status === "sold" && s ? money(s.profit) : "—"}
                </td>
                <td className="num py-2 pr-4">
                  <Link
                    href={`/admin/ledger?view=lines&watch=${encodeURIComponent(w.id)}`}
                    className="underline-offset-4 hover:text-brand hover:underline"
                  >
                    {s?.lines ?? 0}
                  </Link>
                </td>
                <td className="py-2">
                  <div className="flex flex-wrap gap-1.5">
                    <button type="button" className={button} onClick={() => setEditing(w)}>
                      Edit
                    </button>
                    {(w.count ?? 0) >= 2 && (
                      <button
                        type="button"
                        className={button}
                        disabled={busy}
                        title="Make one watch of this lot share its own: it takes an even share of every line"
                        onClick={() => send({ action: "split-watch", id: w.id })}
                      >
                        Split one off
                      </button>
                    )}
                    {!s?.lines && (
                      <button
                        type="button"
                        className={button}
                        disabled={busy}
                        onClick={() =>
                          window.confirm(`Delete "${w.label}"?`) &&
                          send({ action: "delete-watch", id: w.id })
                        }
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </AdminTable>
      {rows.length > shown && (
        <button type="button" className={`${button} mt-3`} onClick={() => setShown(shown + PAGE)}>
          Show {Math.min(PAGE, rows.length - shown)} more
        </button>
      )}
    </div>
  );
}

// ─── To look at ─────────────────────────────────────────────────────────────

function IssuesView({ data, models }: { data: LedgerPageData; models: Map<string, ModelOption> }) {
  const unlinked = data.store.watches.filter((w) => w.status === "sold" && !w.modelFile);
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-2 font-display text-lg font-medium">
          Problems in the ledger · <span className="num">{data.issues.length}</span>
        </h2>
        {data.issues.length ? (
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {data.issues.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            None: every line is fully held, every sold watch has a sale.
          </p>
        )}
      </section>
      <section>
        <h2 className="mb-2 font-display text-lg font-medium">
          Catalogue sales with no money here · <span className="num">{data.unmatched.length}</span>
        </h2>
        <p className="mb-2 text-sm text-muted-foreground">
          The catalogue says these sold, but no sold watch in the ledger is them. Link a watch to
          the model, or add its lines.
        </p>
        <ul className="space-y-1 text-sm">
          {data.unmatched.map((f) => {
            const m = models.get(f);
            return (
              <li key={f}>
                {m ? (
                  <Link
                    href={routeToCollectionBrandModelPage(m.brand, m.legend)}
                    className="underline-offset-4 hover:text-brand hover:underline"
                  >
                    {m.legend}
                  </Link>
                ) : (
                  f
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <h2 className="mb-2 font-display text-lg font-medium">
          Sold watches with no catalogue model · <span className="num">{unlinked.length}</span>
        </h2>
        <p className="mb-2 text-sm text-muted-foreground">
          Private sales, or watches missing from the catalogue. Their profit counts as unlinked in
          the report.
        </p>
        <AdminTable>
          <tbody>
            {unlinked.map((w) => (
              <tr key={w.id} className="border-b border-border/60">
                <td className="py-1.5 pr-4">{w.label}</td>
                <td className="num py-1.5 pr-4 text-xs text-muted-foreground">{w.origin}</td>
                <td className="num py-1.5 pr-4">{money(data.summaries[w.id]?.profit ?? 0)}</td>
              </tr>
            ))}
          </tbody>
        </AdminTable>
      </section>
    </div>
  );
}
