/**
 * Read-only lookup for the add-journal skill: which catalogue watch does a
 * name mean, and what slugs are already taken?
 *
 *   npx tsx .claude/skills/add-journal/scripts/lookup.ts --watch "Tag Link" --watch "Cuervo"
 *   npx tsx .claude/skills/add-journal/scripts/lookup.ts --folder "C:/.../Favoritos"
 *
 * `--folder` treats every subfolder name as a watch name, because an event's
 * subfolders are usually named after the watch photographed in them.
 *
 * Matching is by words, accents and case ignored: a watch scores one point per
 * query word found in its legend or model file path. The top five are printed
 * with their model file, which is what a Journal entry stores.
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "../../../..");
const index: Record<string, { brand: string; legend: string; year: number; modelFile: string }> =
  JSON.parse(fs.readFileSync(path.join(ROOT, "src/app/data/collection-index.json"), "utf-8"));

const words = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1);

function match(query: string) {
  const q = words(query);
  return Object.values(index)
    .map((e) => {
      const hay = new Set([...words(e.legend), ...words(e.modelFile)]);
      const hits = q.filter((w) => hay.has(w) || [...hay].some((h) => h.startsWith(w))).length;
      return { e, hits, extra: hay.size };
    })
    .filter((r) => r.hits > 0)
    .sort((a, b) => b.hits - a.hits || a.extra - b.extra)
    .slice(0, 5);
}

const args = process.argv.slice(2);
const queries: string[] = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--watch") queries.push(args[++i]);
  if (args[i] === "--folder") {
    const dir = args[++i];
    for (const d of fs.readdirSync(dir)) {
      if (fs.statSync(path.join(dir, d)).isDirectory()) queries.push(d.replace(/^\d+[_\- ]+/, ""));
    }
  }
}

for (const q of queries) {
  console.log(`\n"${q}"`);
  const found = match(q);
  if (!found.length) console.log("  no match: ask the user which watch this is");
  for (const { e, hits } of found) {
    console.log(`  ${hits}/${words(q).length}  ${e.year}  ${e.legend}\n          "${e.modelFile}"`);
  }
}

const entriesDir = path.join(ROOT, "src/app/data/journal/entries");
const slugs = fs.existsSync(entriesDir)
  ? fs.readdirSync(entriesDir).map((f) => f.replace(/\.ts$/, ""))
  : [];
console.log(`\nSlugs already taken: ${slugs.join(", ") || "none"}`);
