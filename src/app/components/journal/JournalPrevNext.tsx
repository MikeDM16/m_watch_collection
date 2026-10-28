import type { JournalEntry } from "@/app/data/journal/journalTypes";
import { routeToJournalEntry } from "@/app/services/commonFunctions";
import journalService from "@/app/services/journalService";
import Link from "next/link";

function Neighbour({
  entry,
  label,
  alignEnd,
}: {
  entry: JournalEntry;
  label: string;
  alignEnd?: boolean;
}) {
  return (
    <Link
      href={routeToJournalEntry(entry.slug)}
      className={`group flex flex-col gap-1.5 no-underline ${alignEnd ? "items-end text-right" : ""}`}
    >
      <span className="lab">
        {label} · {journalService.kindLabel(entry)}
      </span>
      <span className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-brand">
        {entry.title}
      </span>
    </Link>
  );
}

/** The older and newer entries, so the Journal reads on without the index. */
export default function JournalPrevNext({ slug }: { slug: string }) {
  const { older, newer } = journalService.getNeighbours(slug);
  if (!older && !newer) return null;

  return (
    <nav
      aria-label="More from the Journal"
      className="mt-16 flex flex-wrap justify-between gap-6 border-t border-border pt-6 md:mt-24"
    >
      {older ? <Neighbour entry={older} label="← Older" /> : <span />}
      {newer && <Neighbour entry={newer} label="Newer →" alignEnd />}
    </nav>
  );
}
