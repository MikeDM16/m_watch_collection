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
  title: "1991 Tag Heuer Professional 2000 WE2211",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6685.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6686.JPG",

    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6673.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6674.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6676.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6677.JPG",

    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6687.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6688.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6689.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6690.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6691.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6692.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6693.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6694.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6695.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6696.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6697.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6698.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6699.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6700.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6701.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6702.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6703.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6704.JPG",

    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6679.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6680.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6681.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6682.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6683.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6705.JPG",

    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6648.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6649.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6650.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6651.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6652.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6653.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6654.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6655.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6656.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6657.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6658.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6659.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6660.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6662.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6663.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6664.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6665.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6666.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6667.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6668.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6669.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6670.JPG",
    "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6671.JPG",
  ],
  saleReport: {
    price: 500,
    date: "26/06/2024",
    url: "https://www.catawiki.com/en/l/85394175-tag-heuer-2000-professional-automatic-we2211-25-jewels-men-1991",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.WR_200_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.PROFESSIONAL_2000_SERIES,
      catalogueReference: "WE2211",
      productionYear: "1991",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "35 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Matte",
      bezel: "Uni-directional, 5-minute graduated",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Jubilee style Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.HEUER_4_95,
  },
};

export default details;
