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

import movement_ETA_955_112 from "../../movements/ETA/ETA_955_112";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2005 Baume et Mercier Capeland Noir",

  sliderImages: [
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4961.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4963.JPG",

    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4954.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4955.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4956.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4957.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4958.JPG",

    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4959.JPG",

    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4964.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4965.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4966.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4967.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4968.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4970.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4971.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4972.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4973.JPG",

    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4978.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4979.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4980.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4981.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4982.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4983.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4984.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4985.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4986.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4987.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4988.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4989.JPG",

    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_5007.JPG",

    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4974.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4975.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4976.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4977.JPG",

    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4990.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4991.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4992.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4993.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4994.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4995.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4996.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4997.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4998.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_4999.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_5001.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_5002.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_5003.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_5004.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_5005.JPG",
    "public/assets/Images/Baume_Mercier/2025_Baume_Mercier_Capeland_Noir/IMG_5006.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE],

    information: {
      brand: BrandsEnum.BAUME_MERCIER,
      series: "Capeland",
      catalogueReference: "Noir (MV045214)",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_37,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.POLISHED,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.ENAMEL,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.GREY,
    },

    movement: movement_ETA_955_112,
  },
};

export default details;
