import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
  title: '1998 Omega Speedmaster MK40 Triple Date "Schumacher"',
  sliderImages: [
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7721.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7722.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7723.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7724.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7725.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7799.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7801.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7726.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7727.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7729.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7730.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7731.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7732.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7733.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7735.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7747.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7748.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7749.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7751.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7752.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7753.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7754.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7755.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7756.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7757.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7758.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7759.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7760.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7761.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7763.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7766.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7767.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7768.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7770.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7771.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7736.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7737.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7738.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7739.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7740.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7741.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7742.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7743.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7744.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7746.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7772.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7773.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7774.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7775.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7776.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7777.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7797.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7802.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7803.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7804.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7805.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7806.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7814.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7815.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7816.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7817.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7818.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7819.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7820.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7821.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7822.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7823.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_8066.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_8067.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7808.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7809.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7810.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7811.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7812.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7813.JPG",

    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7824.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7825.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7826.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7827.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7828.JPG",
    "public/assets/Images/Omega/1998_Omega_Speedmaster_MK40_triple_date/IMG_7829.JPG",
  ],

  technicalData: {
    features: [featuresEnum.AUTOMATIC_CHRONOGRAPH, featuresEnum.TACHYMETER],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SPEEDMASTER,
      catalogueReference: 'MK40 Triple Date "Schumacher" (175.0084 375.0084)',
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Tachymeter Bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.CALENDAR_POINTER,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.OMEGA_1151,
  },
};

export default details;
