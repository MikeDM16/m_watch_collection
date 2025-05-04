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
  title: "1975 Monumental Automatic Dive 200M",
  description: {
    text:
      "After some research in the most common watch forums, like WatchUSeek or TimeZone, no solid information can be found regarding the \
         origins and history of the Monumental watch brand. \n \n" +
      "Some models appear at eBay auctions and based on their style, Monumental seems to be a Swiss-based watch brand, assembling their models around the \
         1960s and until mid-1970s. \n \n" +
      'As usual back then, Monumental shared cases and movements whit and from others brands. By searching for timepieces whit the same movement and dive features,\
         easily poped-up a brand whit the same dial, movement and case, but having as the brand name "Vanguard". \n \n' +
      'The model can be found whit or without the bezel. The non-bezel versions have a very thick glass, mostly due to the "super-waterproof" feature of the watch.\n' +
      "After seeing that even the serial number on the back-case is the same in shared models between  Monumental and Vanguard brand, maybe the two brands were deeply related. \
        Looking at the diving depth that the watch claims to hold and the high quality ETA movement, Monumental brand should have produced mid-level watches for their market.",

    sliderImages: [
      "public/assets/Images/Monumental/1975_Monumental_Swiss/vanguard/m1 (1).JPG",
      "public/assets/Images/Monumental/1975_Monumental_Swiss/vanguard/m1 (2).JPG",
      "public/assets/Images/Monumental/1975_Monumental_Swiss/vanguard/m1 (3).JPG",
      "public/assets/Images/Monumental/1975_Monumental_Swiss/vanguard/m1 (4).JPG",
      "public/assets/Images/Monumental/1975_Monumental_Swiss/vanguard/m2 (1).JPG",
      "public/assets/Images/Monumental/1975_Monumental_Swiss/vanguard/m2 (2).JPG",
    ],
  },

  sliderImages: [
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0324.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0325.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0326.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0327.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0328.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0329.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0330.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0121.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0122.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0123.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0125.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0126.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_2804.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0128.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0129.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0135.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0137.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0140.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0141.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_0142.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_2802.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_2803.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_2843.JPG",
    "public/assets/Images/Monumental/1975_Monumental_Swiss/IMG_2844.JPG",
  ],
  saleReport: {
    price: 139,
    date: "27/09/2018",
    url: "https://www.catawiki.pt/l/21063013-monumental-swiss-n323-eta-2783-25-jewels-automatic-dive-200m-homem-1970-1979",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC,
      featuresEnum.WR_50_METERS,
      featuresEnum.BI_DIRECTIONAL_BEZEL,
    ],

    information: {
      brand: BrandsEnum.LUCERNE,
      series: "Automatic",
      catalogueReference: "-",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DIVE,
    },

    case: {
      diameter: "35 mm",
      thickness: "14 mm",
      material: "Stainless Steel - Chrome plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Polished",
      bezel: "Inner bi-directional bezel, 15-minute graduated",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Light Brown",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_2783,
  },
};

export default details;
