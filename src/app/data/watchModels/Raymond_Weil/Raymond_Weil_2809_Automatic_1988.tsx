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

import movement_ETA_2892_2_21J from "../../movements/ETA/ETA_2892_21J";
import { WatchDetails } from "../../watchDetails";
import { RaymondWeilBrandSeries } from "./RaymondWeilBrandSeries";

const details: WatchDetails = {
  title: "1988 Raymond Weil 2809 Automatic",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4655.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4656.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4657.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4658.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4659.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4660.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4661.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4662.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4663.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4664.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4665.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4666.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4667.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4668.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4669.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4670.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4671.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4672.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4673.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4674.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4675.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4676.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4677.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4678.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/FHJI5715.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/FHSE9170.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/LVNP6105.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4719.JPG",
  ],
  saleReport: {
    price: 130,
    date: "15/09/2019",
    url: "https://www.catawiki.com/l/29188643-raymond-weil-automatic-2809-eta-2892-21-jewels-men-1988",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC, featuresEnum.ELETRO_GOLD_PLATED_18k],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: RaymondWeilBrandSeries.VINTAGE_SERIES,
      catalogueReference: "Automatic - 2809",
      productionYear: "1988",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_33,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.GOLD_18K_ELECTROPLATED,
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.COIN_EDGE,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.GOLD,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_ETA_2892_2_21J,
  },
};

export default details;
