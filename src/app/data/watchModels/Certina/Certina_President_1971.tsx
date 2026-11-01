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

import movement_CERTINA_25_261_27J from "../../movements/Certina/Certina_25_261_28J";
import { WatchDetails } from "../../watchDetails";
import { CertinaBrandSeries } from "./CertinaBrandSeries";

const details: WatchDetails = {
  title: "1971 Certina President - Linen Dial",

  sliderImages: [
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5689.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5690.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5691.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5692.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5693.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5694.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5695.JPG",

    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_6568.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_6569.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_6570.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_6571.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_6572.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_6574.JPG",

    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5696.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5697.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5698.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5699.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5700.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5701.JPG",

    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5702.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5703.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5704.JPG",

    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5705.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5706.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5707.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5708.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5709.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5710.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5711.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5712.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5713.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5714.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5715.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5716.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5717.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5718.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5719.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5720.JPG",
    "public/assets/Images/Certina/1971_Certina_President_25_651/IMG_5721.JPG",
  ],

  technicalData: {
    features: [featuresEnum.AUTOMATIC, featuresEnum.DATE],

    information: {
      brand: BrandsEnum.CERTINA,
      series: CertinaBrandSeries.VINTAGE_SERIES,
      catalogueReference: "-",
      productionYear: "1971",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_37,
      thickness: CaseThicknessEnum.T_11,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.GOLDEN_LINEN,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: movement_CERTINA_25_261_27J,
  },
};

export default details;
