"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useMemo, useState } from "react";

import { AdminTable, StatTile, Th } from "../sales-report/components/primitives";
import { catawikiPayout } from "./catawiki";
import type { ModelLedgerData } from "./editorTypes";
import type { LedgerWatch } from "./ledger.types";
import {
  button,
  cents,
  dmy,
  field,
  KIND_LABEL,
  money,
  percent,
  STATUS_LABEL,
  todayIso,
} from "./ledgerFormat";
import { LineForm } from "./LineForm";
import { useLedgerSend } from "./useLedgerSend";

/**
 * A model's money, under its editor: the ledger's watch that is this model, its
 * lines and totals, and the two things done most: add a cost, record a sale.
 * Private, like the ledger: it saves to `.ledger/`, never to the model file —
 * except a sale's public report (hammer, date, listing), which goes to the
 * model file once its screenshot is in the resources checkout.
 */
export function LedgerPanel({ data }: { data: ModelLedgerData | null }) {
  const heading = (
    <div className="mb-4 mt-12 flex flex-wrap items-baseline justify-between gap-2 border-t border-border pt-6">
      <h2 className="font-display text-title font-medium">Ledger</h2>
      <span className="text-xs text-muted-foreground">
        Private: saved in <code className="num">.ledger/</code> on this machine, never in the model
        file.
      </span>
    </div>
  );
  if (!data) {
    return (
      <section>
        {heading}
        <p className="text-sm text-muted-foreground">
          No ledger yet.{" "}
          <Link href="/admin/ledger" className="text-brand underline-offset-4 hover:underline">
            Set it up
          </Link>
          .
        </p>
      </section>
    );
  }
  return (
    <section>
      {heading}
      <PanelBody data={data} />
    </section>
  );
}

function PanelBody({ data }: { data: ModelLedgerData }) {
  const { busy, status, send } = useLedgerSend(data.version);
  const [form, setForm] = useState<{ kind: "cost" | "sale"; watch: LedgerWatch } | null>(null);
  const models = useMemo(() => new Map(data.models.map((m) => [m.modelFile, m])), [data.models]);

  const addWatch = (status: LedgerWatch["status"]) =>
    send({
      action: "save-watch",
      watch: { label: data.legend, modelFile: data.modelFile, status },
    });

  return (
    <div>
      {status && (
        <p
          role="status"
          className={`mb-4 text-sm ${status.error ? "border border-brand/40 bg-brand/5 px-3 py-2" : "text-muted-foreground"}`}
        >
          {status.text}
        </p>
      )}

      {!data.watches.length && (
        <div className="border border-dashed border-border p-6 text-sm">
          <p className="mb-3 text-muted-foreground">
            This model is not in the ledger. Add it, then its purchase and extras; or find the watch
            in the{" "}
            <Link
              href="/admin/ledger?view=watches"
              className="text-brand underline-offset-4 hover:underline"
            >
              ledger&apos;s watches
            </Link>{" "}
            and link it to this model.
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={button}
              disabled={busy}
              onClick={() => addWatch("kept")}
            >
              Add as kept
            </button>
            <button
              type="button"
              className={button}
              disabled={busy}
              onClick={() => addWatch("for-sale")}
            >
              Add as for sale
            </button>
          </div>
        </div>
      )}

      {data.watches.map((w) => {
        const s = data.summaries[w.id];
        const lines = data.lines
          .filter((l) => l.holders.some((h) => h.id === w.id))
          .sort((a, b) => a.date.localeCompare(b.date));
        return (
          <div key={w.id} className="mb-8">
            <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
              <span className="font-medium">{w.label}</span>
              <span className="lab rounded-sm border border-border px-1.5 py-0.5">
                {STATUS_LABEL[w.status]}
              </span>
              <span className="num text-muted-foreground">bought {dmy(w.acquired)}</span>
              <span className="text-muted-foreground">
                from{" "}
                {w.source
                  ? (data.sources.find((x) => x.id === w.source)?.label ?? w.source)
                  : "— (not set)"}
              </span>
              {w.origin && <span className="num text-xs text-muted-foreground">{w.origin}</span>}
              <Link
                href={`/admin/ledger?view=lines&watch=${encodeURIComponent(w.id)}`}
                className="ml-auto text-xs text-muted-foreground underline-offset-4 hover:text-brand hover:underline"
              >
                Its lines in the ledger →
              </Link>
            </div>
            <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
              <StatTile
                label="Cost"
                value={money((s?.cost ?? 0) - (s?.refunds ?? 0))}
                sub="net of refunds"
              />
              <StatTile label="Received" value={s?.received ? money(s.received) : "—"} />
              <StatTile
                label="Profit"
                value={w.status === "sold" && s ? money(s.profit) : "—"}
                sub={w.status === "sold" ? undefined : "once sold"}
              />
              <StatTile label="Lines" value={String(lines.length)} />
            </div>

            {lines.length > 0 && (
              <div className="mt-4">
                <AdminTable>
                  <thead>
                    <tr className="border-b border-border">
                      <Th>Date</Th>
                      <Th>Kind</Th>
                      <Th>Description</Th>
                      <Th>Its share</Th>
                      <Th>In</Th>
                      <Th>Out</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {lines.map((l) => {
                      const share = l.holders.find((h) => h.id === w.id)?.share ?? 0;
                      const amount = l.amount * share;
                      return (
                        <tr key={l.id} className="border-b border-border/60">
                          <td className="num whitespace-nowrap py-1.5 pr-4">{dmy(l.date)}</td>
                          <td className="py-1.5 pr-4 text-xs">{KIND_LABEL[l.kind]}</td>
                          <td className="py-1.5 pr-4">{l.text}</td>
                          <td className="num py-1.5 pr-4 text-xs text-muted-foreground">
                            {share < 0.9999 ? `${percent(share)} of ${money(l.amount)}` : "all"}
                          </td>
                          <td className="num py-1.5 pr-4">
                            {l.direction === "in" ? money(amount) : ""}
                          </td>
                          <td className="num py-1.5 pr-4">
                            {l.direction === "out" ? money(amount) : ""}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </AdminTable>
              </div>
            )}

            {form?.watch.id === w.id && form.kind === "cost" ? (
              <div className="mt-4">
                <LineForm
                  initial={null}
                  preset={{
                    direction: "out",
                    kind: w.status === "for-sale" || w.status === "kept" ? "service" : "other",
                    book: w.status === "kept" ? "collection" : "trade",
                    holders: [{ id: w.id, share: 1 }],
                  }}
                  watches={data.allWatches}
                  groups={data.groups}
                  models={models}
                  busy={busy}
                  onSave={(line) => send({ action: "save-line", line })}
                  onCancel={() => setForm(null)}
                />
              </div>
            ) : form?.watch.id === w.id && form.kind === "sale" ? (
              <SaleForm
                data={data}
                watch={w}
                busy={busy}
                onCancel={() => setForm(null)}
                onSave={async (action) => {
                  if (await send(action)) setForm(null);
                }}
              />
            ) : (
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  className={button}
                  onClick={() => setForm({ kind: "cost", watch: w })}
                >
                  Add a cost
                </button>
                {w.status !== "sold" && (
                  <button
                    type="button"
                    className={button}
                    onClick={() => setForm({ kind: "sale", watch: w })}
                  >
                    Record a sale
                  </button>
                )}
                {w.status === "sold" && !data.saleReport && (
                  <PublicReportForm data={data} busy={busy} send={send} />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/** "2026-03-14" ↔ "14/03/2026". */
const toDmy = (iso: string) => iso.split("-").reverse().join("/");

function SaleForm({
  data,
  watch,
  busy,
  onSave,
  onCancel,
}: {
  data: ModelLedgerData;
  watch: LedgerWatch;
  busy: boolean;
  onSave: (action: Parameters<ReturnType<typeof useLedgerSend>["send"]>[0]) => Promise<void>;
  onCancel: () => void;
}) {
  const [hammer, setHammer] = useState("");
  const [auction, setAuction] = useState(todayIso());
  const [url, setUrl] = useState("");
  const [channel, setChannel] = useState("Catawiki");
  const [shipping, setShipping] = useState("0");
  const [net, setNet] = useState("");
  const [netTouched, setNetTouched] = useState(false);
  const [paid, setPaid] = useState(todayIso());
  const [writePublic, setWritePublic] = useState(!data.saleReport);
  const [error, setError] = useState<string | null>(null);

  const estimate = (h: string, s: string) => {
    const value = Number(h.replace(",", "."));
    const ship = Number(s.replace(",", ".")) || 0;
    if (!(value > 0)) return "";
    return cents(/catawiki/i.test(channel) ? catawikiPayout(value, ship) : value + ship);
  };
  const shownNet = netTouched ? net : estimate(hammer, shipping);

  async function submit() {
    setError(null);
    const h = Number(hammer.replace(",", "."));
    const n = Number(shownNet.replace(",", "."));
    if (!(n > 0)) return setError("Enter the payout as it arrived.");
    if (writePublic && !(h > 0)) return setError("The public sale report needs the hammer price.");
    await onSave({
      action: "record-sale",
      watchId: watch.id,
      sale: { date: paid, amount: n, channel, text: `Venda ${watch.label}` },
      soldOn: auction,
      publicReport: writePublic
        ? { price: h, date: toDmy(auction), url: url.trim() || undefined }
        : undefined,
    });
  }

  const lab = "lab mb-1 block";
  return (
    <div className="mt-4 border border-border p-4">
      <h3 className="mb-3 font-display text-lg font-medium">Record a sale</h3>
      <div className="grid gap-3 md:grid-cols-4">
        <label>
          <span className={lab}>Hammer €</span>
          <input
            className={`${field} num`}
            inputMode="decimal"
            value={hammer}
            onChange={(e) => setHammer(e.target.value)}
          />
        </label>
        <label>
          <span className={lab}>Auction / sale date</span>
          <input
            type="date"
            className={field}
            value={auction}
            onChange={(e) => setAuction(e.target.value)}
          />
        </label>
        <label>
          <span className={lab}>Channel</span>
          <input className={field} value={channel} onChange={(e) => setChannel(e.target.value)} />
        </label>
        <label>
          <span className={lab}>Shipping the buyer paid €</span>
          <input
            className={`${field} num`}
            inputMode="decimal"
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
          />
        </label>
        <label className="md:col-span-2">
          <span className={lab}>Listing</span>
          <input
            className={field}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.catawiki.com/…"
          />
        </label>
        <label>
          <span className={lab}>Payout €{!netTouched && shownNet ? " (estimate)" : ""}</span>
          <input
            className={`${field} num`}
            inputMode="decimal"
            value={shownNet}
            onChange={(e) => {
              setNet(e.target.value);
              setNetTouched(true);
            }}
          />
        </label>
        <label>
          <span className={lab}>Paid out on</span>
          <input
            type="date"
            className={field}
            value={paid}
            onChange={(e) => setPaid(e.target.value)}
          />
        </label>
      </div>
      <label className="mt-3 flex items-start gap-2 text-sm">
        <input
          type="checkbox"
          className="mt-1"
          checked={writePublic}
          onChange={(e) => setWritePublic(e.target.checked)}
        />
        <span>
          Also write the public sale report (hammer, date, listing) to the model file.
          {!data.saleImage && (
            <span className="block text-xs text-brand">
              saleReport.JPG is not beside its photos yet: the payout is saved now, the public
              report waits for the screenshot.
            </span>
          )}
        </span>
      </label>
      {error && <p className="mt-3 text-sm text-brand">{error}</p>}
      <div className="mt-4 flex gap-2">
        <Button size="sm" disabled={busy} onClick={submit}>
          {busy ? "Saving…" : "Record the sale"}
        </Button>
        <button type="button" className={button} disabled={busy} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

/** For a sale already in the ledger whose model has no public report yet. */
function PublicReportForm({
  data,
  busy,
  send,
}: {
  data: ModelLedgerData;
  busy: boolean;
  send: ReturnType<typeof useLedgerSend>["send"];
}) {
  const [open, setOpen] = useState(false);
  const [hammer, setHammer] = useState("");
  const [date, setDate] = useState(todayIso());
  const [url, setUrl] = useState("");
  if (!open)
    return (
      <button
        type="button"
        className={button}
        onClick={() => setOpen(true)}
        disabled={!data.saleImage}
        title={data.saleImage ? undefined : "Add saleReport.JPG beside the photos first"}
      >
        Write the public sale report
      </button>
    );
  return (
    <div className="flex w-full flex-wrap items-end gap-2">
      <input
        className={`${field} num w-28`}
        inputMode="decimal"
        placeholder="Hammer €"
        value={hammer}
        onChange={(e) => setHammer(e.target.value)}
      />
      <input
        type="date"
        className={`${field} w-40`}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        className={`${field} max-w-sm`}
        placeholder="Listing URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        size="sm"
        disabled={busy}
        onClick={() =>
          send({
            action: "sale-report",
            modelFile: data.modelFile,
            publicReport: {
              price: Number(hammer.replace(",", ".")),
              date: toDmy(date),
              url: url.trim() || undefined,
            },
          })
        }
      >
        Write it
      </Button>
    </div>
  );
}
