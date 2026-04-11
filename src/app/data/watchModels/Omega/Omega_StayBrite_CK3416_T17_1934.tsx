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

import movement_OMEGA_T17 from "../../movements/Omega/Omega_T17_15J";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: '1934 Omega StayBrite "Tank" CK3416',
  sliderImages: [
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0090.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0092.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0093.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0095.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/cal1.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/cal2.JPG",

    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0056.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0057.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0058.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0059.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0060.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0061.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0062.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0063.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0064.JPG",

    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0076.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0077.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0078.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0079.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0080.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0082.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0085.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0087.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0088.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0089.JPG",

    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0065.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0066.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0067.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0068.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0069.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0070.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0071.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0072.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0073.JPG",
    "public/assets/Images/Omega/1934_OmegaStaybrite_Tank_CK3516/IMG_0075.JPG",
  ],

  saleReport: {
    price: 780,
    date: "17/08/2025",
    url: "https://www.catawiki.com/en/l/97096270",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.STAYBRITE,
      catalogueReference: "CK3416",
      productionYear: "1934",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_23,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.STAINLESS_STEEL,
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
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_16,
      color: ColorEnum.RED,
    },

    movement: movement_OMEGA_T17,
  },
};

export default details;
