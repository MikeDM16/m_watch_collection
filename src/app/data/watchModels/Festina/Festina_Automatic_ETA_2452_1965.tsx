import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
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
  title: "1965 Festina Automatic ETA 2452",
  sliderImages: [
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2446.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2447.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2448.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2449.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2451.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2452.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2453.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2454.JPG",

    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2472.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2474.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2477.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2478.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2479.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2480.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2482.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2483.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2484.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2485.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2486.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2488.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2489.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2492.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2494.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2495.JPG",

    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2455.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2456.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2457.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2458.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2459.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2460.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2461.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2462.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2463.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2464.JPG",

    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2465.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2466.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2467.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2468.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2469.JPG",
    "public/assets/Images/Festina/1965_Festina_Automatic/IMG_2471.JPG",
  ],

  saleReport: {
    price: 134,
    date: "16/07/2025",
    url: "https://www.catawiki.com/en/l/96608019",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.FESTINA,
      series: "Automatic",
      catalogueReference: "1526 BA",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BEIGE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: MovementsDataDB.ETA_2452,
  },
};

export default details;
