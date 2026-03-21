import AccordionFunction, { AccordionEntry } from "@/app/components/accordion/AccordionComponent";
import AnalyticsReporter from "@/app/components/analytics/AnalyticsReporter";
import BrandPageTitleComponent from "@/app/components/brandPage/BrandPageTitleComponent";
import { CaliberDetailComponent } from "@/app/components/caliber/CaliberDetailsComponent";
import FeatureListingComponent from "@/app/components/common/FeaturesListingComponent";
import ImageGalleryComponent from "@/app/components/common/ImageGalleryComponent";
import FooterComponent from "@/app/components/footer/footerComponent";
import HeaderNavBar from "@/app/components/header/headerComponent";
import BrandModelPageNotFoundComponent from "@/app/components/notFound/BrandModelPageNotFoundComponent";
import BrandPageNotFoundComponent from "@/app/components/notFound/BrandPageNotFoundComponent";
import saleReportComponent from "@/app/components/saleReport/saleReportComponent";
import { Caliber } from "@/app/data/movementsData";
import {
  BraceletInformationToDisplayTextMapping,
  CaseInformationKeyToDisplayTextMapping,
  DialInformationToDisplayTextMapping,
  ModelInformationKeyToDisplayTextMapping,
  TechnicalData,
} from "@/app/data/watchDetails";
import { FeatureStruct } from "@/app/enums/featuresEnum";
import {
  getColumnBraceletBackgroud,
  getColumnCaseBackgroud,
  getColumnDialBackgroud,
} from "@/app/modelPage/technicalInformationUtils";
import brandsService from "@/app/services/brandsService";
import collectionService from "@/app/services/collectionService";
import {
  getPathParameter,
  routeToCollectionBrandModelPage,
  selectBackgroundImage,
} from "@/app/services/commonFunctions";

export function generateStaticParams() {
  const allItems = collectionService.getAllCollectionItems();
  return Object.values(allItems).map((entry) => ({
    brand: encodeURIComponent(entry.brand),
    model: encodeURIComponent(entry.legend),
  }));
}

export default async function BrandModelPage({
  params,
}: {
  params: Promise<{ brand: string; model: string }>;
}) {
  const { brand: rawBrand, model: rawModel } = await params;
  const brand = getPathParameter(rawBrand);
  const model = getPathParameter(rawModel);
  const brandDetails = brandsService.getBrandInformation(brand);
  const modelDetails = collectionService.getModelInformationByKey(model);

  if (!brand || !brandDetails) {
    return <BrandPageNotFoundComponent unknownBrand={brand} />;
  }

  if (!model || !modelDetails) {
    return <BrandModelPageNotFoundComponent brand={brand} unknownModel={model} />;
  }

  const modelName: string = modelDetails.href.default.title;
  const technicalData: TechnicalData = modelDetails.href.default.technicalData;
  const caliberDetails: Caliber = technicalData.movement;

  const getTechnicalInformation = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <FeatureListingComponent
            title="Case"
            features={technicalData.case as unknown as Record<string, string>}
            backgroudImage={getColumnCaseBackgroud(technicalData)}
            keyToDisplayTextmappings={CaseInformationKeyToDisplayTextMapping}
          />
        </div>
        <div>
          <FeatureListingComponent
            title="Dial"
            features={technicalData.dial as unknown as Record<string, string>}
            backgroudImage={getColumnDialBackgroud(technicalData)}
            keyToDisplayTextmappings={DialInformationToDisplayTextMapping}
          />
        </div>
        <div>
          <FeatureListingComponent
            title="Bracelet"
            features={technicalData.bracelet as unknown as Record<string, string>}
            backgroudImage={getColumnBraceletBackgroud(technicalData.bracelet)}
            keyToDisplayTextmappings={BraceletInformationToDisplayTextMapping}
          />
        </div>
      </div>
    );
  };

  const displayModelMainFeatures = (features: (string | FeatureStruct)[]) => {
    return (
      <div>
        {features
          .filter((entry) => entry != undefined)
          .map((entry, idx) => {
            if (typeof entry == "string") {
              return (
                <div key={`feature_model_${idx}`}>
                  {" "}
                  <b>{entry}</b>
                  <p></p>
                </div>
              );
            } else {
              return (
                <div key={`feature_model_${idx}`} className="bottom-margin-s">
                  <b>{entry.name}</b>
                  <div>{entry.description}</div>
                </div>
              );
            }
          })}
      </div>
    );
  };

  const accordionEntriesList: AccordionEntry[] = [
    {
      title: "Features",
      content: displayModelMainFeatures(technicalData.features),
    },
    {
      title: "Technical Information",
      content: getTechnicalInformation(),
    },
    {
      title: "Movement Details",
      content: CaliberDetailComponent(caliberDetails),
    },
  ];

  if (modelDetails.href.default.saleReport) {
    const baseImgSrc = modelDetails.srcImage;
    accordionEntriesList.push({
      title: "Sale Report",
      content: saleReportComponent(modelDetails.href.default.saleReport, baseImgSrc),
    });
  }

  return (
    <div>
      <HeaderNavBar />
      <AnalyticsReporter page={routeToCollectionBrandModelPage(brand, model)} title={model} />
      <BrandPageTitleComponent brand={brandDetails} />
      <div>
        <div className="section-container">
          <div className="container-title centered-container">{modelName}</div>
        </div>
        <div className="section-container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 bottom-margin-m">
              <div style={{ height: "50dvh" }}>
                <div style={{ height: "inherit", overflow: "auto" }}>
                  <ImageGalleryComponent galleryImages={modelDetails.href.default.sliderImages} />
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <FeatureListingComponent
                title=""
                features={technicalData.information as unknown as Record<string, string>}
                imgSrc={brandDetails.logoImg}
                keyToDisplayTextmappings={ModelInformationKeyToDisplayTextMapping}
              />
            </div>
          </div>
          <div>
            <AccordionFunction items={accordionEntriesList} />
          </div>
        </div>
      </div>
      <FooterComponent backgroudImage={selectBackgroundImage(brandDetails.backgrounImages)} />
    </div>
  );
}
