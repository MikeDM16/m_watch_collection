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
  title: "1975 Miura Calendar 17 Rubis",
  sliderImages: [
    "public/assets/Images/Miura/1975_Miura/IMG_2762.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2763.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2764.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2765.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2766.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2767.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2768.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2769.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2770.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2771.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2772.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2773.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2774.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2775.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2776.JPG",
    "public/assets/Images/Miura/1975_Miura/IMG_2777.JPG",
  ],
  saleReport: {
    price: 90,
    date: "30/07/2018",
    url: "https://www.catawiki.pt/l/20023879-miura-swiss-perpetual-calendar-double-crown-cal-fe-140-17-rubis-homem-1970-1979",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.MIURA,
      series: "Calendar",
      catalogueReference: "17 rubis",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "38 mm",
      thickness: "12 mm",
      material: "Stainless Steel - Chrome plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Inner Calendar Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "22 mm",
      color: "Black",
    },

    movement: MovementsDataDB.FE_140,
  },
};

export default details;
