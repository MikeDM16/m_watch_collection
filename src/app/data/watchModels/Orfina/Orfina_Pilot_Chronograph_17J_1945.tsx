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

import movement_VENUS_170_17J from "../../movements/Venus/Venus_170_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1947 Orfina Pilot Chronograph Venus 170",

  sliderImages: [
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8417.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8418.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8419.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8420.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8394.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8395.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8396.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8398.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8399.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8400.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8401.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8402.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8403.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8421.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8422.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8423.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8424.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8425.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8428.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8429.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8430.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8406.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8407.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8408.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8409.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8410.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8411.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8412.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8413.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8414.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8415.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_8416.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6310.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6311.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6312.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6358.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6359.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6360.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6314.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6315.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6316.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6317.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6318.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6319.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6320.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6321.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6322.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6323.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6332.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6333.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6334.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6335.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6337.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6338.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6340.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6341.JPG",

    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6324.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6325.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6326.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6327.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6328.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6329.JPG",

    //"public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6346.JPG",
    //"public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6347.JPG",
    //"public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6348.JPG",
    //"public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6349.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6350.JPG",
    "public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6351.JPG",
    //"public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6352.JPG",
    //"public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6353.JPG",
    //"public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6356.JPG",
    //"public/assets/Images/Orfina/1945_Orfina_Pilot_Chronograph_Venus_170/IMG_6357.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANIQUE_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.ORFINA,
      series: "Pilot Chronograph",
      catalogueReference: "170",
      productionYear: "1945",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.CHROMIUM_SS_BACK,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.VERTICAL_BRUSHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_17,
      color: ColorEnum.BROWN,
    },

    movement: movement_VENUS_170_17J,
  },
};

export default details;
