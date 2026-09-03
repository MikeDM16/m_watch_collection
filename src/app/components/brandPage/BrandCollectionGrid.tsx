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
 * The brand grid, its series filter (preserved), plus type and sort.
 *
 * Every control hides when it has fewer than two distinct values, so the 55
 * single-watch brands get a clean page with no filter furniture.
 *
 * The grid is CSS Grid rather than the old flexbox percentage math. Incomplete
 * final rows now left-align, which is the correct reading order for a contact
 * sheet and a deliberate reversal of Fix 4 in the migration notes.
 *
 * Filter state lives in the URL, so a filtered view can be shared, bookmarked
 * and returned to with Back. Defaults are omitted from the query string, so an
 * unfiltered page stays on the bare canonical URL. See useQueryState for why
 * this cannot use useSearchParams on a prerendered route.
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

  const allTypes = useMemo(
    () => [...new Set(cards.map((c) => c.entry.type).filter(Boolean))].sort(),
    [cards],
  );

  // Read straight from the URL rather than mirroring it into state, so there
  // is one source of truth and Back needs no reconciliation.
  const selected = useMemo(
    () => readList(params, "series").filter((g) => groups.includes(g)),
    [params, groups],
  );
  const types = useMemo(
    () => readList(params, "type").filter((t) => allTypes.includes(t)),
    [params, allTypes],
  );
  const sort: Sort = useMemo(() => {
    const raw = params.get("sort");
    return SORTS.some((s) => s.key === raw) ? (raw as Sort) : DEFAULT_SORT;
  }, [params]);

  const showSeries = groups.length > 1;
  const showTypes = allTypes.length > 1;
  const showSort = cards.length > 2;
  const showBar = showSeries || showTypes || showSort;

  const visible = useMemo(() => {
    let out = cards;
    if (selected.length) out = out.filter((c) => selected.includes(c.group));
    if (types.length) out = out.filter((c) => types.includes(c.entry.type));

    const sorted = [...out];
    if (sort === "year-desc") sorted.sort((a, b) => b.entry.year - a.entry.year);
    if (sort === "year-asc") sorted.sort((a, b) => a.entry.year - b.entry.year);
    if (sort === "az") sorted.sort((a, b) => a.entry.legend.localeCompare(b.entry.legend));
    return sorted;
  }, [cards, selected, types, sort]);

  const writeList = (key: string, values: string[]) => {
    const next = new URLSearchParams(params);
    if (values.length) next.set(key, values.join(","));
    else next.delete(key);
    setQueryString(next);
  };

  const toggle = (value: string, key: string, list: string[], total: number) => {
    const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
    // Selecting everything individually is the same as "All".
    writeList(key, next.length === total ? [] : next);
  };

  const setSort = (value: Sort) => {
    const next = new URLSearchParams(params);
    if (value === DEFAULT_SORT) next.delete("sort");
    else next.set("sort", value);
    setQueryString(next);
  };

  const reset = () => {
    const next = new URLSearchParams(params);
    next.delete("series");
    next.delete("type");
    setQueryString(next);
  };

  return (
    <div>
      {showBar && (
        <div className="sticky top-16 z-30 -mx-[clamp(1rem,4vw,3.5rem)] border-b border-border bg-background/92 px-[clamp(1rem,4vw,3.5rem)] py-3 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {showSeries && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="series-filter-label">Series</span>
                <button
                  type="button"
                  onClick={() => writeList("series", [])}
                  className={cn("series-filter-chip", !selected.length && "is-active")}
                >
                  All
                </button>
                {groups.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => toggle(g, "series", selected, groups.length)}
                    className={cn("series-filter-chip", selected.includes(g) && "is-active")}
                  >
                    {g}
                  </button>
                ))}
              </div>
            )}

            {showTypes && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="series-filter-label">Type</span>
                {allTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggle(t, "type", types, allTypes.length)}
                    className={cn("series-filter-chip", types.includes(t) && "is-active")}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}

            {showSort && (
              <div className="ml-auto flex items-center gap-2">
                <span className="series-filter-label">Sort</span>
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
