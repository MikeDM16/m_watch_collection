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

import movement_FEF_190 from "../../movements/FEF/FEF_190_15J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1944 Cristalor Guilloché “Fancy Lugs”",

  sliderImages: [
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7824.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7825.JPG",

    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7781.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7782.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7785.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7786.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7787.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7788.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7789.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7790.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7791.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7793.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7794.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7796.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7797.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7798.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7799.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7800.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7801.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7802.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7803.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7804.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7805.JPG",

    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7831.JPG",

    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7806.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7807.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7808.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7809.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7810.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7811.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7812.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7813.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7814.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7815.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7816.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7817.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7819.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7820.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7821.JPG",
    "public/assets/Images/Cristalor/1944_Cristalor_Fancy_lugs/IMG_7822.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS, featuresEnum.FANCY_LUGS],

    information: {
      brand: BrandsEnum.CRISTALOR,
      series: "Guilloché",
      catalogueReference: "-",
      productionYear: "1944",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_9,
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
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.GUILLOCHE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.NYLON_FIXED_LUGS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_FEF_190,
  },
};

export default details;
