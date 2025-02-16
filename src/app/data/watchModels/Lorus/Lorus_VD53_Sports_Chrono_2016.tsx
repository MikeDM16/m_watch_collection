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
  title: "2016 Lorus VD53 Sports Chronograph",
  sliderImages: [
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3173.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3174.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3175.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3176.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3177.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3178.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3179.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3180.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3182.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3183.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3185.JPG",
    "public/assets/Images/Lorus/2016_Lorus_VD53/IMG_3186.JPG",
  ],
  technicalData: {
    features: ["Date", "Chronograph", "Tachymeter", "50 meters"],

    information: {
      brand: BrandsEnum.LORUS,
      series: "Sports Chrono",
      catalogueReference: "VD53-X080",
      productionYear: "2016",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Vertical Brushed effect",
      bezel: "Tachymeter graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Brown",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "22 mm",
      color: "Dark Brown",
    },

    movement: {
      title: "Hattori VD53",
      description: "",
      usefullLinks: {
        "Instruction Manual from LORUS": "../Files/VD53_E.pdf",
      },
      sliderImages: [
        "public/assets/Images/Lorus/2016_Lorus_VD53/hattori-vD53b-caliber-sii-quartz-movement.JPG",
        "public/assets/Images/Lorus/2016_Lorus_VD53/31301659_1919416391403784_8610838068980613120_n.JPG",
        "public/assets/Images/Lorus/2016_Lorus_VD53/seiko-s11-caliber-vd53b.JPG",
        "public/assets/Images/Lorus/2016_Lorus_VD53/hattori-vD53b-caliber-sii-quartz-seiko-tmi.JPG",
      ],

      details: {
        manufacturer: "Hattori (Seiko)",
        modelReference: "VD53",
        type: "Quartz",
        battery: "371",
        jewels: "0 Jewels (None)",
        functions: "60mim Chronograph, Date, Hours, Minutes, Seconds",
      },
    },
  },
};

export default details;
