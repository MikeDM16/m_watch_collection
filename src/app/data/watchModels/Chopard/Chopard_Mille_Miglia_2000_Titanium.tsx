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
  title: "2000 Chopard Mille Miglia Titanium",
  sliderImages: [
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7981.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7982.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7983.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7984.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7986.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7987.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7989.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7990.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8030.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8031.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8032.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7991.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7992.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7993.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7994.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7995.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7996.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7997.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7998.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_7999.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8001.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8002.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8003.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8004.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8005.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8006.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8007.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8008.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8009.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8010.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8011.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8012.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8013.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8015.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8016.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8017.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8022.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8023.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8024.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8025.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8027.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8033.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8034.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8035.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8036.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8037.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8038.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8039.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8041.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8042.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8049.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8050.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8051.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8052.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8053.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8054.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8055.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8056.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8057.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8058.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8059.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8060.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8061.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8062.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8063.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8072.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8073.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8074.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8043.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8044.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8045.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8046.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8047.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_8048.JPG",
  ],

  technicalData: {
    features: ["Date", "Automatic Chronograph"],

    information: {
      brand: BrandsEnum.CHOPARD,
      series: "Dashboard",
      catalogueReference: "8407 (779035)",
      productionYear: "2000",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "12 mm",
      material: "Titanium",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Brushed",
      bezel: "Without",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Titanium Grey",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_2894_2,
  },
};

export default details;
