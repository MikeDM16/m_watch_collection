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

import movement_PESEUX_7046 from "../../movements/Peseux/Peseux_7046_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1976 Sorel Festa De Luxe - Green Marble Dial",

  sliderImages: [
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_8005.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_8006.JPG",

    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7965.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7966.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7967.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7968.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7970.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7971.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7972.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7666.JPG",

    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7974.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7975.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7976.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7977.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7978.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7980.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7981.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7982.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7983.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7984.JPG",

    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_8008.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_8009.JPG",

    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7985.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7986.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7987.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7988.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7989.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7990.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7991.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7992.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7993.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7994.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7995.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7996.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7997.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7998.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_7999.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_8001.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_8002.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_8003.JPG",
    "public/assets/Images/Sorel/1976_Sorel_Festa_De_Luxe_7046/IMG_8004.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.DATE],

    information: {
      brand: BrandsEnum.SOREL,
      series: "Festa",
      catalogueReference: "-",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_32,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.GP,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.RADIAL_BRUSHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.GREEN,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.MARBLE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.RUBBER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.GREEN,
    },

    movement: movement_PESEUX_7046,
  },
};

export default details;
