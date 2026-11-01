import { execFile } from "child_process";
import path from "path";
import { promisify } from "util";

/**
 * Running the repo's own scripts from the local authoring tools' routes: the
 * sales pipeline, and the collection index after a model edit. The scripts do
 * the work; a route only decides when.
 */

const ROOT = process.cwd();
const exec = promisify(execFile);

/** The tsx CLI, run through this Node: no shell, so it behaves the same on Windows. */
export const TSX_CLI = path.join(ROOT, "node_modules", "tsx", "dist", "cli.mjs");

/** One command, from the repo root, returning what it printed. */
export function run(cmd: string, args: string[]) {
  return exec(cmd, args, {
    cwd: ROOT,
    timeout: 300_000,
    maxBuffer: 16 * 1024 * 1024,
    windowsHide: true,
  });
}

/** A TypeScript script under scripts/, through tsx. */
export function runTsx(script: string) {
  return run(process.execPath, [TSX_CLI, script]);
}

// One script run at a time: two quick saves must not interleave their writes.
let chain: Promise<unknown> = Promise.resolve();
export function serial<T>(task: () => Promise<T>): Promise<T> {
  const next = chain.then(task, task);
  chain = next.catch(() => undefined);
  return next;
}
