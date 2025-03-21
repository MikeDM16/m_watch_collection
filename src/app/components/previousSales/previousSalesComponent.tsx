import collectionService from "@/app/services/collectionService";
import { getExternalResource, getSaleReportImage } from "@/app/services/commonFunctions";
import Container from "react-bootstrap/Container";

import ImageSliderComponent, { ImageSliderEntry } from "../common/ImageSliderComponent";
import PageTitleDivisionComponent from "../common/pageTitleDivisionComponent";

export default function PreviousSalesContainer() {
  const previousSoldModels = collectionService.getSoldModels();
  console.log(previousSoldModels);

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

    return {
      image_src: getExternalResource(saleReportImg),
      href: saleData?.url,
      href_text: entry.legend,
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
