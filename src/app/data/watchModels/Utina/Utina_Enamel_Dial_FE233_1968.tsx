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
  title: "1968 Utina Enamel Dial FE 233 17 Jewels",

  sliderImages: [
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8080.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8081.JPG",

    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8046.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8048.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8049.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8050.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8053.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8054.JPG",

    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8063.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8064.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8065.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8066.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8067.JPG",

    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8055.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8056.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8057.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8058.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8059.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8060.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8061.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8062.JPG",

    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8068.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8070.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8072.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8073.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8074.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8075.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8076.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8077.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8078.JPG",
    "public/assets/Images/Utina/1968_Utina_Enamel_dial_FE233/IMG_8079.JPG",
  ],

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.UTINA,
      series: "Enamel Dial",
      catalogueReference: "3300/69/33",
      productionYear: "1968",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.ENAMEL,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.FE_233,
  },
};

export default details;
