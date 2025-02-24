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
  title: "1993 Festina F6602 Multi-Function Chrono",
  sliderImages: [
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3146.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3147.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3148.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3149.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3150.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3151.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3152.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3153.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3154.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3155.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3156.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3157.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_0366.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_3172.JPG",
    "public/assets/Images/Festina/1993_Festina_F6602_Titanium/IMG_1927.JPG",
  ],
  technicalData: {
    features: [
      featuresEnum.TITANIUM,
      featuresEnum.DATE,
      featuresEnum.TACHYMETER,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.ALARM,
    ],

    information: {
      brand: BrandsEnum.FESTINA,
      series: "Multi-Function",
      catalogueReference: "F6602",
      productionYear: "1993",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "10 mm",
      material: "titanium",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Sattin-mate",
      bezel: "Tachymeter bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Titanium Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "(Titanium) matte Grey",
    },

    movement: {
      title: "Miyota 3S10",
      description: "",
      usefullLinks: {
        "Instruction Manual from Miyota": "../Files/3510_instructions.pdf",
      },
      sliderImages: [
        "public/assets/Images/Festina/1993_Festina_F6602_Titanium/miyota-caliber-3s10-1.JPG",
        "public/assets/Images/Festina/1993_Festina_F6602_Titanium/miyota-caliber-3s10-drawing.JPG",
      ],
      details: {
        manufacturer: "Miyota (Citizen)",
        modelReference: "3S10 (Citizen 3510 | Breitling Cal. 59)",
        type: "Quartz",
        battery: "399 / SR 927 W",
        jewels: "12 (Twelve) Jewels",
        functions:
          "Alarm, Chrono up to 12 hours 1/10 second, Date, Hours, Minutes, Seconds at 6 o'clock",
      },
    },
  },
};

export default details;
