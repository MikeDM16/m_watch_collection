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
  title: "2014 One Voyager Chronograph",
  sliderImages: [
    "public/assets/Images/One/2014_One_Voyager/IMG_3158.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3159.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3160.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3162.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3163.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3164.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3165.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3166.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3167.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3168.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3169.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_3170.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_0391.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_0392.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_0393.JPG",
    "public/assets/Images/One/2014_One_Voyager/IMG_2118.JPG",
    "public/assets/Images/One/2014_One_Voyager/relogio-one-voyager-og2194vp81e-img-b.PNG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_100_METERS],

    information: {
      brand: BrandsEnum.ONE,
      series: "Voyager",
      catalogueReference: "OG2194VP81E",
      productionYear: "2014",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_32,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.BRUSHED,
      bezel: BezelTypeEnum.UNI_5_MIN,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.CARBON_FIBER,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER_RACING,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_22,
      color: ColorEnum.BLACK,
    },

    movement: {
      title: "Hattori VD57",
      description: "",
      usefullLinks: {
        "Instruction Manual from ONE": "../Files/ONE-VD57-leaflet2194-2.pdf",
      },
      sliderImages: [
        "public/assets/Images/One/2014_One_Voyager/vd57_1.JPG",
        "public/assets/Images/One/2014_One_Voyager/vd57_2.JPG",
        "public/assets/Images/One/2014_One_Voyager/vd57_3.JPG",
      ],

      details: {
        manufacturer: "Hattori (Seiko)",
        modelReference: "VD57",
        type: "Quartz",
        battery: "371",
        jewels: "0 Jewels (None)",
        functions: "60 minutes Chronograph up to 1/10 second, Date, Hours, Minutes, Seconds",
      },
    },
  },
};

export default details;
