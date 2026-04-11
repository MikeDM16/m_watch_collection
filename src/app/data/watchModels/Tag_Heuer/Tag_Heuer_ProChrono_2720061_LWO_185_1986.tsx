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
  title: "1986 Tag Heuer Professional 272.006 LWO 185 Chronograph",

  sliderImages: [
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1890.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1891.JPG",

    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1855.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1856.JPG",

    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1867.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1868.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1869.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1870.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1871.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1872.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1873.JPG",

    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1844.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1845.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1847.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1848.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1849.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1852.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1853.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1854.JPG",

    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1879.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1880.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1881.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1882.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1883.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1884.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1885.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1886.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1887.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1888.JPG",

    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1859.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1860.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1861.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1862.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1863.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1864.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1865.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1866.JPG",

    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1874.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1875.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1876.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1877.JPG",

    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1901.JPG",

    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1893.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1894.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1895.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1896.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1897.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1898.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1899.JPG",
    "public/assets/Images/Tag_Heuer/1986_Tag_Heuer_Professional_200_LWO_185/IMG_1900.JPG",
  ],

  saleReport: {
    price: 709,
    date: "04/04/2026",
    url: "https://www.catawiki.com/en/l/102605952",
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
      catalogueReference: "272.0061",
      productionYear: "1986",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: CaseFinishingEnum.MATTE,
      bezel: BezelTypeEnum.UNI_10_MIN,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.GREY,
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK + CalendarWatchTypeEnum.CYCLOPS_LENS,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: movement_DD_2000_ETA_955_232,
  },
};

export default details;
