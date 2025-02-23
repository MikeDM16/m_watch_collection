import { MovementsDataDB } from "../../movementsData";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1986 Omega Polaris Multifunction 386.0822",
  sliderImages: [
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7139.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7140.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1258.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1259.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1260.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1261.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1262.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1263.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1264.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1265.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1267.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1268.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1269.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1270.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1271.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1272.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1273.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1274.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1275.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1276.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1277.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1278.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1279.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1280.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1281.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1282.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1283.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1284.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1285.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1286.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1287.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1288.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7190.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1289.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1290.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1291.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1292.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1293.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1294.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_1295.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7138.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7241.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7239.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7240.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7243.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_386_0820/IMG_7244.JPG",
  ],
  sellReport: {
    price: 610,
    date: "30/04/2024",
    url: "https://www.catawiki.com/en/l/82735339",
  },

  technicalData: {
    features: ["Date", "30 meters"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.POLARIS,
      catalogueReference: "DB 386.0822",
      productionYear: "1986",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "6 mm",
      material: "Stainless Steel - Gold Inlay",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Vertical Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey and Gold plated details",
    },

    movement: MovementsDataDB.OMEGA_1665,
  },
};

export default details;
