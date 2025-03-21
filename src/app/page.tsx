"use client";

import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import AboutMeContainer from "./components/aboutMe/aboutMe";
import AnalyticsReport from "./components/analytics/analyticsReport";
import BrandTitleDivisionComponent from "./components/brandPage/BrandTitleDivisionComponent";
import PageTitleDivisionComponent from "./components/common/pageTitleDivisionComponent";
import ContactsComponent from "./components/contacts/contacts";
import PreviousSalesContainer from "./components/previousSales/previousSalesComponent";
import { Brand } from "./data/brands";
import brandsService from "./services/brandsService";
import { getExternalResource, routeToCollectionBrandPage } from "./services/commonFunctions";

export default function Page() {
  const [mainBrands] = useState(brandsService.getMainBrands());
  const [allBrands] = useState(brandsService.getAllBrands());

  useEffect(() => {
    AnalyticsReport({ page: "home", title: "MWatchCollection" });
  }, []);

  const brandColOnClickHandler = (brandName: string): string => {
    return routeToCollectionBrandPage(brandName);
  };

  const mainBrandsTable = () => {
    // Single row with all the columns in 1 line. boostrap table will adjust the table based on the provided sizes
    return (
      <div>
        <Container>
          <div className="container-title centered-container">Main Brands</div>
        </Container>

        <Container>
          <Row key="single_main_brands_row" {...{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}>
            {mainBrands.map((entry) => (
              // For each brand the is a colum with a image and a click callback
              <Col
                key={`brand_icon_${entry.name}`}
                className="centered-container hover-animation bottom-margin-s"
              >
                <Link href={brandColOnClickHandler(entry.name)}>
                  <Image
                    key={`brand_icon_image_${entry.name}`}
                    src={getExternalResource(entry.logoImg)}
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    loading="lazy"
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  };

  const ListBrandsForLetter = (key_letter: string, brandNames: Brand[]) => {
    return (
      <div key={`brand_list_for_letter_${key_letter}`} className="bottom-margin-m">
        <div key={`brand_letter_prefix_${key_letter}`} className={"bold-text feature-text"}>
          {key_letter}
        </div>
        {brandNames.map((entry: Brand) => {
          // Each branch is the list is a simple name with a click callback
          return (
            <Col key={`brand_${entry.name}`} className={"border-bottom-text"}>
              <Link href={brandColOnClickHandler(entry.name)} className="info-text">
                {entry.name}
              </Link>
            </Col>
          );
        })}
      </div>
    );
  };

  const ListAllBrandsGroupByLetter = () => {
    const offset = 5;
    return (
      <div>
        <div id="AllBrandsItems">{PageTitleDivisionComponent({ title: "All Brands" })}</div>

        <Container>
          <Row {...{ xs: 2, xl: 4 }}>
            {[0, 1, 2, 3].map((idx) => {
              return (
                <Col key={`brands_listing_${idx}`} className="">
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
      </div>
    );
  };

  return (
    <div>
      {HeaderNavBar()}
      {BrandTitleDivisionComponent({
        title: `M Watch Collection`,
        textAlignement: "center",
      })}
      {mainBrandsTable()}
      {ListAllBrandsGroupByLetter()}
      {AboutMeContainer()}
      {PreviousSalesContainer()}
      {ContactsComponent()}
      {FooterComponent()}
    </div>
  );
}
