"use client";

import ImageComponent from "@/app/components/common/ImageComponent";
import PageTitleDivisionComponent from "@/app/components/common/pageTitleDivisionComponent";
import HeaderNavBar from "@/app/components/header/header";
import { CollectionEntry } from "@/app/data/collectionData";
import { getCollectionModelsByBrand } from "@/app/services/collectionService";
import { getExternalResource } from "@/app/services/commonFunctions";
import { useParams } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Page() {
  const { brand } = useParams();

  if (!brand) {
    return <div>NOT FOUND</div>;
  }

  const brandModels: CollectionEntry[] = getCollectionModelsByBrand(brand as string);

  const renderCollectionItem = () => {
    return (
      <Container key={`brand_container_${brand}`}>
        <Row key={`brand_row_${brand}`} {...{ xs: 2, sm: 4, md: 4, lg: 5, xl: 6 }}>
          {brandModels.map((entry, index) => (
            <Col key={`brand_model_${brand}_${index}`} className="item">
              <ImageComponent src={getExternalResource(entry.srcImage)} alt={`${entry.legend}`} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  return (
    <div>
      {HeaderNavBar()}
      <div>{PageTitleDivisionComponent({ title: `${brand}` })}</div>
      {renderCollectionItem()}
    </div>
  );
}
