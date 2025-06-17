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
  title: "1976 Nobreza Shades 17 Jewels",

  sliderImages: [
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0987.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0988.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0989.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0990.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0991.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0992.JPG",

    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1004.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1005.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1006.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1008.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1009.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1010.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1012.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1013.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1015.JPG",

    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0993.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0994.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0995.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0996.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0997.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0998.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_0999.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1001.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1002.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1003.JPG",

    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1017.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1018.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1019.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1020.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1021.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1022.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1023.JPG",
    "public/assets/Images/Nobreza/1976_Nobreza_shades_17_jewels/IMG_1025.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOBREZA,
      series: "Shades",
      catalogueReference: "-",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Brushed",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Brown",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.FHF_974,
  },
};

export default details;
