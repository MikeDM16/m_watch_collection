import SiteFooter from "@/app/components/chrome/SiteFooter";
import brandsService from "@/app/services/brandsService";
import { getPathParameter } from "@/app/services/commonFunctions";

/**
 * Resolves the brand for its own segment and renders the brand-tinted footer.
 * Next 16 layouts receive `params` for their own dynamic segment, so both the
 * brand page and the model page nested beneath it get this for free.
 */
export default async function BrandLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ brand: string }>;
}) {
  const { brand: raw } = await params;
  const brand = getPathParameter(raw);
  const details = brandsService.getBrandInformation(brand);

  return (
    <>
      {children}
      <SiteFooter images={details?.backgrounImages} seed={brand} />
    </>
  );
}
