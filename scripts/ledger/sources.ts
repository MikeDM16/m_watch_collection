/**
 * sources.ts — where each watch was bought, in the back-office ledger
 * (.ledger/ledger.json, gitignored). The list of sources lives in the store,
 * not in code: a seller can be a private person and the repo is public.
 *
 * Usage:
 *   npm run ledger:sources                          coverage per source
 *   npm run ledger:sources -- untagged [--status sold|kept|for-sale]
 *                                                   watches with no source, with hints
 *   npm run ledger:sources -- find <text>           watches whose name, model or purchase text match
 *   npm run ledger:sources -- apply <file.json> [--dry]
 *
 * The apply file:
 *   {
 *     "sources": [{ "id": "EBAY", "label": "eBay" }],   // added, or renamed by id
 *     "set": {
 *       "w-1a2b3c": "EBAY",                            // a watch id
 *       "Lucerne/Lucerne_Automatic_25J_1960": "EBAY",  // or its catalogue model
 *       "group:R24!82": "VINTED",                      // or every watch of a lot
 *       "model:Celsus/Celsus_PPAA782XG_2015": "OLX",   // a catalogue model with no ledger watch
 *       "w-4d5e6f": null                               // clears it
 *     },
 *     "deleteSources": ["OLD_ID"]
 *   }
 *
 * Every change goes through ledgerActions.ts (the back-office's own rules). A
 * write backs the store up first, like the back-office does, and is refused if
 * the file changed while this ran.
 */

import crypto from "crypto";
import fs from "fs";
import path from "path";

import type { LedgerStore, LedgerWatch } from "../../src/app/admin/ledger/ledger.types";
import { ActionRefused, applyAction } from "../../src/app/admin/ledger/ledgerActions";
import {
  purchaseText,
  sourceCoverage,
  sourcesOf,
  sourceSummary,
  suggestSources,
} from "../../src/app/admin/ledger/ledgerSources";
import { readJson, REPO_ROOT, writeFileAtomic } from "../sales/_shared";

const LEDGER_DIR = path.join(REPO_ROOT, ".ledger");
const STORE_JSON = path.join(LEDGER_DIR, "ledger.json");
const INDEX_JSON = path.join(REPO_ROOT, "src", "app", "data", "collection-index.json");
const MODELS_DIR = path.join(REPO_ROOT, "src", "app", "data", "watchModels");
const BACKUPS = 30;

interface ApplyFile {
  sources?: { id: string; label: string }[];
  set?: Record<string, string | null>;
  deleteSources?: string[];
}

const sha = (text: string) => crypto.createHash("sha256").update(text).digest("hex");

function loadStore(): { store: LedgerStore; version: string } {
  if (!fs.existsSync(STORE_JSON)) {
    console.error("No ledger yet: run `npm run ledger:import` first.");
    process.exit(1);
  }
  const raw = fs.readFileSync(STORE_JSON, "utf-8");
  return { store: JSON.parse(raw) as LedgerStore, version: sha(raw) };
}

/** modelFile → its catalogue legend ("1960 Lucerne Automatic 25J"). */
function legends(): Map<string, string> {
  const index = readJson<Record<string, { modelFile: string; legend: string }>>(INDEX_JSON);
  return new Map(Object.values(index).map((e) => [e.modelFile, e.legend]));
}

/**
 * Every model a source can be given to: the collection index, plus model files
 * kept out of it until their photos are listed ("Brand/File", no extension).
 */
function modelFiles(): Set<string> {
  const models = new Set(legends().keys());
  for (const brand of fs.readdirSync(MODELS_DIR, { withFileTypes: true }))
    if (brand.isDirectory())
      for (const f of fs.readdirSync(path.join(MODELS_DIR, brand.name)))
        if (f.endsWith(".tsx")) models.add(`${brand.name}/${f.slice(0, -4)}`);
  return models;
}

function describe(store: LedgerStore, w: LedgerWatch, names: Map<string, string>): string {
  const group = w.group ? store.groups.find((g) => g.id === w.group) : undefined;
  const parts = [
    w.id.padEnd(22),
    w.status.padEnd(8),
    (w.acquired ?? "").padEnd(10),
    w.label + (w.count ? ` (×${w.count})` : ""),
  ];
  if (w.modelFile) parts.push(`[${names.get(w.modelFile) ?? w.modelFile}]`);
  if (group?.kind === "lot") parts.push(`lot ${group.id} "${group.label}" (${group.size ?? "?"})`);
  const text = purchaseText(store, w);
  const hint = suggestSources(store, w).map((s) => s.id);
  return [
    parts.join("  "),
    text ? `      paid: ${text}` : "      paid: (no purchase line)",
    ...(hint.length ? [`      → ${hint.join(" or ")}?`] : []),
  ].join("\n");
}

function summary() {
  const { store } = loadStore();
  const { tagged, total, outside } = sourceCoverage(store);
  console.log(
    `Sources set on ${tagged} of ${total} ledger watches, plus ${outside} catalogue watches not in the ledger.\n`,
  );
  for (const r of sourceSummary(store))
    console.log(
      `  ${(r.id ?? "—").padEnd(24)} ${r.label.padEnd(28)} ${String(r.bought).padStart(4)} watches${r.outside ? ` (${r.outside} not in ledger)` : ""}  €${Math.round(r.spent).toLocaleString("en-GB")}`,
    );
  if (!sourcesOf(store).length) console.log("\nNo sources yet: add them with `apply`.");
}

function list(filter: (w: LedgerWatch) => boolean) {
  const { store } = loadStore();
  const names = legends();
  const ws = store.watches.filter(filter);
  for (const w of ws) console.log(describe(store, w, names));
  console.log(`\n${ws.length} watch(es).`);
}

function untagged() {
  const i = process.argv.indexOf("--status");
  const status = i > 0 ? process.argv[i + 1] : undefined;
  list((w) => !w.source && w.status !== "returned" && (!status || w.status === status));
}

function find(query: string) {
  const { store } = loadStore();
  const names = legends();
  const q = query.toLowerCase();
  list((w) =>
    [w.id, w.label, w.modelFile ?? "", names.get(w.modelFile ?? "") ?? "", purchaseText(store, w)]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

/** A key of the apply file's `set`: a watch id, a modelFile, or `group:<id>`. */
function resolve(store: LedgerStore, key: string): LedgerWatch[] {
  if (key.startsWith("group:")) {
    const ws = store.watches.filter((w) => w.group === key.slice(6));
    if (!ws.length) throw new ActionRefused(`No watches in group ${key.slice(6)}.`);
    return ws;
  }
  const w = store.watches.find((x) => x.id === key || x.modelFile === key);
  if (!w) throw new ActionRefused(`No watch or linked model ${key}.`);
  return [w];
}

function backup() {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const copyTo = (dir: string) => {
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(STORE_JSON, path.join(dir, `ledger-${stamp}.json`));
    const old = fs
      .readdirSync(dir)
      .filter((f) => /^ledger-.*\.json$/.test(f))
      .sort()
      .slice(0, -BACKUPS);
    for (const f of old) fs.unlinkSync(path.join(dir, f));
  };
  copyTo(path.join(LEDGER_DIR, "backups"));
  if (process.env.LEDGER_BACKUP_DIR) {
    try {
      copyTo(path.resolve(process.env.LEDGER_BACKUP_DIR));
    } catch (err) {
      console.warn(`Extra backup to LEDGER_BACKUP_DIR failed: ${String(err)}`);
    }
  }
}

function apply(file: string, dry: boolean) {
  const { store, version } = loadStore();
  const input = readJson<ApplyFile>(path.resolve(file));
  const models = modelFiles();
  const names = legends();

  let next = store;
  try {
    for (const source of input.sources ?? [])
      next = applyAction(next, { action: "save-source", source }, models, null);
    // Group the watches (and models) by the source they move to: one action per source.
    const bySource = new Map<string | null, Set<string>>();
    const modelsBySource = new Map<string | null, string[]>();
    for (const [key, source] of Object.entries(input.set ?? {})) {
      if (key.startsWith("model:")) {
        modelsBySource.set(source, [...(modelsBySource.get(source) ?? []), key.slice(6)]);
        continue;
      }
      for (const w of resolve(next, key)) {
        for (const [other, ids] of bySource)
          if (other !== source && ids.has(w.id))
            throw new ActionRefused(`${w.label} (${w.id}) is set to both ${other} and ${source}.`);
        if (!bySource.has(source)) bySource.set(source, new Set());
        bySource.get(source)!.add(w.id);
      }
    }
    for (const [source, ids] of bySource)
      next = applyAction(next, { action: "set-source", watchIds: [...ids], source }, models, null);
    for (const [source, modelFiles] of modelsBySource)
      next = applyAction(next, { action: "set-model-source", modelFiles, source }, models, null);
    for (const id of input.deleteSources ?? [])
      next = applyAction(next, { action: "delete-source", id }, models, null);
  } catch (err) {
    if (err instanceof ActionRefused) {
      console.error(`Refused, nothing written: ${err.message}`);
      process.exit(1);
    }
    throw err;
  }

  // What changed.
  const before = new Map(sourcesOf(store).map((s) => [s.id, s.label]));
  const after = new Map(sourcesOf(next).map((s) => [s.id, s.label]));
  for (const [id, label] of after)
    if (before.get(id) !== label)
      console.log(
        before.has(id)
          ? `source ${id}: "${before.get(id)}" → "${label}"`
          : `source + ${id} "${label}"`,
      );
  for (const id of before.keys()) if (!after.has(id)) console.log(`source − ${id}`);
  const old = new Map(store.watches.map((w) => [w.id, w.source]));
  let moved = 0;
  for (const w of next.watches) {
    if (old.get(w.id) === w.source) continue;
    moved++;
    const name = w.modelFile ? (names.get(w.modelFile) ?? w.label) : w.label;
    console.log(`  ${name} (${w.id}): ${old.get(w.id) ?? "—"} → ${w.source ?? "—"}`);
  }
  console.log(`${moved} watch(es) changed.`);
  const oldModels = store.modelSources ?? {};
  const newModels = next.modelSources ?? {};
  let modelMoves = 0;
  for (const m of new Set([...Object.keys(oldModels), ...Object.keys(newModels)])) {
    if (oldModels[m] === newModels[m]) continue;
    modelMoves++;
    console.log(
      `  model ${names.get(m) ?? m}: ${oldModels[m] ?? "—"} → ${newModels[m] ?? "—"} (not in ledger)`,
    );
  }
  console.log(`${modelMoves} catalogue model(s) outside the ledger changed.`);

  if (dry) {
    console.log("Dry run: nothing written.");
    return;
  }
  if (sha(fs.readFileSync(STORE_JSON, "utf-8")) !== version) {
    console.error(
      "The ledger changed while this ran (a back-office save?). Nothing written: run it again.",
    );
    process.exit(1);
  }
  backup();
  writeFileAtomic(STORE_JSON, JSON.stringify(next, null, 1));
  const { tagged, total, outside } = sourceCoverage(next);
  console.log(
    `Written. Sources set on ${tagged} of ${total} ledger watches, plus ${outside} outside the ledger.`,
  );
}

function main() {
  const [cmd, arg] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  if (!cmd) return summary();
  if (cmd === "untagged") return untagged();
  if (cmd === "find" && arg) return find(arg);
  if (cmd === "apply" && arg) return apply(arg, process.argv.includes("--dry"));
  console.error(
    "Usage: ledger:sources [untagged [--status s] | find <text> | apply <file.json> [--dry]]",
  );
  process.exit(1);
}

if (require.main === module) main();
