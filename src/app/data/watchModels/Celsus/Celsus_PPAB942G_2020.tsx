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
  title: "2015 Celsus Classic PP-AB942G",
  sliderImages: [
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_5995.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_5996.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_5997.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_5998.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_5999.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6001.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6002.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6003.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6004.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6005.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6006.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6007.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6008.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6009.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6011.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6014.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6066.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6067.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6068.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6069.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6011.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6012.JPG",
    "public/assets/Images/Celsus/2020_Celsus_AB942G/IMG_6013.JPG",
  ],
  technicalData: {
    features: ["Date", "Gold Plated 20 \u339B"],

    information: {
      brand: BrandsEnum.CELSUS,
      series: "Classic",
      catalogueReference: "PP AB942G",
      productionYear: "2015",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "7 mm",
      material: "Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BREGUET,
      finishingDetails: FinishingDetailsEnum.POWDER_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Cow Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "22 mm",
      color: "Brown",
    },

    movement: {
      title: "Miyota Super GM10",
      description:
        "Gold plated quartz movement from Miyota slim line. \n" +
        "Features of G Series:\n" +
        "   - Covered Coil \n" +
        "   - Super Quick Date Adjusting \n" +
        "   - Non-Breakable Date Construction ",
      usefullLinks: {},
      sliderImages: [
        "public/assets/Images/Celsus/2020_Celsus_AB942G/GM10-1.JPG",
        "public/assets/Images/Celsus/2020_Celsus_AB942G/GM10-2.JPG",
      ],
      details: {
        manufacturer: "Miyota (Citizen)",
        modelReference: "GM10",
        type: "Quartz",
        battery: "364 / SR621SW",
        jewels: "0 Jewels (None)",
        functions: "Date, Hours, Minutes, Seconds ",
      },
    },
  },
};

export default details;
