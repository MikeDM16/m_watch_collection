"use client";

import {
  getExternalResource,
  getSaleReportImage,
  routeToCollectionBrandModelPage,
} from "@/app/services/commonFunctions";

import ImageSliderComponent, { ImageSliderEntry } from "../common/ImageSliderComponent";
import PageTitleDivisionComponent from "../common/pageTitleDivisionComponent";

export interface PreviousSaleEntry {
  brand: string;
  legend: string;
  srcImage: string;
  saleReport?: {
    price: number | string;
    date: string;
    url?: string;
  };
}

export default function PreviousSalesComponent({
  soldModels,
  backgroundImage,
}: {
  soldModels: PreviousSaleEntry[];
  backgroundImage?: string;
}) {
  const swiperItems: ImageSliderEntry[] = soldModels.map((entry) => {
    const saleData = entry.saleReport;
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
        {PageTitleDivisionComponent({ title: "Previous Sales History", srcImage: backgroundImage })}
      </div>
      <div className="section-container centered-text">
        <div className="mb-6">
          <p>Some links to my previous auctions at Catawiki!</p>
        </div>
        {ImageSliderComponent(swiperItems)}
      </div>
    </div>
  );
}
