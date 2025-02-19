"use client";

import HeaderNavBar from "@/app/components/header/header";
import { getPathParameter } from "@/app/services/commonFunctions";
import { useParams } from "next/navigation";
import { useState } from "react";
import brandsService from "@/app/services/brandsService";
import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import Container from "react-bootstrap/Container";
import collectionService from "@/app/services/collectionService";
import { Col, Row } from "react-bootstrap";
import ImageSwiperComponent from "@/app/components/common/ImageSwiperComponent";
import {
  BraceletInformationToDisplayTextMapping,
  CaseInformationKeyToDisplayTextMapping,
  DialInformationToDisplayTextMapping,
  ModelInformationKeyToDisplayTextMapping,
  TechnicalData,
} from "@/app/data/watchDetails";
import FeatureListingComponent from "@/app/components/common/FeaturesListingComponent";
import { CaliberDetailComponent } from "@/app/components/caliber/CaliberDetailsComponent";
import { Caliber } from "@/app/data/movementsData";

export default function BrandModelPage() {
  let { brand, model } = useParams();
  brand = getPathParameter(brand as string);
  model = getPathParameter(model as string);
  const [brandDetails] = useState(brandsService.getBrandInformation(brand));
  const [modelDetails] = useState(collectionService.getModelInformationByKey(model));

  if (!brand || !brandDetails) {
    // TOOD
    return <div>NOT FOUND for brand {brand}</div>;
  }

  if (!model || !modelDetails) {
    // TODO
    return <div>NOT FOUND for model {model}</div>;
  }

  const modelName: string = modelDetails.href.default.title;
  const technicalData: TechnicalData = modelDetails.href.default.technicalData;
  const caliberDetails: Caliber = modelDetails.href.default.technicalData.movement;

  const renderBrandItemTechnicalData = () => {
    return (
      <div>
        <Container>
          <div className="container-title centered-container">{modelName}</div>
        </Container>
        <Container>
          <Row className="container">
            <Col className="col-md-8 col-12">
              {ImageSwiperComponent({ images: modelDetails.href.default.sliderImages })}
            </Col>
            <Col>
              {FeatureListingComponent(
                "General Information",
                technicalData.information as unknown as Record<string, string>,
                brandDetails.logoImg,
                ModelInformationKeyToDisplayTextMapping,
              )}
            </Col>
          </Row>
          <Row className="container">
            <Col>
              {FeatureListingComponent(
                "Case",
                technicalData.case as unknown as Record<string, string>,
                undefined,
                CaseInformationKeyToDisplayTextMapping,
              )}
            </Col>
            <Col>
              {FeatureListingComponent(
                "Dial",
                technicalData.dial as unknown as Record<string, string>,
                undefined,
                DialInformationToDisplayTextMapping,
              )}
            </Col>
            <Col>
              {FeatureListingComponent(
                "Bracelet",
                technicalData.bracelet as unknown as Record<string, string>,
                undefined,
                BraceletInformationToDisplayTextMapping,
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  return (
    <div>
      {HeaderNavBar()}
      {BrandPageTitleComponent(brandDetails)}
      {renderBrandItemTechnicalData()}
      {CaliberDetailComponent(caliberDetails)}
    </div>
  );
}
