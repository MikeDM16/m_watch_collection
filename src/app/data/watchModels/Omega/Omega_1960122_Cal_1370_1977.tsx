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

import movement_OMEGA_1370 from "../../movements/Omega/Omega_1370";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1977 Omega 196.0122 Cal. 1370",
  sliderImages: [
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0222.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0223.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0224.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0225.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0226.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0227.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0228.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0229.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0230.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0231.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0233.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0234.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0235.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0236.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0237.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0238.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0239.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0240.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0241.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0242.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0243.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0244.JPG",
    "public/assets/Images/Omega/1977_Omega_1960122/IMG_0245.JPG",
  ],
  saleReport: {
    price: 370,
    date: "08/11/2019",
    url: "https://www.catawiki.com/l/29855914-omega-196-0122-cal-1370-7-jewels-men-1970-1979",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "International Collection '77",
      catalogueReference: "196.0122",
      productionYear: "1977",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.CIRCULAR_BRUSHED,
      bezel: BezelTypeEnum.POLISHED,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.GREY,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.DARK_BROWN,
    },

    movement: movement_OMEGA_1370,
  },
};

export default details;
