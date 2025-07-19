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
  title: "1957 Fortis 18K Gold 21 Jewels",

  sliderImages: [
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2554.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2555.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2556.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2557.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2558.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2559.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2560.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2561.JPG",

    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2544.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2545.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2546.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2547.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2548.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2550.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2551.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2552.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2553.JPG",

    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2562.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2563.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2564.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2565.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2566.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2567.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2568.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2569.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2570.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2572.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2573.JPG",
    "public/assets/Images/Fortis/1957_Fortis_21_Jewels/IMG_2574.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SOLID_GOLD],

    information: {
      brand: BrandsEnum.FORTIS,
      series: "Mecanical",
      catalogueReference: "-",
      productionYear: "1957",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Solid 18K Gold",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.FORTIS_AV_21J,
  },
};

export default details;
