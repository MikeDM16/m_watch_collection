/**
 * _seed.ts — the workbook, read as a back-office ledger: every money line the
 * workbook holds, already split between the watches it belongs to, exactly as
 * the sales report counts it. Used twice:
 *
 *   import.ts    seeds .ledger/ledger.json from it, once;
 *   snapshot.ts  writes it after every `npm run sales:sync`, so the compare view
 *                on /admin/ledger can pair the workbook's lines with the
 *                ledger's and pull a missing one in, already split.
 *
 * WHERE EACH LINE GOES
 *   Each part of a workbook row (its E or F side) becomes one line. Its holders
 *   are wherever the pipeline put its money: the sold watch (split between the
 *   catalogue models that share a payout), the watch not sold yet (a lot's
 *   unsold share, less what kept watches claim through their links), the kept
 *   watch, or overhead. Shares are the pipeline's own allocations, at full
 *   precision. Pass-throughs (cancelled orders, purchases refunded in full) net
 *   to zero and are left out, as the report leaves them out.
 *
 * Ids are derived from the workbook (a watch from its unit, stock item or kept
 * key; a line from its cell), so the same workbook watch gets the same id in the
 * seed and in every later snapshot.
 */

import crypto from "crypto";

import type {
  LedgerGroup,
  LedgerLine,
  LedgerWatch,
  LineKind,
} from "../../src/app/admin/ledger/ledger.types";
import type { MatchesFile, OverridesFile } from "../../src/app/admin/sales-report/salesData.types";
import { interpretCollection, TRADE_WORDS } from "../sales/_collection";
import {
  interpretLedger,
  isSaleRowRefund,
  linkHints,
  type Part,
  type Unit,
} from "../sales/_ledger";
import { hasKeyword, round2 } from "../sales/_shared";
import { ACCEPTED, itemDate, itemLinks, soldDates, type ItemLink } from "../sales/3_build";
import type { LedgerBlock, LedgerDump } from "../sales/types";

const OVERHEAD = "overhead";
const KEPT_ACCEPTED: readonly string[] = ["user", "claude", "high"];
const COST_KINDS: readonly string[] = ["purchase", "service", "strap", "box", "shipping", "fees"];

export const ledgerId = (prefix: string, seed: string) =>
  `${prefix}-${crypto.createHash("sha1").update(seed).digest("hex").slice(0, 10)}`;

const firstDate = (block: LedgerBlock) => block.rows.find((r) => r.date)?.date ?? null;

export interface Seed {
  groups: LedgerGroup[];
  watches: LedgerWatch[];
  lines: LedgerLine[];
  /** Pass-throughs left out, as report lines. */
  passthrough: string[];
  /** Anything that does not add up: the seed must not be used while there are any. */
  problems: string[];
}

export function seedFromWorkbook(dump: LedgerDump, matches: MatchesFile, ov: OverridesFile): Seed {
  const problems: string[] = [];
  if (matches.ledgerSha256 !== dump.source.sha256)
    problems.push("matches.json was built from another workbook: run `npm run sales:sync`.");

  const interp = interpretLedger(dump, ov);
  linkHints(interp, dump.hints);
  const coll = interpretCollection(dump.collection ?? [], ov);
  const links = itemLinks(interp, matches.kept ?? []);
  const soldOn = soldDates(interp, matches);

  for (const b of interp.blocks) {
    if (Math.abs(b.delta) > 0.01) problems.push(`${b.block.id}: block off by €${b.delta}`);
    if (Math.abs(b.stockItemsDelta) > 0.01)
      problems.push(`${b.block.id}: stock items off by €${b.stockItemsDelta}`);
  }
  for (const kb of coll.blocks)
    if (Math.abs(kb.delta) > 0.01)
      problems.push(`${kb.block.id}: Collection block off by €${kb.delta}`);

  const holders = new Map<Part, Map<string, number>>();
  const hold = (part: Part, holder: string, share: number) => {
    if (share <= 0) return;
    const m = holders.get(part) ?? new Map<string, number>();
    m.set(holder, (m.get(holder) ?? 0) + share);
    holders.set(part, m);
  };
  const watches: LedgerWatch[] = [];

  // ── Sold watches: one per catalogue model sharing the unit's payout.
  const claims = new Map<string, { modelFile: string; share: number; status: string }[]>();
  for (const m of Object.values(matches.byModel)) {
    if (!m.unit || !ACCEPTED.includes(m.status)) continue;
    claims.set(m.unit, [
      ...(claims.get(m.unit) ?? []),
      { modelFile: m.modelFile, share: m.share || 1, status: m.status },
    ]);
  }
  const soldWatch = (u: Unit, modelFile: string | null, share: number, status?: string) => {
    const w: LedgerWatch = {
      id: ledgerId("w", `unit:${u.key}|${modelFile ?? "unlinked"}`),
      label: u.label,
      modelFile,
      status: "sold",
      group: u.block.id,
      acquired: u.purchaseDate,
      origin: `${u.block.sheet}!${u.saleRow.row}`,
      flags: u.flags.length ? [...u.flags] : undefined,
      linkedBy: status as LedgerWatch["linkedBy"],
    };
    const sold = soldOn(u);
    if (sold && sold !== u.sales[0]?.row.date) w.sold = sold;
    const gain = u.hints.find((h) => h.gain !== null)?.gain ?? null;
    if (gain !== null && share === 1) w.archive = { userGain: round2(gain) };
    watches.push(w);
    for (const s of u.sales) hold(s, w.id, share);
    for (const a of u.allocations) hold(a.part, w.id, a.share * share);
  };
  for (const u of interp.units) {
    const claimed = claims.get(u.key) ?? [];
    const total = claimed.reduce((s, c) => s + c.share, 0);
    if (total > 1 + 1e-6) problems.push(`${u.key}: claimed ${total} times over`);
    for (const c of claimed) soldWatch(u, c.modelFile, c.share, c.status);
    if (1 - total > 1e-6) soldWatch(u, null, 1 - total);
  }

  // ── Kept watches (the Collection tab), and the stock items they claim.
  const keptMatch = new Map((matches.kept ?? []).map((k) => [k.key, k]));
  const keptId = (key: string) => ledgerId("w", `kept:${key}`);
  const linkOf = new Map<string, ItemLink>();
  for (const l of links.values()) for (const k of l.kept) linkOf.set(k, l);
  for (const kw of coll.watches) {
    const m = keptMatch.get(kw.key);
    const modelFile =
      m?.model.modelFile && KEPT_ACCEPTED.includes(m.model.status) ? m.model.modelFile : null;
    let flags = [...(m?.flags ?? kw.flags)];
    let acquired = kw.purchaseDate;
    const l = linkOf.get(kw.key);
    if (l && (flags.includes("no-cost") || flags.includes("no-purchase"))) {
      acquired = itemDate(l.item) ?? acquired;
      flags = flags.filter((f) => !["no-cost", "no-purchase", "undated"].includes(f));
    }
    const w: LedgerWatch = {
      id: keptId(kw.key),
      label: kw.label,
      modelFile,
      status: "kept",
      group: kw.block.id,
      acquired,
      origin: `${kw.block.sheet}!${kw.anchor.row}`,
      flags: flags.length ? flags : undefined,
      linkedBy: modelFile ? (m!.model.status as LedgerWatch["linkedBy"]) : undefined,
      paidNote: kw.paid ?? undefined,
    };
    if (l)
      w.archive = {
        link: {
          stock: l.item.key,
          ref: `${l.item.block.sheet}!${l.item.anchor.row}`,
          label: l.item.label,
        },
      };
    watches.push(w);
    for (const a of kw.allocations) hold(a.part, w.id, a.share);
  }

  // ── Watches not sold yet: what kept watches do not claim stays for sale.
  for (const b of interp.blocks) {
    for (const it of b.stockItems) {
      const l = links.get(it.key);
      const fraction = l?.fraction ?? 0;
      let forSale: LedgerWatch | null = null;
      if (1 - fraction > 1e-9) {
        forSale = {
          id: ledgerId("w", `stock:${it.key}`),
          label: it.label,
          modelFile: null,
          status: "for-sale",
          group: b.block.id,
          acquired: itemDate(it),
          origin: `${b.block.sheet}!${it.anchor.row}`,
          count: it.kind === "lot-share" ? it.count : undefined,
        };
        watches.push(forSale);
      }
      for (const a of it.allocations) {
        if (forSale) hold(a.part, forSale.id, a.share * (1 - fraction));
        for (const k of l?.kept ?? [])
          hold(a.part, keptId(k), (a.share * fraction) / l!.kept.length);
      }
    }
    for (const a of b.overhead) hold(a.part, OVERHEAD, a.share);
  }

  // ── Lines and groups.
  const lines: LedgerLine[] = [];
  const passthrough: string[] = [];
  const groups: LedgerGroup[] = [];
  const toLines = (block: LedgerBlock, parts: Part[], book: LedgerLine["book"]) => {
    for (const p of parts) {
      if (p.kind === "passthrough") {
        passthrough.push(`- ${p.ref} ${p.row.text || "(no description)"}: ${p.side} ${p.amount}`);
        continue;
      }
      const hs = holders.get(p);
      const total = hs ? [...hs.values()].reduce((s, x) => s + x, 0) : 0;
      if (Math.abs(total - 1) > 1e-6) {
        problems.push(`${p.ref}: its holders' shares add up to ${total}`);
        continue;
      }
      const kind: LineKind =
        p.side === "E"
          ? p.kind === "sale"
            ? "sale"
            : "refund"
          : ((COST_KINDS.includes(p.kind) ? p.kind : "other") as LineKind);
      const text =
        p.side === "F"
          ? (isSaleRowRefund(p.row) ? p.row.note : p.row.text) || p.row.note || "(no description)"
          : p.row.text || p.row.note || "(no description)";
      const date = p.row.date ?? firstDate(block);
      if (!date) {
        problems.push(`${p.ref}: no date in its row or block`);
        continue;
      }
      lines.push({
        id: ledgerId("l", p.ref),
        date,
        ...(p.row.date ? {} : { dateGuessed: true as const }),
        direction: p.side === "E" ? "in" : "out",
        amount: p.amount,
        kind,
        text,
        note: p.row.note,
        book,
        group: block.id,
        holders: [...hs!].map(([holder, share]) => ({ id: holder, share })),
        origin: p.ref,
        fingerprint: p.key,
        ...(book === "collection" && hasKeyword(p.row.text, TRADE_WORDS)
          ? { tradeIn: true as const }
          : {}),
      });
    }
  };
  for (const b of interp.blocks) {
    toLines(b.block, b.parts, "trade");
    groups.push({
      id: b.block.id,
      label: b.block.rows[0]?.text || b.block.caption || b.block.id,
      kind: b.kind,
      origin: `${b.block.sheet}!${b.block.firstRow}:${b.block.lastRow}`,
      size: b.units[0]?.lotSize,
      total: b.block.computedTotal,
    });
  }
  for (const kb of coll.blocks) {
    toLines(kb.block, kb.parts, "collection");
    groups.push({
      id: kb.block.id,
      label: kb.block.rows[0]?.text || kb.block.id,
      kind: "collection",
      origin: `${kb.block.sheet}!${kb.block.firstRow}:${kb.block.lastRow}`,
      total: kb.block.computedTotal,
    });
  }

  return { groups, watches, lines, passthrough, problems };
}
