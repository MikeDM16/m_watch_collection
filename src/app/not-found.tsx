"use client";

import { redirect, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import brandsService from "./services/brandsService";
import { routeToCollectionBrandPage, routeToMainPageHeader } from "./services/commonFunctions";

const NotFoundPage = () => {
  return (
    <Suspense fallback={<></>}>
      <NotFoundContentRedirect />
    </Suspense>
  );
};

const NotFoundContentRedirect = () => {
  const queryArgs = useSearchParams();

  /** Suport for legacy URL from the old app. 
    Redirect them to the closest resource in the new architecure is possible
    Old URL is <domain>/WatchDetails?model=<model name>
    - get brand from model_name
    - if brand exists, redirect to new <domain>/collection/[brand]
    - otherwise, redirect to main page
    */
  const modelQueryArg = queryArgs.get("model");
  if (modelQueryArg) {
    console.log(modelQueryArg);
    const words = modelQueryArg.split(" ");
    let brand = words[1];
    if (brandsService.getBrandInformation(brand)) {
      redirect(routeToCollectionBrandPage(brand));
    } else {
      brand = words.slice(1, 3).join(" "); // Get second and third word
      if (brandsService.getBrandInformation(brand)) {
        redirect(routeToCollectionBrandPage(brand));
      }
    }
  }
  redirect(routeToMainPageHeader());
};

/*const NotFoundDefaultComponent = () => {
  return (
    <div>
      {HeaderNavBar()}
      {BrandPageTitleComponent({ name: "Resource Not Found", logoImg: "" })}
      <div className="centered-text extended-screen-container">
        <div className="upper-text container-title centered-container border-bottom-text">
          {`Could not find requested page resource.`}
        </div>
        <Link href="/">Return Home</Link>
      </div>

      {FooterComponent()}
    </div>
  );
};*/

export default NotFoundPage;
