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

import movement_CYMA_012 from "../../movements/Cyma/Cyma_012_15J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1927 Studio Tank 15 Rubis",

  sliderImages: [
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7379.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7380.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7381.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7382.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7383.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7384.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7385.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7386.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7387.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7388.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7389.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7391.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7392.JPG",

    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7393.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7394.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7395.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7396.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7398.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7399.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7400.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7401.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7402.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7403.JPG",

    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7418.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7420.JPG",

    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7404.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7405.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7406.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7407.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7408.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7410.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7411.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7412.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7413.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7414.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7415.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7416.JPG",
    "public/assets/Images/Studio/1927_Studio_Tank_17_rubis/IMG_7417.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.STUDIO,
      series: "Tank",
      catalogueReference: "-",
      productionYear: "1927",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_25,
      thickness: "- mm",
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_19,
      color: ColorEnum.GREEN,
    },

    movement: movement_CYMA_012,
  },
};

export default details;
