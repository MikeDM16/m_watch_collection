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

import movement_LANDERON_48_17J from "../../movements/Landeron/Landeron_48_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1950 Titus Geneve Chronograph 18K Gold Landeron 48",
  sliderImages: [
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8087.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8088.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8089.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8090.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8091.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8093.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8094.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8095.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8096.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8097.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8098.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8099.JPG",

    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8062.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8063.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8064.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8065.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8066.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8067.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8068.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8069.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8071.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8072.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8075.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8076.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8078.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8079.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8080.JPG",

    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8107.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8108.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8109.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8110.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8111.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8112.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8113.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8114.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8115.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8116.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8117.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8118.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8119.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8120.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8121.JPG",

    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8101.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8102.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8103.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8104.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8105.JPG",
    "public/assets/Images/Titus/1950_Titus_Chronograph_18K_L48/IMG_8106.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.SOLID_GOLD,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.SOLVIL_ET_TITUS,
      series: "Chronograph",
      catalogueReference: "35",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.SOLID_ROSE_GOLD_18K,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.CREAM_SALMON,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_LANDERON_48_17J,
  },
};

export default details;
