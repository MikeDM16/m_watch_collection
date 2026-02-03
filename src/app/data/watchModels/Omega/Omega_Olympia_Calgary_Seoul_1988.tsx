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
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1988 Omega Olympia Winter Olympics Calgary And Seoul Limited 457/1000",

  sliderImages: [
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0107.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0109.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0110.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0111.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0112.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0114.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0115.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0116.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0117.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0124.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0125.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0126.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0127.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0128.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0129.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0130.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0131.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0132.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0133.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0134.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8426.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8427.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8428.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8429.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8430.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8431.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8432.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0139.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0140.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0141.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0142.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0143.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0118.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0119.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0121.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0122.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0123.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0136.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0135.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0137.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0138.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0144.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0145.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0146.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0147.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_0148.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.OLYMPIA,
      catalogueReference: "Winter Olympics Calgary Seoul 457/1000 (DB 386.1232)",
      productionYear: "1988",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "10 mm",
      material: "Stainless Steel - Gold Inlay",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Vertical Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel - Gold plated links",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.OMEGA_1670,
  },
};

export default details;
