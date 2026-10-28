import CollectionIndex from "@/app/data/collectionIndex";
import { cn } from "@/lib/utils";
import Link from "next/link";

import DevOnly from "../DevOnly";
import JournalCaptionEditor from "./JournalCaptionEditor";
import { listEntries, loadEntry } from "./journalSource";

/**
 * Captions, watches, section titles and an entry's text, written with the
 * photographs in front of you instead of against IMG_6075 in a source file.
 * Save writes the entry file; the diff is reviewed before committing.
 */
export default async function JournalCaptionsPage({
  searchParams,
}: {
  searchParams: Promise<{ entry?: string }>;
}) {
  if (process.env.NODE_ENV === "production") return <DevOnly />;

  const entries = listEntries();
  const { entry: wanted } = await searchParams;
  const current = entries.find((e) => e.file === wanted) ?? entries[0];

  const header = (
    <div className="mb-8 border-b border-border pb-6">
      <p className="lab">Local tool</p>
      <h1 className="mt-2 font-display text-display-m font-medium">Journal Captions</h1>
      <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
        Save writes the entry file in <code className="num">src/app/data/journal/entries/</code>.
        Review the diff before committing. Click a photo to select it, Shift-click to select a run,
        and drag to reorder it within its block.
      </p>
    </div>
  );

  if (!current) {
    return (
      <div className="pb-24">
        {header}
        <p className="border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
          No Journal entries yet. Create one with /add-journal.
        </p>
      </div>
    );
  }

  // Plain options across the client boundary; the index stays on the server.
  const watchOptions = Object.values(CollectionIndex)
    .map((e) => ({ value: e.modelFile, label: `${e.year} · ${e.legend}` }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="pb-40">
      {header}

      <nav aria-label="Entries" className="mb-10 flex flex-wrap gap-2">
        {entries.map((e) => (
          <Link
            key={e.file}
            href={`/admin/journal?entry=${e.file}`}
            className={cn(
              "series-filter-chip no-underline",
              e.file === current.file && "is-active",
            )}
          >
            {e.title}
            {!e.published && " · hidden"}
          </Link>
        ))}
      </nav>

      <JournalCaptionEditor
        key={current.file}
        entry={loadEntry(current.file)}
        published={current.published}
        watchOptions={watchOptions}
      />
    </div>
  );
}
