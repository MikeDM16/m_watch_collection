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
  title: "1950 Certina Dress 15 Jewels",
  sliderImages: [
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0985.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0986.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0956.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0957.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0958.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0959.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0960.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0961.JPG",

    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0969.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0970.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0973.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0974.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0976.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0978.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0979.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0980.JPG",

    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0962.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0963.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0964.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0965.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0966.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0967.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0968.JPG",

    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0981.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0982.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0983.JPG",
    "public/assets/Images/Certina/1950_Certina_Mechanical_331/IMG_0984.JPG",
  ],

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.CERTINA,
      series: "Dress",
      catalogueReference: "-",
      productionYear: "1950",
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
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.CERTINA_331,
  },
};

export default details;
