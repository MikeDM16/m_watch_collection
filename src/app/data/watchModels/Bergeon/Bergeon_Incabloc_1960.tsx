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

import movement_FE_233_69 from "../../movements/FE/FE_233_69_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1960 Bergeon Incabloc FE233/69",
  sliderImages: [
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3919.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3920.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3921.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3922.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3923.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3924.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3926.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3927.JPG",

    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3908.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3909.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3910.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3911.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3913.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3914.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3916.JPG",

    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3937.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3938.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3939.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3940.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3941.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3942.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3943.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3944.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3945.JPG",

    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3928.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3929.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3930.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3931.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3932.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3933.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3934.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3935.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3936.JPG",

    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3946.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3947.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3948.JPG",
    "public/assets/Images/Bergeon/1960_Bergeon_Incabloc_FE_233/IMG_3949.JPG",
  ],

  saleReport: {
    price: 110,
    date: "11/11/2024",
    url: "https://www.catawiki.com/en/l/89180283-bergeon-vitesse-mechanique-no-reserve-price-fe-france-ebauche-cal-233-17-jewels-men-1976",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.BERGEON,
      series: "Incabloc",
      catalogueReference: "FE233/69 Acier",
      productionYear: "1960",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_FE_233_69,
  },
};

export default details;
