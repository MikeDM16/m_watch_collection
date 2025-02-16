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
  title: "1995 Tag Heuer Professional Formula-1 WA1212 (Tritium Dial)",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5024.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5025.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5026.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5027.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5028.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5029.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5030.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5031.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5032.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5033.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5034.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5035.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5036.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5037.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5038.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5039.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5041.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5042.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5043.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_0048.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_0049.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_0050.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_0051.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_0052.JPG",
  ],
  sellReport: {
    price: 222,
    date: "25/10/2019",
    url: "https://www.catawiki.com/l/30207381-tag-heuer-formula-1-professional-2000-wa1212-men-1990-1999",
  },
  technicalData: {
    features: [
      "Date",
      "Push-in crown",
      "200 meters",
      "Uni-directional rotating bezel",
      "Tritium Dial",
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: "Professional Formula-1 Series",
      catalogueReference: "WK1212",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Matte",
      bezel: "Uni-directional, 5-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige (Tritium patina)",
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Jubilee style Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey metal",
    },

    movement: MovementsDataDB.HEUER_1_94,
  },
};

export default details;
