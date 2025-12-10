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

const details: WatchDetails = {
  title: "1972 Utina Sunburst FE 233 17 Jewels",

  sliderImages: [
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8117.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8118.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8106.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8107.JPG",

    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8085.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8086.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8087.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8088.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8089.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8090.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8091.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8093.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8094.JPG",

    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8102.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8103.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8065.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8066.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8067.JPG",

    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8095.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8096.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8097.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8098.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8099.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8100.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8101.JPG",

    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8119.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8120.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8121.JPG",

    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8108.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8109.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8110.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8111.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8112.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8114.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8115.JPG",
    "public/assets/Images/Utina/1972_Utina_Sunburst_FE233/IMG_8116.JPG",
  ],

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.UTINA,
      series: "Enamel Dial",
      catalogueReference: "3300/69/20",
      productionYear: "1972",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.FE_233,
  },
};

export default details;
