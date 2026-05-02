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

import movement_LANDERON_159_17J from "../../movements/Landeron/Landeron_159_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1950 Cuervo y Sobrino Historiador Habana",

  sliderImages: [
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3405.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3406.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3407.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3409.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3410.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2716.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2717.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2718.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3411.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3412.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3413.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3414.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3415.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3416.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3417.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3419.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3420.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3421.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3422.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3423.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3424.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3442.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3445.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3446.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3448.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3449.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3450.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3451.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2679.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2680.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_2681.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3454.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3455.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3456.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3457.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3458.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3464.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3468.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3469.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3470.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3425.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3426.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3427.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3428.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3429.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3430.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3431.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3432.JPG",

    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3433.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3434.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3435.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3436.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3437.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3438.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3439.JPG",
    "public/assets/Images/Cuervo_y_Sobrinos/1950_Cuervo_y_Sobrinos_Habana_Landeron/IMG_3440.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANIQUE_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.CUERVO_Y_SOBRINOS,
      series: "Historiador",
      catalogueReference: "Habana",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.DARK_BROWN,
    },

    movement: movement_LANDERON_159_17J,
  },
};

export default details;
