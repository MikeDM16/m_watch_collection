import Breadcrumbs from "@/app/components/common/Breadcrumbs";
import HeroBand from "@/app/components/common/HeroBand";
import JournalIndexGrid, { type JournalCard } from "@/app/components/journal/JournalIndexGrid";
import { background_images_paths, routeToMainPageHeader } from "@/app/services/commonFunctions";
import journalService from "@/app/services/journalService";
import type { Metadata } from "next";

const DESCRIPTION =
  "Events and collection sets from the M Watch Collection: the watches out among the cars, and photographed together.";

export const metadata: Metadata = {
  title: "Journal",
  description: DESCRIPTION,
  alternates: { canonical: "/journal" },
  openGraph: { title: "Journal", description: DESCRIPTION },
};

export default function JournalIndexPage() {
  const entries = journalService.getAll();

  // Plain props across the client boundary, so journalService and the index
  // JSON behind it stay out of the client bundle.
  const cards: JournalCard[] = entries.map((entry) => {
    const photos = journalService.getPhotoCount(entry);
    const watches = journalService.getWatches(entry).length;
    const when = entry.kind === "event" ? journalService.formatDate(entry.date) : entry.brand;
    return {
      slug: entry.slug,
      kind: entry.kind,
      title: entry.title,
      kicker: [journalService.kindLabel(entry), when].filter(Boolean).join(" · "),
      place: entry.place,
      counts: `${photos} photos · ${watches} ${watches === 1 ? "watch" : "watches"}`,
      cover: entry.cover,
    };
  });

  return (
    <>
      <HeroBand
        image={entries[0]?.cover ?? background_images_paths[0]}
        size="page"
        title="Journal"
        subtitle="Events and collection sets: the watches out among the cars, and photographed together."
        eyebrow={
          <Breadcrumbs
            onPhoto
            items={[
              { label: "M Watch Collection", href: routeToMainPageHeader() },
              { label: "Journal" },
            ]}
          />
        }
      />

      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        <JournalIndexGrid cards={cards} />
      </div>
    </>
  );
}
