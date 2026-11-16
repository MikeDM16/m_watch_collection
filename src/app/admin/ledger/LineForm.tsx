"use client";

import { Button } from "@/components/ui/button";
import { SearchableSelect } from "@/components/ui/select";
import { useMemo, useState } from "react";

import type { ModelOption } from "./editorTypes";
import type { Holder, LedgerGroup, LedgerLine, LedgerWatch, LineKind } from "./ledger.types";
import { LINE_KINDS, OVERHEAD } from "./ledgerActions";
import { button, cents, field, KIND_LABEL, STATUS_LABEL, todayIso } from "./ledgerFormat";

type Draft = Omit<LedgerLine, "id"> & { id?: string };

interface Row {
  id: string;
  pct: string;
}

/**
 * One line of money: when, in or out, how much, what for, and who holds it —
 * one watch, several (a lot, split by share), or overhead. An edited line keeps
 * its exact shares unless the holders are changed.
 */
export function LineForm({
  initial,
  preset,
  watches,
  groups,
  models,
  busy,
  onSave,
  onCancel,
  onDelete,
}: {
  initial: LedgerLine | null;
  /** Starting values for a new line (a cost already held by one watch). */
  preset?: Partial<LedgerLine>;
  watches: LedgerWatch[];
  groups: LedgerGroup[];
  models: Map<string, ModelOption>;
  busy: boolean;
  onSave: (line: Draft) => Promise<boolean>;
  onCancel: () => void;
  onDelete?: () => void;
}) {
  const base = initial ?? preset;
  const [date, setDate] = useState(base?.date ?? todayIso());
  const [direction, setDirection] = useState<LedgerLine["direction"]>(base?.direction ?? "out");
  const [amount, setAmount] = useState(base?.amount ? cents(base.amount) : "");
  const [kind, setKind] = useState<LineKind>(base?.kind ?? "purchase");
  const [text, setText] = useState(base?.text ?? "");
  const [note, setNote] = useState(base?.note ?? "");
  const [channel, setChannel] = useState(base?.channel ?? "");
  const [book, setBook] = useState<LedgerLine["book"]>(base?.book ?? "trade");
  const [bookTouched, setBookTouched] = useState(!!base?.book);
  const [group, setGroup] = useState(base?.group ?? "");
  const [rows, setRows] = useState<Row[]>(
    (base?.holders ?? []).map((h) => ({
      id: h.id,
      pct: String(Math.round(h.share * 10000) / 100),
    })),
  );
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const byId = useMemo(() => new Map(watches.map((w) => [w.id, w])), [watches]);
  const options = useMemo(
    () => [
      { value: OVERHEAD, label: "Overhead · no watch (boxes, batteries, a return)" },
      ...[...watches]
        .sort(
          (a, b) =>
            Number(a.status === "sold") - Number(b.status === "sold") ||
            a.label.localeCompare(b.label),
        )
        .map((w) => {
          const m = w.modelFile ? models.get(w.modelFile) : undefined;
          return {
            value: w.id,
            label: `${w.label} · ${STATUS_LABEL[w.status]}${m ? ` · ${m.legend}` : ""}${w.origin ? ` · ${w.origin}` : ""}`,
          };
        }),
    ],
    [watches, models],
  );
  const groupOptions = useMemo(
    () => [
      { value: "", label: "No group" },
      ...groups.map((g) => ({ value: g.id, label: `${g.label} · ${g.origin ?? g.id}` })),
    ],
    [groups],
  );

  const setHolders = (next: Row[]) => {
    setRows(next);
    setTouched(true);
    // Money for watches kept is the collection's; anything else is trading.
    if (!bookTouched && next.length) {
      const kept = next.every((r) => byId.get(r.id)?.status === "kept");
      setBook(kept ? "collection" : "trade");
    }
  };
  const total = rows.reduce((s, r) => s + (Number(r.pct) || 0), 0);

  async function submit() {
    setError(null);
    const value = Number(amount.replace(",", "."));
    if (!Number.isFinite(value) || value === 0) return setError("Enter an amount.");
    if (!rows.length) return setError("Pick who holds this money: a watch, several, or overhead.");
    let holders: Holder[];
    if (!touched && initial) holders = initial.holders;
    else {
      if (Math.abs(total - 100) > 0.05)
        return setError(`The shares add up to ${Math.round(total * 100) / 100}%, not 100%.`);
      holders = rows.map((r) => ({ id: r.id, share: (Number(r.pct) || 0) / total }));
    }
    const line: Draft = {
      ...(initial ?? {}),
      date,
      direction: kind === "sale" ? "in" : direction,
      amount: value,
      kind,
      text: text.trim(),
      note: note.trim() || null,
      channel: channel.trim() || undefined,
      book,
      group: group || undefined,
      holders,
    };
    if (initial?.id) line.id = initial.id;
    if (initial?.dateGuessed && date !== initial.date) delete line.dateGuessed;
    const ok = await onSave(line);
    if (ok) onCancel();
  }

  const label = "lab mb-1 block";
  return (
    <div className="mb-6 border border-border p-4">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h3 className="font-display text-lg font-medium">{initial ? "Edit line" : "New line"}</h3>
        {initial?.origin && (
          <span className="num text-xs text-muted-foreground">
            from {initial.origin}
            {initial.dateGuessed ? " · date taken from its block" : ""}
          </span>
        )}
      </div>
      <div className="grid gap-3 md:grid-cols-6">
        <label className="md:col-span-1">
          <span className={label}>Date</span>
          <input
            type="date"
            className={field}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label className="md:col-span-1">
          <span className={label}>Money</span>
          <select
            className={field}
            value={kind === "sale" ? "in" : direction}
            disabled={kind === "sale"}
            onChange={(e) => setDirection(e.target.value as LedgerLine["direction"])}
          >
            <option value="out">Out (spent)</option>
            <option value="in">In (received)</option>
          </select>
        </label>
        <label className="md:col-span-1">
          <span className={label}>Amount €</span>
          <input
            className={`${field} num`}
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </label>
        <label className="md:col-span-1">
          <span className={label}>Kind</span>
          <select
            className={field}
            value={kind}
            onChange={(e) => setKind(e.target.value as LineKind)}
          >
            {LINE_KINDS.map((k) => (
              <option key={k} value={k}>
                {KIND_LABEL[k]}
              </option>
            ))}
          </select>
        </label>
        <label className="md:col-span-1">
          <span className={label}>Book</span>
          <select
            className={field}
            value={book}
            onChange={(e) => {
              setBook(e.target.value as LedgerLine["book"]);
              setBookTouched(true);
            }}
          >
            <option value="trade">Trading</option>
            <option value="collection">Collection (kept)</option>
          </select>
        </label>
        <label className="md:col-span-1">
          <span className={label}>Channel</span>
          <input
            className={field}
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            placeholder="Catawiki, OLX…"
          />
        </label>
        <label className="md:col-span-3">
          <span className={label}>Description</span>
          <input className={field} value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label className="md:col-span-3">
          <span className={label}>Note</span>
          <input className={field} value={note ?? ""} onChange={(e) => setNote(e.target.value)} />
        </label>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <span className="lab">Held by</span>
          <span
            className={`num text-xs ${Math.abs(total - 100) > 0.05 && rows.length ? "text-brand" : "text-muted-foreground"}`}
          >
            {rows.length ? `${Math.round(total * 100) / 100}%` : ""}
          </span>
        </div>
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div key={`${r.id}-${i}`} className="flex items-center gap-2">
              <div className="min-w-0 flex-1">
                <SearchableSelect
                  options={options}
                  value={r.id}
                  onChange={(id) => setHolders(rows.map((x, j) => (j === i ? { ...x, id } : x)))}
                />
              </div>
              <input
                className={`${field} num w-24`}
                inputMode="decimal"
                value={r.pct}
                aria-label="Share in percent"
                onChange={(e) =>
                  setHolders(rows.map((x, j) => (j === i ? { ...x, pct: e.target.value } : x)))
                }
              />
              <span className="text-xs text-muted-foreground">%</span>
              <button
                type="button"
                className={button}
                onClick={() => setHolders(rows.filter((_, j) => j !== i))}
                aria-label="Remove this holder"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <div className="w-full max-w-md">
            <SearchableSelect
              options={options.filter((o) => !rows.some((r) => r.id === o.value))}
              value=""
              placeholder={rows.length ? "Add another holder…" : "Who holds this money?"}
              onChange={(id) => setHolders([...rows, { id, pct: rows.length ? "0" : "100" }])}
            />
          </div>
          {rows.length > 1 && (
            <button
              type="button"
              className={button}
              onClick={() =>
                setHolders(
                  rows.map((r) => ({
                    ...r,
                    pct: String(Math.round((100 / rows.length) * 100) / 100),
                  })),
                )
              }
            >
              Split evenly
            </button>
          )}
        </div>
        <label className="mt-3 block max-w-md">
          <span className={label}>Group (a lot bought together)</span>
          <SearchableSelect options={groupOptions} value={group} onChange={setGroup} />
        </label>
      </div>

      {error && <p className="mt-3 text-sm text-brand">{error}</p>}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Button type="button" size="sm" disabled={busy} onClick={submit}>
          {busy ? "Saving…" : "Save line"}
        </Button>
        <button type="button" className={button} onClick={onCancel} disabled={busy}>
          Cancel
        </button>
        {onDelete && (
          <button
            type="button"
            className={`${button} ml-auto`}
            disabled={busy}
            onClick={() => window.confirm("Delete this line?") && onDelete()}
          >
            Delete line
          </button>
        )}
      </div>
    </div>
  );
}
