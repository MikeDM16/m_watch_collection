import Breadcrumbs from "@/app/components/common/Breadcrumbs";
import WatchTile from "@/app/components/common/WatchTile";
import ContactSheet from "@/app/components/model/ContactSheet";
import PinnedSpecViewer, { type PinnedFrame } from "@/app/components/model/PinnedSpecViewer";
import SpecBlock from "@/app/components/model/SpecBlock";
import BrandModelPageNotFoundComponent from "@/app/components/notFound/BrandModelPageNotFoundComponent";
import BrandPageNotFoundComponent from "@/app/components/notFound/BrandPageNotFoundComponent";
import { CaliberTechinicalDetailskeyToDisplayTextmappings } from "@/app/data/caliberTypes";
import {
  BraceletInformationToDisplayTextMapping,
  CaseInformationKeyToDisplayTextMapping,
  DialInformationToDisplayTextMapping,
  ModelInformationKeyToDisplayTextMapping,
} from "@/app/data/watchDetails";
import { parseSeries } from "@/app/data/watchModels/seriesGroup";
import type { FeatureStruct } from "@/app/enums/featuresEnum";
import {
  getColumnBraceletBackgroud,
  getColumnCaseBackgroud,
  getColumnDialBackgroud,
} from "@/app/modelPage/technicalInformationUtils";
import brandsService from "@/app/services/brandsService";
import collectionService from "@/app/services/collectionService";
import {
  getExternalResource,
  getImgURLForSizeType,
  getPathParameter,
  getSaleReportImage,
  routeToCollectionBrandPage,
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
  SizeType,
} from "@/app/services/commonFunctions";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return Object.values(collectionService.getAllCollectionItems()).map((entry) => ({
    brand: entry.brand,
    model: entry.legend,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}): Promise<Metadata> {
  const { brand: rawBrand, model: rawModel } = await params;
  const model = getPathParameter(rawModel);
  const entry = collectionService.getIndexEntry(model);
  if (!entry) return { title: getPathParameter(rawBrand) };

  const title = `${entry.year} ${entry.legend}`;
  const description = `${entry.legend}, ${entry.year}. ${entry.movementTitle ? `Movement: ${entry.movementTitle}. ` : ""}Photographs and full specification from the M Watch Collection archive.`;

  return {
    title,
    description,
    alternates: { canonical: `/collection/${entry.brand}/${entry.legend}` },
    // No `images` here on purpose: opengraph-image.tsx in this segment supplies
    // a 1200x630 card. Setting it here too would win, and hand crawlers the
    // square photograph again.
    openGraph: { title, description },
  };
}

export default async function BrandModelPage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand: rawBrand, model: rawModel } = await params;
  const brand = getPathParameter(rawBrand);
  const model = getPathParameter(rawModel);
  const brandDetails = brandsService.getBrandInformation(brand);
  const indexEntry = collectionService.getIndexEntry(model);

  if (!brand || !brandDetails) return <BrandPageNotFoundComponent unknownBrand={brand} />;
  if (!model || !indexEntry)
    return <BrandModelPageNotFoundComponent brand={brand} unknownModel={model} />;

  const watch = await collectionService.getModelDetails(model);
  if (!watch) return <BrandModelPageNotFoundComponent brand={brand} unknownModel={model} />;

  const tech = watch.technicalData;
  const caliber = tech.movement;
  const heroSrc = getExternalResource(getImgURLForSizeType(indexEntry.srcImage, SizeType.FULL_HD));

  // The pinned photograph advances through the watch's own gallery as the
  // specification scrolls past. It makes no claim that a given frame shows the
  // case rather than the dial (nothing in the data records that); it walks the
  // photographs in order, and swaps to genuinely matching images where they do
  // exist, at the movement and the auction sheet.
  //
  const gallery = (watch.sliderImages ?? []).filter((s) => s !== indexEntry.srcImage);

  // WatchDetails.description is deprecated legacy data and is deliberately not
  // read. It is brand history duplicated across a brand's model files, it
  // carries raw <a> markup that React escapes into visible tag source, and its
  // line continuations leave runs of source indentation under
  // whitespace-pre-line. The blocks stay in the data files; nothing renders
  // them. Caliber.description and FeatureStruct.description are unrelated
  // fields and are still rendered below.
  const hasFeatures = (tech.features?.length ?? 0) > 0;

  // The stored series carries both levels as "<group> — <sub>". The tiles have
  // always split it into two pills; the spec row was the one place still
  // showing the raw separator. Show the group: the sub-label is already a pill
  // on every tile and a filter chip on the brand page.
  const modelInformation = {
    ...(tech.information as unknown as Record<string, string>),
    ...(tech.information?.series ? { series: parseSeries(tech.information.series).group } : {}),
  };

  // Fibonacci strides, so each step jumps further than the last. Walking the
  // gallery 0, 1, 2, 3 showed the same angle one shutter apart and looked
  // static; widening gaps land on genuinely different shots. The small leading
  // terms (1, 1, 2) are skipped because they are the clustered ones.
  const FIB_STRIDE = [0, 3, 5, 8, 13, 21, 34, 55];
  const pickIndex = (n: number) =>
    gallery.length ? FIB_STRIDE[n % FIB_STRIDE.length] % gallery.length : 0;

  const galleryFrame = (n: number, label: string) => ({
    key: `sec-${n}`,
    label,
    images: [
      {
        src: getExternalResource(
          getImgURLForSizeType(
            gallery.length ? gallery[pickIndex(n)] : indexEntry.srcImage,
            SizeType.GALLERY,
          ),
        ),
        alt: watch.title,
      },
    ],
  });

  // Sections are pushed in render order, so each one takes the next gallery
  // photograph and the page and the viewer cannot drift apart.
  const frames: PinnedFrame[] = [];
  const pushSection = (label: string) => {
    const f = galleryFrame(frames.length, label);
    frames.push(f);
    return f.key;
  };

  const keyFeatures = hasFeatures ? pushSection("Features") : null;
  const keyModel = pushSection("Model");
  const keyCase = pushSection("Case");
  const keyDial = pushSection("Dial");
  const keyBracelet = pushSection("Bracelet");

  // The movement block cycles through every movement photograph it has.
  const keyMovement = "movement";
  frames.push({
    key: keyMovement,
    label: caliber.title,
    images: (caliber.sliderImages?.length
      ? caliber.sliderImages
      : [gallery[0] ?? indexEntry.srcImage]
    ).map((src) => ({
      src: getExternalResource(getImgURLForSizeType(src, SizeType.GALLERY)),
      alt: `${caliber.title} movement`,
    })),
  });

  const keySale = "sale";
  if (watch.saleReport) {
    frames.push({
      key: keySale,
      label: "Sale report",
      images: [
        {
          src: getExternalResource(getSaleReportImage(indexEntry.srcImage)),
          alt: "Auction listing",
        },
      ],
    });
  }

  const related = collectionService
    .getCollectionModelsByBrand(brand, false)
    .flatMap((g) => g.subGroups.flatMap((s) => s.models))
    .filter((e) => e.legend !== indexEntry.legend)
    .slice(0, 6);

  const glance: { label: string; value?: string }[] = [
    { label: "Diameter", value: tech.case?.diameter },
    { label: "Movement", value: tech.information?.movementType },
    { label: "Calibre", value: caliber.title },
    { label: "Water res.", value: tech.case?.waterResistance },
  ];

  return (
    <>
      <div className="mx-auto max-w-shell px-[clamp(1rem,4vw,3.5rem)] pt-24">
        <div className="flex flex-wrap items-center gap-4 border-b border-border pb-4">
          <Breadcrumbs
            items={[
              { label: "M Watch Collection", href: routeToMainPageHeader() },
              { label: "All Brands", href: routeToMainPageAllBrandListing() },
              { label: brand, href: routeToCollectionBrandPage(brand) },
              { label: indexEntry.legend },
            ]}
          />
          {brandDetails.logoImg && (
            <Link
              href={routeToCollectionBrandPage(brand)}
              className="ml-auto shrink-0"
              aria-label={`All ${brand} models`}
            >
              {/* Sized box plus `fill` — see the note on the brand page. */}
              <span className="relative block h-6 w-[110px]">
                <Image
                  src={getExternalResource(brandDetails.logoImg)}
                  alt={brand}
                  fill
                  unoptimized
                  className="logo-mono object-contain object-right"
                />
              </span>
            </Link>
          )}
        </div>

        {/* Hero plate */}
        <section className="grid items-center gap-8 py-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          {/* unoptimized: see the note on getExternalResource. Vercel's own
              /_next/image endpoint is 402ing every cache MISS right now (the
              account is over its monthly transformation quota, and changing
              the origin URL busts every existing cache key), so this bypasses
              it rather than depend on quota or plan. The source is already a
              correctly-sized, optimised JPEG from
              scripts/images/2_make_variants.py — this ships that file directly
              instead of a Vercel-recompressed WebP. */}
          <Image
            src={heroSrc}
            alt={watch.title}
            width={1200}
            height={1200}
            unoptimized
            priority
            className="plate max-h-[58vh] p-4"
          />

          <div>
            <p className="lab">
              {indexEntry.year} · {brand}
            </p>
            <h1 className="mt-2 font-display text-display-l font-medium">{watch.title}</h1>
            {tech.information?.catalogueReference && (
              <p className="num mt-2 text-sm text-muted-foreground">
                {tech.information.catalogueReference}
              </p>
            )}

            <dl className="mt-8 grid grid-cols-2 gap-px border border-border bg-border">
              {glance
                .filter((g) => g.value)
                .map((g) => (
                  <div key={g.label} className="bg-background p-3">
                    <dt className="lab">{g.label}</dt>
                    <dd className="num mt-1 text-sm">{g.value}</dd>
                  </div>
                ))}
            </dl>

            {watch.saleReport && (
              <div className="mt-6 flex flex-wrap items-baseline gap-3 border-t border-border pt-4">
                <span className="num text-xl font-medium text-brand">
                  €{watch.saleReport.price.toLocaleString("en-GB")}
                </span>
                {/* A date is a value, not a label. */}
                <span className="num text-xs text-muted-foreground">
                  Sold {watch.saleReport.date}
                </span>
                {watch.saleReport.url && (
                  <Link
                    href={watch.saleReport.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lab ml-auto text-brand underline-offset-4 hover:underline"
                  >
                    View the lot
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>

        {/* The whole photographic record, before the detail. The page reads as:
            this is the watch, here is everything I photographed, now the specs. */}
        <ContactSheet images={watch.sliderImages ?? []} />

        {/* Pinned viewer: photograph left, specification right */}
        <PinnedSpecViewer frames={frames}>
          {tech.features?.length > 0 && (
            <section data-frame={keyFeatures!} className="border-t border-border pt-6">
              <h2 className="font-display text-lg font-medium tracking-tight">Features</h2>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {tech.features.filter(Boolean).map((f: string | FeatureStruct, i: number) =>
                  typeof f === "string" ? (
                    <div key={`f-${i}`}>
                      <p className="text-sm font-medium">{f}</p>
                    </div>
                  ) : (
                    <div key={`f-${i}`}>
                      <p className="text-sm font-medium">{f.name}</p>
                      <p className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          )}

          <div data-frame={keyModel}>
            <SpecBlock
              title="Model"
              values={modelInformation}
              labels={ModelInformationKeyToDisplayTextMapping}
            />
          </div>

          <div data-frame={keyCase}>
            <SpecBlock
              title="Case"
              values={tech.case as unknown as Record<string, string>}
              labels={CaseInformationKeyToDisplayTextMapping}
              image={getColumnCaseBackgroud(tech)}
              imageAlt=""
            />
          </div>

          <div data-frame={keyDial}>
            <SpecBlock
              title="Dial"
              values={tech.dial as unknown as Record<string, string>}
              labels={DialInformationToDisplayTextMapping}
              image={getColumnDialBackgroud(tech)}
              imageAlt=""
            />
          </div>

          <div data-frame={keyBracelet}>
            <SpecBlock
              title="Bracelet"
              values={tech.bracelet as unknown as Record<string, string>}
              labels={BraceletInformationToDisplayTextMapping}
              image={getColumnBraceletBackgroud(tech.bracelet)}
              imageAlt=""
            />
          </div>

          <div data-frame={keyMovement}>
            <SpecBlock
              title={`Movement · ${caliber.title}`}
              values={caliber.details as unknown as Record<string, string>}
              labels={CaliberTechinicalDetailskeyToDisplayTextmappings}
            />
            {caliber.description && (
              <p className="mt-4 max-w-[65ch] whitespace-pre-line text-[0.88rem] leading-relaxed text-muted-foreground">
                {caliber.description}
              </p>
            )}
            {caliber.usefullLinks && Object.keys(caliber.usefullLinks).length > 0 && (
              <ul className="mt-4 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
                {Object.entries(caliber.usefullLinks).map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Sentence case: these are titles ("Ranfft Peseux 320"),
                      // not labels, and .lab shouted four of them onto one line.
                      className="text-xs text-brand underline-offset-4 hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {watch.saleReport && (
            <section data-frame={keySale} className="border-t border-border pt-6">
              <h2 className="font-display text-lg font-medium tracking-tight">Sale report</h2>
              <dl className="mt-4 grid gap-2">
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="lab min-w-[9.5rem] flex-none">Hammer price</dt>
                  <dd className="num text-spec text-brand">
                    €{watch.saleReport.price.toLocaleString("en-GB")}
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4">
                  <dt className="lab min-w-[9.5rem] flex-none">Date</dt>
                  <dd className="num text-spec">{watch.saleReport.date}</dd>
                </div>
              </dl>
              {watch.saleReport.url && (
                <Link
                  href={watch.saleReport.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lab mt-4 inline-block text-brand underline-offset-4 hover:underline"
                >
                  Original auction lot
                </Link>
              )}
            </section>
          )}
        </PinnedSpecViewer>

        {related.length > 0 && (
          <section className="mt-16 border-t border-border pt-8">
            <h2 className="font-display text-title">More from {brand}</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {related.map((e) => (
                <WatchTile
                  key={e.legend}
                  brand={e.brand}
                  legend={e.legend}
                  year={e.year}
                  srcImage={e.srcImage}
                  hoverSrc={e.hoverSrc}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
