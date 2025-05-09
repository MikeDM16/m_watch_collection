"use client";

import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import React from "react";

export default function BrandModelPageNotFoundComponent(Brand: string, unknownModel: string) {
  return (
    <div>
      {HeaderNavBar()}
      {BrandPageTitleComponent({ name: Brand, logoImg: "" })}
      <div className="centered-text extended-screen-container">
        <div className="upper-text container-title centered-container border-bottom-text">
          {`Informations for brand model ${unknownModel} not found.`}
        </div>
      </div>
      {FooterComponent()}
    </div>
  );
}
