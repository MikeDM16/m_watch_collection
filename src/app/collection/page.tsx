"use client";

import Image from "next/image";
import getExternalResource from "../services/common_functions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import brands_service from "../services/brands_service";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Brand } from "../data/brands";

export default function Page() {
  const [mainBrands] = useState(brands_service.getMainBrands());
  const [allBrands] = useState(brands_service.getAllBrands());

  const router = useRouter();

  const brandColOnClickHandler = (brandName: string) => {
    router.push(`collection/${brandName}`);
  };

  const mainBrandsTable = () => {
    // Single row with all the columns in 1 line. boostrap table will adjust the table based on the provided sizes
    return (
      <Container key="main_brands_container">
        <div className="title-text" key="main_brands">
          {"Main Brands"}
        </div>
        <Row key="single_main_brands_row" {...{ xs: 2, sm: 4, md: 4, lg: 5, xl: 5 }}>
          {mainBrands.map((entry) => (
            // For each brand the is a colum with a image and a click callback
            <Col
              key={`brand_icon_${entry.name}`}
              onClick={() => brandColOnClickHandler(entry.name)}
            >
              <Image
                key={`brand_icon_image_${entry.name}`}
                className=""
                src={getExternalResource(entry.logo_img)}
                alt="Next.js logo"
                width={180}
                height={38}
                loading="lazy"
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  const ListBrandsForLetter = (key_letter: string, brandNames: Brand[]) => {
    return (
      <div key={`brand_list_for_letter_${key_letter}`} className="bottom-margin">
        <div key={`brand_letter_prefix_${key_letter}`} className={"bold-text title-text"}>
          {key_letter}
        </div>
        {brandNames.map((entry: Brand) => {
          // Each branch is the list is a simple name with a click callback
          return (
            <div
              key={`brand_${entry.name}`}
              className={"border-bottom-text"}
              onClick={() => brandColOnClickHandler(entry.name)}
            >
              {entry.name}
            </div>
          );
        })}
      </div>
    );
  };

  const ListAllBrandsGroupByLetter = () => {
    const offset = 5;
    return (
      <Container>
        <div key={`list_all_brands`} className="title-text">
          {"All Brands"}
        </div>
        <Row {...{ xs: 2, xl: 4 }}>
          {[0, 1, 2, 3].map((idx) => {
            return (
              <Col key={`brands_listing_${idx}`} className="bottom-margin">
                {Object.entries(allBrands)
                  .slice(idx * offset, idx * offset + offset)
                  .map(([key_letter, brandNames]) => {
                    return ListBrandsForLetter(key_letter, brandNames);
                  })}
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  };

  return (
    <div>
      {mainBrandsTable()}
      {ListAllBrandsGroupByLetter()}
    </div>
  );
}
