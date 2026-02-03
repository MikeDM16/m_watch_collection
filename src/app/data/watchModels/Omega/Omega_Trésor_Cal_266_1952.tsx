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

const details: WatchDetails = {
  title: "1952 Omega Trésor Honeycomb Cal. 266 18K Gold",

  sliderImages: [
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9184.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9185.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9187.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9188.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9190.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9192.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9174.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9176.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9177.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9178.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9180.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9181.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9182.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9160.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9161.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9163.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9164.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9166.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9167.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9168.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9173.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9156.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9158.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9159.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9193.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9194.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9195.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9196.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9197.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9198.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9199.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9200.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9201.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9220.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9221.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9223.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9203.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9204.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9205.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9206.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9207.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9208.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9209.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9210.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9224.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9225.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9226.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9227.JPG",

    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9211.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9212.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9213.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9214.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9215.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9216.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9217.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9218.JPG",
    "public/assets/Images/Omega/1952_Omega_Tresor_Honeycomb_266/IMG_9219.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.SOLID_GOLD,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      "Movement with production number 13564275, dating the watch back to 1952",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: "Trésor",
      catalogueReference: "2684 (Caliber 13564275)",
      productionYear: "1952",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "8 mm",
      material: "Solid Yellow Gold 18K (0.750) (13g)",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.HONEYCOMB,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizard Skin Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Ligth Brown",
    },

    movement: MovementsDataDB.OMEGA_266_17J,
  },
};

export default details;
