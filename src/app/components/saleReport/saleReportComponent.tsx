import { SellReport } from "@/app/data/watchDetails";
import { getExternalResource, getSaleReportImage } from "@/app/services/commonFunctions";
import Link from "next/link";

import ImageComponent from "../common/ImageComponent";

export default function saleReportComponent(saleReport: SellReport, baseImgSrc: string) {
  const saleReportImg = getSaleReportImage(baseImgSrc);
  const linkDiv = saleReport.url ? (
    <Link target="_blank" href={saleReport.url}>
      Original auction link
    </Link>
  ) : undefined;
  return (
    <div className="section-container">
      <div className="flex flex-wrap justify-center text-center">
        <ImageComponent
          src={getExternalResource(saleReportImg)}
          width="40%"
          className="bottom-margin-s"
        />
        <div className="swiper-auction-info">
          <b>
            <i>{saleReport.price + "€"}</i>{" "}
          </b>
          {"  -  " + saleReport.date}
        </div>
        {linkDiv}
      </div>
    </div>
  );
}
