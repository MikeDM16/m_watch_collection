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
  title: "1975 Pryngeps Autavia Chronograph Valjoux 7750",
  sliderImages: [
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1985.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1986.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1987.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1988.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1989.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1990.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1991.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1992.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1993.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1994.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1995.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1996.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1997.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1998.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1999.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2001.JPG",

    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2007.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2009.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2010.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_1708.JPG",

    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3907.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3908.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3909.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3910.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3911.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3912.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3913.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_3914.JPG",

    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2002.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2003.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2004.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2005.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2006.JPG",

    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2012.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_2014.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_4839.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_4840.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_4841.JPG",
    "public/assets/Images/Pryngeps/1975_Pryngeps_7750/IMG_4842.JPG",
  ],
  saleReport: {
    price: 550,
    date: "26/06/2024",
    url: "https://www.catawiki.com/en/l/85394479-pryngeps-autavia-nos-valjoux-7750-chrono-25-jewels-men-1980-1989",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.GMT_BEZEL,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Automatic",
      catalogueReference: "4.034.0.0.32",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.GMT_12H,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_17J,
  },
};

export default details;
