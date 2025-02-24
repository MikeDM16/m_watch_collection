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
  title: "1971 Tissot Seastar PR 516 GL",
  sliderImages: [
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5016.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5017.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5018.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5019.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5020.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5021.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5022.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5023.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5024.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5025.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5026.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5027.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5028.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5029.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5030.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5031.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5032.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5033.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5034.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5035.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5036.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5037.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5038.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5039.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_4629.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_4630.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_4631.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_4632.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_4633.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_4634.JPG",
    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/IMG_5040.JPG",

    "public/assets/Images/Tissot/1971_Tissot_PR_516_GL/tissot_manufacturing_dates.JPG",
  ],
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC,
      "Movement with production number 13330669, dating the watch back to 1971",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_516_VINTAGE,
      catalogueReference: "GL Visodate 46672-2X",
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
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Integrated Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "25 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.TISSOT_794,
  },
};

export default details;
