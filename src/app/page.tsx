import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import AnalyticsReporter from "./components/analytics/AnalyticsReporter";
import BrandTitleDivisionComponent from "./components/brandPage/BrandTitleDivisionComponent";
import PageTitleDivisionComponent from "./components/common/pageTitleDivisionComponent";
import ContactsComponent from "./components/contacts/contacts";
import { Brand } from "./data/brands";
import brandsService from "./services/brandsService";
import collectionService from "./services/collectionService";
import {
  background_images_paths,
  getExternalResource,
  routeToCollectionBrandPage,
} from "./services/commonFunctions";

const SpecialItemsComponent = dynamic(
  () => import("./components/specialItems/specialItemsComponent"),
  { ssr: true },
);

const PreviousSalesComponent = dynamic(
  () => import("./components/previousSales/previousSalesComponent"),
  { ssr: true },
);

const AboutMeContainer = dynamic(() => import("./components/aboutMe/aboutMe"), { ssr: true });

export default function Page() {
  const mainBrands = brandsService.getMainBrands();
  const allBrands = brandsService.getAllBrands();

  // Prepare data on the server side to avoid bundling collectionService in client JS
  const specialItems = collectionService.getSpecialCollectionItems().map((entry) => ({
    srcImage: entry.srcImage,
    hoverSrc: entry.hoverSrc,
    brand: entry.brand,
    legend: entry.legend,
    year: entry.year,
  }));

  const soldModels = collectionService.getSoldModels().map((entry) => ({
    brand: entry.brand,
    legend: entry.legend,
    srcImage: entry.srcImage,
    saleReport: entry.href.default.saleReport
      ? {
          price: entry.href.default.saleReport.price,
          date: entry.href.default.saleReport.date,
          url: entry.href.default.saleReport.url,
        }
      : undefined,
  }));

  const searchData: Record<
    string,
    { brand: string; legend: string; year: number; srcImage: string; movementTitle?: string }
  > = {};
  const allItems = collectionService.getAllCollectionItems();
  for (const [key, entry] of Object.entries(allItems)) {
    searchData[key] = {
      brand: entry.brand,
      legend: entry.legend,
      year: entry.year,
      srcImage: entry.srcImage,
      movementTitle: entry.href?.default?.technicalData?.movement?.title,
    };
  }

  const heroBackgroundUrl = getExternalResource(background_images_paths[0]);

  const mainBrandsTable = () => {
    return (
      <div>
        <Suspense fallback={<div className="h-64" />}>
          <SpecialItemsComponent specialItems={specialItems} searchData={searchData} />
        </Suspense>

        <div className="section-container">
          <div className="container-title centered-container">Main Brands</div>
        </div>

        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {mainBrands.map((entry, idx) => (
              <div
                key={`brand_icon_${entry.name}`}
                className="centered-container hover-animation bottom-margin-s"
              >
                <Link href={routeToCollectionBrandPage(entry.name)}>
                  <Image
                    key={`brand_icon_image_${entry.name}`}
                    src={getExternalResource(entry.logoImg)}
                    alt={`${entry.name} logo`}
                    width={180}
                    height={38}
                    priority={idx < 6}
                    loading={idx < 6 ? undefined : "lazy"}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ListBrandsForLetter = (key_letter: string, brandNames: Brand[]) => {
    return (
      <div key={`brand_list_for_letter_${key_letter}`}>
        <div
          key={`brand_letter_prefix_${key_letter}`}
          className={"bold-text feature-text border-bottom-text"}
        >
          {key_letter}
        </div>
        {brandNames.map((entry: Brand) => {
          return (
            <div key={`brand_${entry.name}`} className={"border-bottom-text"}>
              <Link href={routeToCollectionBrandPage(entry.name)} className="info-text">
                {entry.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  const ListAllBrandsGroupByLetter = () => {
    const offset = 5;
    const collectionStats = collectionService.getCollectionStatistic();

    return (
      <div>
        <div id="AllBrandsItems">
          <PageTitleDivisionComponent title="All Brands" />
        </div>

        <div className="section-container">
          <div className="grid grid-cols-3 gap-4 centered-text bottom-margin-m feature-text">
            {Object.entries(collectionStats).map(([statKey, statValue], idx) => {
              return (
                <div key={`stat_listing_${idx}`}>
                  <b>{statValue}+</b>
                  <br />
                  <span>{statKey}</span>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((idx) => {
              return (
                <div key={`brands_listing_${idx}`}>
                  {Object.entries(allBrands)
                    .slice(idx * offset, idx * offset + offset)
                    .map(([key_letter, brandNames]) => {
                      return ListBrandsForLetter(key_letter, brandNames);
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <link rel="preload" as="image" href={heroBackgroundUrl} />
      <HeaderNavBar />
      <AnalyticsReporter page="home" title="MWatchCollection" />
      <BrandTitleDivisionComponent title="M Watch Collection" textAlignement="center" />
      {mainBrandsTable()}
      {ListAllBrandsGroupByLetter()}
      <Suspense fallback={<div className="h-96" />}>
        <AboutMeContainer />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <PreviousSalesComponent soldModels={soldModels} />
      </Suspense>
      <ContactsComponent />
      <FooterComponent />
    </div>
  );
}
