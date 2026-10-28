/**
 * The Journal's order, newest first, on dates alone. Kept apart from the
 * entries so the caption editor can sort the files it reads without importing
 * them: an import would recompile the admin page on every save.
 */

interface Dated {
  date?: string;
  sections?: { date?: string }[];
}

/**
 * When the entry was photographed, oldest first: its own date, else every
 * section's, for a set shot over several sessions. Partial ISO dates sort as
 * strings.
 */
export function getDates(entry: Dated): string[] {
  if (entry.date) return [entry.date];
  return (entry.sections ?? [])
    .map((s) => s.date)
    .filter((d): d is string => !!d)
    .sort();
}

/** The date the entry is ordered by: its own, else its latest section's. */
export function getDate(entry: Dated): string | undefined {
  return getDates(entry).at(-1);
}

/** Newest first; undated entries go last. */
export function newestFirst(a: Dated, b: Dated): number {
  const [da, db] = [getDate(a), getDate(b)];
  if (!da || !db) return da ? -1 : db ? 1 : 0;
  return db.localeCompare(da);
}
