import { SellReport } from "@/app/data/watchDetails";
import { getExternalResource, getSaleReportImage } from "@/app/services/commonFunctions";
import Link from "next/link";
import { Container, Row } from "react-bootstrap";

import ImageComponent from "../common/ImageComponent";

export default function saleReportComponent(saleReport: SellReport, baseImgSrc: string) {
  const saleReportImg = getSaleReportImage(baseImgSrc);
  const linkDiv = saleReport.url ? (
    <Link target="_blank" href={saleReport.url}>
      Original auction link
    </Link>
  ) : undefined;
  return (
    <Container>
      <Row className="centered-container centered-text">
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
      </Row>
    </Container>
  );
}
