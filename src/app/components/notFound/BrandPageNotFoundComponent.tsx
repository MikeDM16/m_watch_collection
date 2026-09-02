import {
  routeToMainPageAllBrandListing,
  routeToMainPageHeader,
} from "@/app/services/commonFunctions";

import NotFoundPanel from "./NotFoundPanel";

export default function BrandPageNotFoundComponent({ unknownBrand }: { unknownBrand: string }) {
  return (
    <NotFoundPanel
      title={unknownBrand || "Unknown brand"}
      message={`There is no brand called “${unknownBrand}” in the collection. It may have been listed under a different name.`}
      actions={[
        { href: routeToMainPageAllBrandListing(), label: "All brands" },
        { href: routeToMainPageHeader(), label: "Home" },
      ]}
    />
  );
}
