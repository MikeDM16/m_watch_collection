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
  title: "1945 Argus Tuxedo Militare Cal. AS1130",
  sliderImages: [
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0553.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0554.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0555.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0556.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0557.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0559.JPG",

    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0549.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0544.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0546.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0547.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0548.JPG",

    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0551.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0552.JPG",

    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0579.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0580.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0581.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0582.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0583.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0586.JPG",

    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0568.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0584.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0569.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0570.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0571.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0572.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0573.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0574.JPG",

    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0562.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0563.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0564.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0565.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0566.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0567.JPG",

    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0575.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0576.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0577.JPG",
    "public/assets/Images/Argus/1945_Argus_Tuxedo_Militare_AS_1130/IMG_0578.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.INCABLOC],

    information: {
      brand: BrandsEnum.ARGUS,
      series: "Tuxedo Militare",
      catalogueReference: "824 135",
      productionYear: "1945",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "7 mm",
      material: "Stainless Steel - Chromed",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White/Brown Tuxedo",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.AS_1130,
  },
};

export default details;
