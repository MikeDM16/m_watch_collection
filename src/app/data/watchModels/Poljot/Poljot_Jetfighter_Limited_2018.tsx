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

const details: WatchDetails = {
  title: "2018 Poljot Jet Fighter Limited Edition 129/600",
  sliderImages: [
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0523.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0524.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0530.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0531.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0532.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0533.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0536.JPG",

    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0520.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0521.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0522.JPG",

    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0451.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0452.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0456.JPG",

    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0474.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0475.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0476.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0477.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0478.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0479.JPG",

    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0505.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0507.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0508.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0511.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0512.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0513.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0514.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0516.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0517.JPG",

    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0490.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0491.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0492.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0493.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0494.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0495.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0496.JPG",

    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0480.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0481.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0482.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0483.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0484.JPG",

    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0497.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0498.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0499.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0500.JPG",

    // Metal strap
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0458.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0460.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0461.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0462.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0463.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0464.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0465.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0466.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0467.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0468.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0469.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0470.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0471.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0472.JPG",
    "public/assets/Images/Poljot/2018_Poljot_JetFighter_3133/IMG_0473.JPG",
  ],
  saleReport: {
    price: 464,
    date: "18/06/2025",
    url: "https://www.catawiki.com/en/l/96001514",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL, featuresEnum.CHRONOGRAPH],

    information: {
      brand: BrandsEnum.POLJOT,
      series: "Jet Fighter Pilot",
      catalogueReference: "Limited Edition 129/600",
      productionYear: "2018",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "44 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Brushed",
      bezel: "15min Graduated bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Bourdeaux",
    },

    movement: MovementsDataDB.POLJOT_3133_25J,
  },
};

export default details;
