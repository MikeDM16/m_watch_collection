import AnalyticsReporter from "@/app/components/analytics/AnalyticsReporter";
import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import ImageComponent from "@/app/components/common/ImageComponent";
import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import BrandPageNotFoundComponent from "@/app/components/notFound/BrandPageNotFoundComponent";
import { CollectionEntry } from "@/app/data/collectionData";
import brandsService from "@/app/services/brandsService";
import collectionService from "@/app/services/collectionService";
import {
  getExternalResource,
  getImgURLForSizeType,
  getPathParameter,
  routeToCollectionBrandModelPage,
  routeToCollectionBrandPage,
  selectBackgroundImage,
  SizeType,
} from "@/app/services/commonFunctions";
import Link from "next/link";

export function generateStaticParams() {
  const allBrands = brandsService.getAllBrands();
  const params: { brand: string }[] = [];
  Object.values(allBrands).forEach((brands) => {
    brands.forEach((b) => {
      params.push({ brand: encodeURIComponent(b.name) });
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

  const brandModels: Record<string, CollectionEntry[]> =
    collectionService.getCollectionModelsByBrand(brand, brandDetails.displayBySeries);

  const renderCollectionItem = () => {
    return (
      <div
        key={`brand_container_${brand}`}
        className="section-container extended-screen-container centered-text"
      >
        {Object.entries(brandModels).map(([seriesName, seriesModels]) => {
          return (
            <div key={`brand_${brand}_series_${seriesName}`} className="bottom-margin-m">
              <div key={`brand_${brand}_series_${seriesName}_title`} className="container-title">
                <p className="border-bottom-text">{seriesName}</p>
              </div>

              <div key={`brand_row_${brand}`} className="flex flex-wrap justify-center gap-4">
                {Object.values(seriesModels).map((entry, idx) => {
                  return (
                    <div
                      key={`brand_${brand}_series_${seriesName}_model_${idx}`}
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
                        />
                        <div className="upper-text">{entry.brand}</div>
                        <em>{entry.legend}</em>
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
      <FooterComponent backgroudImage={selectBackgroundImage(brandDetails.backgrounImages)} />
    </div>
  );
}
