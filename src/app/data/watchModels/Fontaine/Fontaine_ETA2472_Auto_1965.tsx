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
  title: "1965 Fontaine ETA 2472 Automatic",
  sliderImages: [
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4701.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4702.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4703.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4704.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4705.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4706.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4707.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4708.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4709.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4710.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4711.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4712.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4713.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4714.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4715.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4716.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4717.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4718.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/FDZA4803.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4696.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/IMG_4697.JPG",
    "public/assets/Images/Fontaine/1965_Fontaine_Auto/XCIZ2978.JPG",
  ],
  saleReport: {
    price: 97,
    date: "16/07/2020",
    url: "https://www.catawiki.com/l/38930303-fontaine-polerouter-style-men-1960-1969",
  },
  technicalData: {
    features: ["Date", "Automatic", "Gold Plated 20 \u339B"],

    information: {
      brand: BrandsEnum.FONTAINE,
      series: "Automatic",
      catalogueReference: "85263 1",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "34 mm",
      thickness: "9 mm",
      material: "Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Lizard skin Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: {
      title: "ETA 2472",
      description: "In-house vintage automatic caliber from ETA.",
      usefullLinks: {
        "Ranfft ETA 2472": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&0&2uswk&ETA_2472",
        "17Jewels ETA 2472": "https://17jewels.info/movements/e/eta/eta-2472/",
        "Vintage technical information from ETA": "../Files/3394_ETA 1256.pdf",
      },
      sliderImages: [
        "public/assets/Images/Fontaine/1965_Fontaine_Auto/ETA_2472_1.PNG",
        "public/assets/Images/Fontaine/1965_Fontaine_Auto/ETA_2472_2.PNG",
        "public/assets/Images/Fontaine/1965_Fontaine_Auto/ETA_2472_3.PNG",
        "public/assets/Images/Fontaine/1965_Fontaine_Auto/ETA_2472_4.PNG",
      ],
      details: {
        manufacturer: "ETA",
        modelReference: "2472",
        type: "Automatic",
        frequency: "19800 A/h",
        jewels: "25 (Twenty-five) Jewels ",
        reserve: "42 Hours",
        functions: "Date, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;
