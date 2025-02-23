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
import { EberhardBrandSeries } from "./EberhardBrandSeries";

const details: WatchDetails = {
  title: "1950 Eberhard Extra-Fort 18K Gold",
  sliderImages: [
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0719.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0720.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0721.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0711.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0713.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0714.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0715.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0703.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0704.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0708.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0705.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0707.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0710.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0716.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0717.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0689.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0691.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0692.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0693.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0695.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0697.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0698.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0699.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0700.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0722.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0723.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0724.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0725.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0726.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0727.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0728.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0729.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0884.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0885.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0886.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0887.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0888.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0889.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0890.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0891.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0730.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0731.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0732.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0733.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0734.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0735.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0736.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0737.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0738.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0739.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0740.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0741.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0742.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0743.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0744.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0745.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0746.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0747.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0748.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0605.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0608.JPG",

    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0880.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0881.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0882.JPG",
    "public/assets/Images/Eberhard/1950_Eberhard_Extra_Fort/IMG_0883.JPG",
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
      material: "Solid Gold 18K (0.750)",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
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
