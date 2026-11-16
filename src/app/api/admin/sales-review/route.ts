import fs from "fs";
import path from "path";
import { run, serial, TSX_CLI } from "@/app/admin/runScript";
import type {
  MatchesFile,
  MatchOverride,
  OverridesFile,
} from "@/app/admin/sales-report/salesData.types";
import { NextResponse } from "next/server";

import { devOnly } from "../guard";

/**
 * The review panel's write path (/admin/sales-report/review). Saves one match
 * decision into .sales/overrides.json, then re-runs the sales pipeline's match
 * and build steps (scripts/sales) so the page can refresh with new figures.
 * `resync` re-reads the workbook first, for when the ledger itself changed.
 *
 * Local-only like every admin route, and everything it touches lives in the
 * gitignored .sales/ folder. The scripts do the work: this route never
 * duplicates their logic, it only records the decision and runs them.
 */

const ROOT = process.cwd();
const WORK_DIR = path.join(ROOT, ".sales");
const OVERRIDES = path.join(WORK_DIR, "overrides.json");
const MATCHES = path.join(WORK_DIR, "matches.json");
const PYTHON = process.env.SALES_PYTHON ?? (process.platform === "win32" ? "python" : "python3");

const ACTIONS = [
  "confirm",
  "confirm-many",
  "assign",
  "none",
  "reset",
  "resync",
  "kept-model",
  "kept-link",
  "kept-reset",
] as const;
type Action = (typeof ACTIONS)[number];

interface ReviewRequest {
  action: Action;
  modelFile?: string;
  unit?: string;
  /** confirm-many: every sale to confirm, each with the match the page showed. */
  items?: { modelFile: string; unit: string }[];
  /** kept-*: the kept watch (Collection tab) the decision is about. */
  key?: string;
  /** kept-model: its catalogue model (null = not in the catalogue). */
  keptModel?: string | null;
  /** kept-link: the stock item holding its money (null = its money is in the Collection tab). */
  stock?: string | null;
  /** kept-model / kept-link confirming what the page showed: the value it showed. */
  expect?: string | null;
  /** kept-reset: which decision to forget. */
  what?: "model" | "link";
}

/**
 * A kept watch's decision, checked against matches.json: the watch, the model
 * or stock item it points at, and — when confirming — that the page showed the
 * current proposal. Returns the change to make, or the response to send.
 */
function keptChange(
  body: ReviewRequest,
  matches: MatchesFile,
): ((ov: OverridesFile, at: string) => void) | NextResponse {
  const k = matches.kept?.find((x) => x.key === body.key);
  if (!k || !body.key) return NextResponse.json({ error: "Unknown kept watch" }, { status: 400 });
  const key = body.key;
  const moved = NextResponse.json(
    { error: "This watch's proposal changed since the page loaded. Refresh and review it again." },
    { status: 409 },
  );

  if (body.action === "kept-model") {
    const modelFile = body.keptModel ?? null;
    if (modelFile !== null && !matches.ownedModels?.some((o) => o.modelFile === modelFile)) {
      return NextResponse.json({ error: "Unknown catalogue model" }, { status: 400 });
    }
    if (body.expect !== undefined && k.model.modelFile !== body.expect) return moved;
    return (ov, at) => {
      ov.keptModels = { ...ov.keptModels, [key]: { modelFile, by: "user", at } };
    };
  }
  if (body.action === "kept-link") {
    const stock = body.stock ?? null;
    if (stock !== null && !matches.stockItems?.some((s) => s.key === stock)) {
      return NextResponse.json({ error: "Unknown stock item" }, { status: 400 });
    }
    if (body.expect !== undefined && (k.link?.stock ?? null) !== body.expect) return moved;
    return (ov, at) => {
      ov.keptLinks = { ...ov.keptLinks, [key]: { stock, by: "user", at } };
    };
  }
  if (body.what !== "model" && body.what !== "link") {
    return NextResponse.json({ error: "Reset what: model or link?" }, { status: 400 });
  }
  return (ov) => {
    if (body.what === "model" && ov.keptModels) delete ov.keptModels[key];
    if (body.what === "link" && ov.keptLinks) delete ov.keptLinks[key];
  };
}

function readJson<T>(file: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8")) as T;
  } catch {
    return null;
  }
}

function writeAtomic(file: string, data: unknown) {
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 1));
  fs.renameSync(tmp, file);
}

function pipelineFailed(err: unknown) {
  const e = err as { stdout?: string; stderr?: string; message?: string };
  const tail = `${e.stdout ?? ""}\n${e.stderr ?? ""}`.trim().split("\n").slice(-12).join("\n");
  return NextResponse.json(
    { error: "The sales pipeline failed.", detail: tail || e.message },
    { status: 500 },
  );
}

async function runPipeline(reparse: boolean) {
  const steps: [string, string[]][] = [
    ...(reparse ? [[PYTHON, ["scripts/sales/1_parse_ledger.py"]] as [string, string[]]] : []),
    [process.execPath, [TSX_CLI, "scripts/sales/2_match.ts"]],
    [process.execPath, [TSX_CLI, "scripts/sales/3_build.ts"]],
    // The workbook read as a ledger, for the back-office's compare view.
    [process.execPath, [TSX_CLI, "scripts/ledger/snapshot.ts"]],
  ];
  for (const [cmd, args] of steps) await run(cmd, args);
}

export async function POST(request: Request) {
  const blocked = devOnly();
  if (blocked) return blocked;

  let body: ReviewRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const { action, modelFile, unit } = body;
  if (!ACTIONS.includes(action)) {
    return NextResponse.json({ error: `Unknown action: ${String(action)}` }, { status: 400 });
  }

  const matches = readJson<MatchesFile>(MATCHES);
  if (!matches) {
    return NextResponse.json(
      { error: "No matches yet: run `npm run sales:sync` first." },
      { status: 409 },
    );
  }

  // A kept watch's decision: checked on its own, saved, then the same pipeline run.
  if (action.startsWith("kept-")) {
    const change = keptChange(body, matches);
    if (change instanceof NextResponse) return change;
    try {
      await serial(async () => {
        const ov = readJson<OverridesFile>(OVERRIDES) ?? { version: 1, matches: {} };
        ov.matches ??= {};
        change(ov, new Date().toISOString());
        writeAtomic(OVERRIDES, ov);
        await runPipeline(false);
      });
    } catch (err) {
      return pipelineFailed(err);
    }
    return NextResponse.json({ ok: true });
  }

  // Every change this request makes, as (sale, decision) — null decision = reset.
  const confirms =
    action === "confirm-many"
      ? (body.items ?? [])
      : action === "confirm"
        ? [{ modelFile: modelFile!, unit: unit! }]
        : [];
  if (action === "confirm-many" && (confirms.length === 0 || confirms.length > 500)) {
    return NextResponse.json({ error: "Send 1–500 sales to confirm" }, { status: 400 });
  }
  for (const c of confirms) {
    if (!c?.modelFile || !matches.byModel[c.modelFile] || !c.unit || !matches.units[c.unit]) {
      return NextResponse.json(
        { error: "Unknown catalogue sale or ledger entry" },
        { status: 400 },
      );
    }
  }
  // Confirming means "the match you showed me is right". If the matcher has
  // moved a sale since the page loaded, confirming the old entry would be a
  // decision nobody saw, so refuse and let the page refresh.
  const moved = confirms.filter((c) => matches.byModel[c.modelFile].unit !== c.unit);
  if (moved.length) {
    return NextResponse.json(
      {
        error: "Some matches changed since the page loaded. Refresh and review them again.",
        detail: moved.map((c) => matches.byModel[c.modelFile].legend).join("\n"),
      },
      { status: 409 },
    );
  }
  if (!["resync", "confirm", "confirm-many"].includes(action)) {
    if (!modelFile || !matches.byModel[modelFile]) {
      return NextResponse.json({ error: "Unknown catalogue sale" }, { status: 400 });
    }
    if (action === "assign" && (!unit || !matches.units[unit])) {
      return NextResponse.json({ error: "Unknown ledger entry" }, { status: 400 });
    }
  }

  try {
    await serial(async () => {
      if (action !== "resync") {
        const ov = readJson<OverridesFile>(OVERRIDES) ?? { version: 1, matches: {} };
        ov.matches ??= {};
        const at = new Date().toISOString();
        if (action === "reset") delete ov.matches[modelFile!];
        else if (action === "assign" || action === "none") {
          ov.matches[modelFile!] = { unit: action === "none" ? null : unit!, by: "user", at };
        } else {
          for (const c of confirms) {
            const previous = ov.matches[c.modelFile];
            const decision: MatchOverride = { unit: c.unit, by: "user", at };
            // Confirming keeps an explicit share (a payout split between two models).
            if (previous?.unit === c.unit && previous.share) decision.share = previous.share;
            ov.matches[c.modelFile] = decision;
          }
        }
        writeAtomic(OVERRIDES, ov);
      }
      // One pipeline run per request, however many sales it confirms.
      await runPipeline(action === "resync");
    });
  } catch (err) {
    return pipelineFailed(err);
  }

  const after = readJson<MatchesFile>(MATCHES);
  const statuses: Record<string, number> = {};
  for (const m of Object.values(after?.byModel ?? {}))
    statuses[m.status] = (statuses[m.status] ?? 0) + 1;
  return NextResponse.json({ ok: true, statuses });
}
