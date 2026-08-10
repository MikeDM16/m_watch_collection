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

import movement_AS_1130 from "../../movements/AS/AS_1130_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1947 Aureus Extra Antimagnetic",

  sliderImages: [
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3417.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3418.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3422.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3423.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3424.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3425.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3426.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3427.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3428.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3429.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3430.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3433.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3434.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3435.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3436.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3437.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3438.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3439.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3440.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3441.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3442.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3443.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3444.JPG",

    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3464.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3465.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3466.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3467.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3468.JPG",

    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3445.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3446.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3447.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3449.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3450.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3451.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3452.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3453.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3454.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3455.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3456.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3457.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3458.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3459.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3460.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3461.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3462.JPG",
    "public/assets/Images/Aureus/1947_Aureus_Extra_AS1130/IMG_3463.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.AUREUS,
      series: "Extra",
      catalogueReference: "-",
      productionYear: "1947",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.SS_GOLD_PLATED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE_PATINA,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.NYLON_FIXED_LUGS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_AS_1130,
  },
};

export default details;
