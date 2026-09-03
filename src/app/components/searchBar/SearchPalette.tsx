"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  routeToCollectionBrandModelPage,
  SizeType,
} from "@/app/services/commonFunctions";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import PlateImage from "../common/PlateImage";

export interface SearchEntry {
  brand: string;
  legend: string;
  year: number;
  srcImage: string;
  movementTitle?: string;
}

const MAX_RESULTS = 40;

/**
 * Search, promoted out of the middle of the home page into the header so it
 * exists on brand and model pages too.
 *
 * The index is still fetched lazily from /api/search-index on first open, which
 * is the behaviour that kept 186KB out of the home document.
 */
export default function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Record<string, SearchEntry> | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const load = useCallback(async () => {
    if (data || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/search-index");
      setData(await res.json());
    } finally {
      setLoading(false);
    }
  }, [data, loading]);

  // Opening is always something the user did, so the index is fetched from the
  // event that caused it rather than from an effect watching `open`.
  const openPalette = useCallback(() => {
    setOpen(true);
    void load();
  }, [load]);

  // Cmd/Ctrl-K and "/" open it from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target as HTMLElement)?.tagName ?? "");
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) {
        e.preventDefault();
        openPalette();
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPalette]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [open]);

  const results = useMemo(() => {
    if (!data || !query.trim()) return [];
    const q = query.toLowerCase();
    return Object.entries(data)
      .filter(
        ([key, v]) => key.toLowerCase().includes(q) || v?.movementTitle?.toLowerCase().includes(q),
      )
      .slice(0, MAX_RESULTS);
  }, [data, query]);

  // Keyboard navigation. The palette opens on a keystroke, so reaching for the
  // mouse to pick a result is the wrong shape; arrows and Enter keep the whole
  // interaction on the keyboard.
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  // A new query means a new result set, so the highlight goes back to the top.
  const [lastQuery, setLastQuery] = useState(query);
  if (query !== lastQuery) {
    setLastQuery(query);
    setActive(0);
  }

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    const move = (next: number) => {
      e.preventDefault();
      const clamped = (next + results.length) % results.length;
      setActive(clamped);
      listRef.current?.querySelectorAll("li")[clamped]?.scrollIntoView({ block: "nearest" });
    };

    if (e.key === "ArrowDown") return move(active + 1);
    if (e.key === "ArrowUp") return move(active - 1);
    if (e.key === "Home") return move(0);
    if (e.key === "End") return move(results.length - 1);

    if (e.key === "Enter") {
      const [, entry] = results[active] ?? [];
      if (!entry) return;
      e.preventDefault();
      setOpen(false);
      router.push(routeToCollectionBrandModelPage(entry.brand, entry.legend));
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        aria-label="Search the collection"
        className="grid size-9 shrink-0 place-items-center rounded-full border border-current/20 text-current transition-colors hover:border-current/50"
      >
        <Search aria-hidden strokeWidth={1.5} className="size-[17px]" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-scrim/60 p-4 pt-[12vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search the collection"
          onMouseDown={(e) => {
            if (!dialogRef.current?.contains(e.target as Node)) setOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            className="flex max-h-[70vh] w-full max-w-xl flex-col overflow-hidden border border-border bg-popover text-popover-foreground shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search aria-hidden strokeWidth={1.5} className="size-4 text-muted-foreground" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder={loading ? "Loading the index..." : "Brand, model or movement"}
                className="w-full bg-transparent py-4 text-base outline-none placeholder:text-muted-foreground"
                role="combobox"
                aria-expanded={results.length > 0}
                aria-controls="search-results"
                aria-autocomplete="list"
                aria-activedescendant={results.length ? `search-result-${active}` : undefined}
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <X aria-hidden strokeWidth={1.5} className="size-4" />
              </button>
            </div>

            <div className="overflow-y-auto">
              {query.trim() && !loading && results.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                  Nothing matches “{query}”.
                </p>
              )}

              {!query.trim() && (
                <p className="px-4 py-8 text-center text-sm text-muted-foreground">
                  {/* Counted from the index rather than hardcoded, so it cannot
                      go stale the next time a piece is catalogued. */}
                  {data ? `${Object.keys(data).length} timepieces. ` : ""}Search by brand, model or
                  movement.
                </p>
              )}

              <ul ref={listRef} id="search-results" role="listbox" aria-label="Results">
                {results.map(([key, entry], i) => (
                  <li
                    key={key}
                    id={`search-result-${i}`}
                    role="option"
                    aria-selected={i === active}
                  >
                    <Link
                      href={routeToCollectionBrandModelPage(entry.brand, entry.legend)}
                      onClick={() => setOpen(false)}
                      onMouseEnter={() => setActive(i)}
                      tabIndex={-1}
                      className={`flex items-center gap-3 border-b border-border px-4 py-2.5 transition-colors ${
                        i === active ? "bg-accent" : ""
                      }`}
                    >
                      <PlateImage
                        src={getExternalResource(
                          getImgURLForSizeType(entry.srcImage, SizeType.THUMBNAIL),
                        )}
                        alt=""
                        width={36}
                        height={36}
                        className="size-9 shrink-0 bg-muted object-contain"
                      />
                      <span className="min-w-0 flex-1 truncate text-sm">{entry.legend}</span>
                      <span className="num shrink-0 text-xs text-muted-foreground">
                        {entry.year}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
