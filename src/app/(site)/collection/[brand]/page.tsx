import BrandCollectionGrid, { CardData } from "@/app/components/brandPage/BrandCollectionGrid";
import Breadcrumbs from "@/app/components/common/Breadcrumbs";
import HeroBand from "@/app/components/common/HeroBand";
import BrandPageNotFoundComponent from "@/app/components/notFound/BrandPageNotFoundComponent";
import brandsService from "@/app/services/brandsService";
import collectionService, { SeriesGroup } from "@/app/services/collectionService";
import {
  background_images_paths,
  getExternalResource,
  getPathParameter,
  pickBackground,
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
} from "@/app/services/commonFunctions";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  const params: { brand: string }[] = [];
  Object.values(brandsService.getAllBrands()).forEach((brands) =>
    brands.forEach((b) => params.push({ brand: b.name })),
  );
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const brand = getPathParameter((await params).brand);
  const details = brandsService.getBrandInformation(brand);
  if (!details) return { title: brand };

  const count = collectionService
    .getCollectionModelsByBrand(brand, false)
    .flatMap((g) => g.subGroups.flatMap((s) => s.models)).length;

  return {
    title: brand,
    description:
      details.description ??
      `${count} ${brand} ${count === 1 ? "timepiece" : "timepieces"} in the M Watch Collection archive.`,
    alternates: { canonical: `/collection/${brand}` },
    openGraph: { title: brand, images: [getExternalResource(details.logoImg)] },
  };
}

export default async function Page({ params }: { params: Promise<{ brand: string }> }) {
  const brand = getPathParameter((await params).brand);
  const brandDetails = brandsService.getBrandInformation(brand);

  if (!brand || !brandDetails) return <BrandPageNotFoundComponent unknownBrand={brand} />;

  const brandModels: SeriesGroup[] = collectionService.getCollectionModelsByBrand(
    brand,
    brandDetails.displayBySeries,
  );

  // Flatten every series group into one continuous list. Group order is
  // preserved; series context lives on the cards as tags, not section titles.
  const cards: CardData[] = brandModels.flatMap((group) =>
    group.subGroups
      .flatMap((sub) =>
        sub.models.map((entry) => ({ entry, group: group.group, label: sub.label })),
      )
      .sort((a, b) => b.entry.year - a.entry.year),
  );

  const groups = [...new Set(cards.map((c) => c.group))].filter((g) => g !== "");
  const years = cards.map((c) => c.entry.year).filter(Boolean);
  const founded = brandDetails.foundedInformation
    ? [brandDetails.foundedInformation.year, brandDetails.foundedInformation.details]
        .filter(Boolean)
        .join(", ")
    : undefined;

  const bg = pickBackground(brandDetails.backgrounImages, brand, background_images_paths[0]);

  return (
    <>
      <HeroBand
        image={bg}
        size="page"
        title={brand}
        subtitle={brandDetails.description}
        eyebrow={
          <Breadcrumbs
            onPhoto
            items={[
              { label: "M Watch Collection", href: routeToMainPageHeader() },
              { label: "All Brands", href: routeToMainPageAllBrandListing() },
              { label: brand },
            ]}
          />
        }
      />

      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)]">
        {/* Metadata strip. Renders only the fields this brand actually has:
            many of the 90 brands are just a name and a logo. */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-b border-border py-6">
          {/* A fixed box rather than intrinsic width plus `h-7 w-auto`. The
              logos have wildly different aspect ratios, so setting width and
              height and then overriding one axis in CSS made next/image warn on
              every single one; `fill` inside a sized box reserves the space
              instead, and object-contain keeps each logo's own proportions. */}
          {brandDetails.logoImg && (
            <span className="relative block h-7 w-[140px] shrink-0">
              <Image
                src={getExternalResource(brandDetails.logoImg)}
                alt={brand}
                fill
                unoptimized
                className="logo-mono object-contain object-left"
              />
            </span>
          )}
          <div>
            <p className="lab">Models</p>
            <p className="num mt-1 text-sm">{cards.length}</p>
          </div>
          {years.length > 0 && (
            <div>
              <p className="lab">Years</p>
              <p className="num mt-1 text-sm">
                {Math.min(...years)}
                {Math.min(...years) !== Math.max(...years) && `-${Math.max(...years)}`}
              </p>
            </div>
          )}
          {founded && (
            <div>
              <p className="lab">Founded</p>
              <p className="mt-1 text-sm">{founded}</p>
            </div>
          )}
          {brandDetails.website && (
            <Link
              href={brandDetails.website}
              target="_blank"
              rel="noopener noreferrer"
              className="lab ml-auto text-brand underline-offset-4 hover:underline"
            >
              Official website
            </Link>
          )}
        </div>

        <BrandCollectionGrid brand={brand} cards={cards} groups={groups} />
      </div>
    </>
  );
}
