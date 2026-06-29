import AnalyticsReporter from "@/app/components/analytics/AnalyticsReporter";
import BrandCollectionGrid, { CardData } from "@/app/components/brandPage/BrandCollectionGrid";
import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import BrandPageNotFoundComponent from "@/app/components/notFound/BrandPageNotFoundComponent";
import brandsService from "@/app/services/brandsService";
import collectionService, { SeriesGroup } from "@/app/services/collectionService";
import { getPathParameter, routeToCollectionBrandPage } from "@/app/services/commonFunctions";

export function generateStaticParams() {
  const allBrands = brandsService.getAllBrands();
  const params: { brand: string }[] = [];
  Object.values(allBrands).forEach((brands) => {
    brands.forEach((b) => {
      params.push({ brand: b.name });
    });
  });
  return params;
}

export default async function Page({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: rawBrand } = await params;
  const brand = getPathParameter(rawBrand);
  const brandDetails = brandsService.getBrandInformation(brand);

  if (!brand || !brandDetails) {
    return <BrandPageNotFoundComponent unknownBrand={brand} />;
  }

  const brandModels: SeriesGroup[] = collectionService.getCollectionModelsByBrand(
    brand,
    brandDetails.displayBySeries,
  );

  // Flatten every series group into one continuous list. Group order is preserved (outer
  // flatMap keeps the service's newest-first, first-encounter order) and cards are sorted by
  // year within each group. Series context lives on the cards as tags, not as section titles.
  const cards: CardData[] = brandModels.flatMap((group) =>
    group.subGroups
      .flatMap((sub) =>
        sub.models.map((entry) => ({ entry, group: group.group, label: sub.label })),
      )
      .sort((a, b) => b.entry.year - a.entry.year),
  );

  // Distinct, non-empty group names in grid order — drives the series filter (skipped when < 2).
  const groups = [...new Set(cards.map((c) => c.group))].filter((g) => g !== "");

  return (
    <div>
      <HeaderNavBar />
      <AnalyticsReporter page={routeToCollectionBrandPage(brand)} title={brand} />
      <BrandPageTitleComponent brand={brandDetails} />
      <div className="section-container extended-screen-container centered-text">
        <BrandCollectionGrid brand={brand} cards={cards} groups={groups} />
      </div>
      <FooterComponent images={brandDetails.backgrounImages} />
    </div>
  );
}
