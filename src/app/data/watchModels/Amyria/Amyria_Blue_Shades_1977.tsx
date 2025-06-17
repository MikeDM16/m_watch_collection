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
  title: "1977 Amyria Blue Shades AS 1950",

  sliderImages: [
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0765.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0766.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0768.JPG",

    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0729.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0730.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0731.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0732.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0733.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0734.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0735.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0736.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0737.JPG",

    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0751.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0752.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0753.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0754.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0756.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0758.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0759.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0760.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0761.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0762.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0763.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0764.JPG",

    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0738.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0739.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0740.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0741.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0742.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0743.JPG",

    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0750.JPG",

    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0744.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0745.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0746.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0747.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0748.JPG",
    "public/assets/Images/Amyria/1997_Amyria_Blue_Shades//IMG_0749.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.AMYRIA,
      series: "Blue Shades",
      catalogueReference: "47037",
      productionYear: "1977",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Ligth Brown",
    },

    movement: MovementsDataDB.AS_1950,
  },
};

export default details;
