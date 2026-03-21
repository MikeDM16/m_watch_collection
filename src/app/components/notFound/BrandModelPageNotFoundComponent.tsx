import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";

export default function BrandModelPageNotFoundComponent({
  brand,
  unknownModel,
}: {
  brand: string;
  unknownModel: string;
}) {
  return (
    <div>
      <HeaderNavBar />
      <BrandPageTitleComponent brand={{ name: brand, logoImg: "" }} />
      <div className="centered-text extended-screen-container">
        <div className="upper-text container-title centered-container border-bottom-text">
          {`Informations for brand model ${unknownModel} not found.`}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
