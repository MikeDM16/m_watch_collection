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
  title: "1996 Royal Geographical Society Chronograph",

  sliderImages: [
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4729.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4730.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4732.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4733.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4734.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4735.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4736.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4737.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4738.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4740.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4741.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4742.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4743.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4744.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4745.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4746.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4747.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4748.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4749.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4750.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4751.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4752.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4753.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4754.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4755.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4771.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4772.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4773.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4774.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4775.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4776.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4777.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4778.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4779.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4780.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/IMG_4781.JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/auction (2).JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/auction (4).JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/auction (1).JPG",
    "public/assets/Images/Delma/1995_Delma_RoyalGeographical/auction (3).JPG",
  ],
  saleReport: {
    price: 194,
    date: "05/01/2024",
    url: "https://www.catawiki.pt/l/78612355",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.GOLD_PLATED_20M,
    ],

    information: {
      brand: BrandsEnum.ROYAL_GEOGRAPHICAL_SOCIETY,
      series: "1º Gen Chrono (Limited 2500 pieces, assemble by Delma)",
      catalogueReference: "667230.1",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "10 mm",
      material: "Gold Plated 20 \u339B - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Coin detail bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White (Enamel)",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.ENAMEL,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
