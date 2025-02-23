import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1950 Admes ETA 1246 Automatic",
  sliderImages: [
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1439.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1440.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1441.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1442.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1443.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1444.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1445.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1446.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1447.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1448.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1449.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1450.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1451.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1452.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1453.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1454.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1455.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1456.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1457.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1458.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/IMG_1464.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/MBBK4227.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/QPFF1676.JPG",
    "public/assets/Images/Admes/1950_Admes_Automatic/YGIF5008.JPG",
  ],
  saleReport: {
    price: 110,
    date: "14/02/2019",
    url: "https://www.catawiki.com/l/24263071-admes-eta-1256-1-eta-automatic-cal-men-1950-1959",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC, featuresEnum.GOLD_PLATED_20M],

    information: {
      brand: BrandsEnum.ADMES,
      series: "Automatic",
      catalogueReference: "223890",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "11 mm",
      material: "Gold Plated (20\u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Brown",
    },

    movement: MovementsDataDB.ETA_1256,
  },
};

export default details;
