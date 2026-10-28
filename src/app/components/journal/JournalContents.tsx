/**
 * "In this report": plain anchors to the highlights, each section and the
 * watches. Native jumps, no scroll handling. Only an entry with sections gets
 * one; a single block of photographs needs no table of contents.
 */
export default function JournalContents({
  sections,
  hasHighlights,
  watchesLabel,
}: {
  sections: { id: string; title: string }[];
  hasHighlights: boolean;
  watchesLabel: string;
}) {
  return (
    <nav
      aria-label="In this report"
      className="mt-14 flex flex-wrap items-baseline gap-x-7 gap-y-2.5 border-y border-border py-4"
    >
      <span className="lab">In this report</span>
      {hasHighlights && (
        <a href="#highlights" className="text-sm no-underline transition-colors hover:text-brand">
          Highlights
        </a>
      )}
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="inline-flex items-baseline gap-2 text-sm no-underline transition-colors hover:text-brand"
        >
          <span className="num text-[0.6875rem] text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          {s.title}
        </a>
      ))}
      <a href="#watches" className="text-sm no-underline transition-colors hover:text-brand">
        {watchesLabel}
      </a>
    </nav>
  );
}
