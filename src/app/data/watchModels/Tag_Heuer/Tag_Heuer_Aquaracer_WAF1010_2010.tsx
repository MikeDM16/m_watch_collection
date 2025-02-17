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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2010 Tag Heuer Aquaracer Grande Date WAF1010",

  sliderImages: [
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6077.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6078.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6079.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6080.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6081.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6082.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6083.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6084.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6085.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/catalogue.JPG",

    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6044.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6045.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6046.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6047.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6048.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6049.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6050.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6051.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6052.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6053.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6054.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6055.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6056.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6057.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6058.JPG",

    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6028.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6029.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6030.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6031.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6032.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6034.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6035.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6036.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6037.JPG",

    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6059.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6060.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6061.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6062.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6063.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6064.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6065.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6066.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6067.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6068.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6070.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6071.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6072.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6073.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6074.JPG",

    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6094.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6095.JPG",

    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6087.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6088.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6089.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6090.JPG",
    "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6091.JPG",
  ],
  sellReport: {
    price: 602,
    date: "18/02/2024",
    url: "https://www.catawiki.com/en/l/80172441",
  },

  technicalData: {
    features: ["Date", "Screw-in crown", "300 meters", "Uni-directional rotating bezel"],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.AQUARACER,
      catalogueReference: "Grande Date (WAF1010)",
      productionYear: "2010",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "45 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_300M,
      finishingDetails: "Brushed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_12_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey metal",
    },

    movement: MovementsDataDB.RONDA_6004B,
  },
};

export default details;
