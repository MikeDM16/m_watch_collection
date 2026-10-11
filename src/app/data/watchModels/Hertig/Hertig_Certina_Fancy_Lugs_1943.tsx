import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_CERTINA_KF320B from "../../movements/Certina/Certina_KF320B_15J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1943 Hertig Certina “Fancy Lugs”",

  sliderImages: [
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5803.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5805.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5807.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5842.JPG",

    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5808.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5809.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5810.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5811.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5813.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5814.JPG",

    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5815.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5816.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5817.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5818.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5819.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5820.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5821.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5822.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5823.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5825.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5826.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5827.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5828.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5829.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5830.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5831.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5832.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5833.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5834.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5835.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5837.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5838.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5839.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5840.JPG",
    "public/assets/Images/Hertig/1943_Hertig_Certina_Fancy_Lugs_KF320B/IMG_5841.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      featuresEnum.SMALL_SECONDS,
      featuresEnum.INCABLOC,
      featuresEnum.FANCY_LUGS,
    ],

    information: {
      brand: BrandsEnum.HERTIG,
      series: "Fancy Lugs",
      catalogueReference: "-",
      productionYear: "1943",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.SS_CHROMED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.GREY,
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.TUXEDO,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.GREEN,
    },

    movement: movement_CERTINA_KF320B,
  },
};

export default details;
