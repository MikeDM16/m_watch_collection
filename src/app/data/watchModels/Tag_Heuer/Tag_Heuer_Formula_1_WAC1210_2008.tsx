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

import { WatchDetails } from "../../watchDetails";
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "2008 Tag Heuer Professional Formula-1 WAC1210",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4154.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4155.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4156.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4157.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4146.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4147.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4149.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4150.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4151.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4152.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/catalogue.JPEG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4158.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4159.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4160.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4161.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4162.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4163.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4164.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4165.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4166.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4167.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4168.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4169.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4170.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4171.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4172.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4173.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4174.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4175.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4176.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4177.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4179.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4180.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4182.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4183.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4184.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4185.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4186.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4187.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4188.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4189.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4190.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4191.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4192.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4193.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4194.JPG",
    "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4196.JPG",
  ],

  saleReport: {
    price: 450,
    date: "30/12/2023",
    url: "https://www.catawiki.com/en/l/78350907",
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
      series: TagHeuerBrandSeries.FORMULA_1_3RD_GEN,
      catalogueReference: "WAC1210",
      productionYear: "2008",
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
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Jubilee style Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey metal",
    },

    movement: {
      title: "ETA F05.111",
      description: "Quartz movement ETA Trendline F05.111.",
      usefullLinks: {},
      sliderImages: [
        "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/F05-111.JPG",
        "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/F05-111 2.JPG",
      ],
      details: {
        manufacturer: "ETA (Swiss Made)",
        modelReference: "ETA F05.111",
        type: "Quartz",
        battery: "371",
        jewels: "3 (Three) Jewels ",
        functions: "Date, Hours, Minutes, Seconds ",
      },
    },
  },
};

export default details;
