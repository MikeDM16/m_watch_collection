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
  title: "2007 Tissot Le Locle L164/264-1 Automatic",
  sliderImages: [
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5711.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5712.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5713.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5765.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5766.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5767.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5768.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5769.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5770.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5771.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5772.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5773.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5774.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5775.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5776.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5777.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5778.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5779.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5780.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5781.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5782.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5783.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5784.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5786.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5787.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5788.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5789.JPG",

    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5735.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5736.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5737.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5739.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5740.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5740.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5741.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5742.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5743.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5745.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5746.JPG",

    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5790.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5791.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5792.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5793.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5795.JPG",

    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5747.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5748.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5749.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5750.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5751.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5752.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5753.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5754.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5755.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5756.JPG",
    "public/assets/Images/Tissot/2007_Tissot_Le_Locle_Auto/IMG_5760.JPG",
  ],

  saleReport: {
    price: 462,
    date: "30/01/2024",
    url: "https://www.catawiki.pt/l/79482145",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.OPEN_CASE_BACK, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.LE_LOCLE,
      catalogueReference: "L164/264-1",
      productionYear: "2007",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "10 mm",
      material: "Gold Plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_2824,
  },
};

export default details;
