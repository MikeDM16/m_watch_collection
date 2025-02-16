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
import BrandTitleDivisionComponent from "@/app/components/common/BrandTitleDivisionComponent copy";

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

  const brandModels: CollectionEntry[] = getCollectionModelsByBrand(brand as string);

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
        })}
      </div>
    );
  };

  const renderCollectionItem = () => {
    return (
      <Container key={`brand_container_${brand}`}>
        <Row key={`brand_row_${brand}`} {...{ xs: 2, sm: 4, md: 4, lg: 5, xl: 6 }}>
          {brandModels.map((entry, index) => (
            <Col key={`brand_model_${brand}_${index}`} className="item">
              <div>
                <ImageComponent src={getExternalResource(entry.srcImage)} alt={`${entry.legend}`} />
                <div className="upper-text">{entry.brand}</div>
                <b>{entry.legend}</b>
                <div>{entry.year}</div>
              </div>
            </Col>
          ))}
        </Row>
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
