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

import movement_OMEGA_3220_47J from "../../movements/Omega/OMEGA_3220_47J";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "2000 Omega Speedmaster Racing - Schumacher F1 World Champion - 3264/6000",

  sliderImages: [
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4717.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4718.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4719.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4720.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4568.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4569.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4570.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4649.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4650.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4651.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4652.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4653.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4654.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4655.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4656.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4658.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4498.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4659.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4661.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4662.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4699.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4700.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4702.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4703.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4704.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4706.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4707.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4708.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4709.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4712.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4714.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4716.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4672.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4668.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4669.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4674.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4675.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4676.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4677.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4678.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4679.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4680.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4681.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4682.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4683.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4684.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4685.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4686.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4571.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4575.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4634.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4635.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4636.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4637.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4642.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4643.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4664.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4665.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4666.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4667.JPG",

    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4687.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4688.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4689.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4690.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4691.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4692.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4693.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4694.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4696.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4697.JPG",
    "public/assets/Images/Omega/2000_Omega_Speedmaster_Racing_Schumacher_6000/IMG_4698.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      "Limited edition number 3264 of 10,000 pieces, of which 6,000 were produced with black dials and 4,000 with white dials.",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SPEEDMASTER.RACING,
      catalogueReference: "Racing - Schumacher 2000 F1 World Champion 3264/6000 (3518.50)",
      productionYear: "2000",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.SS_POLISHED,
    },

    movement: movement_OMEGA_3220_47J,
  },
};

export default details;
