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

import movement_BAUMGARTNER_866 from "../../movements/Baumgartner/Baumgartner_866_1J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1975 Carfo Datomatic Engine-turned Bezel",

  sliderImages: [
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7614.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7615.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7616.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7617.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7618.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7620.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7621.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7622.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7623.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7624.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7625.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7626.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7627.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7628.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7630.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7631.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7633.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7634.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7635.JPG",

    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7653.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7654.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7748.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7749.JPG",

    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7636.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7637.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7638.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7639.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7640.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7641.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7642.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7643.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7644.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7645.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7646.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7647.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7648.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7649.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7650.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7651.JPG",
    "public/assets/Images/Carfo/1975_Carfo_Datomatic/IMG_7652.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.DATE],

    information: {
      brand: BrandsEnum.CARFO,
      series: "Datomatic",
      catalogueReference: "-",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.ENGINE_TURNED,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BORDEAUX,
    },

    movement: movement_BAUMGARTNER_866,
  },
};

export default details;
