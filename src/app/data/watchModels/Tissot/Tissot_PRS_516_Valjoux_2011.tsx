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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2011 Tissot PRS 516 Automatic Valjoux 7750",
  sliderImages: [
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6048.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6055.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6057.JPG",

    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6104.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6105.JPG",

    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6064.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6065.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6066.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6067.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6068.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6069.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6070.JPG",

    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6089.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6091.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6093.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6094.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6095.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6096.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6097.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6098.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6099.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6100.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6101.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6102.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6103.JPG",

    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6114.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6115.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6116.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6117.JPG",

    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6071.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6072.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6073.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6074.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6075.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6076.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6077.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6078.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6079.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6080.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6086.JPG",

    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6081.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6082.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6083.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_516_Valjoux/IMG_6084.JPG",
  ],

  saleReport: {
    price: 780,
    date: "29/01/2025",
    url: "https://www.catawiki.com/en/l/93182326-tissot-prs-516-carbon-nascar-racing-limited-edition-valjoux-7750-25-jewels-men-2011",
  },

  technicalData: {
    features: ["Date", "Automatic Chronograph", "100 meters", "Screw-in crown", "Tachymeter"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRS_516,
      catalogueReference: "Valjoux J564/664",
      productionYear: "2011",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Tachymeter",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "21 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
