/**
 * The entry's own words: an intro of a paragraph or three and an optional
 * pull-quote, set like the About Me quote. Renders nothing until written.
 */
export default function JournalIntro({ intro, quote }: { intro: string[]; quote?: string }) {
  if (!intro.length && !quote) return null;

  // Beside a quote the intro keeps its reading measure. Alone, that measure
  // left half the row empty, and the full width would run lines of ~170
  // characters; a long intro sets its lead on the left and the rest beside it.
  // Not flowed columns: those broke a grey paragraph across the two, its
  // first line stranded under the lead. A short or one-paragraph intro stays a
  // single column rather than splitting into two stubs.
  const columns = !quote && intro.length > 1 && intro.join(" ").length > 480;
  const paragraph = (text: string, i: number) => (
    <p key={i} className={`text-base leading-[1.7] ${i > 0 ? "text-muted-foreground" : ""}`}>
      {text}
    </p>
  );

  return (
    <section className="flex flex-wrap items-start gap-x-14 gap-y-10 pt-16 md:pt-24">
      {intro.length > 0 &&
        (columns ? (
          <div className="grid min-w-0 flex-[1_1_100%] max-w-[68ch] gap-4 lg:max-w-none lg:grid-cols-2 lg:gap-x-14">
            {paragraph(intro[0], 0)}
            <div className="space-y-4">{intro.slice(1).map((p, i) => paragraph(p, i + 1))}</div>
          </div>
        ) : (
          <div className="min-w-0 max-w-[62ch] flex-[1.2_1_32rem] space-y-4">
            {intro.map(paragraph)}
          </div>
        ))}
      {quote && (
        <blockquote className="m-0 min-w-0 flex-[0.8_1_20rem] border-t border-border pt-6">
          <p className="font-display text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.12] tracking-tight [font-variation-settings:'wdth'_104]">
            {quote}
          </p>
        </blockquote>
      )}
    </section>
  );
}
