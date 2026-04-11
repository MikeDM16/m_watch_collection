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

import movement_UNITAS_6380 from "../../movements/Unitas/Unitas_6380";
import { WatchDetails } from "../../watchDetails";
import { NovartBrandSeries } from "./NovartBrandSeries";

const details: WatchDetails = {
  title: "1974 Novart Vitesse Blue Date 17 Jewels",

  sliderImages: [
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5982.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5983.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5984.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5985.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5986.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5987.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5988.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5989.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6003.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6004.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6005.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6006.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6007.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6008.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6009.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5990.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5991.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5992.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5993.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5994.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5995.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5996.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5997.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5998.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_5999.JPG",

    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6001.JPG",
    "public/assets/Images/Novart/1974_Novart_U6380_Monza_Blue/IMG_6002.JPG",
  ],

  saleReport: {
    price: 200,
    date: "02/12/2024",
    url: "https://www.catawiki.com/en/l/91104395",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.NOVART,
      series: NovartBrandSeries.VITESSE,
      catalogueReference: "(Blue Dial)",
      productionYear: "1974",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLUE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_UNITAS_6380,
  },
};

export default details;
