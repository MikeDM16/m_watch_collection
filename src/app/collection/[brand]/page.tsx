"use client";

import ImageComponent from "@/app/components/common/ImageComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import { CollectionEntry } from "@/app/data/collectionData";
import {
  getExternalResource,
  getImgURLForSizeType,
  getPathParameter,
  routeToCollectionBrandModelPage,
  selectBackgroundImage,
  SizeType,
} from "@/app/services/commonFunctions";
import { useParams } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import brandsService from "@/app/services/brandsService";
import Link from "next/link";
import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import collectionService from "@/app/services/collectionService";
import FooterComponent from "@/app/components/footer/footerComponent";
import BrandPageNotFoundComponent from "@/app/components/notFound/BrandPageNotFoundComponent";

export default function Page() {
  let { brand } = useParams();

  brand = getPathParameter(brand as string);
  const [brandDetails] = useState(brandsService.getBrandInformation(brand));

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
        style={{ maxWidth: "80%" }}
        className="extended-screen-container"
      >
        {Object.entries(brandModels).map(([seriesName, seriesModels]) => {
          return (
            <div key={`brand_${brand}_series_${seriesName}`}>
              <div key={`brand_${brand}_series_${seriesName}_title`} className="container-title">
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
                      className="hover-animation"
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
