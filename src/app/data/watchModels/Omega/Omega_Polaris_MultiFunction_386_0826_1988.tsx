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

const details: WatchDetails = {
  title: "1988 Omega Polaris Multifunction 386.0826",
  sliderImages: [
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1428.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1429.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1430.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1431.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1432.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1433.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1434.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1435.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1436.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1437.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1438.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1439.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1440.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1441.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1442.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1443.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1444.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1445.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1446.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1447.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1448.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1449.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1450.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1451.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1452.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1453.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1454.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1455.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1456.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1457.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1505.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1507.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1509.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1510.JPG",
  ],
  sellReport: {
    price: 600,
    date: "24/07/2024",
    url: "https://www.catawiki.com/en/l/86375731-omega-seamaster-polaris-chronograph-386-0826-cal-1665-7-jewles-multi-function-18k-gold-inlay-men-1988",
  },

  technicalData: {
    features: ["Date", "30 meters"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "Polaris",
      catalogueReference: "DB 386.0826",
      productionYear: "1988",
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
      color: "Back (LCD)",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.OMEGA_1665,
  },
};

export default details;
