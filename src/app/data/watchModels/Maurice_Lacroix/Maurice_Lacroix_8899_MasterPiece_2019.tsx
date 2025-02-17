import { MovementsDataDB } from "../../movementsData";
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
import { MauriceLacroixBrandSeries } from "./MauriceLacroixBrandSeries";

const details: WatchDetails = {
  title: "2019 Maurice Lacroix 8899 Masterpiece Valjoux 7750",
  sliderImages: [
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0212.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0213.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0214.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0215.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0216.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0220.JPG",

    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0167.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0168.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0169.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0170.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0171.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0172.JPG",

    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0184.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0185.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0186.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0187.JPG",

    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0173.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0174.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0176.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0177.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0178.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0180.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0181.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0182.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0183.JPG",

    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0195.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0196.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0197.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0198.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0199.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0200.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0201.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0202.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0203.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0204.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0205.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0206.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0207.JPG",

    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0188.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0189.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0190.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0191.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0192.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0193.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0194.JPG",

    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0208.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0209.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0210.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0211.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0387.JPG",
    "public/assets/Images/Maurice_Lacroix/2019_Maurice_Lacroix_8899_MasterPiece_Auto/IMG_0389.JPG",
  ],

  technicalData: {
    features: ["Date", "Automatic Chronograph", "100 meters", "Screw-in crown", "Tachymeter"],

    information: {
      brand: BrandsEnum.MAURICE_LACROIX,
      series: MauriceLacroixBrandSeries.MASTERPIECE,
      catalogueReference: "8899",
      productionYear: "2019",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
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
