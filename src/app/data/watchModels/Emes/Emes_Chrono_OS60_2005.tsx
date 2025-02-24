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

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2005 Emes OS60 Chronograph",
  sliderImages: [
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2098.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2099.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2101.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2102.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2103.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2104.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2105.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2106.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2107.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2108.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2109.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2110.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2111.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2112.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2113.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2114.JPG",
  ],
  saleReport: {
    price: 100,
    date: "18/05/2019",
    url: "https://www.catawiki.com/l/26524577-emes-german-12h-racing-chronograph-cal-os60-men-2000-2010",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.TACHYMETER,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
    ],

    information: {
      brand: BrandsEnum.EMES,
      series: "Chronograph",
      catalogueReference: "-",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Sattin-mate",
      bezel: "Tachymeter inner bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Dark Grey",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Matte Grey",
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
