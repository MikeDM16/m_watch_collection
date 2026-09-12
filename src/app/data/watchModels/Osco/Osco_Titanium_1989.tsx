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

import movement_ETA_955_114 from "../../movements/ETA/ETA_955_114";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1989 Osco Titanium",

  sliderImages: [
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4253.JPG",

    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4222.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4223.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4224.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4225.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4226.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4227.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4228.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4229.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4230.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4231.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4232.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4233.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4234.JPG",

    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4249.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4250.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4251.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4252.JPG",

    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4235.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4236.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4237.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4238.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4239.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4240.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4241.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4242.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4243.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4244.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4245.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4246.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4247.JPG",
    "public/assets/Images/Osco/1989_Osco_Titan_ETA_955/IMG_4248.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OSCO,
      series: "Titan",
      catalogueReference: "-",
      productionYear: "1989",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.TITANIUM,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.MATTE,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_955_114,
  },
};

export default details;
