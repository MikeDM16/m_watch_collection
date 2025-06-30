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
  title: "1946 Omega 2504-5 Cal. 30T2",
  sliderImages: [
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0866.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0870.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0873.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0874.JPG",

    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0769.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0772.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0773.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0774.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0776.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0777.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0778.JPG",

    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0803.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0805.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0806.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0807.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0808.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0809.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0810.JPG",

    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0788.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0789.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0790.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0791.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0792.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0793.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0794.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0795.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0796.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0797.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0799.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0800.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0801.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0802.JPG",

    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0813.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0814.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0815.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0816.JPG",

    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0780.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0781.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0782.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0783.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0784.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0785.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0786.JPG",

    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0859.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0860.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0861.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0862.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0863.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0864.JPG",
    "public/assets/Images/Omega/1946_Omega_2404_5_30T2/IMG_0865.JPG",
  ],
  saleReport: {
    price: 550,
    date: "27/06/2025",
    url: "https://www.catawiki.com/en/l/96206844-omega-seamaster-2504-5-cal-30t2-15-jewels-men-1946",
  },
  technicalData: {
    features: [
      featuresEnum.SMALL_SECONDS,
      featuresEnum.MECHANICAL,
      "Movement with production number 10796200, dating the watch back to 1946",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SEAMASTER_VINTAGE,
      catalogueReference: "2504-5",
      productionYear: "1946",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Polished",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.OMEGA_30T2,
  },
};

export default details;
