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
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_6997.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_6998.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_6999.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7001.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7002.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7004.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7005.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7006.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7007.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7008.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7009.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7010.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7011.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7012.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7013.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7014.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7015.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7016.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7017.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7018.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7019.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7029.JPG",

    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7030.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7031.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7032.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7033.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7034.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7035.JPG",

    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7020.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7021.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7022.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7023.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7024.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7025.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7026.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7027.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7028.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7036.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7037.JPG",
    "public/assets/Images/Delma/1996_Delma_Royal_Geographical/IMG_7038.JPG",
  ],

  saleReport: {
    price: 190,
    date: "30/07/2024",
    url: "https://www.catawiki.com/en/l/86602483-delma-royal-geographical-limited-edition-no-reserve-price-eta-22j-251-272-chronograph-men-1996",
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
      material: "Lizard eather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Green",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
