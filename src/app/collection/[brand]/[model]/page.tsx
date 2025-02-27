"use client";

import AccordionFunction, { AccordionEntry } from "@/app/components/accordion/AccordionComponent";
import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import { CaliberDetailComponent } from "@/app/components/caliber/CaliberDetailsComponent";
import FeatureListingComponent from "@/app/components/common/FeaturesListingComponent";
import ImageSwiperComponent from "@/app/components/common/ImageSwiperComponent";
import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import BrandModelPageNotFoundComponent from "@/app/components/notFound/BrandModelPageNotFoundComponent";
import BrandPageNotFoundComponent from "@/app/components/notFound/BrandPageNotFoundComponent";
import saleReportComponent from "@/app/components/saleReport/saleReportComponent";
import { Caliber } from "@/app/data/movementsData";
import {
  BraceletInformationToDisplayTextMapping,
  CaseInformationKeyToDisplayTextMapping,
  DialInformationToDisplayTextMapping,
  ModelInformationKeyToDisplayTextMapping,
  TechnicalData,
} from "@/app/data/watchDetails";
import { FeatureStruct } from "@/app/enums/featuresEnum";
import {
  getColumnBraceletBackgroud,
  getColumnCaseBackgroud,
  getColumnDialBackgroud,
} from "@/app/modelPage/technicalInformationUtils";
import brandsService from "@/app/services/brandsService";
import collectionService from "@/app/services/collectionService";
import { getPathParameter, selectBackgroundImage } from "@/app/services/commonFunctions";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function BrandModelPage() {
  let { brand, model } = useParams();
  brand = getPathParameter(brand as string);
  model = getPathParameter(model as string);
  const [brandDetails] = useState(brandsService.getBrandInformation(brand));
  const [modelDetails] = useState(collectionService.getModelInformationByKey(model));

  if (!brand || !brandDetails) {
    return BrandPageNotFoundComponent(brand);
  }

  if (!model || !modelDetails) {
    return BrandModelPageNotFoundComponent(brand, model);
  }

  const modelName: string = modelDetails.href.default.title;
  const technicalData: TechnicalData = modelDetails.href.default.technicalData;
  const caliberDetails: Caliber = technicalData.movement;

  const getTechnicalInformation = () => {
    return (
      <Row className="container">
        <Col>
          {FeatureListingComponent(
            "Case",
            technicalData.case as unknown as Record<string, string>,
            undefined,
            getColumnCaseBackgroud(technicalData),
            CaseInformationKeyToDisplayTextMapping,
          )}
        </Col>
        <Col>
          {FeatureListingComponent(
            "Dial",
            technicalData.dial as unknown as Record<string, string>,
            undefined,
            getColumnDialBackgroud(technicalData),
            DialInformationToDisplayTextMapping,
          )}
        </Col>
        <Col>
          {FeatureListingComponent(
            "Bracelet",
            technicalData.bracelet as unknown as Record<string, string>,
            undefined,
            getColumnBraceletBackgroud(technicalData.bracelet),
            BraceletInformationToDisplayTextMapping,
          )}
        </Col>
      </Row>
    );
  };

  const displayModelMainFeatures = (features: (string | FeatureStruct)[]) => {
    return (
      <div className="">
        {features
          .filter((entry) => entry != undefined)
          .map((entry, idx) => {
            if (typeof entry == "string") {
              return (
                <div key={`feature_model_${idx}`}>
                  {" "}
                  <b>{entry}</b>
                  <p></p>
                </div>
              );
            } else {
              return (
                <div key={`feature_model_${idx}`} className="bottom-margin-s">
                  <b>{entry.name}</b>
                  <div>{entry.description}</div>
                </div>
              );
            }
          })}
      </div>
    );
  };

  const renderBrandItemTechnicalData = () => {
    const accordionEntriesList: AccordionEntry[] = [
      {
        title: "Features",
        content: displayModelMainFeatures(technicalData.features),
      },
      {
        title: "Technical Information",
        content: getTechnicalInformation(),
      },
      {
        title: "Movement Details",
        content: CaliberDetailComponent(caliberDetails),
      },
    ];

    // If sale report exists, add them to the accordion items
    if (modelDetails.href.default.saleReport) {
      const baseImgSrc = modelDetails.srcImage;
      accordionEntriesList.push({
        title: "Sale Report",
        content: saleReportComponent(modelDetails.href.default.saleReport, baseImgSrc),
      });
    }

    return (
      <div>
        <Container>
          <div className="container-title centered-container">{modelName}</div>
        </Container>
        <Container>
          <Row className="container">
            <Col className="col-md-8 col-12">
              {/*ImageSwiperComponent({ images: modelDetails.href.default.sliderImages })*/}
              {ImageSwiperComponent({ images: modelDetails.href.default.sliderImages })}
              {/*ImageLigthGalleryComponent( modelDetails.href.default.sliderImages)*/}
            </Col>
            <Col>
              {FeatureListingComponent(
                "",
                technicalData.information as unknown as Record<string, string>,
                brandDetails.logoImg,
                undefined,
                ModelInformationKeyToDisplayTextMapping,
              )}
            </Col>
          </Row>
          <Row>{AccordionFunction(accordionEntriesList)}</Row>
        </Container>
      </div>
    );
  };

  return (
    <div>
      {HeaderNavBar()}
      {BrandPageTitleComponent(brandDetails)}
      {renderBrandItemTechnicalData()}
      {/*CaliberDetailComponent(caliberDetails)*/}
      {FooterComponent({ backgroudImage: selectBackgroundImage(brandDetails.backgrounImages) })}
    </div>
  );
}
