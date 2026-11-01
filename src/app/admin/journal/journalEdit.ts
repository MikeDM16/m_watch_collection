import ts from "typescript";

import {
  applyTextEdits,
  EditConflict,
  EditInvalid,
  literal,
  num,
  objects,
  parse,
  prop,
  rebuildArray,
  setFields,
  str,
  strs,
  type Edit,
  type Obj,
} from "../sourceEdit";

export { EditConflict, EditInvalid };

/**
 * Reads and edits a Journal entry file as source. The general machinery, and
 * why it edits rather than regenerates, is in ../sourceEdit.
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

/** The entry as the editor needs it: plain values, photos tagged with their position. */
export function readEntry(text: string): EditorEntry {
  const { obj: entry } = parse(text, "entry");
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
  const { obj: entry } = parse(text, "entry");
  return {
    date: str(entry, "date"),
    sections: objects(entry, "sections").map((s) => ({ date: str(s, "date") })),
  };
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
  const { source, obj: entry } = parse(text, "entry");
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
  // photos it keeps, in their new order (rebuildArray keeps each one's comment
  // and spacing, so moving a photo back gives back the original bytes).
  for (const b of blocks.filter((x) => x.changed)) {
    const array = prop(b.owner, "photos")!.initializer as ts.ArrayLiteralExpression;
    const items = b.order.map((index) => ({
      node: b.list[index],
      body: rebuilt.get(b.list[index]),
    }));
    edits.push(rebuildArray(text, source, array, items));
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
      ...setFields(source, node, ORDER.section, {
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
    ...setFields(source, entry, ORDER.entry, {
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

  return { text: await applyTextEdits(text, edits, filepath), counts };
}
