# File templates

These are the exact shapes to write. `<…>` marks a value to fill. Lines marked
`// only when …` are dropped unless they apply. Prettier runs on every touched
file in Stage 2: it sorts imports and wraps long lines, so you don't need to
order them by hand.

Some real field names are misspelled, and the files must keep those spellings:
`usefullLinks`, `luminiscentIndexes` and `backgrounImages`.

**Strings.** Every value is a double-quoted TypeScript string. Escape `\` and
`"` inside it. Prefer curly quotes (`“…”`) in titles over escaped straight ones.

**Image paths** start with `public/assets/Images/`, use forward slashes and an
UPPERCASE `.JPG`, and contain no second dot. The site rebuilds the variant
filenames by splitting on the first `.`.

## Watch model: `src/app/data/watchModels/<Folder>/<File>.tsx`

This is the shape the admin wizard writes (`generateWatchModelFile` in
`src/app/admin/create-model/generateFileContent.ts`). It is also the shape of
`watchModels/Douglas/Douglas_Antimagnetic_1947.tsx`.

```tsx
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

import movement_<KEY> from "../../movements/<MovementFolder>/<MovementFile>";
import { WatchDetails } from "../../watchDetails";
import { <Folder>BrandSeries } from "./<Folder>BrandSeries"; // only when the brand has a series file

const details: WatchDetails = {
  title: "<Year> <Brand display> <Model name>",

  sliderImages: [
    "public/assets/Images/<ImageBrandFolder>/<PhotoFolder>/IMG_XXXX.JPG",
  ],

  // only with a Sold: line
  saleReport: {
    price: <number>,
    date: "<dd/mm/yyyy>",
    url: "<url>",
  },

  technicalData: {
    features: [featuresEnum.<MECHANICAL|AUTOMATIC>, featuresEnum.<…>],

    information: {
      brand: BrandsEnum.<BRAND_KEY>,
      series: <"Plain series" | <Folder>BrandSeries.<KEY>>,
      catalogueReference: "<ref or ->",
      productionYear: "<Year>",
      movementType: MovementWatchTypeEnum.<MECHANIQUE|AUTOMATIC|…>,
      style: WatchStyleEnum.<CASUAL|DRESS|SPORTS|DIVE>,
    },

    case: {
      diameter: CaseDiameterEnum.D_<n>,
      thickness: CaseThicknessEnum.T_<n>,
      material: CaseMaterialEnum.<KEY>,
      waterResistance: WaterResistanceEnum.<KEY>,
      finishingDetails: CaseFinishingEnum.<KEY>,
      bezel: BezelTypeEnum.<KEY>,
      crownType: CrownWatchTypeEnum.<KEY>,
      crystal: CrystalMaterialEnum.<KEY>,
      caseback: CaseBackDetailsEnum.<KEY>,
    },

    dial: {
      color: ColorEnum.<KEY>,
      dialMarkers: DialMarketsEnum.<KEY>,
      finishingDetails: FinishingDetailsEnum.<KEY>,
      luminiscentIndexes: LuminescentIndexesEnum.<KEY>,
      calendar: CalendarWatchTypeEnum.<KEY>,
    },

    bracelet: {
      material: BraceletMaterialEnum.<KEY>,
      buckleType: BuckleTypeEnum.<KEY>,
      width: BraceletWidthEnum.W_<n>,
      color: ColorEnum.<KEY>,
    },

    movement: movement_<KEY>,
  },
};

export default details;
```

- **Photos.** With a photo folder, `sliderImages` is the output of
  `python scripts/images/3_list_images.py <ImageBrandFolder> "<absolute folder path>"`.
  Without one, it is a single `IMG_XXXX.JPG` placeholder.
- **Movement import.** It always points straight at the movement file. It never
  goes through `MovementsDataDB`.
- **Never write a `description` block.** `WatchDetails.description` is
  deprecated and the site does not read it.
- **Combined values.** `luminiscentIndexes` and `calendar` can be joined with
  `+`, for example
  `LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM`.

## Movement: `src/app/data/movements/<Folder>/<File>.tsx`

This follows `movements/FHF/FHF_30_17J.tsx`, the most recent hand-written movement.

```tsx
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const <KEY>: Caliber = {
  // Title
  title: "<Movement title>",
  //Description
  description:
    "<First sentence.> <Second sentence.>\n" +
    "<Family / later production sentence.>\n\n" +
    "Variants:\n" +
    "- <ref>: <difference>\n" +
    "- <ref>: <difference>",
  // UsefullLinks
  usefullLinks: {
    "<Site> <Maker> <Ref>": "<url>",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.<MAKER_KEY>,
    // ModelReference
    modelReference: "Cal. <Ref>",
    // Type
    type: MovementWatchTypeEnum.<MECHANIQUE|AUTOMATIC>,
    // Frequency
    frequency: FrequencyEnum.F_<n>,
    // Jewels
    jewels: JewelsNumberEnum.J_<n>,
    // Reserve
    reserve: ReserveHoursEnum.R_<n>, // or: reserve: undefined,
    // Functions
    functions: "<Hours, Minutes, Sub Seconds at 6 o'clock>",
    // Battery
    battery: undefined,
  },
};

export default <KEY>;
```

- **`description`** is built by **string concatenation** (`"…\n" +`), not the
  older `\n\` line continuation. A continuation carries the next source line's
  indentation into the string, and the PDF book renders those spaces.
- **Imports.** Drop any import from `caliberEnums` that the file does not use,
  for example `ReserveHoursEnum` when `reserve: undefined`. Otherwise eslint
  flags the unused import.
- **Quartz** has no frequency or reserve: `frequency: undefined,`,
  `reserve: undefined,`, `battery: "<cell>"` (see `movements/templat_quartz.tsx`).

## Registry: `src/app/data/admin/movementsData.tsx` (new movements only)

```tsx
import <KEY> from "../movements/<Folder>/<File>";      // with the other imports
```

```tsx
  <KEY>: <KEY>,                                        // inside MovementsDataDB
```

Put the entry beside the same maker's entries if there are any. Otherwise put it
last, before the closing `};`.

## Registry: `src/app/data/admin/collectionData.tsx`

```tsx
  "<Legend>": {
    brand: BrandsEnum.<BRAND_KEY>,
    legend: "<Legend>",
    year: <Year>,
    type: WatchTypeEnum.<CASUAL|DRESS|SPORTS|DIVE>,
    srcImage: "public/assets/Images/<ImageBrandFolder>/<PhotoFolder>/IMG_XXXX.JPG",
    hoverSrc: "public/assets/Images/<ImageBrandFolder>/<PhotoFolder>/IMG_YYYY.JPG",
    href: require("../watchModels/<Folder>/<File without .tsx>"),
    specialCollectionItem: false,
  },
```

- **Placement.** Insert the entry immediately before the anchor
  `\n};\n\nfunction sortCollection`. Confirm the anchor exists first: the admin
  wizard's string replace silently does nothing when it doesn't.
- **Key.** The key must equal `legend`. `sortCollection` warns if it doesn't.
- **`require(…)`** stays on one line. `scripts/generate-collection-index.ts`
  parses it with a regex.
- **Images.** With photos, `srcImage` is the first listed image and `hoverSrc`
  the second, both ⚠ for the user to pick. If the folder mixes an older set
  with the main shoot, pick from the main shoot.
- **No photos yet: hide the entry.** Write the whole entry commented out,
  behind a note that names the folder the photos will go in:

  ```tsx
  // Hidden until photos are added (MWatchCollectionResources/Images/<ImageBrandFolder>/<PhotoFolder>)
  // "<Legend>": {
  //   brand: BrandsEnum.<BRAND_KEY>,
  //   …
  //   href: require("../watchModels/<Folder>/<File without .tsx>"),
  //   specialCollectionItem: false,
  // },
  ```

  - The generator and `lookup.ts` only pair a `require()` with a key line
    matching `^\s+"…": {`. A commented key never matches, so the watch (and a
    brand with no other model) stays out of the index.
  - The model file keeps its `IMG_XXXX.JPG` placeholder until then.
  - To publish, list the photos into the model, set real tiles and uncomment.

## Brand: `src/app/enums/brandsEnum.tsx` and `src/app/data/brands.tsx`

```tsx
  <BRAND_KEY>: "<Brand display>",                      // brandsEnum.tsx, alphabetical by key
```

Append to the end of the `brandsDB` array, before its closing `];`.

The researched entry:

```tsx
  {
    name: BrandsEnum.<BRAND_KEY>,
    logoImg: "public/assets/Images/Brands_Logos/<logo file>",
    website: "<url>",                                  // only if the brand still trades
    description: "<One plain sentence.>",
    foundedInformation: {
      year: <yyyy>,
      details: "Founded in <City>, <Country>",
    },
    displayBySeries: false,
  },
```

The minimal entry, when research finds nothing reliable:

```tsx
  {
    name: BrandsEnum.<BRAND_KEY>,
    logoImg: "public/assets/Images/Brands_Logos/<logo file>",
  },
```

Never add a brand to `mainBrandsOrder` (the homepage logo wall) unless the user asks.

## Enum keys

Every enum is a plain `const` object of display strings in `src/app/enums/`.
Insert new keys where they sort:

| Enum                | File                                           | Position                                       |
| ------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `CaliberBrandsEnum` | `caliberEnums.tsx`                             | Alphabetical by key: `CORTEBERT: "Cortébert",` |
| `JewelsNumberEnum`  | `caliberEnums.tsx`                             | Numeric: `J_20: "20 (Twenty) Jewels",`         |
| `FrequencyEnum`     | `caliberEnums.tsx`                             | Numeric: `F_18800: "18800 A/h",`               |
| `ReserveHoursEnum`  | `caliberEnums.tsx`                             | Numeric: `R_46: "46 Hours",`                   |
| `CaseDiameterEnum`  | `caseDiameterEnum.tsx`                         | Numeric: `D_29: "29 mm",`                      |
| `CaseThicknessEnum` | `caseThicknessEnum.tsx`                        | Numeric                                        |
| `CaseMaterialEnum`  | `caseMaterialEnum.tsx`                         | Inside its commented group                     |
| `BraceletWidthEnum` | `braceletWidthEnum.tsx`                        | Numeric                                        |
| A `BrandSeries` key | `watchModels/<Folder>/<Folder>BrandSeries.tsx` | Last in the object: `NEW_KEY: "Label",`        |
