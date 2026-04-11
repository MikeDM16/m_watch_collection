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

import movement_DD_2000_ETA_955_232 from "../../movements/Debois_Depraz/DD_2000_955";
import { WatchDetails } from "../../watchDetails";
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "1987 Tag Heuer Professional 262.006-1 Chronograph",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6707.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6709.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6710.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6711.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6713.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6714.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6715.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6716.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6717.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6718.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6719.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6720.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6721.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6722.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6723.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6724.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6725.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6726.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6727.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6728.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6729.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6730.JPG",

    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6741.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6742.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6743.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6744.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6745.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6746.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6747.JPG",

    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6731.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6732.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6733.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6734.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6735.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6737.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6738.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6748.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6749.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6750.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6751.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6752.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6753.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6754.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6755.JPG",

    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1937.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1938.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1939.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1940.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1941.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1942.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1943.JPG",

    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1875.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1876.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1877.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1879.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1881.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1883.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1884.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1885.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1886.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1887.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1888.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1889.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1890.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1891.JPG",
    "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_1893.JPG",

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
    price: 750,
    date: "26/07/2024",
    url: "https://www.catawiki.com/en/l/85968361-tag-heuer-professional-200-nos-dd2000-26-jewels-chronograph-ref-262-006-1-men-1987",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.WR_200_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.PROFESSIONAL_2000_SERIES,
      catalogueReference: "262.0061-1",
      productionYear: "1987",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_40,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: CaseFinishingEnum.MATTE,
      bezel: BezelTypeEnum.UNI_10_MIN,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.DARK_GREY,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK + CalendarWatchTypeEnum.CYCLOPS_LENS,
    },

    bracelet: {
      material: BraceletMaterialEnum.SHARK_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.GREY,
    },

    movement: movement_DD_2000_ETA_955_232,
  },
};

export default details;
