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
import { MauriceLacroixBrandSeries } from "./MauriceLacroixBrandSeries";

const details: WatchDetails = {
  title: "2021 Maurice Lacroix 8724 Masterpiece Valjoux 7750",
  sliderImages: [
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1595.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1596.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1597.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1598.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1599.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1600.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1601.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1602.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1603.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1604.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1605.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1606.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1607.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1609.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1610.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1611.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1612.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1613.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1614.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1615.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1616.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1617.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1618 - Copy.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1618.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1619.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1620.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1620.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1621.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1622.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1623.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1624.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1625.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1626.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1626 - Copy.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1627.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_8724_MasterPiece_Auto/IMG_1628.JPG",
  ],
  saleReport: {
    price: 740,
    date: "02/01/2022",
    url: "https://www.catawiki.com/en/l/54044813",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.MAURICE_LACROIX,
      series: MauriceLacroixBrandSeries.MASTERPIECE,
      catalogueReference: "8724",
      productionYear: "2021",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
