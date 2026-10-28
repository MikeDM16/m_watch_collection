import type { CollectionIndexEntry } from "@/app/data/collectionIndex";

import WatchTile from "../common/WatchTile";
import Reveal from "../motion/Reveal";

function Grid({ watches, showBrand }: { watches: CollectionIndexEntry[]; showBrand: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
      {watches.map((e, i) => (
        <Reveal key={e.legend} index={i}>
          <WatchTile
            brand={e.brand}
            legend={e.legend}
            year={e.year}
            srcImage={e.srcImage}
            hoverSrc={e.hoverSrc}
            movement={e.movementTitle}
            showBrand={showBrand}
          />
        </Reveal>
      ))}
    </div>
  );
}

/**
 * The watches an entry links to, as the catalogue's own tiles. A set keeps the
 * headings its watches were grouped under; an event is one grid, with brands
 * left in the names because an event mixes them.
 */
export default function JournalWatchList({
  title,
  dek,
  watches,
  groups,
  showBrand,
}: {
  title: string;
  dek: string;
  watches: CollectionIndexEntry[];
  groups?: { title: string; note?: string; watches: CollectionIndexEntry[] }[];
  showBrand: boolean;
}) {
  if (!watches.length) return null;

  return (
    <section id="watches" className="mt-16 scroll-mt-24 border-t border-border pt-6 md:mt-24">
      <div className="flex items-baseline gap-3">
        <h2 className="font-display text-display-m font-medium">{title}</h2>
        <span className="num ml-auto text-xs text-muted-foreground">
          {watches.length} {watches.length === 1 ? "piece" : "pieces"}
        </span>
      </div>
      <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-muted-foreground">{dek}</p>

      {groups?.length ? (
        <div className="mt-10 flex flex-col gap-14">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="flex items-baseline gap-3 border-t border-border pt-5">
                <h3 className="font-display text-lg font-medium tracking-tight">{g.title}</h3>
                <span className="num ml-auto text-xs text-muted-foreground">
                  {g.watches.length}
                </span>
              </div>
              {/* Full width, like a section note: a few sentences of context,
                  not a dek to be held to a reading measure. A \n in the note
                  starts a new line. */}
              {g.note && (
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {g.note}
                </p>
              )}
              <div className="mt-6">
                <Grid watches={g.watches} showBrand={showBrand} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <Grid watches={watches} showBrand={showBrand} />
        </div>
      )}
    </section>
  );
}
