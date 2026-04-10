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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1977 Taunus Calendar 17 Rubis",
  sliderImages: [
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0341.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0342.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0343.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0344.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0345.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0346.JPG",

    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0356.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0357.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0359.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0360.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0362.JPG",

    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0347.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0348.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0349.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0350.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0351.JPG",

    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0352.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0353.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0354.JPG",
    "public/assets/Images/Taunus/1977_Taunus_Calendar/IMG_0355.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.TAUNUS,
      series: "Calendar",
      catalogueReference: "17 rubis",
      productionYear: "1977",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_45,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.SS_CHROMED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.CHROMED,
      bezel: BezelTypeEnum.INNER_CALENDAR,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.RED,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.DATE,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_22,
      color: ColorEnum.BROWN,
    },

    movement: MovementsDataDB.FE_140,
  },
};

export default details;
