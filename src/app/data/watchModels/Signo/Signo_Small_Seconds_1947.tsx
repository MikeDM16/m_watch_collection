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
  title: "1947 Signo Small Seconds - AS 1130",
  sliderImages: [
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0648.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0649.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0650.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0651.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0652.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0653.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0654.JPG",

    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0667.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0668.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0669.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0670.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0671.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0672.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0673.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0674.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0675.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0676.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0677.JPG",

    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0872.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0873.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0874.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0875.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0876.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0877.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0878.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0879.JPG",

    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0655.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0656.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0657.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0658.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0659.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0660.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0661.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0662.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0663.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0664.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0666.JPG",

    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0679.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0680.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0681.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0682.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0683.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0684.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0685.JPG",
    "public/assets/Images/Signo/1947_Signo_Small_Seconds/IMG_0686.JPG",
  ],

  saleReport: {
    price: 146,
    date: "26/09/2024",
    url: "https://www.catawiki.com/en/l/88397207",
  },

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.SIGNO,
      series: "Small Seconds Collection",
      catalogueReference: "53706",
      productionYear: "1947",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "34 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Lizard Skin",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Green",
    },

    movement: MovementsDataDB.AS_1130,
  },
};

export default details;
