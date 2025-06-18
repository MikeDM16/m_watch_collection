import collectionService from "@/app/services/collectionService";
import {
  getExternalResource,
  getSaleReportImage,
  routeToCollectionBrandModelPage,
} from "@/app/services/commonFunctions";
import Container from "react-bootstrap/Container";

import ImageSliderComponent, { ImageSliderEntry } from "../common/ImageSliderComponent";
import PageTitleDivisionComponent from "../common/pageTitleDivisionComponent";

export default function PreviousSalesComponent() {
  const previousSoldModels = collectionService.getSoldModels();

  const swiperItems: ImageSliderEntry[] = Object.values(previousSoldModels).map((entry) => {
    const saleData = entry.href.default.saleReport;
    const saleReportImg = getSaleReportImage(entry.srcImage);
    const alt = (
      <div>
        <div className="swiper-auction-info">
          <b>
            <i>{saleData ? saleData.price + "€" : ""}</i>{" "}
          </b>
          {saleData ? "  -  " + saleData.date : ""}
        </div>
      </div>
    );

    const url = saleData?.url
      ? saleData?.url
      : routeToCollectionBrandModelPage(entry.brand, entry.legend);

    return {
      imageSrc: getExternalResource(saleReportImg),
      href: url,
      hreftext: entry.legend,
      target: "_blank",
      alt: alt,
    };
  });

  return (
    <div>
      <div id="PreviousSales">
        {PageTitleDivisionComponent({ title: "Previous Sales History" })}
      </div>
      <Container className="centered-text">
        <div>
          <p>Some links to my previous auctions at Catawiki!</p>
        </div>
        {ImageSliderComponent(swiperItems)}
      </Container>
    </div>
  );
}
