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
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1987 Omega Seamaster Polaris GMT 396.1122",
  sliderImages: [
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3682.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3684.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3686.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3693.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3694.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3695.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3696.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3697.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3699.JPG",

    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3714.JPG",

    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3605.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3607.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3608.JPG",

    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3705.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3706.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3707.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3708.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3709.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3710.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3711.JPG",

    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3700.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3701.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3702.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3703.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3704.JPG",

    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3715.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3716.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3717.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3718.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3719.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3720.JPG",
    "public/assets/Images/Omega/1987_Omega_Seamaster_GMT_396_1122/IMG_3721.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.POLARIS,
      catalogueReference: "DR 396.1122",
      productionYear: "1987",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "6 mm",
      material: "Stainless Steel - Gold Inlay",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Vertical Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Cream Yellow",

      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.OMEGA_1449,
  },
};

export default details;
