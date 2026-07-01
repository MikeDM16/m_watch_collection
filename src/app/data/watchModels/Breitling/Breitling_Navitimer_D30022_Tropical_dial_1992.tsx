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

import movement_BREITLING_B30_38J from "../../movements/Breitling/Breitling_B30_38J";
import { WatchDetails } from "../../watchDetails";
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1992 Breitling Navitimer D30022 Tropical dial",

  sliderImages: [
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1144.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1142.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1145.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1146.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1173.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1174.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1175.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1198.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1199.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1147.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1148.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1149.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1150.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1151.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1152.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1153.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1155.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1158.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1159.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0955_1.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1188.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1189.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1190.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1191.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1192.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0966_1.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1196.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1164.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1165.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1166.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1167.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1168.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1169.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1170.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1171.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1172.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1160.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1161.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1162.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1163.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1176.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1177.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1178.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1179.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1180.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1181.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1182.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1183.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1184.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1185.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1186.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1187.JPG",
  ],

  /*sliderImages: [
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0911.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0912.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0915.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1035.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1036.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_1042.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0916.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0917.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0918.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0919.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0920.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0921.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0922.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0923.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0952.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0955_1.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0958.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0959.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0963.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0964_1.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0965_1.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0966_1.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0968.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0927.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0928.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0929.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0930.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0931.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0932.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0933.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0934.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0935.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0936.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0956_1.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0957.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0972.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0973.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0969.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0970.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0924.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0925.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0926.JPG",

    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0937.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0938.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0939.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0940.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0941.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0942.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0943.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0944.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0945.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0946.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0947.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0948.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0949.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0950.JPG",
    "public/assets/Images/Breitling/1992_Breitling_Navitimer_D30022_Tropical/IMG_0951.JPG",
  ],*/

  technicalData: {
    features: [featuresEnum.CHRONOGRAPH, featuresEnum.AUTOMATIC, featuresEnum.SOLID_GOLD_BEZEL],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.NAVITIMER,
      catalogueReference: "D30022",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_38,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.GOLD_BEZEL,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.CHAMPAGNE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.LIGHT_BROWN,
    },

    movement: movement_BREITLING_B30_38J,
  },
};

export default details;
