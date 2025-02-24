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

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2022 Celsus Heritage Chronograph",
  sliderImages: [
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0394.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0395.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0396.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0397.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0398.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0399.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0400.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0401.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0402.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0403.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0404.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0405.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0406.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0407.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0415.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0416.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0417.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0418.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0419.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0420.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0421.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0408.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0409.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0410.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0411.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0412.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0413.JPG",
    "public/assets/Images/Celsus/2022_Celsus_9168_Heritage/IMG_0414.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.CELSUS,
      series: "Heritage",
      catalogueReference: "9168",
      productionYear: "2022",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "10min graduated bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Cow Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: {
      title: "Miyota Super 6S20",
      description: "Tuning fork type quartz crystal. \n" + "Frequency 	32,768Hz ",
      usefullLinks: {},
      sliderImages: ["public/assets/Images/Celsus/2022_Celsus_9168_Heritage/miyota_6S20.JPG"],
      details: {
        manufacturer: "Miyota (Citizen)",
        modelReference: "6S20",
        type: "Quartz",
        battery: "395 / 399 / SR927W",
        jewels: "0 Jewels (None)",
        functions:
          "Hours, minutes, central chronograph seconds, 1/20 seconds, 30 minute counter, date",
      },
    },
  },
};

export default details;
