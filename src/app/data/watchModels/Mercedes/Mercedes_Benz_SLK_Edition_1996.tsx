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

const details: WatchDetails = {
  title: "1996 Mercedes Benz SLK Edition",
  sliderImages: [
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0495.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0496.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0497.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0498.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0499.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0500.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0501.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0502.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0503.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0504.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0505.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0506.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0507.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0508.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0509.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0510.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0511.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0512.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0513.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0514.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0538.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0539.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0540.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/IMG_0541.JPG",
  ],
  saleReport: {
    price: 120,
    date: "12/12/2019",
    url: "https://www.catawiki.com/l/32701223-mercedes-benz-slk-edition-watch-cal-isa-8171-202-3-jewels-mechanical-chronograph-men-1996",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.MERCEDES_BENZ,
      series: "SLK Edition",
      catalogueReference: "-",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "34 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Yellow",
    },

    movement: {
      title: "ISA 8171/202",
      description: "",
      usefullLinks: {
        "Instruction Manual from Miyota": "../Files/S55.203_SMH_ISA_8171_202_Preview.pdf",
      },
      sliderImages: [
        "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/ISA_8171_1.JPG",
        "public/assets/Images/Mercedes/1996_Mercedes_SLK_Edition_ISA818/ISA_8171_2.JPG",
      ],
      details: {
        manufacturer: "ISA",
        modelReference: "8171/202",
        type: "Quartz",
        battery: "395 / SR927SW",
        jewels: "3 (Three) Jewels",
        functions: "Chrono up to 30 minutes, Date, Hours, Minutes, Seconds",
      },
    },
  },
};

export default details;
