import { BrandsEnum } from "@/app/enums/brandsEnum";
import { WatchTypeEnum } from "@/app/enums/watchTypeEnum";
import { CollectionCatalogue } from "../../collectionCatalogue";

const details: CollectionCatalogue = {
  title: "Tag Heuer Collection",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6638.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6639.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6640.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6641.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6642.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6824.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6829.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6830.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6832.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6833.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6834.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6838.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_6839.JPG",

    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4794.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4795.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4793.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4790.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4796.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4797.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4800.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4801.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4802.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4803.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4804.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4805.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4799.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4798.JPG",

    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4199.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4197.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4198.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4200.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4201.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4202.JPG",
    "public/assets/Images/Tag_Heuer/Heuer_Collection/IMG_4203.JPG",
  ],

  modelsList: {
    "Aquaracer Series": {
      "2010 Tag Heuer Aquaracer Grande Date": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "2010 Tag Heuer Aquaracer Grande Date",
        year: 2010,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/2010_Tag_Heuer_Aquaracer_WAF1010/IMG_6047.JPG",
        href: require("./Tag_Heuer_Aquaracer_WAF1010_2010"),
        specialCollectionItem: true,
      },

      "2005 Tag Heuer Aquaracer Exclusive CN2111": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "2005 Tag Heuer Aquaracer Exclusive CN2111",
        year: 2005,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/2005_Tag_Heuer_Aquaracer_CN2111/IMG_0153.JPG",
        href: require("./Tag_Heuer_Aquaracer_CN2111_2005"),
        specialCollectionItem: true,
      },
    },

    "Formula-1 (Third Generation)": {
      "2016 Tag Heuer Formula-1 Indy 500 Limited Ed. 529/1000": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "2016 Tag Heuer Formula-1 Indy 500 Limited Ed. 529/1000",
        year: 2016,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/2016_Tag_Heuer_formula_1_Indy_500/IMG_5409.JPG",
        href: require("./Tag_Heuer_Formula_1_Indy_500_2016"),
        specialCollectionItem: true,
      },

      "2008 Tag Heuer Formula-1 WAC1212": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "2008 Tag Heuer Formula-1 WAC1212",
        year: 2008,
        type: WatchTypeEnum.DIVE,
        srcImage: "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1212/IMG_3214.JPG",
        href: require("./Tag_Heuer_Formula_1_WAC1212_2008"),
        specialCollectionItem: false,
      },
      "2008 Tag Heuer Formula-1 WAC1210": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "2008 Tag Heuer Formula-1 WAC1210",
        year: 2008,
        type: WatchTypeEnum.DIVE,
        srcImage: "public/assets/Images/Tag_Heuer/2008_Tag_Heuer_F1_WAC1210/IMG_4158.JPG",
        href: require("./Tag_Heuer_Formula_1_WAC1210_2008"),
        specialCollectionItem: false,
      },
    },

    "2000 Series": {
      "1999 Tag Heuer Professional 2000": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1999 Tag Heuer Professional 2000",
        year: 1999,
        type: WatchTypeEnum.DIVE,
        srcImage: "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4644.JPG",
        href: require("./Tag_Heuer_Professional_2000_1999"),
        specialCollectionItem: true,
      },
      "1991 Tag Heuer Professional 875-206 Chronograph": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1991 Tag Heuer Professional 875-206 Chronograph",
        year: 1991,
        type: WatchTypeEnum.DIVE,
        srcImage: "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_DD2000_875_206/IMG_6794.JPG",
        href: require("./Tag_Heuer_LWO_283_875206_1991"),
        specialCollectionItem: true,
      },
      "1991 Tag Heuer Professional 2000": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1991 Tag Heuer Professional 2000",
        year: 1991,
        type: WatchTypeEnum.DIVE,
        srcImage:
          "public/assets/Images/Tag_Heuer/1991_Tag_Heuer_2000_Automatic_WE2211/IMG_6690.JPG",
        href: require("./Tag_Heuer_Professional_2000_Auto_1991"),
        specialCollectionItem: true,
      },
      "1987 Tag Heuer Professional 262.006-1 Chronograph": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1987 Tag Heuer Professional 262.006-1 Chronograph",
        year: 1987,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1987_Tag_Heuer_DD2000_262_0061/IMG_6720.JPG",
        href: require("./Tag_Heuer_ProChrono_2620061_1987"),
        specialCollectionItem: true,
      },
      "1985 Tag Heuer Professional 272.006-1 Chronograph": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1985 Tag Heuer Professional 272.006-1 Chronograph",
        year: 1985,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1985_Tag_Heuer_2000_Chrono/IMG_0535.JPG",
        href: require("./Tag_Heuer_ProChrono_2720061_1985"),
        specialCollectionItem: true,
      },
    },

    "1500 Series": {
      "1997 Tag Heuer Professional 1500": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1997 Tag Heuer Professional 1500",
        year: 1997,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1997_Tag_Heuer_1500_Granite/IMG_0739.JPG",
        href: require("./Tag_Heuer_Professional_1500_1997"),
        specialCollectionItem: true,
      },
    },

    "Formula-1 (Second Generation)": {
      "1995 Tag Heuer Professional Formula-1 WA1219": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1995 Tag Heuer Professional Formula-1 WA1219",
        year: 1995,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2591.JPG",
        href: require("./Tag_Heuer_Formula_1_WA1219_1995"),
        specialCollectionItem: false,
      },
      "1995 Tag Heuer Professional Formula-1 WA1218": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1995 Tag Heuer Professional Formula-1 WA1218",
        year: 1995,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2557.JPG",
        href: require("./Tag_Heuer_Formula_1_WA1218_1995"),
        specialCollectionItem: false,
      },
      "1995 Tag Heuer Professional Formula-1 WA1212 (Tritium Dial)": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1995 Tag Heuer Professional Formula-1 WA1212 (Tritium Dial)",
        year: 1995,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1212/IMG_5027.JPG",
        href: require("./Tag_Heuer_Formula_1_WA1212_Tritium_1995"),
        specialCollectionItem: false,
      },
      "1995 Tag Heuer Professional Formula-1 WA1219 (Rubber)": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1995 Tag Heuer Professional Formula-1 WA1219 (Rubber)",
        year: 1995,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4771.JPG",
        href: require("./Tag_Heuer_Formula_1_WA1219_R_1995"),
        specialCollectionItem: false,
      },
      "1995 Tag Heuer Professional Formula-1 WA1211 (Tritium Dial)": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1995 Tag Heuer Professional Formula-1 WA1211 (Tritium Dial)",
        year: 1995,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0351.JPG",
        href: require("./Tag_Heuer_Formula_1_WA1211_Tritium_1995"),
        specialCollectionItem: false,
      },
    },

    "AirLine (Pre-Tag)": {
      "1985 Heuer Airline Professional 895.513": {
        brand: BrandsEnum.TAG_HEUER,
        legend: "1985 Heuer Airline Professional 895.513",
        year: 1985,
        type: WatchTypeEnum.SPORTS,
        srcImage: "public/assets/Images/Tag_Heuer/1985_Heuer_Airline/IMG_2798.JPG",
        href: require("./Heuer_Airline_Professional_895513_1985"),
        specialCollectionItem: true,
      },
    },
  },
};

export default details;
