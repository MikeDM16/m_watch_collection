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
  title: "1968 Omega Constellation COSC (153.029 - Linen Dial)",

  sliderImages: [
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7465.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7467.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7468.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7469.JPG",

    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7429.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7431.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7432.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7433.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7434.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7435.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7436.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7437.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7438.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7441.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7442.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7443.JPG",

    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7379.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7380.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7381.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7382.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7383.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7384.JPG",

    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7388.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7389.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7390.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7392.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7393.JPG",

    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7444.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7446.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7447.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7448.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7449.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7450.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7451.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7452.JPG",

    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7459.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7460.JPG",

    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7453.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7454.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7455.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7456.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7457.JPG",
    "public/assets/Images/Omega/1967_Omega_Constellation_COSC_153_020/IMG_7458.JPG",
  ],

  saleReport: {
    price: 450,
    date: "26/12/2025",
    url: "https://www.catawiki.com/en/l/100011421",
  },

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      featuresEnum.AUTOMATIC,
      "Movement with production number 27450515, dating the watch back to 1968",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.CONSTELLATION,
      catalogueReference: "153.029 - Linen Dial",
      productionYear: "1968",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "24 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Brushed",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "16 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.OMEGA_672_24J,
  },
};

export default details;
