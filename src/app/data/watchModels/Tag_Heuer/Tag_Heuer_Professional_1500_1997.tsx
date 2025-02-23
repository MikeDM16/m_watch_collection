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
  title: "1997 Tag Heuer Professional 1500",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0707.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0708.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0709.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0710.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0711.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0712.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0713.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0714.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0715.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0716.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0717.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0718.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0719.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0720.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0721.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0722.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0723.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0724.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0725.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0726.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0727.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0728.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0729.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0730.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0731.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0732.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0733.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0734.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0735.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0737.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0738.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0739.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0740.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0741.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0743.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0745.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0785.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0786.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0787.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0788.JPG",
    "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0789.JPG",
  ],
  sellReport: {
    price: 560,
    date: "11/10/2023",
    url: "https://www.catawiki.com/en/l/75220491-tag-heuer-1500-professional-nos-granite-dial-955-713-men-1997",
  },
  technicalData: {
    features: ["Date", "Screw-in crown", "200 meters", "Uni-directional rotating bezel"],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.PROFESSIONAL_1500_SERIES,
      catalogueReference: "955.713K",
      productionYear: "1997",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Matte",
      bezel: "Uni-directional, 5-minute graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.GRANITE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.HEUER_1_93,
  },
};

export default details;
