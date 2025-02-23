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
  title: "1965 Tissot Seastar Automatic PR 516",
  sliderImages: [
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7744.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7745.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7746.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7747.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7748.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7749.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7750.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7751.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7754.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7753.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7754.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7755.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7756.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7757.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7758.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7759.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7769.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7761.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7762.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7763.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7764.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7765.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7766.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7767.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7768.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7769.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7770.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7771.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7770.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7773.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7774.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7775.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7776.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7777.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7778.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7779.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7780.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7781.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7782.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7783.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7784.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7785.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7786.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/IMG_7787.JPG",
    "public/assets/Images/Tissot/1965_Tissot_PR_516_Automatic/tissot_manufacturing_dates.JPG",
  ],
  sellReport: {
    price: 174,
    date: "13/08/2024",
    url: "https://www.catawiki.com/en/l/87004475",
  },
  technicalData: {
    features: [
      "Date",
      "Automatic",
      "Movement with production number 8077563, dating the watch back to 1965. ",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_516_VINTAGE,
      catalogueReference: "Visodate 44516-2X",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Vertical brushed polishing",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.TISSOT_784,
  },
};

export default details;
