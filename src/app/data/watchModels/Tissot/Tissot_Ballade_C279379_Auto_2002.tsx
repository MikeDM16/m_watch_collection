import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
  title: "2002 Tissot Ballade C279/379C Automatic",
  sliderImages: [
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4634.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4635.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4636.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4637.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4638.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4639.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4640.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4641.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4642.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4643.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4644.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4645.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4646.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4647.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4648.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4649.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4650.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4651.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4653.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Auto/IMG_4654.JPG",
  ],
  saleReport: {
    price: 200,
    date: "11/09/2019",
    url: "https://www.catawiki.com/l/29188501-tissot-ballade-automatic-c279-379c-eta-2824-25-jewels-men-2000-2010",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.OPEN_CASE_BACK, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.BALLADE,
      catalogueReference: "C279/379C",
      productionYear: "2002",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel with gold details",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Detailed coin bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
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
      width: "18 mm",
      color: "Two tone: Grey with Gold details",
    },

    movement: MovementsDataDB.ETA_2824,
  },
};

export default details;
