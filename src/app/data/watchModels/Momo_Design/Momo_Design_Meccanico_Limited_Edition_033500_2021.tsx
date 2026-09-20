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

import movement_UNITAS_6497 from "../../movements/Unitas/Unitas_6497";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2021 Momo Design Meccanico Limited Edition 033500",

  sliderImages: [
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4524.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4525.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4527.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4528.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4529.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4533.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4534.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4535.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4536.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4537.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4538.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4539.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4540.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4541.JPG",

    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4556.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4557.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4558.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4559.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4560.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4561.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4562.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4563.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4564.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4565.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4566.JPG",

    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4542.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4543.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4544.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4545.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4546.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4547.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4548.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4549.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4550.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4551.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4552.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4553.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4554.JPG",
    "public/assets/Images/Momo_Design/2021_MomoDesign_MD175_Limited_033_500/IMG_4555.JPG",
  ],

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL, featuresEnum.TITANIUM],

    information: {
      brand: BrandsEnum.MOMO_DESIGN,
      series: "Meccanico",
      catalogueReference: "MD 175  - Limited Edition 033/500",
      productionYear: "2021",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_45,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.TITANIUM_BLACK_PVD,
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: CaseFinishingEnum.BLACK_PVD,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.RUBBER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_22,
      color: ColorEnum.BLACK,
    },

    movement: movement_UNITAS_6497,
  },
};

export default details;
