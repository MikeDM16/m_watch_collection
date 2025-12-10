import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2009 Tissot Heritage Telemeter COSC Limited Edition 0250/3333",
  sliderImages: [
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7470.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7471.JPG",

    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7472.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7533.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7534.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7535.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7476.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7477.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7478.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7479.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7480.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7481.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7483.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7484.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7485.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7486.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7488.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7489.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7490.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7492.JPG",

    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7499.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7500.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7501.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7502.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7503.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7504.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7505.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7506.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7507.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7508.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7509.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7510.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7511.JPG",

    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7493.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7494.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7495.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7496.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7497.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7498.JPG",

    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7512.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7513.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7514.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7515.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7516.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7517.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7518.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7519.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7520.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7521.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7522.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7523.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7524.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7525.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7527.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7528.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7529.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7530.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7531.JPG",
    "public/assets/Images/Tissot/2009_Tissot_Heritage_Telemeter_250_3333/IMG_7532.JPG",
  ],

  saleReport: {
    price: 1600,
    date: "23/12/2025",
    url: "https://www.catawiki.com/en/l/99464212",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.OPEN_CASE_BACK, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.HERITAGE,

      catalogueReference: "Heritage Telemeter 0250/3333",
      productionYear: "2009",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Ligth Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7753_27,
  },
};

export default details;
