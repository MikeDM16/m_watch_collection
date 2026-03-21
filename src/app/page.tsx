import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import Image from "next/image";
import Link from "next/link";

import AboutMeContainer from "./components/aboutMe/aboutMe";
import AnalyticsReporter from "./components/analytics/AnalyticsReporter";
import BrandTitleDivisionComponent from "./components/brandPage/BrandTitleDivisionComponent";
import PageTitleDivisionComponent from "./components/common/pageTitleDivisionComponent";
import ContactsComponent from "./components/contacts/contacts";
import PreviousSalesComponent from "./components/previousSales/previousSalesComponent";
import SpecialItemsComponent from "./components/specialItems/specialItemsComponent";
import { Brand } from "./data/brands";
import brandsService from "./services/brandsService";
import collectionService from "./services/collectionService";
import { getExternalResource, routeToCollectionBrandPage } from "./services/commonFunctions";

export default function Page() {
  const mainBrands = brandsService.getMainBrands();
  const allBrands = brandsService.getAllBrands();

  const mainBrandsTable = () => {
    return (
      <div>
        <SpecialItemsComponent />

        <div className="section-container">
          <div className="container-title centered-container">Main Brands</div>
        </div>

        <div className="section-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {mainBrands.map((entry) => (
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
                    loading="lazy"
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
      <HeaderNavBar />
      <AnalyticsReporter page="home" title="MWatchCollection" />
      <BrandTitleDivisionComponent title="M Watch Collection" textAlignement="center" />
      {mainBrandsTable()}
      {ListAllBrandsGroupByLetter()}
      <AboutMeContainer />
      <PreviousSalesComponent />
      <ContactsComponent />
      <FooterComponent />
    </div>
  );
}
