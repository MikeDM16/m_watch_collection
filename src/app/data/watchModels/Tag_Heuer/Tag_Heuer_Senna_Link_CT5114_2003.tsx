import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
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
  title: "2003 Tag Heuer Senna Limited Edition 3236/4000 Chronometer (CT5114)",

  sliderImages: [
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3727.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3728.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3729.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3730.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3737.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3738.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3739.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3740.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3741.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3742.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3743.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3744.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3745.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3746.JPG",

    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3515.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3516.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3518.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3519.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3521.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3522.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3523.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3526.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3527.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3621.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3622.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3624.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3626.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3627.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3628.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3639.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3640.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3641.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3642.JPG",

    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3512.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3507.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3508.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3511.JPG",

    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3648.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3649.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3645.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3646.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3647.JPG",

    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3779.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3782.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3783.JPG",

    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3751.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3752.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3753.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3754.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3755.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3756.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3757.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3758.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3759.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3760.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3761.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3762.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3763.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3764.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3765.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3766.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3767.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3768.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3769.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3770.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3771.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3772.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3773.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3774.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3775.JPG",
    "public/assets/Images/Tag_Heuer/2003_Tag_Heuer_Senna_Link_CT5114/IMG_3776.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.WR_200_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.LINK,
      catalogueReference: "Senna Limited Edition 3236/4000 Chronometer (CT5114)",
      productionYear: "2003",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "15 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Brushed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel S/EL Link Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey metal",
    },

    movement: MovementsDataDB.TAG_HEUER_CALIBER_16,
  },
};

export default details;
