import CollectionIndex, { type CollectionIndexEntry } from "../data/collectionIndex";
import type { ModelFile } from "../data/collectionModules.generated";
import { journalEntries } from "../data/journal";
import { getDate, getDates, newestFirst } from "../data/journal/journalOrder";
import type { JournalEntry, JournalPhoto } from "../data/journal/journalTypes";

const byModelFile = new Map<string, CollectionIndexEntry>(
  Object.values(CollectionIndex).map((entry) => [entry.modelFile, entry]),
);

/**
 * The type already rejects a model file the index does not know. This is the
 * second guard, for an index regenerated after the entry was written: fail the
 * build with the entry's name rather than render a link to nothing.
 */
function resolve(file: ModelFile, slug: string): CollectionIndexEntry {
  const entry = byModelFile.get(file);
  if (!entry) {
    throw new Error(
      `[journal] "${slug}" points at "${file}", which is not in collection-index.json.`,
    );
  }
  return entry;
}

/** Newest first, by the rule in journalOrder that the caption editor shares. */
const sorted = [...journalEntries].sort(newestFirst);

function getAll(): JournalEntry[] {
  return sorted;
}

function getBySlug(slug: string): JournalEntry | undefined {
  return sorted.find((entry) => entry.slug === slug);
}

/** The highlights, then every section, in page order: the lightbox's sequence. */
function getPhotos(entry: JournalEntry): JournalPhoto[] {
  return [...entry.photos, ...(entry.sections ?? []).flatMap((s) => s.photos)];
}

/**
 * How many photographs the entry has. A highlight usually repeats a photo from
 * its section, and the page shows it in both places, but it is one photograph,
 * so the counts in the strip, the cards and the brand row count it once.
 */
function getPhotoCount(entry: JournalEntry): number {
  return new Set(getPhotos(entry).map((p) => p.src)).size;
}

/**
 * Every watch the entry links to, each once, in the order a reader meets them:
 * a set's grouped list first, then the highlights, then each section (its own
 * watches before its photographs'), then anything listed only on the entry.
 */
function getWatchFiles(entry: JournalEntry): ModelFile[] {
  const files = [
    ...(entry.watchGroups ?? []).flatMap((g) => g.watches),
    ...entry.photos.flatMap((p) => p.watches ?? []),
    ...(entry.sections ?? []).flatMap((s) => [
      ...(s.watches ?? []),
      ...s.photos.flatMap((p) => p.watches ?? []),
    ]),
    ...(entry.watches ?? []),
  ];
  return [...new Set(files)];
}

function getWatches(entry: JournalEntry): CollectionIndexEntry[] {
  return getWatchFiles(entry).map((file) => resolve(file, entry.slug));
}

function getWatch(file: ModelFile, entry: JournalEntry): CollectionIndexEntry {
  return resolve(file, entry.slug);
}

/** For the brand page: sets of this brand, and events where its watches appear. */
function getForBrand(brand: string): JournalEntry[] {
  return sorted.filter(
    (entry) => entry.brand === brand || getWatches(entry).some((w) => w.brand === brand),
  );
}

/**
 * For the model page: the entries that link this watch, with how many of their
 * photographs show it. A photograph counts when it is tagged itself or sits in
 * a section photographed with the watch.
 */
function getFeaturing(modelFile: string): { entry: JournalEntry; photos: number }[] {
  return sorted
    .filter((entry) => (getWatchFiles(entry) as string[]).includes(modelFile))
    .map((entry) => {
      const tagged = (p: JournalPhoto) => (p.watches as string[] | undefined)?.includes(modelFile);
      const photos =
        entry.photos.filter(tagged).length +
        (entry.sections ?? []).reduce(
          (n, s) =>
            n +
            ((s.watches as string[] | undefined)?.includes(modelFile)
              ? s.photos.length
              : s.photos.filter(tagged).length),
          0,
        );
      return { entry, photos };
    });
}

/** Older and newer neighbours in the newest-first order. */
function getNeighbours(slug: string): { older?: JournalEntry; newer?: JournalEntry } {
  const i = sorted.findIndex((entry) => entry.slug === slug);
  if (i < 0) return {};
  return { older: sorted[i + 1], newer: sorted[i - 1] };
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * "2026-10-10" -> "10 Oct 2026", "2024-05" -> "May 2024", "2024" -> "2024".
 * Built by hand rather than with toLocaleDateString, which would parse the ISO
 * date as UTC midnight and print the day before in any timezone west of it.
 */
function formatDate(date?: string): string {
  if (!date) return "";
  const [year, month, day] = date.split("-");
  if (!month) return year;
  const name = MONTHS[Number(month) - 1];
  return day ? `${Number(day)} ${name} ${year}` : `${name} ${year}`;
}

/**
 * When a set was photographed, for its strip: one session as formatDate
 * prints it, sessions within a year as "Jun-Jul 2024", and sessions years
 * apart as "2019-2024".
 */
function formatPhotographed(entry: JournalEntry): string {
  const dates = getDates(entry);
  if (!dates.length) return "";
  const [y1, m1] = dates[0].split("-");
  const [y2, m2] = dates[dates.length - 1].split("-");
  if (dates[0] === dates[dates.length - 1]) return formatDate(dates[0]);
  if (y1 !== y2) return `${y1}-${y2}`;
  if (!m1 || !m2) return y1;
  if (m1 === m2) return `${MONTHS[Number(m1) - 1]} ${y1}`;
  return `${MONTHS[Number(m1) - 1]}-${MONTHS[Number(m2) - 1]} ${y1}`;
}

function kindLabel(entry: JournalEntry): string {
  return entry.kind === "event" ? "Event" : "Collection set";
}

const journalService = {
  getAll,
  getBySlug,
  getDate,
  getPhotos,
  getPhotoCount,
  getWatches,
  getWatch,
  getForBrand,
  getFeaturing,
  getNeighbours,
  formatDate,
  formatPhotographed,
  kindLabel,
};

export default journalService;
