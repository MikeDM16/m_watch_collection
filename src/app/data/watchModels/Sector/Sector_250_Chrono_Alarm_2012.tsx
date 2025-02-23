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

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2012 Sector 250 Chronograph Alarm",
  sliderImages: [
    "public/assets/Images/Sector/2012_Sector_250/IMG_1611.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1612.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1613.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1614.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1615.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1616.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1617.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1618.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1619.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1620.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1621.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1622.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1623.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1624.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_1640.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0950.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0951.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0952.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0953.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0954.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0955.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0956.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0957.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0958.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0959.JPG",
    "public/assets/Images/Sector/2012_Sector_250/IMG_0960.JPG",
  ],
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      featuresEnum.WR_100_METERS,
    ],

    information: {
      brand: BrandsEnum.SECTOR,
      series: "No Limits 250",
      catalogueReference: "2651927175",
      productionYear: "2012",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "38 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Brushed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Blue",
    },

    movement: {
      title: "ETA G10.791",
      description: "ETA chronograph movement.",
      usefullLinks: {
        "Instruction Manual from ETA": "../Files/2800_ETA G10.791 Operating Instructions.pdf",
      },
      sliderImages: [
        "public/assets/Images/Sector/2012_Sector_250/mov4.PNG",
        "public/assets/Images/Sector/2012_Sector_250/mov1.PNG",
        "public/assets/Images/Sector/2012_Sector_250/mov2.PNG",
        "public/assets/Images/Sector/2012_Sector_250/mov3.PNG",
      ],

      details: {
        manufacturer: "ETA",
        modelReference: "G10.791",
        type: "Quartz",
        battery: "394",
        jewels: "4 (Four) Jewels ",
        functions: "Chronograph, Alarm, Date, Hours, Minutes, Seconds at 6 o'clock",
      },
    },
  },
};

export default details;
