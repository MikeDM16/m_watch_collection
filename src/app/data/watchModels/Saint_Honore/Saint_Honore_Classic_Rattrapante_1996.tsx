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
  title: "1996 Saint Honoré Classic Rattrapante Chronograph",

  sliderImages: [
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0351.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0353.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0354.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0355.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0357.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0358.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0359.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0360.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0361.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0362.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0363.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0364.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0365.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0386.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0387.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0373.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0375.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0376.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0377.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0378.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0366.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0367.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0368.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0369.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0370.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0371.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0372.JPG",

    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0379.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0380.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0381.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0382.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0383.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0384.JPG",
    "public/assets/Images/Saint_Honore/1996_Saint_Honore_Classic_Ratrappante/IMG_0385.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH],

    information: {
      brand: BrandsEnum.SAINT_HONORE,
      series: "Classic",
      catalogueReference: "14659",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Lizzard Skin Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
