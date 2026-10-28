import Breadcrumbs from "@/app/components/common/Breadcrumbs";
import HeroBand from "@/app/components/common/HeroBand";
import JournalContents from "@/app/components/journal/JournalContents";
import JournalIntro from "@/app/components/journal/JournalIntro";
import { JournalLightbox } from "@/app/components/journal/JournalLightbox";
import JournalMetaStrip, { type MetaItem } from "@/app/components/journal/JournalMetaStrip";
import JournalPhotoRows, { type PlacedPhoto } from "@/app/components/journal/JournalPhotoRows";
import JournalPrevNext from "@/app/components/journal/JournalPrevNext";
import JournalWatchList from "@/app/components/journal/JournalWatchList";
import type { CollectionIndexEntry } from "@/app/data/collectionIndex";
import type { ModelFile } from "@/app/data/collectionModules.generated";
import type { JournalPhoto } from "@/app/data/journal/journalTypes";
import brandsService from "@/app/services/brandsService";
import {
  routeToCollectionBrandModelPage,
  routeToCollectionBrandPage,
  routeToJournal,
  routeToJournalEntry,
  routeToMainPageHeader,
} from "@/app/services/commonFunctions";
import journalService from "@/app/services/journalService";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Every entry is prerendered, and an unknown slug is a real 404. Leaving it to
// notFound() below is not enough: loading.tsx starts the stream first, so the
// not-found page would go out with a 200. `next start` logs a NoFallbackError
// line for each such request; that is Next's own 404 path, not a fault.
export const dynamicParams = false;

export function generateStaticParams() {
  return journalService.getAll().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const entry = journalService.getBySlug((await params).slug);
  if (!entry) return { title: "Journal" };

  const description =
    entry.dek ??
    entry.intro[0] ??
    `${journalService.kindLabel(entry)} in the M Watch Collection Journal.`;

  return {
    title: entry.title,
    description,
    alternates: { canonical: routeToJournalEntry(entry.slug) },
    // No `images`: opengraph-image.tsx in this segment supplies the card, as on
    // the model page.
    openGraph: { title: entry.title, description },
  };
}

export default async function JournalEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const entry = journalService.getBySlug((await params).slug);
  if (!entry) notFound();

  const isEvent = entry.kind === "event";
  // A set's watches read newest first, by catalogue year, whatever order its
  // file lists them in. An event's stay in the order its photographs meet them.
  const newestFirst = (list: CollectionIndexEntry[]) =>
    isEvent ? list : [...list].sort((a, b) => b.year - a.year);
  const resolve = (files: ModelFile[] = []) =>
    files.map((file) => journalService.getWatch(file, entry));
  const link = (w: CollectionIndexEntry) => ({
    legend: w.legend,
    href: routeToCollectionBrandModelPage(w.brand, w.legend),
  });
  const watches = newestFirst(journalService.getWatches(entry));

  // Every photograph numbered in page order, highlights then sections: the
  // lightbox is handed the same sequence, so a click opens the right one.
  // A photo listed without a size is square.
  let next = 0;
  const place = (photos: JournalPhoto[]): PlacedPhoto[] =>
    photos.map((p) => ({
      src: p.src,
      w: p.w ?? 1,
      h: p.h ?? 1,
      caption: p.caption,
      index: next++,
      watches: resolve(p.watches).map(link),
    }));

  const highlights = place(entry.photos);
  const sections = (entry.sections ?? []).map((s, i) => ({
    id: `section-${i + 1}`,
    title: s.title,
    date: s.date,
    note: s.note,
    watches: newestFirst(resolve(s.watches)).map(link),
    photos: place(s.photos),
  }));
  const lightbox = journalService.getPhotos(entry).map(({ src, w = 1, h = 1 }) => ({ src, w, h }));

  const brand = entry.brand ? brandsService.getBrandInformation(entry.brand) : undefined;
  const years = watches.map((w) => w.year).filter(Boolean);
  const span = years.length
    ? Math.min(...years) === Math.max(...years)
      ? `${years[0]}`
      : `${Math.min(...years)}-${Math.max(...years)}`
    : "";

  const photographed = journalService.formatPhotographed(entry);
  const meta: (MetaItem | false)[] = isEvent
    ? [
        !!entry.date && { label: "Event", value: journalService.formatDate(entry.date), num: true },
        !!entry.place && { label: "Place", value: entry.place! },
        sections.length > 0 && { label: "Sections", value: sections.length, num: true },
        { label: "Photos", value: journalService.getPhotoCount(entry), num: true },
        watches.length > 0 && { label: "Watches", value: watches.length, num: true },
      ]
    : [
        !!entry.brand && { label: "Collection set", value: entry.brand! },
        { label: "Pieces", value: watches.length, num: true },
        !!span && { label: "Years", value: span, num: true },
        { label: "Photos", value: journalService.getPhotoCount(entry), num: true },
        !!photographed && { label: "Photographed", value: photographed, num: true },
      ];

  const stripLink = entry.link
    ? { ...entry.link, external: true }
    : brand
      ? { label: `All ${brand.name} watches`, href: routeToCollectionBrandPage(brand.name) }
      : undefined;

  const watchTitle = isEvent ? "On the wrist at the event" : "In this set";

  return (
    <>
      <HeroBand
        image={entry.cover}
        size="page"
        title={entry.title}
        subtitle={entry.dek}
        eyebrow={
          <Breadcrumbs
            onPhoto
            items={[
              { label: "M Watch Collection", href: routeToMainPageHeader() },
              { label: "Journal", href: routeToJournal() },
              { label: entry.title },
            ]}
          />
        }
      />

      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <JournalMetaStrip
          items={meta.filter((m): m is MetaItem => !!m)}
          logo={brand?.logoImg ? { src: brand.logoImg, alt: brand.name } : undefined}
          link={stripLink}
        />

        <JournalIntro intro={entry.intro} quote={entry.quote} />

        {sections.length > 0 && (
          <JournalContents
            sections={sections}
            hasHighlights={highlights.length > 0}
            watchesLabel={isEvent ? "On the wrist" : "In this set"}
          />
        )}

        <JournalLightbox photos={lightbox}>
          {/* A set made only of sections (its folder's top level is empty) has
              no highlights block at all, rather than an empty one. */}
          {highlights.length > 0 && (
            <section id="highlights" className="scroll-mt-24 pt-14">
              {/* Only the intro needs a rule closing it. The strip and the
                contents line each end on a hairline already, and a second one
                56px lower would read as a ruled table. */}
              <div
                className={`flex items-baseline gap-3 ${
                  (entry.intro.length || entry.quote) && !sections.length
                    ? "border-t border-border pt-5"
                    : ""
                }`}
              >
                <h2 className="font-display text-display-m font-medium">
                  {sections.length ? "Highlights" : "Photographs"}
                </h2>
                <span className="num ml-auto text-xs text-muted-foreground">
                  {highlights.length} photos
                </span>
              </div>
              <div className="mt-6">
                <JournalPhotoRows photos={highlights} altPrefix={entry.title} />
              </div>
              <p className="mt-6 text-[0.7rem] text-muted-foreground">
                Every photograph opens full screen.
              </p>
            </section>
          )}

          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className={`${i === 0 && !highlights.length ? "mt-14" : "mt-20"} scroll-mt-24 border-t border-border pt-5`}
            >
              <div className="flex items-baseline gap-4">
                <span className="num text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[clamp(1.25rem,2vw,1.5rem)] font-medium leading-tight tracking-tight">
                  {s.title}
                </h2>
                <span className="num ml-auto shrink-0 text-xs text-muted-foreground">
                  {s.date && `${journalService.formatDate(s.date)} · `}
                  {s.photos.length} photos
                </span>
              </div>
              {/* The full width, not the 58ch reading measure of the deks: a note
                  plus a list of full watch names wrapped into three short lines
                  with half the row empty beside them. A \n starts a new line. */}
              {(s.note || s.watches.length > 0) && (
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {s.note}
                  {s.note && s.watches.length > 0 && " "}
                  {s.watches.length > 0 && (
                    <>
                      Photographed with{" "}
                      {s.watches.map((w, j) => (
                        <span key={w.href}>
                          {j > 0 && (j === s.watches.length - 1 ? " and " : ", ")}
                          <Link
                            href={w.href}
                            className="text-brand underline-offset-4 hover:underline"
                          >
                            {w.legend}
                          </Link>
                        </span>
                      ))}
                      .
                    </>
                  )}
                </p>
              )}
              <div className="mt-5">
                <JournalPhotoRows photos={s.photos} altPrefix={`${entry.title}, ${s.title}`} />
              </div>
            </section>
          ))}
        </JournalLightbox>

        <JournalWatchList
          title={watchTitle}
          dek={
            isEvent
              ? "Every watch in these photographs is in the collection. Open one for its full record."
              : "Each piece has its own page, with every photograph and the full specification."
          }
          watches={watches}
          groups={entry.watchGroups?.map((g) => ({
            title: g.title,
            note: g.note,
            watches: newestFirst(resolve(g.watches)),
          }))}
          showBrand={!entry.brand}
        />

        <JournalPrevNext slug={entry.slug} />
      </div>
    </>
  );
}
