import AboutMeContainer from "@/app/components/aboutMe/aboutMe";
import HeroBand from "@/app/components/common/HeroBand";
import ContactsComponent from "@/app/components/contacts/contacts";
import BrandIndex, { type BrandRow } from "@/app/components/home/BrandIndex";
import SalesResults, { type SoldEntry } from "@/app/components/home/SalesResults";
import SpecialTimepieces from "@/app/components/home/SpecialTimepieces";
import brandsService from "@/app/services/brandsService";
import collectionService from "@/app/services/collectionService";
import {
  background_images_paths,
  getExternalResource,
  routeToMainPageAllBrandListing,
} from "@/app/services/commonFunctions";

export default function Page() {
  // Everything is read on the server and narrowed to plain props before it
  // crosses to a client component, so collectionService stays out of the
  // client bundle. Keep it that way.
  const index = collectionService.getAllCollectionItems();
  const entries = Object.values(index);

  const specialItems = collectionService.getSpecialCollectionItems().map((e) => ({
    srcImage: e.srcImage,
    hoverSrc: e.hoverSrc ?? undefined,
    brand: e.brand,
    legend: e.legend,
    year: e.year,
    movementTitle: e.movementTitle || undefined,
  }));

  const sales: SoldEntry[] = collectionService
    .getSoldModels()
    .filter((e) => e.saleReport)
    .map((e) => ({
      brand: e.brand,
      legend: e.legend,
      year: e.year,
      srcImage: e.srcImage,
      price: e.saleReport!.price,
      date: e.saleReport!.date,
      url: e.saleReport!.url,
    }));

  // Per-brand model counts, derived from the index at build time.
  const counts = new Map<string, number>();
  entries.forEach((e) => counts.set(e.brand, (counts.get(e.brand) ?? 0) + 1));

  const byLetter: Record<string, BrandRow[]> = {};
  Object.entries(brandsService.getAllBrands()).forEach(([letter, brands]) => {
    const rows = brands
      .filter((b) => (counts.get(b.name) ?? 0) > 0)
      .map((b) => ({ name: b.name, count: counts.get(b.name)! }))
      .sort((a, b) => a.name.localeCompare(b.name));
    if (rows.length) byLetter[letter] = rows;
  });

  const stats = [
    { label: "Brands", value: counts.size },
    { label: "Timepieces", value: entries.length },
    { label: "Sales", value: sales.length },
  ];

  const years = entries.map((e) => e.year).filter(Boolean);
  const hero = background_images_paths[0];

  return (
    <>
      <link rel="preload" as="image" href={getExternalResource(hero)} />

      <HeroBand
        image={hero}
        size="home"
        title="M Watch Collection"
        subtitle={`${entries.length} timepieces, ${Math.min(...years)} to ${Math.max(...years)}. Photographed, specified and catalogued.`}
        cta={{ href: routeToMainPageAllBrandListing(), label: "Browse brands" }}
      />

      <SpecialTimepieces items={specialItems} />

      <BrandIndex mainBrands={brandsService.getMainBrands()} byLetter={byLetter} stats={stats} />

      <AboutMeContainer />

      <ContactsComponent />

      <SalesResults sales={sales} />
    </>
  );
}
