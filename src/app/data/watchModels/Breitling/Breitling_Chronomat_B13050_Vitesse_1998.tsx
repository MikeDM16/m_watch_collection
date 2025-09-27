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
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1998 Breitling Chronomat Vitesse B13050",
  sliderImages: [
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5097.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5098.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5099.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5100.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5101.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5102.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5008.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5009.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5010.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5011.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5012.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5013.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5014.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5015.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5045.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5046.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5047.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5048.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5050.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5051.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5052.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5059.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5060.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5061.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5062.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5064.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5065.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5066.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5067.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5094.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5096.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5076.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5077.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5078.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5079.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5080.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5081.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5082.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5083.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5084.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5085.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5087.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5071.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5072.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5073.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5074.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5088.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5089.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5090.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5091.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5092.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5093.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5018.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5019.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5020.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5021.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5022.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5023.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5024.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5025.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5038.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5040.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5042.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5026.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5027.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5028.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5029.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5030.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5031.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5032.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5033.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5034.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5035.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5036.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5037.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5053.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5054.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5056.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5057.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5058.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.CHRONOMAT_VITESSE,
      catalogueReference: "Vitesse (B13050.1 128961 Acier)",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "13 mm",
      material: "Stainless Steel - Gold Pushers and tabs",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Minute graduated, Chronomat Riders Tabs bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
