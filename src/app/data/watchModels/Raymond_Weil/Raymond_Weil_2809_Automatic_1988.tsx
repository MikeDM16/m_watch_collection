import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1988 Raymond Weil 2809 Automatic",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4655.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4656.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4657.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4658.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4659.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4660.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4661.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4662.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4663.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4664.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4665.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4666.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4667.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4668.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4669.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4670.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4671.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4672.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4673.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4674.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4675.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4676.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4677.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4678.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/FHJI5715.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/FHSE9170.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/LVNP6105.JPG",
    "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/IMG_4719.JPG",
  ],
  saleReport: {
    price: 130,
    date: "15/09/2019",
    url: "https://www.catawiki.com/l/29188643-raymond-weil-automatic-2809-eta-2892-21-jewels-men-1988",
  },
  technicalData: {
    features: ["Date", "Automatic", "18K Gold Electroplated"],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: "Automatic",
      catalogueReference: "2809",
      productionYear: "1988",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "33 mm",
      thickness: "7 mm",
      material: "18K Gold Electroplated",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Coin detailed bezel edge",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather (Lizard skin)",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: {
      title: "ETA 2892-2",
      description:
        "High quality, extremely compact ETA automatic movement. Adjusted by Raymond Weil. Bi-diretional winding. \n \n" +
        "It has been in production since 1983 until around 2000.",
      usefullLinks: {
        "Technical Information from ETA": "../Files/774_ETA 2892-2NEWSmaller.pdf",
      },
      sliderImages: [
        "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/ETA_2892A2_1.PNG",
        "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/ETA_2892A2_2.PNG",
        "public/assets/Images/Raymond_Weil/1988_Raymond_Weil_2809_Auto/ETA_2892A2_3.PNG",
      ],
      details: {
        manufacturer: "ETA (Swiss Made)",
        modelReference: "2892",
        type: "Manual wind",
        frequency: "28800 A/h",
        jewels: "21 (Twenty-One) Jewels ",
        reserve: "42 Hours",
        functions: "Day, Date, Hours, Minutes, Sweep Seconds, bi-directional winding",
      },
    },
  },
};

export default details;
