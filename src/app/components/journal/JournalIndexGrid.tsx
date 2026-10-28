"use client";

import {
  getExternalResource,
  getImgURLForSizeType,
  routeToJournalEntry,
  SizeType,
} from "@/app/services/commonFunctions";
import { setQueryString, useQueryString } from "@/app/services/useQueryState";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";

import PlateImage from "../common/PlateImage";
import Reveal from "../motion/Reveal";

export interface JournalCard {
  slug: string;
  kind: "event" | "set";
  title: string;
  kicker: string;
  place?: string;
  counts: string;
  cover: string;
}

const FILTERS = [
  { key: "", label: "All" },
  { key: "event", label: "Events" },
  { key: "set", label: "Collection sets" },
] as const;

/**
 * The Journal index: every entry as a borderless card, newest first, with the
 * kind filter in the URL (?kind=event). The chips only appear once both kinds
 * exist; a filter with one value is furniture.
 *
 * Reads the URL through useQueryString rather than useSearchParams, so the
 * grid stays in the prerendered HTML. See useQueryState.
 */
export default function JournalIndexGrid({ cards }: { cards: JournalCard[] }) {
  const search = useQueryString();
  const kind = useMemo(() => {
    const raw = new URLSearchParams(search).get("kind");
    return raw === "event" || raw === "set" ? raw : "";
  }, [search]);

  const showFilter = new Set(cards.map((c) => c.kind)).size > 1;
  const visible = kind ? cards.filter((c) => c.kind === kind) : cards;

  const choose = (key: string) => {
    const next = new URLSearchParams(search);
    if (key) next.set("kind", key);
    else next.delete("kind");
    setQueryString(next);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 border-b border-border py-5">
        {showFilter &&
          FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => choose(f.key)}
              aria-pressed={kind === f.key}
              className={cn("series-filter-chip", kind === f.key && "is-active")}
            >
              {f.label}
            </button>
          ))}
        <span className="num ml-auto text-xs text-muted-foreground">
          {visible.length} {visible.length === 1 ? "entry" : "entries"}
        </span>
      </div>

      <div className="grid gap-x-6 gap-y-14 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((card, i) => (
          <Reveal key={card.slug} index={i}>
            <Link href={routeToJournalEntry(card.slug)} className="group block no-underline">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <PlateImage
                  src={getExternalResource(getImgURLForSizeType(card.cover, SizeType.GALLERY))}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                  priority={i < 3}
                  className="object-cover group-hover:scale-[1.02]"
                />
              </div>
              <p className="lab mt-4">{card.kicker}</p>
              <h2 className="mt-1.5 font-display text-title font-medium leading-tight tracking-tight transition-colors group-hover:text-brand">
                {card.title}
              </h2>
              {card.place && <p className="mt-1.5 text-sm text-muted-foreground">{card.place}</p>}
              <p className="num mt-2 text-xs text-muted-foreground">{card.counts}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
