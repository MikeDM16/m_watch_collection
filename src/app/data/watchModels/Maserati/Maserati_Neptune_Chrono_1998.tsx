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

const details: WatchDetails = {
  title: "1999 Maserati Neptune Chronograph Automatic",
  sliderImages: [
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6609.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6611.JPG",

    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6593.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6596.JPG",

    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6539.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6542.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6544.JPG",

    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6567.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6568.JPG",

    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6545.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6546.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6547.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6548.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6549.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6550.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6552.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6553.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6555.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6556.JPG",

    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6532.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6534.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6535.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6536.JPG",

    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6558.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6559.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6560.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6561.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6562.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6563.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6564.JPG",

    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6569.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6570.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6574.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6575.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6576.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6577.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6578.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6580.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6581.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6582.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6583.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6584.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6585.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6586.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6587.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6588.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6589.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6590.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6591.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6592.JPG",

    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6601.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6602.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6603.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6605.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6606.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6607.JPG",
    "public/assets/Images/Maserati/1998_Maserati_Neptune_Chronograph/IMG_6608.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.MASERATI,
      series: "Maserati Oficial Timepieces",
      catalogueReference: "Neptune",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel (Gold Plated)",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Two Tone Stainless Steel",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "18 mm",
      color: "Steel with Gold plated inner links",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_17J,
  },
};

export default details;
