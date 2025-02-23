import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "1991 Tag Heuer Professional 875-206 Chronograph",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6821.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6822.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6823.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6779.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6780.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6781.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6782.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/CATALOGUE.JPG",

    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6790.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6791.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6792.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6793.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6794.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6795.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6796.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6797.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6798.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6799.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6800.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6801.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6802.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6805.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6806.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6807.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6808.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6809.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6810.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6812.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6814.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6815.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6816.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6817.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6818.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6819.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6820.JPG",

    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6783.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6784.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6785.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6786.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6787.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6789.JPG",

    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6756.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6757.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6758.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6759.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6760.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6761.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6762.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6763.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6764.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6765.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6766.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6767.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6768.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6769.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6770.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6771.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6772.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6773.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6774.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6775.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6776.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6777.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6778.JPG",

    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1987_catalogue_p16.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1987_catalogue_p86.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1987_catalogue_p95.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1988_catalogue_p100.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1988_catalogue_p101.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1988_catalogue_p102.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1988_catalogue_p95.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1988_catalogue_p96.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1988_catalogue_p97.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1988_catalogue_p98.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1988_catalogue_p99.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1990_catalogue_p10.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1990_catalogue_p11.PNG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/1990_catalogue_p12.PNG",
  ],

  saleReport: {
    price: 949,
    date: "21/10/2024",
    url: "https://www.catawiki.com/en/l/89539963-tag-heuer-professional-200-nos-dubois-depraz-2000-40-jewels-chronograph-ref-875-206-men-1991",
  },

  technicalData: {
    features: [
      "Date",
      "Chronograph",
      "Screw-in crown",
      "200 meters",
      "Uni-directional rotating bezel",
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.PROFESSIONAL_2000_SERIES,
      catalogueReference: "875-206",
      productionYear: "1991",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Matte",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Ligth Grey",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK + CalendarWatchTypeEnum.CYCLOPS_LENS,
    },

    bracelet: {
      material: "Jubilee style Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.DD_2000_ETA_2982,
  },
};

export default details;
