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
  title: "1955 Helma Cal. AS1130",
  sliderImages: [
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1673.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1674.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1675.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1676.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1677.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1678.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1679.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1680.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1681.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1682.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1683.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1684.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1685.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1686.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1687.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1688.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_1689.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_2643.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_2648.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_2649.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_2821.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_2826.JPG",
    "public/assets/Images/Helma/1955_Helma AS1130/IMG_2827.JPG",
  ],
  saleReport: {
    price: 85,
    date: "22/08/2019",
    url: "https://www.catawiki.pt/l/28809335-helma-cal-as-1130-homem-1950-1959",
  },
  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.INCABLOC],

    information: {
      brand: BrandsEnum.HELMA,
      series: "-",
      catalogueReference: "-",
      productionYear: "1955",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Chromed",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather (Nato)",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.AS_1130,
  },
};

export default details;
