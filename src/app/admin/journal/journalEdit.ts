import prettier from "prettier";
import ts from "typescript";

/**
 * Reads and edits a Journal entry file as source, through the TypeScript AST.
 *
 * The caption editor changes a handful of fields; everything else in the file
 * (the `BrandsEnum.X` reference, comments, the order of fields) must come back
 * byte for byte. So nothing is regenerated: each change is a text edit at the
 * exact range of the property it touches, and prettier tidies the result.
 *
 * Kept free of Next and of the filesystem, so it can be exercised from a
 * script against a scratch copy.
 */

/**
 * Where a photo sits in the file as loaded: its identity for the whole edit.
 * A reorder keeps it, and says the new order by the order of `photos` instead.
 */
export interface PhotoAt {
  /** null for the highlights, else the section's index. */
  section: number | null;
  index: number;
}

export interface EditorPhoto {
  at: PhotoAt;
  src: string;
  w: number;
  h: number;
  caption: string;
  watches: string[];
  /**
   * Marked in the editor to come out of the entry on save. Only the reference
   * goes: the image stays in the resources repo.
   */
  removed?: boolean;
}

export interface EditorSection {
  index: number;
  title: string;
  note: string;
  watches: string[];
}

/** The editable state of an entry, as the editor shows it and sends it back. */
export interface EditorEntry {
  /** The entry's file name without `.ts`, set when it is loaded; saves go there. */
  file?: string;
  slug: string;
  title: string;
  kind: string;
  dek: string;
  intro: string[];
  quote: string;
  cover: string;
  /** Highlights first, then each section's, each block in page order. */
  photos: EditorPhoto[];
  sections: EditorSection[];
}

export interface SaveCounts {
  captions: number;
  watches: number;
  sections: number;
  text: number;
  /** Photos now at a different place in their block. */
  moved: number;
  /** Photos taken out of the entry. */
  removed: number;
}

export class EditConflict extends Error {}
export class EditInvalid extends Error {}

type Obj = ts.ObjectLiteralExpression;

function parse(text: string) {
  const source = ts.createSourceFile(
    "entry.ts",
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  let entry: Obj | undefined;
  source.forEachChild(function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      node.name.getText(source) === "entry" &&
      node.initializer &&
      ts.isObjectLiteralExpression(node.initializer)
    ) {
      entry = node.initializer;
    }
    node.forEachChild(visit);
  });
  if (!entry) throw new EditInvalid("No `const entry: JournalEntry = { … }` in this file.");
  return { source, entry };
}

function prop(obj: Obj, name: string): ts.PropertyAssignment | undefined {
  return obj.properties.find(
    (p): p is ts.PropertyAssignment =>
      ts.isPropertyAssignment(p) && (p.name as ts.Identifier).text === name,
  );
}

function str(obj: Obj, name: string): string {
  const init = prop(obj, name)?.initializer;
  return init && ts.isStringLiteralLike(init) ? init.text : "";
}

function strs(obj: Obj, name: string): string[] {
  const init = prop(obj, name)?.initializer;
  if (!init || !ts.isArrayLiteralExpression(init)) return [];
  return init.elements.filter(ts.isStringLiteralLike).map((e) => e.text);
}

function num(obj: Obj, name: string): number {
  const init = prop(obj, name)?.initializer;
  return init && ts.isNumericLiteral(init) ? Number(init.text) : 0;
}

function objects(obj: Obj, name: string): Obj[] {
  const init = prop(obj, name)?.initializer;
  if (!init || !ts.isArrayLiteralExpression(init)) return [];
  return init.elements.filter(ts.isObjectLiteralExpression);
}

/** The entry as the editor needs it: plain values, photos tagged with their position. */
export function readEntry(text: string): EditorEntry {
  const { entry } = parse(text);
  const photo = (o: Obj, at: PhotoAt): EditorPhoto => ({
    at,
    src: str(o, "src"),
    // A photo listed without a size is square.
    w: num(o, "w") || 1,
    h: num(o, "h") || 1,
    caption: str(o, "caption"),
    watches: strs(o, "watches"),
  });
  const sections = objects(entry, "sections");

  return {
    slug: str(entry, "slug"),
    title: str(entry, "title"),
    kind: str(entry, "kind"),
    dek: str(entry, "dek"),
    intro: strs(entry, "intro"),
    quote: str(entry, "quote"),
    cover: str(entry, "cover"),
    photos: [
      ...objects(entry, "photos").map((o, index) => photo(o, { section: null, index })),
      ...sections.flatMap((s, section) =>
        objects(s, "photos").map((o, index) => photo(o, { section, index })),
      ),
    ],
    sections: sections.map((s, index) => ({
      index,
      title: str(s, "title"),
      note: str(s, "note"),
      watches: strs(s, "watches"),
    })),
  };
}

/** The entry's dates, which the editor doesn't edit, for ordering the entry list. */
export function readDates(text: string): { date: string; sections: { date: string }[] } {
  const { entry } = parse(text);
  return {
    date: str(entry, "date"),
    sections: objects(entry, "sections").map((s) => ({ date: str(s, "date") })),
  };
}

interface Edit {
  start: number;
  end: number;
  text: string;
}

/** Where each field sits in an object, so an added field lands in its usual place. */
const ORDER: Record<"section" | "entry", string[]> = {
  section: ["title", "note", "watches", "photos"],
  entry: [
    "slug",
    "kind",
    "title",
    "date",
    "place",
    "brand",
    "dek",
    "intro",
    "quote",
    "link",
    "cover",
    "photos",
    "sections",
    "watches",
    "watchGroups",
  ],
};

const literal = (value: string | string[]) =>
  Array.isArray(value)
    ? `[${value.map((v) => JSON.stringify(v)).join(", ")}]`
    : JSON.stringify(value);

/**
 * The edits that give `obj` these field values. `undefined` removes a field.
 * A value equal to what is already there produces no edit, so an untouched
 * entry saves to an untouched file.
 */
function setFields(
  source: ts.SourceFile,
  obj: Obj,
  kind: keyof typeof ORDER,
  fields: Record<string, string | string[] | undefined>,
): Edit[] {
  const text = source.getFullText();
  const edits: Edit[] = [];
  const inserts = new Map<number, string[]>();

  const plan = Object.entries(fields).map(([name, value]) => {
    const existing = prop(obj, name);
    const current = existing
      ? ts.isArrayLiteralExpression(existing.initializer)
        ? literal(existing.initializer.elements.filter(ts.isStringLiteralLike).map((e) => e.text))
        : ts.isStringLiteralLike(existing.initializer)
          ? literal(existing.initializer.text)
          : existing.initializer.getText(source)
      : undefined;
    return { name, existing, current, wanted: value === undefined ? undefined : literal(value) };
  });

  // An inserted field is anchored on a neighbour, and that neighbour must not
  // be one this same call deletes, or the two edits would overlap.
  const removed = new Set(
    plan.filter((f) => f.existing && f.wanted === undefined).map((f) => f.name),
  );
  const kept = obj.properties.filter(
    (p) => !(ts.isPropertyAssignment(p) && removed.has((p.name as ts.Identifier).text)),
  );

  for (const { name, existing, current, wanted } of plan) {
    if (current === wanted) continue;

    if (existing && wanted !== undefined) {
      edits.push({
        start: existing.initializer.getStart(source),
        end: existing.initializer.end,
        text: wanted,
      });
    } else if (existing) {
      // The property, its comma and the line break before it. Leaving that
      // break behind reads to prettier as a deliberate blank line, so a field
      // added and then cleared would not come back to the original bytes.
      let end = existing.end;
      while (/\s/.test(text[end])) end++;
      if (text[end] === ",") end++;
      edits.push({ start: existing.getFullStart(), end, text: "" });
    } else if (wanted !== undefined) {
      // Before the first field that normally follows it, else after the last.
      const order = ORDER[kind];
      const next = order
        .slice(order.indexOf(name) + 1)
        .filter((n) => !removed.has(n))
        .map((n) => prop(obj, n))
        .find(Boolean);
      const at = next ? next.getStart(source) : kept[kept.length - 1].end;
      const piece = next ? `${name}: ${wanted}, ` : `, ${name}: ${wanted}`;
      inserts.set(at, [...(inserts.get(at) ?? []), piece]);
    }
  }

  for (const [at, pieces] of inserts) edits.push({ start: at, end: at, text: pieces.join("") });
  return edits;
}

const clean = (s: string) => s.trim();

/**
 * Applies the editor's state to the file's source and returns the new source,
 * formatted, with what changed. `validWatches` is every model file in the index.
 */
export async function applyEdits(
  text: string,
  wanted: EditorEntry,
  validWatches: Set<string>,
  filepath: string,
): Promise<{ text: string; counts: SaveCounts }> {
  const { source, entry } = parse(text);
  const before = readEntry(text);
  const counts: SaveCounts = {
    captions: 0,
    watches: 0,
    sections: 0,
    text: 0,
    moved: 0,
    removed: 0,
  };
  const edits: Edit[] = [];

  const unknown = [
    ...wanted.photos.flatMap((p) => p.watches),
    ...wanted.sections.flatMap((s) => s.watches),
  ].filter((w) => !validWatches.has(w));
  if (unknown.length) throw new EditInvalid(`Not in the catalogue index: ${unknown.join(", ")}`);
  if (!before.photos.some((p) => p.src === wanted.cover)) {
    throw new EditInvalid("The cover must be one of this entry's photographs.");
  }

  const highlights = objects(entry, "photos");
  const sections = objects(entry, "sections");

  // Each block's new order, as the file indexes of the photos it keeps. Photos
  // are only reordered within their block, so every block must still account
  // for exactly the photos it was loaded with, kept or marked removed.
  const blocks = [
    { at: null, owner: entry, list: highlights },
    ...sections.map((s, i) => ({ at: i, owner: s, list: objects(s, "photos") })),
  ].map((b) => {
    const mine = wanted.photos.filter((p) => p.at.section === b.at);
    const all = mine.map((p) => p.at.index);
    const complete = all.length === b.list.length && all.every((i) => i >= 0 && i < all.length);
    if (!complete || new Set(all).size !== all.length) {
      throw new EditConflict("The entry file changed since this page loaded. Reload it.");
    }
    const order = mine.filter((p) => !p.removed).map((p) => p.at.index);
    const removed = all.length - order.length;
    if (removed && !order.length && (b.at !== null || !sections.length)) {
      throw new EditInvalid(
        b.at === null
          ? "That would leave the entry with no photographs."
          : `That would leave section ${b.at + 1} with no photographs. Keep at least one.`,
      );
    }
    // Moved: a kept photo out of the file's relative order.
    const sorted = [...order].sort((x, y) => x - y);
    const moved = order.filter((index, i) => index !== sorted[i]).length;
    return { ...b, order, removed, moved, changed: removed > 0 || moved > 0 };
  });
  // After the check above: a photo missing from the draft is a stale page, not
  // a cover being removed.
  if (!wanted.photos.some((p) => !p.removed && p.src === wanted.cover)) {
    throw new EditInvalid("The cover is marked for removal. Pick another cover first.");
  }
  // A rebuilt photo in a changed block goes into that block's new list rather
  // than being edited in place, where the two edits would overlap.
  const rebuilt = new Map<ts.Node, string>();

  for (const p of wanted.photos) {
    const section = p.at.section === null ? undefined : sections[p.at.section];
    const list = p.at.section === null ? highlights : section && objects(section, "photos");
    const node = list?.[p.at.index];
    const was = before.photos.find(
      (b) => b.at.section === p.at.section && b.at.index === p.at.index,
    );
    // Photos are addressed by position, because one file can sit in the
    // highlights and in a section at once. The path must still match, or the
    // file changed since the editor loaded it.
    if (!node || !was || was.src !== p.src) {
      throw new EditConflict("The entry file changed since this page loaded. Reload it.");
    }
    // Leaving the entry: its block's new list simply goes without it.
    if (p.removed) continue;
    const caption = clean(p.caption);
    const captionChanged = caption !== was.caption;
    const watchesChanged = p.watches.join() !== was.watches.join();
    if (!captionChanged && !watchesChanged) continue;
    counts.captions += Number(captionChanged);
    counts.watches += Number(watchesChanged);

    // A photo is rebuilt on one line and prettier lays it out by width. Patched
    // in place, an object prettier once expanded would stay expanded after its
    // caption is cleared, so the file would depend on its edit history.
    const others = node.properties
      .filter((q) => !["caption", "watches"].includes((q.name as ts.Identifier)?.text))
      .map((q) => q.getText(source));
    const fields = [
      ...others,
      ...(caption ? [`caption: ${literal(caption)}`] : []),
      ...(p.watches.length ? [`watches: ${literal(p.watches)}`] : []),
    ];
    const photoText = `{ ${fields.join(", ")} }`;
    if (blocks.find((b) => b.at === p.at.section)?.changed) rebuilt.set(node, photoText);
    else edits.push({ start: node.getStart(source), end: node.end, text: photoText });
  }

  // A reordered block, or one losing photos, gets its array rewritten with the
  // photos it keeps, in their new order. Each carries its own text, edited or
  // as written, with what sits above it: a comment, or a blank line (prettier
  // keeps one), so moving a photo back gives back the original bytes. A
  // comment after the last one stays at the end.
  for (const b of blocks.filter((x) => x.changed)) {
    const array = prop(b.owner, "photos")!.initializer as ts.ArrayLiteralExpression;
    const pieces = b.order.map((index) => {
      const node = b.list[index];
      const above = text.slice(node.getFullStart(), node.getStart(source));
      const blank = /\n[ \t]*\n/.test(above) ? "\n" : "";
      const comment = above.trim();
      const body = rebuilt.get(node) ?? node.getText(source);
      return `${blank}${comment ? `${comment}\n` : ""}${body}`;
    });
    const tail = text
      .slice(b.list[b.list.length - 1].end, array.end - 1)
      .replace(/^\s*,/, "")
      .trim();
    const kept = pieces.join(",\n") + (pieces.length && tail ? "," : "");
    edits.push({
      start: array.getStart(source),
      end: array.end,
      text: `[${kept}${tail ? `\n${tail}\n` : ""}]`,
    });
    counts.moved += b.moved;
    counts.removed += b.removed;
  }

  for (const s of wanted.sections) {
    const node = sections[s.index];
    const was = before.sections[s.index];
    if (!node || !was)
      throw new EditConflict("The entry file changed since this page loaded. Reload it.");
    if (!clean(s.title)) throw new EditInvalid(`Section ${s.index + 1} needs a title.`);
    const note = clean(s.note);
    edits.push(
      ...setFields(source, node, "section", {
        title: clean(s.title),
        note: note || undefined,
        watches: s.watches.length ? s.watches : undefined,
      }),
    );
    if (clean(s.title) !== was.title || note !== was.note) counts.sections++;
    if (s.watches.join() !== was.watches.join()) counts.watches++;
  }

  const intro = wanted.intro.map(clean).filter(Boolean);
  const dek = clean(wanted.dek);
  const quote = clean(wanted.quote);
  edits.push(
    ...setFields(source, entry, "entry", {
      dek: dek || undefined,
      intro,
      quote: quote || undefined,
      cover: wanted.cover,
    }),
  );
  counts.text +=
    Number(dek !== before.dek) +
    Number(intro.join("\n") !== before.intro.join("\n")) +
    Number(quote !== before.quote) +
    Number(wanted.cover !== before.cover);

  if (!edits.length) return { text, counts };

  let out = text;
  for (const e of edits.sort((a, b) => b.start - a.start)) {
    out = out.slice(0, e.start) + e.text + out.slice(e.end);
  }
  const options = await prettier.resolveConfig(filepath);
  return { text: await prettier.format(out, { ...options, filepath }), counts };
}
