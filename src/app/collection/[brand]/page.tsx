import AnalyticsReporter from "@/app/components/analytics/AnalyticsReporter";
import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import BrandPageNotFoundComponent from "@/app/components/notFound/BrandPageNotFoundComponent";
import brandsService from "@/app/services/brandsService";
import collectionService, { SeriesGroup } from "@/app/services/collectionService";
import {
  getExternalResource,
  getImgURLForSizeType,
  getPathParameter,
  routeToCollectionBrandModelPage,
  routeToCollectionBrandPage,
  SizeType,
} from "@/app/services/commonFunctions";
import Link from "next/link";

export function generateStaticParams() {
  const allBrands = brandsService.getAllBrands();
  const params: { brand: string }[] = [];
  Object.values(allBrands).forEach((brands) => {
    brands.forEach((b) => {
      params.push({ brand: b.name });
    });
  });
  return params;
}

export default async function Page({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: rawBrand } = await params;
  const brand = getPathParameter(rawBrand);
  const brandDetails = brandsService.getBrandInformation(brand);

  if (!brand || !brandDetails) {
    return <BrandPageNotFoundComponent unknownBrand={brand} />;
  }

  const brandModels: SeriesGroup[] = collectionService.getCollectionModelsByBrand(
    brand,
    brandDetails.displayBySeries,
  );

  const renderCollectionItem = () => {
    return (
      <div
        key={`brand_container_${brand}`}
        className="section-container extended-screen-container centered-text"
      >
        {brandModels.map((group, groupIdx) => {
          // Flatten all sub-series into one dense grid (cards keep their sub-series tag),
          // then sort by year so the grid is chronological, not grouped by sub-series.
          const cards = group.subGroups
            .flatMap((sub) => sub.models.map((entry) => ({ entry, label: sub.label })))
            .sort((a, b) => b.entry.year - a.entry.year);
          return (
            <div key={`brand_${brand}_group_${groupIdx}`} className="bottom-margin-m">
              {group.group !== "" && (
                <div key={`brand_${brand}_group_${groupIdx}_title`} className="container-title">
                  <p className="border-bottom-text">{group.group}</p>
                </div>
              )}

              <div
                key={`brand_row_${brand}_${groupIdx}`}
                className="flex flex-wrap justify-center gap-4"
              >
                {cards.map(({ entry, label }, idx) => {
                  // On a single-brand page the legend's leading brand name is redundant.
                  const displayLegend = entry.legend.startsWith(`${entry.brand} `)
                    ? entry.legend.slice(entry.brand.length + 1)
                    : entry.legend;
                  return (
                    <div
                      key={`brand_${brand}_group_${groupIdx}_model_${idx}`}
                      className="hover-animation bottom-margin-m w-[calc(50%-0.5rem)] sm:w-[calc(33%-0.5rem)] md:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)]"
                    >
                      <Link
                        href={routeToCollectionBrandModelPage(brand, entry.legend)}
                        className="info-text link"
                      >
                        <ImageComponent
                          src={getExternalResource(
                            getImgURLForSizeType(entry.srcImage, SizeType.GALLERY),
                          )}
                          hoverSrc={getExternalResource(
                            getImgURLForSizeType(
                              entry.hoverSrc ? entry.hoverSrc : entry.srcImage,
                              SizeType.GALLERY,
                            ),
                          )}
                          alt={`${entry.legend}`}
                          priority={idx < 4}
                        />
                        {label !== "" && <div className="series-tag">{label}</div>}
                        <div className="upper-text">{entry.brand}</div>
                        <em>{displayLegend}</em>
                        <div>
                          <b>{entry.year}</b>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <HeaderNavBar />
      <AnalyticsReporter page={routeToCollectionBrandPage(brand)} title={brand} />
      <BrandPageTitleComponent brand={brandDetails} />
      {renderCollectionItem()}
      <FooterComponent images={brandDetails.backgrounImages} />
    </div>
  );
}
