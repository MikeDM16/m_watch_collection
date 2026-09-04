"use client";

import type { CollectionIndexEntry } from "@/app/data/collectionIndex";
import { setQueryString, useQueryString } from "@/app/services/useQueryState";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

import WatchTile from "../common/WatchTile";
import Reveal from "../motion/Reveal";

export interface CardData {
  entry: CollectionIndexEntry;
  group: string;
  label: string;
}

type Sort = "year-desc" | "year-asc" | "az";

const SORTS: { key: Sort; label: string }[] = [
  { key: "year-desc", label: "Newest" },
  { key: "year-asc", label: "Oldest" },
  { key: "az", label: "A-Z" },
];

const DEFAULT_SORT: Sort = "year-desc";

function readList(params: URLSearchParams, key: string): string[] {
  const raw = params.get(key);
  return raw ? raw.split(",").filter(Boolean) : [];
}

/**
 * A shorter rendering of a series name, for the phone rails only. The URL, the
 * data files, the model pages and the desktop chips all keep the full name.
 *
 * Three passes, each aimed at a real label in the collection:
 *   - a parenthesised year range becomes two apostrophe'd years, so Tag Heuer's
 *     "Formula-1 (Second Generation 2000-2008)" reads "Formula-1 '00-'08";
 *   - a long parenthetical with no year in it goes ("S/EL (Sports and
 *     Elegance)"), while a short one stays, because "(Vintage)" is the whole
 *     distinction between two Omega series;
 *   - "Collection" and "Series" carry nothing a chip needs.
 */
function shortSeriesLabel(label: string): string {
  return label
    .replace(/\s*\(([^()]*)\)/g, (whole, inner: string) => {
      const years = inner.match(/\d{2}(\d{2})\s*[-–]\s*\d{2}(\d{2})/);
      if (years) return ` '${years[1]}-'${years[2]}`;
      return inner.length > 12 ? "" : whole;
    })
    .replace(/\s+(?:Collection|Series)\b/g, "")
    .trim();
}

/** The chip's text: short below the md breakpoint, full from there up. */
function ChipLabel({ full, short }: { full: string; short: string }) {
  if (short === full) return <>{full}</>;
  return (
    <>
      <span className="md:hidden">{short}</span>
      <span className="hidden md:inline">{full}</span>
    </>
  );
}

/**
 * The brand grid, its series filter (preserved), plus sort.
 *
 * Every control hides when it has fewer than two distinct values, so 59 of the
 * 90 brands get a clean page with no filter furniture at all. Sort is the one
 * that can appear alone: it keys off the model count, not the series count.
 *
 * The bar is bounded to two rows on a phone regardless of brand size. Only
 * three brands make that a problem at all -- Tissot has 20 series, Tag Heuer 12
 * and Omega 11 -- but the bar is sticky, so a wrapped chip set does not scroll
 * away, it covers the grid. Each facet is a single scrolling rail instead, and
 * sort collapses to a native picker. See .filter-rail in globals.css.
 *
 * The grid is CSS Grid rather than the old flexbox percentage math. Incomplete
 * final rows now left-align, which is the correct reading order for a contact
 * sheet and a deliberate reversal of Fix 4 in the migration notes.
 *
 * Filter state lives in the URL, with defaults omitted so an unfiltered page
 * stays on the bare canonical URL. See useQueryState for the mechanism.
 */
export default function BrandCollectionGrid({
  brand,
  cards,
  groups,
}: {
  brand: string;
  cards: CardData[];
  groups: string[];
}) {
  const search = useQueryString();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  // Read straight from the URL rather than mirroring it into state, so Back
  // needs no reconciliation.
  const selected = useMemo(
    () => readList(params, "series").filter((g) => groups.includes(g)),
    [params, groups],
  );
  const sort: Sort = useMemo(() => {
    const raw = params.get("sort");
    return SORTS.some((s) => s.key === raw) ? (raw as Sort) : DEFAULT_SORT;
  }, [params]);

  // A shortening that reads the same as another chip is no shortening at all:
  // Omega runs "Seamaster" and "Seamaster (Vintage)" side by side, so both keep
  // their full names while "Genève Collection" still loses its second word.
  const shortLabels = useMemo(() => {
    const short = new Map<string, string>();
    const counts = new Map<string, number>();
    for (const g of groups) {
      const s = shortSeriesLabel(g) || g;
      short.set(g, s);
      counts.set(s, (counts.get(s) ?? 0) + 1);
    }
    for (const [g, s] of short) if ((counts.get(s) ?? 0) > 1) short.set(g, g);
    return short;
  }, [groups]);

  const showSeries = groups.length > 1;
  const showSort = cards.length > 2;
  const showBar = showSeries || showSort;

  const visible = useMemo(() => {
    let out = cards;
    if (selected.length) out = out.filter((c) => selected.includes(c.group));

    const sorted = [...out];
    if (sort === "year-desc") sorted.sort((a, b) => b.entry.year - a.entry.year);
    if (sort === "year-asc") sorted.sort((a, b) => a.entry.year - b.entry.year);
    if (sort === "az") sorted.sort((a, b) => a.entry.legend.localeCompare(b.entry.legend));
    return sorted;
  }, [cards, selected, sort]);

  const writeSeries = (values: string[]) => {
    const next = new URLSearchParams(params);
    if (values.length) next.set("series", values.join(","));
    else next.delete("series");
    setQueryString(next);
  };

  const toggle = (value: string) => {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    // Selecting every series individually is the same as "All".
    writeSeries(next.length === groups.length ? [] : next);
  };

  const setSort = (value: Sort) => {
    const next = new URLSearchParams(params);
    if (value === DEFAULT_SORT) next.delete("sort");
    else next.set("sort", value);
    setQueryString(next);
  };

  const reset = () => writeSeries([]);

  return (
    <div>
      {showBar && (
        <div className="sticky top-16 z-30 -mx-[clamp(1rem,4vw,3.5rem)] border-b border-border bg-background/92 px-[clamp(1rem,4vw,3.5rem)] py-3 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* Series takes the whole first row on a phone so its rail gets the
                full width to scroll in; from md up it sits inline again. */}
            {showSeries && (
              <div className="flex w-full items-center gap-2 md:w-auto">
                <span className="series-filter-label shrink-0">Series</span>
                <div className="filter-rail">
                  <button
                    type="button"
                    onClick={() => writeSeries([])}
                    className={cn("series-filter-chip", !selected.length && "is-active")}
                  >
                    All
                  </button>
                  {groups.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => toggle(g)}
                      className={cn("series-filter-chip", selected.includes(g) && "is-active")}
                    >
                      <ChipLabel full={g} short={shortLabels.get(g) ?? g} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showSort && (
              <div className="ml-auto flex shrink-0 items-center gap-2">
                <span className="series-filter-label shrink-0">Sort</span>
                {/* Three chips spend a whole phone row stating one value. Below
                    md it collapses to the native picker, which costs one
                    chip's width and one tap. */}
                <span className="relative inline-flex md:hidden">
                  <select
                    aria-label="Sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as Sort)}
                    className="series-filter-chip is-active appearance-none pr-6 [&>option]:text-foreground"
                  >
                    {SORTS.map((s) => (
                      <option key={s.key} value={s.key}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[0.5rem] leading-none text-brand-foreground"
                  >
                    &#9662;
                  </span>
                </span>
                <span className="hidden items-center gap-2 md:flex">
                  {SORTS.map((s) => (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => setSort(s.key)}
                      className={cn("series-filter-chip", sort === s.key && "is-active")}
                    >
                      {s.label}
                    </button>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {visible.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-display text-title">Nothing matches these filters</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {brand} has {cards.length} {cards.length === 1 ? "model" : "models"} in the collection.
          </p>
          <button
            type="button"
            onClick={reset}
            className="series-filter-chip is-active mt-6 inline-block"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 py-10 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {visible.map(({ entry, group, label }, idx) => (
            <Reveal key={`${entry.legend}-${idx}`} index={idx}>
              <WatchTile
                brand={brand}
                legend={entry.legend}
                year={entry.year}
                srcImage={entry.srcImage}
                hoverSrc={entry.hoverSrc}
                group={group || undefined}
                label={label || undefined}
                movement={entry.movementTitle || undefined}
                priority={idx < 4}
              />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
