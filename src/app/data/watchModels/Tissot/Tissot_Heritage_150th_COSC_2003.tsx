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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2003 Tissot Heritage COSC Limited Edition",
  sliderImages: [
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5816.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5817.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5819.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5881.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5882.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5884.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5885.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5886.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5887.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5888.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5890.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5893.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5894.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5891.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5895.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5820.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5823.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5824.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5827.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5828.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5829.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5830.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5831.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5833.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5834.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5838.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5839.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5840.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5841.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5845.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5846.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5849.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5850.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5851.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5852.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5854.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5855.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5856.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5865.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5866.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5867.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5868.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5869.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5870.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5871.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5872.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5858.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5859.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5860.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5861.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5862.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5863.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5873.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5874.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5875.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5876.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5877.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5878.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage/IMG_5879.JPG",
  ],

  technicalData: {
    features: ["Date", "Open Case Back", "Automatic"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.HERITAGE,

      catalogueReference: "150th Anniversary T66.1.721.31 0837/8888",
      productionYear: "2003",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Silver",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Lizard Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_2895_1,
  },
};

export default details;
