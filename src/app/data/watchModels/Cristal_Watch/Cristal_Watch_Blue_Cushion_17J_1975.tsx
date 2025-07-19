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
  title: "1975 Cristal Watch Blue Cushion 17 Jewels",
  sliderImages: [
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2769.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2770.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2772.JPG",

    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2729.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2730.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2731.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2732.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2733.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2735.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2736.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2737.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2738.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2739.JPG",

    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2751.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2752.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2753.JPG",

    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2721.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2722.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2723.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2724.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2725.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2727.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2728.JPG",

    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2740.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2741.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2742.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2743.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2744.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2745.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2746.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2747.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2748.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2749.JPG",
    "public/assets/Images/Cristal_Watch/1975_Cristal_Watch_Blue_Cushion/IMG_2750.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.CRISTAL_WATCH,
      series: "Blue Cushion",
      catalogueReference: "2025",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "3 Layer style Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Ligth Brown",
    },

    movement: MovementsDataDB.FHF_974,
  },
};

export default details;
