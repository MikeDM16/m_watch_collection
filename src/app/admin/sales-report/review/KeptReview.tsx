"use client";

import { routeToCollectionBrandModelPage } from "@/app/services/commonFunctions";
import { SearchableSelect } from "@/components/ui/select";
import Link from "next/link";
import { Fragment, useMemo, useState } from "react";

import { AdminTable, Th } from "../components/primitives";
import type { KeptMatch, MatchesFile, MatchStatus } from "../salesData.types";
import { formatMoney } from "../salesStats";

export type KeptBody =
  | { action: "kept-model"; key: string; keptModel: string | null; expect?: string | null }
  | { action: "kept-link"; key: string; stock: string | null; expect?: string | null }
  | { action: "kept-reset"; key: string; what: "model" | "link" };

const LABEL: Record<MatchStatus, string> = {
  user: "You",
  claude: "Claude",
  "ledger-link": "Ledger",
  high: "Auto",
  ambiguous: "Ambiguous",
  unmatched: "Unmatched",
  "no-ledger": "None",
  "stale-override": "Stale",
};

const OPEN: MatchStatus[] = ["stale-override", "unmatched", "ambiguous"];

const settled = (s: { status: MatchStatus; by?: "user" | "claude" }) =>
  s.status === "user" || (s.status === "no-ledger" && s.by === "user");

/** Decided by you: the model, and the link when there is one to decide. */
const isConfirmed = (k: KeptMatch) => settled(k.model) && (!k.link || settled(k.link));

/** Open cases first, then Claude's calls, then automatic ones, then yours. */
const rank = (k: KeptMatch) => {
  const states = [k.model, ...(k.link ? [k.link] : [])];
  if (states.some((s) => OPEN.includes(s.status))) return 0;
  if (states.some((s) => s.status === "claude" || (s.status === "no-ledger" && s.by !== "user")))
    return 1;
  if (!isConfirmed(k)) return 2;
  return 3;
};

function Chip({ status }: { status: MatchStatus }) {
  return (
    <span className="lab whitespace-nowrap rounded-sm border border-border px-1.5 py-0.5">
      {LABEL[status]}
    </span>
  );
}

/**
 * The Collection tab's watches: which catalogue model each one is, and — for a
 * watch whose money sits in the year tabs (kept out of a lot) — which stock
 * item holds it, so that money counts as kept and only once.
 */
export function KeptReview({
  matches,
  busy,
  send,
}: {
  matches: MatchesFile;
  busy: string | null;
  send: (body: KeptBody) => void;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [showDone, setShowDone] = useState(false);
  const kept = useMemo(() => matches.kept ?? [], [matches.kept]);
  const models = useMemo(
    () => new Map((matches.ownedModels ?? []).map((m) => [m.modelFile, m])),
    [matches.ownedModels],
  );
  const stock = useMemo(
    () => new Map((matches.stockItems ?? []).map((s) => [s.key, s])),
    [matches.stockItems],
  );
  const rows = useMemo(
    () =>
      [...kept]
        .filter((k) => showDone || !isConfirmed(k))
        .sort((a, b) => rank(a) - rank(b) || a.label.localeCompare(b.label)),
    [kept, showDone],
  );
  if (!matches.kept) return null;

  const done = kept.filter(isConfirmed).length;
  const button =
    "rounded-sm border border-border px-2 py-0.5 text-xs transition-colors hover:border-brand hover:text-brand disabled:opacity-40";
  const disabled = busy !== null;

  const modelOptions = (k: KeptMatch) => {
    const first = k.model.candidates.map((c) => c.modelFile);
    const rest = [...models.keys()].filter((f) => !first.includes(f));
    return [...first, ...rest]
      .filter((f) => models.has(f) && f !== k.model.modelFile)
      .map((f) => {
        const t = k.model.candidates.find((c) => c.modelFile === f)?.t;
        return {
          value: f,
          label: `${t !== undefined ? `${t.toFixed(2)} · ` : ""}${models.get(f)!.legend}`,
        };
      });
  };
  const stockOptions = (k: KeptMatch) => {
    const first = (k.link?.candidates ?? []).map((c) => c.stock);
    const rest = [...stock.keys()].filter((s) => !first.includes(s));
    return [...first, ...rest]
      .filter((s) => stock.has(s) && s !== k.link?.stock)
      .map((s) => {
        const it = stock.get(s)!;
        const t = k.link?.candidates.find((c) => c.stock === s)?.t;
        return {
          value: s,
          label: `${t !== undefined ? `${t.toFixed(2)} · ` : ""}${it.label} · ${it.ref} · ${formatMoney(it.net)}`,
        };
      });
  };

  return (
    <div className="mt-12 border-t border-border pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-title font-medium">
          Watches kept · <span className="num">{kept.length}</span>
        </h2>
        <label className="flex items-center gap-2 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={showDone}
            onChange={(e) => setShowDone(e.target.checked)}
          />
          Show the {done} confirmed
        </label>
      </div>
      <p className="mb-4 mt-1 max-w-2xl text-sm text-muted-foreground">
        The workbook&apos;s Collection tab. Which catalogue model each watch is, and for a watch
        whose money sits in the year tabs (kept out of a lot), the stock item that holds it — so
        that money counts as kept, once. Confirmed <span className="num">{done}</span> of{" "}
        <span className="num">{kept.length}</span>.
      </p>

      {rows.length === 0 ? (
        <p className="border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          Every kept watch is confirmed.
        </p>
      ) : (
        <AdminTable>
          <thead>
            <tr className="border-b border-border">
              <Th>Collection tab</Th>
              <Th>Catalogue model</Th>
              <Th>Its money</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((k) => {
              const model = k.model.modelFile ? models.get(k.model.modelFile) : undefined;
              const item = k.link?.stock ? stock.get(k.link.stock) : undefined;
              const isOpen = open === k.key;
              return (
                <Fragment key={k.key}>
                  <tr className="border-b border-border/60 align-top">
                    <td className="py-2 pr-4">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : k.key)}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Hide" : "Show"} choices for ${k.label}`}
                        className="mr-2 w-4 text-muted-foreground hover:text-foreground"
                      >
                        {isOpen ? "▾" : "▸"}
                      </button>
                      {k.label}
                      <span className="num ml-2 text-xs text-muted-foreground">{k.ref}</span>
                    </td>
                    <td className="py-2 pr-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <Chip status={k.model.status} />
                        {model ? (
                          <Link
                            href={routeToCollectionBrandModelPage(model.brand, model.legend)}
                            className="underline-offset-4 hover:text-brand hover:underline"
                          >
                            {model.legend}
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">
                            {k.model.status === "no-ledger" ? "Not in the catalogue" : "—"}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-2 pr-4 text-xs">
                      {!k.link ? (
                        <span className="text-muted-foreground">
                          Collection tab · {formatMoney(k.net)}
                        </span>
                      ) : (
                        <div className="flex flex-wrap items-center gap-2">
                          <Chip status={k.link.status} />
                          {item ? (
                            <span>
                              {item.label} · {item.ref}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">
                              {k.link.status === "no-ledger"
                                ? `Collection tab only · ${formatMoney(k.net)}`
                                : "—"}
                            </span>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="py-2 pr-4">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {k.model.modelFile && !settled(k.model) && (
                          <button
                            type="button"
                            className={button}
                            disabled={disabled}
                            onClick={() =>
                              send({
                                action: "kept-model",
                                key: k.key,
                                keptModel: k.model.modelFile,
                                expect: k.model.modelFile,
                              })
                            }
                          >
                            Confirm model
                          </button>
                        )}
                        {k.link?.stock && !settled(k.link) && (
                          <button
                            type="button"
                            className={button}
                            disabled={disabled}
                            onClick={() =>
                              send({
                                action: "kept-link",
                                key: k.key,
                                stock: k.link!.stock,
                                expect: k.link!.stock,
                              })
                            }
                          >
                            Confirm link
                          </button>
                        )}
                        {busy === k.key && (
                          <span className="text-xs text-muted-foreground">saving…</span>
                        )}
                      </div>
                    </td>
                  </tr>
                  {isOpen && (
                    <tr className="border-b border-border/60 bg-muted/30">
                      <td colSpan={4} className="px-6 py-3 text-xs">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div>
                            <div className="lab mb-2">Catalogue model</div>
                            <SearchableSelect
                              options={modelOptions(k)}
                              value=""
                              placeholder="Candidates, then every unsold model…"
                              onChange={(f) =>
                                send({ action: "kept-model", key: k.key, keptModel: f })
                              }
                            />
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {!(k.model.status === "no-ledger" && k.model.by === "user") && (
                                <button
                                  type="button"
                                  className={button}
                                  disabled={disabled}
                                  onClick={() =>
                                    send({ action: "kept-model", key: k.key, keptModel: null })
                                  }
                                >
                                  Not in the catalogue
                                </button>
                              )}
                              {k.model.by && (
                                <button
                                  type="button"
                                  className={button}
                                  disabled={disabled}
                                  onClick={() =>
                                    send({ action: "kept-reset", key: k.key, what: "model" })
                                  }
                                  title="Forget this decision and let the matcher propose again"
                                >
                                  Reset
                                </button>
                              )}
                            </div>
                            {k.model.reason && (
                              <p className="mt-2 text-muted-foreground">
                                <span className="text-foreground">Decision:</span> {k.model.reason}
                              </p>
                            )}
                            {k.model.candidates.length > 0 && (
                              <ol className="mt-3 space-y-1 text-muted-foreground">
                                {k.model.candidates.map((c) => (
                                  <li key={c.modelFile}>
                                    <span className="num text-foreground">{c.t.toFixed(2)}</span>{" "}
                                    {models.get(c.modelFile)?.legend ?? c.modelFile} · {c.note}
                                  </li>
                                ))}
                              </ol>
                            )}
                          </div>
                          <div>
                            <div className="lab mb-2">Its money, if in the year tabs</div>
                            <SearchableSelect
                              options={stockOptions(k)}
                              value=""
                              placeholder="Candidates, then everything not sold yet…"
                              onChange={(s) => send({ action: "kept-link", key: k.key, stock: s })}
                            />
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {k.link &&
                                !(k.link.status === "no-ledger" && k.link.by === "user") && (
                                  <button
                                    type="button"
                                    className={button}
                                    disabled={disabled}
                                    onClick={() =>
                                      send({ action: "kept-link", key: k.key, stock: null })
                                    }
                                    title="Its money is all in the Collection tab"
                                  >
                                    No link
                                  </button>
                                )}
                              {k.link?.by && (
                                <button
                                  type="button"
                                  className={button}
                                  disabled={disabled}
                                  onClick={() =>
                                    send({ action: "kept-reset", key: k.key, what: "link" })
                                  }
                                  title="Forget this decision and let the matcher propose again"
                                >
                                  Reset
                                </button>
                              )}
                            </div>
                            {k.link?.reason && (
                              <p className="mt-2 text-muted-foreground">
                                <span className="text-foreground">Decision:</span> {k.link.reason}
                              </p>
                            )}
                            {(k.paid !== null || k.flags.length > 0) && (
                              <p className="mt-2 text-muted-foreground">
                                {k.paid !== null && <>Noted beside it: €{k.paid}. </>}
                                {k.flags.map((f) => `⚑ ${f}`).join(" · ")}
                              </p>
                            )}
                            {(k.link?.candidates.length ?? 0) > 0 && (
                              <ol className="mt-3 space-y-1 text-muted-foreground">
                                {k.link!.candidates.map((c) => {
                                  const it = stock.get(c.stock);
                                  return (
                                    <li key={c.stock}>
                                      <span className="num text-foreground">{c.t.toFixed(2)}</span>{" "}
                                      {it ? `${it.label} · ${it.ref}` : c.stock} · {c.note}
                                    </li>
                                  );
                                })}
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
    </div>
  );
}
