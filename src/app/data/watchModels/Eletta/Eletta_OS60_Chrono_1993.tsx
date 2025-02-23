import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1993 Eletta Chronograph OS60",
  sliderImages: [
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7371.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7372.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7373.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7374.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7375.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7376.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7377.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7378.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7379.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7380.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7381.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7382.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7383.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7384.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7385.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7387.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7388.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7389.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7390.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7391.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7392.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7393.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7394.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7393.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7394.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7395.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7396.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7397.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7398.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7403.JPG",
  ],
  saleReport: {
    price: 59,
    date: "31/07/2023",
    url: "https://www.catawiki.com/en/l/72819739-eletta-orange-boy-chronograph-men-1987",
  },
  technicalData: {
    features: ["Date", "50 meters", "Chronograph"],

    information: {
      brand: BrandsEnum.ELETTA,
      series: "Chronograph",
      catalogueReference: "42-A952G",
      productionYear: "1993",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Gun-metal/Sanded",
      bezel: "Uni-directional bezel, 10 minute graduatedl",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: {
      title: "Miyota OS60",
      description: "",
      usefullLinks: {
        "Instruction Manual from Miyota": "../Files/0s60.pdf",
      },
      sliderImages: [
        "public/assets/Images/Emes/2005_Emes_Chrono_OS60/os60-1.JPG",
        "public/assets/Images/Emes/2005_Emes_Chrono_OS60/os60-2.JPG",
      ],
      details: {
        manufacturer: "Miyota (Citizen)",
        modelReference: "OS60",
        type: "Quartz",
        battery: "399",
        jewels: "0 Jewels (None)",
        functions: "Chrono up to 12 hours 60min, Date, Hours, Minutes, Seconds at 6 o'clock",
      },
    },
  },
};

export default details;
