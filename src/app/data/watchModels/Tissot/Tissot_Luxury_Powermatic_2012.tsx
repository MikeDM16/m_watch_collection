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
  title: "2012 Tissot T-Classic Luxury Powermartic 80",
  sliderImages: [
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_0919.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_0921.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_0922.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_0923.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_0924.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_0929.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1042.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1043.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1044.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1045.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1046.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1047.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1049.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1050.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1051.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1052.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1053.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1054.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1055.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1056.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1057.JPG",

    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1069.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1070.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1075.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1076.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1077.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1078.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1080.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1081.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1082.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1084.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1086.JPG",

    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1058.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1059.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1060.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1061.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1062.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1063.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1064.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1065.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1066.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1067.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1068.JPG",

    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1071.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1072.JPG",
    "public/assets/Images/Tissot/2012_Tissot_Luxury_Powermatic/IMG_1073.JPG",
  ],

  sellReport: {
    price: 345,
    date: "13/10/2024",
    url: "https://www.catawiki.com/en/l/88942997",
  },

  technicalData: {
    features: ["Date", "Open Case Back", "Automatic"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: "T-Classic Luxury (Powermatic 80)",
      catalogueReference: "T086207.16261000",
      productionYear: "2012",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "33 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_C07_111,
  },
};

export default details;
