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

import movement_RECORD_171 from "../../movements/Record/Record_171_20J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1950 Record Bumper Tuxedo",

  sliderImages: [
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5886.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5887.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5889.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5890.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5892.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5894.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5895.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5896.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5897.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5900.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5901.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5904.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5905.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5906.JPG",

    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/record-1944.JPG",

    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5938.JPG",

    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5910.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5911.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5912.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5913.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5914.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5915.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5916.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5917.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5918.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5919.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5920.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5921.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5922.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5923.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5924.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5925.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5926.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5927.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5928.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5929.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5930.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5932.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5933.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5934.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5935.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5936.JPG",
    "public/assets/Images/Record/1950_Record_Bumper_Tuxedo_171/IMG_5937.JPG",
  ],

  technicalData: {
    features: [featuresEnum.AUTOMATIC, featuresEnum.SMALL_SECONDS, featuresEnum.INCABLOC],

    information: {
      brand: BrandsEnum.RECORD,
      series: "Bumper",
      catalogueReference: "579057",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_33,
      thickness: CaseThicknessEnum.T_10,
      material: CaseMaterialEnum.GP,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.GOLD,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.TUXEDO,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.NYLON_FIXED_LUGS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_RECORD_171,
  },
};

export default details;
