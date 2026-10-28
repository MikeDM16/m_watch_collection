import type { ModelFile } from "../collectionModules.generated";

/**
 * One photograph, as `3_list_images.py --journal` prints it.
 *
 * Most are square, like the catalogue's, and need nothing else. A photo that is
 * not square (an event shot, a wide scene) carries the original's pixel size,
 * because the rows are laid out at build time, before any image has loaded.
 * The 200/500/800/1200 variants keep the ratio (fitted, not cropped), so one
 * pair serves every size.
 */
export interface JournalPhoto {
  /** Resources-repo path, in the same format as a model's sliderImages. */
  src: string;
  /** Pixel size; leave both out for a square photo. */
  w?: number;
  h?: number;
  caption?: string;
  /** Watches visible in this photograph, linked under it. */
  watches?: ModelFile[];
}

/** A group of photographs below the highlights: one subfolder of the event. */
export interface JournalSection {
  title: string;
  /**
   * When this section was photographed, ISO as on the entry. A set shot over
   * several sessions dates each section.
   */
  date?: string;
  note?: string;
  /**
   * The watches the whole section was photographed with. A subfolder named
   * after a watch links it here once, rather than on every photograph.
   */
  watches?: ModelFile[];
  photos: JournalPhoto[];
}

/**
 * A Journal page: an event (cars and watches, a meeting) or a collection set
 * (several watches photographed together).
 *
 * Watches are referenced by model file, never by legend. Legends get renamed
 * ("Ltd." became "Limited" across the old set files) while the file path is
 * what the index already keys its loaders by, and the ModelFile type makes a
 * stale reference a typecheck error.
 */
export interface JournalEntry {
  /** URL segment, ASCII only: "2026-formula-magica-caramulo". */
  slug: string;
  kind: "event" | "set";
  /** Display title; accents welcome. */
  title: string;
  /**
   * ISO, as precise as known: "2026-10-10", "2024-05" or "2024". An entry
   * without one takes its latest section's; undated entries list last.
   */
  date?: string;
  place?: string;
  /** A BrandsEnum value. A set carries its brand, and that brand's page lists it. */
  brand?: string;
  /** One line under the title, on the photograph. */
  dek?: string;
  intro: string[];
  quote?: string;
  link?: { label: string; href: string };
  /** The hero photograph. */
  cover: string;
  /** The highlights: the photographs at the top of the entry's folder. */
  photos: JournalPhoto[];
  sections?: JournalSection[];
  /** Watches the entry features beyond those already tagged on photos or sections. */
  watches?: ModelFile[];
  /**
   * Sets: the watch list under headings, as the old set files grouped it. A
   * note under a heading gives that model its context.
   */
  watchGroups?: { title: string; note?: string; watches: ModelFile[] }[];
}
