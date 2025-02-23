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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2016 Tag Heuer Formula-1 Indy 500 Limited Ed. 529/1000",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5392.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5393.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5395.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5397.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5398.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5399.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5400.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5402.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5403.JPG",

    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5405.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5406.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5407.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5408.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5409.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5410.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5411.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5410.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5410.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5414.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5415.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5416.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5417.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5418.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5419.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5420.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5421.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5422.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5423.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5425.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5426.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5427.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5428.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5429.JPG",
    //"public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5430.JPG",
    //"public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5431.JPG",
    //"public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5432.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5434.JPG",

    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5435.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5436.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5439.JPG",

    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5450.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5451.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5453.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5454.JPG",

    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5441.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5442.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5443.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5444.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5445.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5446.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5447.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5448.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5449.JPG",

    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5380.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5382.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5383.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5384.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5385.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5386.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5387.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5388.JPG",
    "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5389.JPG",
  ],

  saleReport: {
    price: 1501,
    date: "23/11/2024",
    url: "https://www.catawiki.com/en/l/90618037-tag-heuer-formula-1-indy-500-limited-529-1000-men-2016",
  },

  technicalData: {
    features: ["Date", "Screw-in crown", "200 meters"],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.FORMULA_1_6RD_GEN,
      catalogueReference: "Formula-1 Indy 500 - Limited Edition 529/1000 CAZ1016.EB0058",
      productionYear: "2016",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "43 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Brushed",
      bezel: "Tachymeter graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Tag Heuer Link style Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.RONDA_5040D,
  },
};

export default details;
