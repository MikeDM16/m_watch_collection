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
  title: "1971 Tissot Seastar PR 516 GL Cal. 784",
  sliderImages: [
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8853.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8855.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8856.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8857.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8860.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8861.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8862.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8863.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8864.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8865.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8866.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8867.JPG",

    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8842.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8843.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8844.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8845.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8849.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8850.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8851.JPG",

    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8872.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8873.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8874.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8875.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8876.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8877.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8878.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8879.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8880.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8881.JPG",

    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8840.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8841.JPG",

    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8868.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8869.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8870.JPG",

    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8882.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8883.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8884.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8885.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8886.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8887.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8888.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL_784-2/IMG_8889.JPG",
  ],

  saleReport: {
    price: 200,
    date: "09/01/2026",
    url: "https://www.catawiki.com/en/l/100398990",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC,
      "Movement with production number 13110662, dating the watch back to 1971",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_516_VINTAGE,
      catalogueReference: "GL Visodate 46672-1X",
      productionYear: "1971",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "36 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Vertical brushed polishing",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Cream Yellow",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Integrated Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "25 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.TISSOT_784,
  },
};

export default details;
