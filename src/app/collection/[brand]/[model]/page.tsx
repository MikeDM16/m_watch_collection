"use client";

import HeaderNavBar from "@/app/components/header/header";
import { getPathParameter } from "@/app/services/commonFunctions";
import { useParams } from "next/navigation";
import { useState } from "react";
import brandsService from "@/app/services/brandsService";
import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import Container from "react-bootstrap/Container";
import collectionService from "@/app/services/collectionService";

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

  const renderBrandItem = () => {
    return (
      <div>
        <Container>
          <div className="container-title centered-container">{model}</div>
        </Container>
        <Container>{JSON.stringify(modelDetails)}</Container>
      </div>
    );
  };
  return (
    <div>
      {HeaderNavBar()}
      {BrandPageTitleComponent(brandDetails)}
      {renderBrandItem()}
    </div>
  );
}
