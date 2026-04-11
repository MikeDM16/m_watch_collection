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

import movement_VALJOIX_7734_17J from "../../movements/Valjoux/7734_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1977 Nobreza Racing Chronograph 7734 17 Jewels",
  sliderImages: [
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6291.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6292.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6293.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6294.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6268.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6269.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6270.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6271.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6272.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6274.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6275.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6277.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6279.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6295.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6296.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6297.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6299.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6301.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6302.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6280.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6282.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6283.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6284.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6285.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6286.JPG",

    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6303.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6304.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6305.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6306.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6307.JPG",
    "public/assets/Images/Nobreza/1977_Nobreza_Racing_Chrono_7754/IMG_6308.JPG",
  ],

  saleReport: {
    price: 387,
    date: "02/11/2025",
    url: "https://www.catawiki.com/en/l/98656557",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANIQUE_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.NOBREZA,
      series: "Racing",
      catalogueReference: "Blue Dial",
      productionYear: "1977",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_37,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER_INNER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLUE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.RUBBER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BLUE,
    },

    movement: movement_VALJOIX_7734_17J,
  },
};

export default details;
