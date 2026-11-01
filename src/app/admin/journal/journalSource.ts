import fs from "fs";
import path from "path";
import CollectionIndex from "@/app/data/collectionIndex";
import { newestFirst } from "@/app/data/journal/journalOrder";

import { applyEdits, EditInvalid, readDates, readEntry, type EditorEntry } from "./journalEdit";

/**
 * The caption editor's file access. Local authoring only: every caller sits
 * behind the dev gate, and Vercel's filesystem is read-only anyway.
 */

const JOURNAL_DIR = path.join(process.cwd(), "src", "app", "data", "journal");
const ENTRIES_DIR = path.join(JOURNAL_DIR, "entries");

export interface EntrySummary {
  /** The entry's file name without `.ts`: how the editor addresses it. */
  file: string;
  title: string;
  kind: string;
  /** Registered and uncommented in data/journal/index.ts, so live on the site. */
  published: boolean;
}

/**
 * Entries are addressed by file name, never by their `slug` field. The two
 * start out equal, but a slug can be changed for a better URL while the file
 * keeps its name.
 */
function entryPath(name: string): string {
  if (!/^[a-z0-9-]+$/.test(name)) throw new EditInvalid(`Not an entry: "${name}"`);
  const file = path.join(ENTRIES_DIR, `${name}.ts`);
  if (!fs.existsSync(file)) throw new EditInvalid(`No entry file "${name}.ts"`);
  return file;
}

export function listEntries(): EntrySummary[] {
  const registry = fs.readFileSync(path.join(JOURNAL_DIR, "index.ts"), "utf-8");
  const live = new Set(
    [...registry.matchAll(/^import \w+ from "\.\/entries\/([^"]+)";/gm)].map((m) => m[1]),
  );

  // The Journal index's order: live entries newest first, by the same rule
  // (journalOrder), read from the files rather than imported, so a save does
  // not recompile this page. Hidden entries, which the index doesn't list,
  // follow by title.
  return fs
    .readdirSync(ENTRIES_DIR)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => {
      const file = f.replace(/\.ts$/, "");
      const text = fs.readFileSync(path.join(ENTRIES_DIR, f), "utf-8");
      const entry = readEntry(text);
      const summary = { file, title: entry.title, kind: entry.kind, published: live.has(file) };
      return { summary, dates: readDates(text) };
    })
    .sort(
      (a, b) =>
        Number(b.summary.published) - Number(a.summary.published) ||
        (a.summary.published ? newestFirst(a.dates, b.dates) : 0) ||
        a.summary.title.localeCompare(b.summary.title),
    )
    .map((e) => e.summary);
}

export function loadEntry(name: string): EditorEntry {
  return { ...readEntry(fs.readFileSync(entryPath(name), "utf-8")), file: name };
}

export async function saveEntry(wanted: EditorEntry) {
  if (!wanted.file) throw new EditInvalid("Which entry file? Reload the page.");
  const file = entryPath(wanted.file);
  const valid = new Set(Object.values(CollectionIndex).map((e) => e.modelFile));
  const before = fs.readFileSync(file, "utf-8");
  const { text, counts } = await applyEdits(before, wanted, valid, file);
  if (text !== before) fs.writeFileSync(file, text, "utf-8");
  // The file as written goes back with the answer: the editor takes it as its
  // new baseline at once, instead of waiting on a refresh that may land after
  // the next change and wipe it.
  return { counts, written: text !== before, entry: loadEntry(wanted.file) };
}
