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
  title: "2005 Tissot Ballade Lady C229/329C Automatic",
  sliderImages: [
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8832.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8833.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8834.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8834.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8835.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8836.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8837.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8838.JPG",

    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8871.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8872.JPG",

    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8861.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8863.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8864.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8865.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8866.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8867.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8868.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8870.JPG",

    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8875.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8876.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8877.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8878.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8880.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8883.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8884.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8885.JPG",

    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8850.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8851.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8852.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8853.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8854.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8855.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8856.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8857.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8858.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8859.JPG",
    "public/assets/Images/Tissot/2005_Tissot_Ballada_Lady_C229_329C/IMG_8860.JPG",
  ],

  saleReport: {
    price: 220,
    date: "07/03/2025",
    url: "https://www.catawiki.com/en/l/94001352-tissot-ballade-lady-automatic-no-reserve-price-eta-2671-25-jewels-women-2005",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.OPEN_CASE_BACK, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.BALLADE,
      catalogueReference: "C229/329C",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "27 mm",
      thickness: "7 mm",
      material: "Stainless Steel with gold details",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Detailed coin bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "14 mm",
      color: "Two tone: Grey with Gold details",
    },

    movement: MovementsDataDB.ETA_2671,
  },
};

export default details;
