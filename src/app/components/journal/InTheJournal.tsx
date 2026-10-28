import type { JournalEntry } from "@/app/data/journal/journalTypes";
import {
  getExternalResource,
  getImgURLForSizeType,
  routeToJournalEntry,
  SizeType,
} from "@/app/services/commonFunctions";
import journalService from "@/app/services/journalService";
import Link from "next/link";

import PlateImage from "../common/PlateImage";

/** One entry as a preview: its cover, its title, and a line of meta. */
function JournalPreview({ entry, meta }: { entry: JournalEntry; meta: string }) {
  return (
    <Link
      href={routeToJournalEntry(entry.slug)}
      className="group flex items-center gap-3 no-underline"
    >
      <span className="relative block size-14 shrink-0 overflow-hidden bg-muted">
        <PlateImage
          src={getExternalResource(getImgURLForSizeType(entry.cover, SizeType.THUMBNAIL))}
          alt=""
          fill
          sizes="56px"
          className="object-cover"
        />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-sm leading-snug transition-colors group-hover:text-brand">
          {entry.title}
        </span>
        <span className="num text-[0.6875rem] text-muted-foreground">{meta}</span>
      </span>
    </Link>
  );
}

/**
 * The brand page's link into the Journal: one row under the metadata strip,
 * only for a brand that has entries. Its sets, and events its watches were at.
 */
export function InTheJournalRow({ entries, brand }: { entries: JournalEntry[]; brand: string }) {
  if (!entries.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border py-4">
      <span className="lab">In the Journal</span>
      {entries.map((entry) => {
        const meta =
          entry.kind === "set"
            ? `Collection set · ${journalService.getPhotoCount(entry)} photos`
            : (() => {
                const n = journalService.getWatches(entry).filter((w) => w.brand === brand).length;
                return `Event · ${n} ${brand} ${n === 1 ? "watch" : "watches"}`;
              })();
        return <JournalPreview key={entry.slug} entry={entry} meta={meta} />;
      })}
    </div>
  );
}

/**
 * The model page's link into the Journal, in the hero column under the sale
 * line. On a phone, and in any window too narrow for the two hero columns, it
 * is a single line of links. Beside the photograph on a wide screen it is the
 * brand page's row of previews, wrapping under the label when the column runs
 * out. Both are rendered and swapped at lg.
 */
export function InTheJournalLine({
  featuring,
}: {
  featuring: { entry: JournalEntry; photos: number }[];
}) {
  if (!featuring.length) return null;

  const meta = (entry: JournalEntry, photos: number) =>
    `${journalService.kindLabel(entry)}${photos > 0 ? ` · ${photos} ${photos === 1 ? "photo" : "photos"}` : ""}`;

  return (
    <div className="mt-6 border-t border-border pt-4">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5 lg:hidden">
        <span className="lab">In the Journal</span>
        {featuring.map(({ entry, photos }) => (
          <span key={entry.slug} className="inline-flex flex-wrap items-baseline gap-x-2">
            <Link
              href={routeToJournalEntry(entry.slug)}
              className="lab text-brand underline-offset-4 hover:underline"
            >
              {entry.title}
            </Link>
            <span className="num text-xs text-muted-foreground">{meta(entry, photos)}</span>
          </span>
        ))}
      </div>

      <div className="hidden flex-wrap items-center gap-x-8 gap-y-3 lg:flex">
        <span className="lab">In the Journal</span>
        {featuring.map(({ entry, photos }) => (
          <JournalPreview key={entry.slug} entry={entry} meta={meta(entry, photos)} />
        ))}
      </div>
    </div>
  );
}
