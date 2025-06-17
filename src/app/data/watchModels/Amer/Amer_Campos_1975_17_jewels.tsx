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
  title: "1975 Amer Campos FE 233 17 Jewels",
  sliderImages: [
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0925.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0926.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0927.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0928.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0929.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0930.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0938.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0939.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0944.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0945.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0946.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0931.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0932.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0933.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0934.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0935.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0936.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0937.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0950.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0951.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0952.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0953.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0954.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos/IMG_0955.JPG",
  ],

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.AMER,
      series: "Campos",
      catalogueReference: "7027",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Green",
    },

    movement: MovementsDataDB.FE_233,
  },
};

export default details;
