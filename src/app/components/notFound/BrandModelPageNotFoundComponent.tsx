import { routeToCollectionBrandPage, routeToMainPageHeader } from "@/app/services/commonFunctions";

import NotFoundPanel from "./NotFoundPanel";

export default function BrandModelPageNotFoundComponent({
  brand,
  unknownModel,
}: {
  brand: string;
  unknownModel: string;
}) {
  return (
    <NotFoundPanel
      title={unknownModel || "Unknown model"}
      message={`There is no “${unknownModel}” in the ${brand} collection.`}
      actions={[
        { href: routeToCollectionBrandPage(brand), label: `All ${brand}` },
        { href: routeToMainPageHeader(), label: "Home" },
      ]}
    />
  );
}
