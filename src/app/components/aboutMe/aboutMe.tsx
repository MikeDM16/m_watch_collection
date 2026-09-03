import { getExternalResource } from "@/app/services/commonFunctions";
import Image from "next/image";

const PORTRAIT = "public/assets/Backgrouds/me.JPG";

/**
 * About Me. A Server Component now: it had "use client" with no hooks and no
 * handlers, which pulled it into the home bundle for nothing.
 *
 * The pull-quote was the best copy on the site and rendered at the same 1.6rem
 * crimson as every other heading. It leads the section now.
 */
export default function AboutMeContainer() {
  return (
    <section id="AboutMe" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <h2 className="font-display text-display-m font-medium">About Me</h2>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:gap-14">
          {/* unoptimized: see the note on getExternalResource. */}
          <Image
            src={getExternalResource(PORTRAIT)}
            alt="Miguel dias Miranda"
            width={800}
            height={1000}
            unoptimized
            loading="lazy"
            className="aspect-[4/5] max-h-[30rem] w-full bg-muted object-cover"
          />

          <div>
            <blockquote className="m-0 font-display text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-[1.12] tracking-tight [font-variation-settings:'wdth'_104]">
              They don&apos;t only tell the time. They also tell a history.
            </blockquote>

            <div className="mt-8 border-t border-border pt-5">
              <p className="text-sm font-medium">Miguel dias Miranda</p>
            </div>

            <div className="mt-4 max-w-[60ch] space-y-3 text-[0.9rem] leading-relaxed text-muted-foreground">
              <p>
                Been collecting, restoring and documenting watches since around 2015. Nowadays, I
                mostly search for vintage and dress watch models.
              </p>
              <p>
                Part of the collection includes various Portuguese vintage brands, but also some
                well known watchmaker brands.
              </p>
              <p>Dreaming with a Mark II Speedmaster. Or any other Speedmaster, if it matters.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
