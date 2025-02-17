"use client";

import ImageComponent from "@/app/components/common/ImageComponent";
import HeaderNavBar from "@/app/components/header/header";
import { CollectionEntry } from "@/app/data/collectionData";
import { getCollectionModelsByBrand } from "@/app/services/collectionService";
import { getExternalResource } from "@/app/services/commonFunctions";
import { useParams } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import brandsService from "@/app/services/brandsService";
import BrandTitleDivisionComponent from "@/app/components/common/BrandTitleDivisionComponent";

export default function Page() {
  let { brand } = useParams();

  const getBrandFromPathParameter = (brand: string): string => {
    return brand.replaceAll("-", " ");
  };

  brand = getBrandFromPathParameter(brand as string);
  const [brandDetails] = useState(brandsService.getBrandInformation(brand));

  if (!brand || !brandDetails) {
    return <div>NOT FOUND</div>;
  }

  const brandModels: Record<string, CollectionEntry[]> = getCollectionModelsByBrand(
    brand as string,
    brandDetails.displayBySeries,
  );

  const brandPageTitle = () => {
    let foundedText = undefined;
    if (brandDetails.foundedInformation) {
      foundedText = `${brandDetails.foundedInformation.year}`;

      if (brandDetails.foundedInformation.details) {
        foundedText = `${foundedText}, ${brandDetails.foundedInformation.details}`;
      }
    }

    return (
      <div>
        {BrandTitleDivisionComponent({
          title: `${brand}`,
          textAlignement: "left",
          description: brandDetails.description,
          founded: foundedText,
          website: brandDetails.website,
          navigationPath: { MWatchCollection: "../#", "All Brands": "../#AllBrandsItems" },
        })}
      </div>
    );
  };

  const renderCollectionItem = () => {
    return (
      <Container key={`brand_container_${brand}`} style={{ maxWidth: "80%" }}>
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
                      <ImageComponent
                        src={getExternalResource(entry.srcImage)}
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
      {brandPageTitle()}
      {renderCollectionItem()}
    </div>
  );
}
