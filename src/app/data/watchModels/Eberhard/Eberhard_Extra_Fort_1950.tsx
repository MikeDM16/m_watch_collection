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
import { EberhardBrandSeries } from "./EberhardBrandSeries";

const details: WatchDetails = {
  title: "1950 Eberhard Extra-Fort 18K Gold",
  sliderImages: [
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7331.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7332.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7333.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7334.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7335.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7336.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7337.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7338.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7339.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7341.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7345.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0689.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0691.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0693.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0695.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0697.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0698.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0699.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0700.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0710.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0705.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0707.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0708.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0704.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0713.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0715.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0716.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0717.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0720.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0721.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7346.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7347.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7348.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7349.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7350.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7351.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7352.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7353.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7355.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7356.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7357.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7358.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7359.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7360.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7361.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7362.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7363.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7364.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0605.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0608.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0744.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0745.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7365.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7366.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7367.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7368.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7369.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7370.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7371.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_7372.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.SOLID_GOLD,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.EBERHARD,
      series: EberhardBrandSeries.EXTRA_FORT_VINTAGE,
      catalogueReference: "14007-516 140",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "40 mm",
      thickness: "12 mm",
      material: "Solid Yellow Gold 18K (0.750)",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.EBERHARD_16000_17J,
  },
};

export default details;
