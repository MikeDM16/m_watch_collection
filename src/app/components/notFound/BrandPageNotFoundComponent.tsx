import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import React from "react";

export default function BrandPageNotFoundComponent(unknownBrand: string) {
  return (
    <div>
      {HeaderNavBar()}
      {BrandPageTitleComponent({ name: unknownBrand, logoImg: "" })}
      <div className="centered-text extended-screen-container">
        <div className="upper-text container-title centered-container border-bottom-text">
          {`Informations for brand ${unknownBrand} not found.`}
        </div>
      </div>
      {FooterComponent()}
    </div>
  );
}
