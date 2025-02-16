import { MovementsDataDB } from "../../movementsData";
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
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1988 Omega Olympia Winter Olympics Calgary And Seoul Limited 457/1000",
  sliderImages: [
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8582.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8583.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8585.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8586.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8702.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8739.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8740.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8741.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8742.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8743.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8753.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8754.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8755.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8756.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8757.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8758.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8759.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8760.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8761.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8762.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8422.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8423.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8424.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8425.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8426.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8427.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8428.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8429.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8430.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8431.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8432.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8445.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8446.JPG",

    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8744.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8745.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8746.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8747.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8748.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8749.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8750.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8751.JPG",
    "public/assets/Images/Omega/1988_Polaris_Calgary_Seoul_386_1232_1000/IMG_8752.JPG",
  ],
  technicalData: {
    features: ["Date", "30 meters"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "Olympia",
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
      crownType: CrowWatchTypeEnum.PUSH_PULL,
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
