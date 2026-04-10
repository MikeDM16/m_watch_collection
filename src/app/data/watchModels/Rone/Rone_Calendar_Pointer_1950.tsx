import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
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
  title: "1950 Rone Calendar Pointer",
  sliderImages: [
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3531.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3532.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3533.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3537.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3538.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3539.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3540.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3541.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3542.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3545.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3546.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3547.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3548.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3549.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3550.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3551.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3552.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3553.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3554.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3556.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3557.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3558.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3559.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3560.JPG",
    "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/IMG_3561.JPG",
  ],
  saleReport: {
    price: 117,
    date: "03/07/2019",
    url: "https://www.catawiki.pt/l/27745963-rone-swiss-made-calender-pointer-cal-fhf-253-homem-1950-1959",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.RONE,
      series: "Calendar Pointer",
      catalogueReference: "180153",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.SS_CHROMED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.CALENDAR_POINTER,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_16,
      color: ColorEnum.BLACK,
    },

    movement: {
      title: "FHF 251-3",
      description:
        "Upgraded version of the base FHF 25 caliber, with calender hand around the dial.",
      usefullLinks: {
        "Ranfft FHF 25": "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&0&2uswk&FHF_251_3",
        "FHF 28 Vintage technical information": "../Files/2923_FHF 28,281.pdf",
      },
      sliderImages: [
        "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/FHF-251_1.JPG",
        "public/assets/Images/Rone/1950_Rone_Calendar_Pointer/FHF-251_2.JPG",
      ],
      details: {
        manufacturer: "FHF",
        modelReference: "251-3",
        type: "Mechanical",
        frequency: "18000 A/h",
        jewels: "17 (Seventeen) Jewels",
        reserve: "40 Hours",
        functions: "Date hand, Hours, Minutes, Sweep Seconds",
      },
    },
  },
};

export default details;
