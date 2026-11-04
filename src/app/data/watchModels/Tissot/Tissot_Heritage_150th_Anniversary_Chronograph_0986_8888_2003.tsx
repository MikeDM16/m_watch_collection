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

import movement_ETA_2894_2 from "../../movements/ETA/ETA_2894_2_37J";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2003 Tissot Heritage 150th Anniversary Chronograph 0986/8888",

  sliderImages: [
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6921.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6922.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6923.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6926.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6927.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6928.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6930.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6932.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6935.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6936.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6937.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6938.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6939.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6940.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6941.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6942.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6895.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6897.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6898.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6899.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6900.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6901.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6904.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6905.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6907.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6908.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6909.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6910.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6912.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6913.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6914.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6915.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6916.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6918.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6919.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6920.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6945.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6947.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6948.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6949.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6986.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6988.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6991.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6950.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6951.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6952.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6953.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6954.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6956.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6957.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6958.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6959.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6960.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6961.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6962.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6967.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6968.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6969.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6970.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6971.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6972.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6973.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6974.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6975.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6976.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6977.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6978.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6979.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6980.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6981.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6982.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6983.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6984.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_Chrono_986_8888/IMG_6985.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      featuresEnum.OPEN_CASE_BACK,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.HERITAGE,

      catalogueReference: "150th Anniversary T66.1.712.31 0986/8888",
      productionYear: "2003",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER_INNER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: ColorEnum.SILVER,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_2894_2,
  },
};

export default details;
