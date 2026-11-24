"use client";

import { useState } from "react";

export type SortDir = "asc" | "desc";
export type Sort<K extends string> = { key: K; dir: SortDir };

/**
 * A table's sort: a click on a new column sorts by it in that column's own
 * first direction; a click on the column already sorting reverses it.
 */
export function useSort<K extends string>(initial: Sort<K>) {
  const [sort, setSort] = useState<Sort<K>>(initial);
  const toggle = (key: K, firstDir: SortDir = "desc") =>
    setSort((prev) =>
      prev.key === key
        ? { key, dir: prev.dir === "desc" ? "asc" : "desc" }
        : { key, dir: firstDir },
    );
  return [sort, toggle] as const;
}

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

/**
 * A sorted copy. Missing values (null) sink to the bottom whichever way it
 * runs; text compares naturally ("R26!9" before "R26!10"); ties keep their
 * order.
 */
export function sortRows<T>(
  rows: readonly T[],
  value: (row: T) => number | string | null,
  dir: SortDir,
): T[] {
  const sign = dir === "asc" ? 1 : -1;
  return [...rows].sort((a, b) => {
    const x = value(a);
    const y = value(b);
    if (x === null || y === null) return x === y ? 0 : x === null ? 1 : -1;
    const c =
      typeof x === "string" || typeof y === "string"
        ? collator.compare(String(x), String(y))
        : x - y;
    return sign * c;
  });
}

/** A sortable column head: the label, an arrow while it sorts, and aria-sort. */
export function SortTh<K extends string>({
  k,
  label,
  sort,
  onSort,
  firstDir = "desc",
}: {
  k: K;
  label: React.ReactNode;
  sort: Sort<K>;
  onSort: (key: K, firstDir: SortDir) => void;
  /** Which way a first click sorts: high to low for figures, A to Z for names. */
  firstDir?: SortDir;
}) {
  const active = sort.key === k;
  return (
    <th
      className="lab py-2 pr-4 text-left font-medium"
      aria-sort={active ? (sort.dir === "asc" ? "ascending" : "descending") : "none"}
    >
      <button
        type="button"
        onClick={() => onSort(k, firstDir)}
        title={active ? "Click again to reverse" : undefined}
        className={`whitespace-nowrap uppercase transition-colors hover:text-foreground ${active ? "text-foreground" : ""}`}
      >
        {label}
        {active ? (sort.dir === "asc" ? " ↑" : " ↓") : ""}
      </button>
    </th>
  );
}
