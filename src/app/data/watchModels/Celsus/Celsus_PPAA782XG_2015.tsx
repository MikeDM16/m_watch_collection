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

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2015 Celsus Classic PP-AA782XG",
  sliderImages: [
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6016.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6017.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6018.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6019.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6020.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6021.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6022.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6023.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6024.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6025.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6037.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6070.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6071.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6072.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6073.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6074.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6026.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6027.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6028.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6029.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6030.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6031.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6032.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6033.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6034.JPG",
    "public/assets/Images/Celsus/2015_Celsus_GM10/IMG_6035.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.GOLD_PLATED_20M],

    information: {
      brand: BrandsEnum.CELSUS,
      series: "Classic",
      catalogueReference: "PP AA782XG",
      productionYear: "2015",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "7 mm",
      material: "Gold Plated (20 \u339B) - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BREGUET,
      finishingDetails: FinishingDetailsEnum.WEB_TEXTURE_DIAL,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Cow Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
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
        "public/assets/Images/Celsus/2015_Celsus_GM10/GM10-1.JPG",
        "public/assets/Images/Celsus/2015_Celsus_GM10/GM10-2.JPG",
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
