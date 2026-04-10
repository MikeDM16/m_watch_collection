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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2005 Tag Heuer Monza Classic (CR2110)",

  sliderImages: [
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0727.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0728.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0729.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0731.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0733.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0734.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0735.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0742.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0743.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0744.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0745.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0747.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0748.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0736.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0738.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0739.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0740.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0741.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0749.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0750.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0751.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0752.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0753.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0754.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0755.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0756.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0757.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0758.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0764.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0765.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0759.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0760.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0761.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0762.JPG",
    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0763.JPG",

    "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Classic_Monza/IMG_0766.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.SCREWED_IN_CROWN, featuresEnum.WR_100_METERS],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.MONZA,
      catalogueReference: "Classic Heuer Re-edition (CR2110)",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_38,
      thickness: CaseThicknessEnum.T_15,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.BRUSHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.DARK_BROWN,
    },

    movement: MovementsDataDB.ETA_2894_2,
  },
};

export default details;
