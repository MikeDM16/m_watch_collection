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

import movement_LEMANIA_1873_17J from "../../movements/Lemania/Lemania_1873_17_Jewels";
import { WatchDetails } from "../../watchDetails";
import { EberhardBrandSeries } from "./EberhardBrandSeries";

const details: WatchDetails = {
  title: "1992 Eberhard Ref. 32031 Lemania 1873 Limited Edition 555/1000",

  sliderImages: [
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4925.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4926.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4928.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4929.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4931.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4936.JPG",

    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4864.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4865.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4867.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4870.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4871.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4872.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4873.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4874.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4875.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4876.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4877.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4878.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4880.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4882.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4883.JPG",

    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4920.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4922.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4923.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4924.JPG",

    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4915.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4916.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4917.JPG",

    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4888.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4889.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4890.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4891.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4892.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4893.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4894.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4895.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4897.JPG",

    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4884.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4885.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4886.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4887.JPG",

    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4898.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4899.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4900.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4901.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4902.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4903.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4911.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4912.JPG",

    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4904.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4905.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4906.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4907.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4908.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4909.JPG",
    "public/assets/Images/Eberhard/1992_Eberhard_Ref_32031_Lemania_1873/IMG_4910.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      featuresEnum.SOLID_GOLD_BEZEL,
    ],

    information: {
      brand: BrandsEnum.EBERHARD,
      series: EberhardBrandSeries.GODRON,
      catalogueReference: "Godron - Ref. 32031",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.GOLD_BEZEL,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_15,
      color: ColorEnum.BROWN,
    },

    movement: movement_LEMANIA_1873_17J,
  },
};

export default details;
