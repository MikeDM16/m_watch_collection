"use client";

import AnalyticsReport from "@/app/components/analytics/analyticsReport";
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
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Page() {
  let { brand } = useParams();

  brand = getPathParameter(brand as string);
  const [brandDetails] = useState(brandsService.getBrandInformation(brand));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    AnalyticsReport({ page: routeToCollectionBrandPage(brand), title: brand });
  }, []);

  if (!brand || !brandDetails) {
    return BrandPageNotFoundComponent(brand);
  }

  const brandModels: Record<string, CollectionEntry[]> =
    collectionService.getCollectionModelsByBrand(brand as string, brandDetails.displayBySeries);

  const brandModelOnClickHandler = (brandName: string, modelName: string): string => {
    return routeToCollectionBrandModelPage(brandName, modelName);
  };

  const renderCollectionItem = () => {
    return (
      <Container
        key={`brand_container_${brand}`}
        className="extended-screen-container centered-text"
      >
        {Object.entries(brandModels).map(([seriesName, seriesModels]) => {
          return (
            <div key={`brand_${brand}_series_${seriesName}`} className="bottom-margin-m">
              <div key={`brand_${brand}_series_${seriesName}_title`} className="container-title ">
                <p className="border-bottom-text">{seriesName}</p>
              </div>

              <Row
                key={`brand_row_${brand}`}
                {...{ xs: 2, sm: 3, md: 4, lg: 4, xl: 5 }}
                className="centered-container"
              >
                {Object.values(seriesModels).map((entry, idx) => {
                  return (
                    <Col
                      key={`brand_${brand}_series_${seriesName}_model_${idx}`}
                      className="hover-animation bottom-margin-m"
                    >
                      <Link
                        href={brandModelOnClickHandler(brand, entry.legend)}
                        className="info-text link"
                      >
                        <ImageComponent
                          src={getExternalResource(
                            getImgURLForSizeType(entry.srcImage, SizeType.GALLERY),
                          )}
                          alt={`${entry.legend}`}
                        />
                        <div
                          key={`brand_${brand}_series_${seriesName}_model_${idx}_title1`}
                          className="upper-text"
                        >
                          {entry.brand}
                        </div>
                        <em key={`brand_${brand}_series_${seriesName}_model_${idx}_title2`}>
                          {entry.legend}
                        </em>
                        <div key={`brand_${brand}_series_${seriesName}_model_${idx}_title3`}>
                          <b>{entry.year}</b>
                        </div>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </Container>
    );
  };

  return (
    <div>
      {HeaderNavBar()}
      {BrandPageTitleComponent(brandDetails)}
      {renderCollectionItem()}
      {FooterComponent({ backgroudImage: selectBackgroundImage(brandDetails.backgrounImages) })}
    </div>
  );
}
