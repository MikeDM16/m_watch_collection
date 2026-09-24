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

import movement_FHF_30 from "../../movements/FHF/FHF_30_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1942 Solvil et Titus Genéve Tank",

  sliderImages: [
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4567.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4568.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4569.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4570.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4574.JPG",

    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3164.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3166.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3167.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3168.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3169.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3170.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3172.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3173.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3174.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3175.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3177.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_3178.JPG",

    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4575.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4576.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4577.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4578.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4579.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4582.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4583.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4584.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4585.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4586.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4587.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4588.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4589.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4590.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4591.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4592.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4593.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4594.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4595.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4596.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4597.JPG",
    "public/assets/Images/Titus/1942_Titus_Geneve_Tank_FHF_30/IMG_4598.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.SOLVIL_ET_TITUS,
      series: "IncablocGenéve",
      catalogueReference: "-",
      productionYear: "1942",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_22,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.SS_NICKEL_CHROMED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.GREY,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER_FIXED_LUGS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_16,
      color: ColorEnum.BLACK,
    },

    movement: movement_FHF_30,
  },
};

export default details;
