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

import movement_CORTEBERT_573 from "../../movements/Cortebert/Cortebert_573_15J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1942 Cortébert Precision Tank",

  sliderImages: [
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5983.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5984.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5986.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5987.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5988.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5990.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5991.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5992.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5993.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5994.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5995.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5998.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_5999.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6001.JPG",

    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6029.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6030.JPG",

    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6002.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6003.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6004.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6005.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6007.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6008.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6009.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6010.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6011.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6012.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6013.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6014.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6015.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6016.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6017.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6018.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6019.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6020.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6021.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6022.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6023.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6024.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6025.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6026.JPG",
    "public/assets/Images/Cortebert/1942_Cortebert_Precision_Tank_573/IMG_6027.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      featuresEnum.SMALL_SECONDS,
      featuresEnum.INCABLOC,
      featuresEnum.BLUE_HEATED_COPPER_HANDS,
    ],

    information: {
      brand: BrandsEnum.CORTEBERT,
      series: "Precision Incassable",
      catalogueReference: "Z2215",
      productionYear: "1942",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_23,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.SS_CHROMED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.NYLON_FIXED_LUGS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_CORTEBERT_573,
  },
};

export default details;
