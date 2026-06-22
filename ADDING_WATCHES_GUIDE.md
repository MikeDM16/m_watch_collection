# Guide: Adding Watch Models & Movements

Quick reference for all files that need to be created or modified when adding watches or movements to this collection app.

---

## A. Adding a New Watch Model

### Checklist

- [ ] **1. Add watch images** to `public/assets/Images/[Brand]/[Year]_[Brand]_[Model]/`
- [ ] **2. Create watch model file** at `src/app/data/watchModels/[Brand]/[Brand]_[Model]_[Year].tsx`
- [ ] **3. Register in collectionData** — add entry to `CollectionItemsDB` in `src/app/data/collectionData.tsx`
- [ ] **4. Regenerate collection index** — runs automatically on `npm run dev` and `npm run build` (or manually: `npm run generate-index`)
- [ ] **5. (If new brand)** Add enum value, brand entry, and BrandSeries file (see Section D)
- [ ] **6. (If new series for existing brand)** Add series constant to `src/app/data/watchModels/[Brand]/[Brand]BrandSeries.tsx` (or a sub-series under an umbrella group — see Section D2)
- [ ] **7. (If part of a collection set)** Add entry inside `src/app/data/watchModels/[Brand]/[Brand]_collection_set.tsx`

### Step 2 — Watch Model File

**Path:** `src/app/data/watchModels/[Brand]/[Brand]_[Model]_[Year].tsx`

**Naming convention:** Underscores, brand first, then model, then year. Examples:

- `Tissot_Seastar_PR516_1967.tsx`
- `Omega_Seamaster_Cal_267_1956.tsx`
- `Seiko_6306_7001_1976.tsx`
- `Tag_Heuer_Professional_2000_1999.tsx`

**Structure (copy and fill in):**

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

import MOVEMENT_VAR from "../../movements/[Manufacturer]/[CaliberFile]";
import { WatchDetails } from "../../watchDetails";

// If brand has a BrandSeries file:
// import { [Brand]BrandSeries } from "./[Brand]BrandSeries";

const details: WatchDetails = {
  title: "[Year] [Brand] [Model]",
  sliderImages: ["public/assets/Images/[Brand]/[Year]_[Brand]_[Model]/IMG_XXXX.JPG"],
  technicalData: {
    features: [featuresEnum.XXXX],
    information: {
      brand: BrandsEnum.XXXX,
      series: "[SeriesName or BrandSeries.XXXX]",
      catalogueReference: "[Reference]",
      productionYear: "[Year]",
      movementType: MovementWatchTypeEnum.XXXX,
      style: WatchStyleEnum.XXXX,
    },
    case: {
      diameter: CaseDiameterEnum.D_XX,
      thickness: CaseThicknessEnum.T_XX,
      material: CaseMaterialEnum.XXXX,
      waterResistance: WaterResistanceEnum.XXXX,
      finishingDetails: CaseFinishingEnum.XXXX,
      bezel: BezelTypeEnum.XXXX,
      crownType: CrownWatchTypeEnum.XXXX,
      crystal: CrystalMaterialEnum.XXXX,
      caseback: CaseBackDetailsEnum.XXXX,
    },
    dial: {
      color: ColorEnum.XXXX,
      dialMarkers: DialMarketsEnum.XXXX,
      finishingDetails: FinishingDetailsEnum.XXXX,
      luminiscentIndexes: LuminescentIndexesEnum.XXXX,
      calendar: CalendarWatchTypeEnum.XXXX,
    },
    bracelet: {
      material: BraceletMaterialEnum.XXXX,
      buckleType: BuckleTypeEnum.XXXX,
      width: BraceletWidthEnum.W_XX,
      color: ColorEnum.XXXX,
    },
    movement: MOVEMENT_VAR,
    // Alternative: inline Caliber object (see Section E)
  },
  // Optional:
  // description: { text: "...", sliderImages: [...] },
  // saleReport: { price: 181, date: "01/11/2018", url: "https://..." },
};

export default details;
```

**Notes:**

- The `movement` field uses a **direct import** of the specific movement file (e.g., `import MOVEMENT_VAR from "../../movements/ETA/ETA_2824"`)
- Look up the movement file path in `movementsData.tsx` (the movement registry) to find the correct import path
- Alternatively, for unique movements, use an inline `Caliber` object (see Section E)
- `features` accepts both `featuresEnum.XXX` entries and plain strings for custom notes
- `luminiscentIndexes` can concatenate values: `LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM`
- `calendar` can concatenate too: `CalendarWatchTypeEnum.AT_3_OCLOCK + CalendarWatchTypeEnum.CYCLOPS_LENS`

### Step 3 — Register in collectionData.tsx

**File:** `src/app/data/collectionData.tsx`

Add entry inside the `CollectionItemsDB` object:

```tsx
"[Year] [Brand] [Model Name]": {
  brand: BrandsEnum.XXXX,
  legend: "[Year] [Brand] [Model Name]",
  year: YYYY,
  type: WatchTypeEnum.XXXX,
  srcImage: "public/assets/Images/[Brand]/[Year]_[Brand]_[Model]/IMG_XXXX.JPG",
  hoverSrc: "public/assets/Images/[Brand]/[Year]_[Brand]_[Model]/IMG_YYYY.JPG",  // optional
  href: require("./watchModels/[Brand]/[Brand]_[Model]_[Year]"),
  specialCollectionItem: false,  // true for highlighted pieces
},
```

**Important:** The entry key **must match** the `legend` value. Uses `require()` (not ES import). Entries are auto-sorted by year at export via `sortCollection()`.

### Step 3b — Regenerate collection-index.json

The collection index is **automatically regenerated** on `npm run dev` and `npm run build` (via `predev`/`prebuild` scripts). You can also run it manually:

```bash
npm run generate-index
```

This extracts the listing metadata (brand, legend, year, type, srcImage, series, movementTitle, saleReport) into `src/app/data/collection-index.json`. The homepage and listing pages read from this JSON index instead of loading all watch model files, which keeps dev mode fast.

### Step 6 — Collection Set (if applicable)

**Path:** `src/app/data/watchModels/[Brand]/[Brand]_collection_set.tsx`

Type is `CollectionCatalogue` with `modelsList` grouping entries by series. Collection sets also need a corresponding entry in `collectionData.tsx` with `collectionSet: true`.

---

## B. Adding a New Movement

### Checklist

- [ ] **1. Add movement images** to `public/assets/Images/Movements/[Manufacturer]/[CaliberModel]/`
- [ ] **2. Create movement file** at `src/app/data/movements/[Manufacturer]/[CaliberModel].tsx`
- [ ] **3. Register in movementsData** — add import + entry to `MovementsDataDB` in `src/app/data/movementsData.tsx`
- [ ] **4. (If new manufacturer)** Add to `CaliberBrandsEnum` in `src/app/enums/caliberEnums.tsx`

### Step 2 — Movement File

**Path:** `src/app/data/movements/[Manufacturer]/[CaliberModel].tsx`
**Template:** `src/app/data/movements/template.tsx`

**Structure:**

```tsx
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../movementsData";

const VARIABLE_NAME: Caliber = {
  title: "[Manufacturer] [Model]",
  description: "[Description text]", // optional, can be ""
  usefullLinks: {
    // optional
    "[Link Label]": "[URL]",
  },
  sliderImages: ["public/assets/Images/Movements/[Manufacturer]/[CaliberModel]/image.JPG"],
  details: {
    manufacturer: CaliberBrandsEnum.XXXX,
    modelReference: "[Model Reference]",
    type: MovementWatchTypeEnum.XXXX,
    // For mechanical/automatic:
    frequency: FrequencyEnum.XXXX,
    jewels: JewelsNumberEnum.XXXX,
    reserve: ReserveHoursEnum.XXXX,
    functions: "Hours, Minutes, Sweep Seconds",
    // For quartz: omit frequency/reserve, add battery:
    // battery: "395 / SR927SW",
  },
};

export default VARIABLE_NAME;
```

**Note on import:** The `Caliber` type import uses `import type` to avoid loading the movements registry at runtime. The path is relative to the movement file's location (`"../../caliberTypes"` from a manufacturer subfolder).

### Step 3 — Register in movementsData.tsx

**File:** `src/app/data/movementsData.tsx`

1. Add ES `import` at the top:

```tsx
import MY_CALIBER from "./movements/[Manufacturer]/[CaliberModel]";
```

2. Add entry to `MovementsDataDB`:

```tsx
MY_CALIBER: MY_CALIBER,
```

**Important:** Movements use ES `import` (unlike watch models which use `require()`).

---

## C. Enum Quick Reference

### Watch Classification

| Enum                    | Values                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `WatchTypeEnum`         | CASUAL, SPORTS, DIVE, DRESS                                                            |
| `WatchStyleEnum`        | DRESS, CASUAL, SPORTS, DIVE                                                            |
| `MovementWatchTypeEnum` | QUARTZ, MECHANIQUE, AUTOMATIC, TUNING_FORK, MECA_QUARTZ, SOLAR, ELETRONIC_WITH_BALANCE |

### Case

| Enum                  | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CaseDiameterEnum`    | D_23, D_24, D_25, D_27, D_32, D_33, D_34, D_35, D_36, D_37, D_38, D_39, D_40, D_41, D_42, D_43, D_44, D_45                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `CaseThicknessEnum`   | T_5, T_6, T_7, T_7_5, T_8, T_9, T_10, T_11, T_12, T_13, T_14, T_15                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `CaseMaterialEnum`    | STAINLESS_STEEL, SS_CHROMED, SS_NICKEL_CHROMED, SS_GOLD_DETAILS, SS_GOLD_PLATED, SS_GOLD_PLATED_10, SS_GOLD_PLATED_20, SS_GOLD_PUSHERS, SS_ROSE_GOLD_PLATED, SS_RUBBER_DETAILS, GP, GP_10_SS_BACK, GP_20, GP_20_SS_BACK, GP_20_BEZEL_SS_BACK, GP_80, GP_CASE_AND_BACK, GP_20_CASE_AND_BACK, GP_14K_20_SS_BACK, GOLD_18K_ELECTROPLATED, GOLD_18K_AND_SS, SOLID_GOLD_18K, SOLID_ROSE_GOLD_18K, SOLID_WHITE_GOLD_18K, SOLID_WHITE_GOLD_18K_72G, SOLID_YELLOW_GOLD_18K, SOLID_YELLOW_GOLD_18K_13G, SOLID_STERLING_SILVER_925_GP, TITANIUM, TITANIUM_GOLD, TITANIUM_BLACK_PVD, ALUMINIUM, CHROMIUM_SS_BACK            |
| `CaseFinishingEnum`   | NONE, POLISHED, VERTICAL_BRUSHED, VERTICAL_POLISHED, HORIZONTAL_BRUSHED, CIRCULAR_BRUSHED, CIRCULAR_POLISHED, RADIAL_BRUSHED, RADIAL_POLISHED, SUNSHINE_BRUSHED, SANDBLASTED, SATIN_MATTE, MATTE, BLACK_PVD, CHROMED, BRONZE_PLATED, GUN_METAL                                                                                                                                                                                                                                                                                                                                                                   |
| `BezelTypeEnum`       | WITHOUT, POLISHED, BRUSHED, DETAILED, COIN_EDGE, FLUTED, CIRCULAR_DECORATION, ENGINE_TURNED, GOLD_PLATED, HEXA_GOLD_PLATED, DODECAGON_GOLD, THREE_LAYER, TACHYMETER, TACHYMETER_GOLD, TACHYMETER_INNER, TACHYMETER_REVERSED, PULSOMETER_TACHYMETER, GRADUATED_10_MIN, GRADUATED_15_MIN, GRADUATED_HOUR, UNI_5_MIN, UNI_10_MIN, UNI_MINUTE, UNI_BRONZE_10_MIN, CERAMIC_10_MIN, PEPSI_10_MIN, BI_10_MIN, BI_15_MIN, BI_15_MIN_INNER, COUNTDOWN, GMT_12H, COMPASS, COMPASS_FIXED_BRONZE, COMPASS_BI, INNER_CALENDAR, INNER_HOUR, INNER_GRADUATED, REGOLO, RIDERS_TABS_5_MIN, RIDERS_TABS_15_MIN, RIDERS_TABS_MINUTE |
| `CrownWatchTypeEnum`  | PUSH_PULL, SCREW_DOWN                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `CrystalMaterialEnum` | ACRYLIC, MINERAL, SAPPHIRE, HARDLEX                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `CaseBackDetailsEnum` | DETAILS_ENGRAVED, BRAND_DECORATION, WITHOUT_DECORATION, OPEN_CASE_BACK                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `WaterResistanceEnum` | WATER_RESISTANT, WATERPROOF_10M, \_25M, \_30M, \_40M, \_50M, \_100M, \_120M, \_150M, \_200M, \_300M                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Dial

| Enum                     | Values                                                                                                                                                                                                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DialMarketsEnum`        | BREGUET, ARABIC, ARABIC_STICKS, ROMAN, ROUND, DAGGER, BATTON, ARROW                                                                                                                                                                                                         |
| `FinishingDetailsEnum`   | NONE, APPLIED_INDECES, RADIAL_BRUSHED_EFFECT, METALLIC_COLOR, WEB_TEXTURE_DIAL, TEXTURED, POWDER_EFFECT, ENAMEL, CARBON_FIBER, VERTICAL_BRUSHED, TRITIUM_MARKERS, SNOWFLAKE_PATTERN, GOLD_DETAILS, DETAILED_SUB_DIALS, PAN_DIAL, GRANITE, HONEYCOMB, CLOUD_DE_PARIS, TUXEDO |
| `LuminescentIndexesEnum` | NONE, HANDS, HANDS_AND_MARKERS, MARKERS, TRITIUM, LUMINOVA                                                                                                                                                                                                                  |
| `CalendarWatchTypeEnum`  | WITHOUT, DAY_DATE_AT_3_OCLOCK, DAY_DATE_SUBDIALS, AT_3_OCLOCK, AT_4_OCLOCK, AT_6_OCLOCK, AT_12_OCLOCK, AT_4_5_OCLOCK, CALENDAR_POINTER, INNER_BEZEL, ANUAL, PERPETUAL, DATE, DAY, CYCLOPS_LENS                                                                              |

### Bracelet

| Enum                   | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BraceletMaterialEnum` | LEATHER, LEATHER_COW, LEATHER_RACING, LEATHER_NATO, LEATHER_FIXED_LUGS, LEATHER_CARBON_FIBER, LEATHER_LIZARD_TEXTURE, CROCODILE_LEATHER, CROCODILE_BREITLING, LIZARD_LEATHER, SHARK_LEATHER, SNAKE_LEATHER, SUEDE_LEATHER, SS_LINKS, SS_INTEGRATED, SS_JUBILEE, SS_RACING, SS_GOLD_LINKS, SS_GF, SS_TAG_LINK, SS_TAG_SEL, SS_SEL, SS_TWO_TONE, MESH_GOLD, TITANIUM_LINKS, TITANIUM_GOLD, RUBBER, RUBBER_RACING, RUBBER_TROPIC, RUBBER_F1, NYLON_FIXED_LUGS |
| `BraceletWidthEnum`    | W_14, W_16, W_17, W_18, W_19, W_20, W_20_18, W_21, W_22, W_24, W_25                                                                                                                                                                                                                                                                                                                                                                                        |

### Colors (shared by dial and bracelet)

| Enum             | Values                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ColorEnum`      | BLACK, BLACK_RED, BLACK_ORANGE, BLACK_LCD, BLACK_ENAMEL, WHITE, WHITE_ENAMEL, WHITE_MOTHER_OF_PEARL, WHITE_PATINA, WHITE_PANDA, WHITE_GREEN_TUXEDO, WHITE_RED_TUXEDO, WHITE_BROWN_TUXEDO, SILVER, GREY, DARK_GREY, LIGHT_GREY, MATTE_GREY, TITANIUM_GREY, TITANIUM_GREY_GOLD, SS_GREY, SS_POLISHED, SS_SANDBLASTED, BLUE, DARK_BLUE, BLUE_SHADES, GREEN, GREEN_SHADES, DARK_GREEN, RED, MODENA_RED, BORDEAUX, SALMON, ORANGE, YELLOW, CREAM_YELLOW, CREAM_SALMON, BROWN, DARK_BROWN, LIGHT_BROWN, BEIGE, BEIGE_PATINA, BEIGE_TRITIUM_PATINA, CHAMPAGNE, CHAMPAGNE_AGED, GOLD, GOLDEN_LINEN, GREY_GOLD_DETAILS, TWO_TONE_GREY_GOLD, TWO_TONE_POLISHED_BRUSHED, STEEL_AND_GOLD, STEEL_GOLD_INNER_LINKS, LIGHT_TURQUOISE, DARK_PURPLE_SOLAR, CARBON_FIBER, CARBON_FIBER_BLACK, CUSTOM_FABRIC |
| `BuckleTypeEnum` | FOLDING_CLASP, BUTTERFLY_DEPLOY_CLASP, STANDARD_BUCKLE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Movement / Caliber

| Enum                | Values                                                                                                                                                                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CaliberBrandsEnum` | AS, BREITLING, CERTINA, DUBOIS_DEPRAZ, DOXA, EBERHARD, ETA, EXCELSIOR_PARK, FE, FHF, FORTIS, LANDERON, LEMANIA, MIYOTA, OMEGA, ORIENT, POLJOT, RONDA, SEAGULL, SEIKO, SELLITA, TIMEX, TISSOT, PIGUET, UNITAS, VALJOUX, VENUS, VOSTOK, UNIVERSAL_GENEVE, ZENITH |
| `FrequencyEnum`     | F_18000, F_19800, F_21600, F_28800, F_36600                                                                                                                                                                                                                    |
| `JewelsNumberEnum`  | J_0, J_4, J_5, J_6, J_7, J_13, J_15, J_16, J_17, J_21, J_22, J_23, J_24, J_25, J_26, J_27, J_28, J_30, J_31, J_37, J_38, J_39, J_40, J_42, J_45                                                                                                                |
| `ReserveHoursEnum`  | R_38, R_40, R_41, R_42, R_44, R_45, R_47, R_50, R_60, R_80                                                                                                                                                                                                     |

### Features (common ones)

| Key                      | Name                           |
| ------------------------ | ------------------------------ |
| `DATE`                   | Date                           |
| `CHRONOGRAPH`            | Chronograph                    |
| `AUTOMATIC_CHRONOGRAPH`  | Automatic Chronograph          |
| `MECHANIQUE_CHRONOGRAPH` | Mechanique Chronograph         |
| `AUTOMATIC`              | Automatic                      |
| `MECHANICAL`             | Mechanical                     |
| `TACHYMETER`             | Tachymeter                     |
| `GMT_HAND`               | GMT Hand                       |
| `MOONPHASE`              | Moonphase Dial                 |
| `SMALL_SECONDS`          | Small Seconds                  |
| `INCABLOC`               | Incabloc                       |
| `UNI_DIRECTIONAL_BEZEL`  | Uni-directional rotating bezel |
| `BI_DIRECTIONAL_BEZEL`   | Bi-directional rotating bezel  |
| `SCREWED_IN_CROWN`       | Screw-in crown                 |
| `OPEN_CASE_BACK`         | Open Case Back                 |
| `TRITIUM_DIAL`           | Tritium Dial                   |
| `PULSOMETER`             | Pulsometer                     |
| `RETROGRADE_CHRONOGRAPH` | Retrograde Chronograph         |

All enums are in `src/app/enums/`. Check the individual files for full details and display values.

---

## D. Adding a New Brand (all steps)

1. **Add enum value** in `src/app/enums/brandsEnum.tsx`
2. **Add brand entry** in `src/app/data/brands.tsx` — to the `brandsDB` array
   - Required fields: `name` (BrandsEnum value), `logoImg`
   - Optional: `displayOrder`, `website`, `description`, `foundedInformation`, `displayBySeries`, `backgrounImages`
3. **Add brand logo** to `public/assets/Images/Brands_Logos/[brand]_logo.PNG`
4. **(If brand uses series grouping)** Create `src/app/data/watchModels/[Brand]/[Brand]BrandSeries.tsx`
5. **(If brand has a collection set)** Create `src/app/data/watchModels/[Brand]/[Brand]_collection_set.tsx`
6. **Set `displayBySeries: true`** in `brands.tsx` if the brand page should group models by series

No route changes needed — `[brand]/page.tsx` and `[brand]/[model]/page.tsx` use `generateStaticParams()`.

---

## D2. Series grouping and sub-series

A brand's series live in `src/app/data/watchModels/[Brand]/[Brand]BrandSeries.tsx` as a constant
mapping a KEY to its display string. A watch references one via `series: [Brand]BrandSeries.KEY`.
The brand page groups watches by that value when `displayBySeries: true` is set in `brands.tsx`.

**Flat series** (most brands):

```tsx
export const OmegaBrandSeries = {
  SPEEDMASTER: "Speedmaster",
  SEAMASTER: "Seamaster",
};
// watch: series: OmegaBrandSeries.SEAMASTER
```

**Sub-series (umbrella groups)** — when several series belong under one umbrella (e.g. Breitling's
Chronomat lines), wrap them with the `seriesGroup` helper. All of a brand's models render in one
continuous grid; each card carries a filled brand-color **group tag** (the umbrella, e.g.
`Chronomat`) and, when it belongs to a sub-series, a lighter **sub-series tag** (e.g.
`Evolution (2008-2011)`):

```tsx
import { seriesGroup } from "../seriesGroup";

export const BreitlingBrandSeries = {
  CHRONOMAT: seriesGroup("Chronomat", {
    CHRONOMAT_EVOLUTION: "Evolution (2008-2011)", // -> "Chronomat — Evolution (...)"
    CHRONOMAT_VITESSE: "Vitesse (1997-2000)",
  }),
  COLT: "Colt", // flat series stay plain strings
};
// watch: series: BreitlingBrandSeries.CHRONOMAT.CHRONOMAT_EVOLUTION
```

How it works:

- `seriesGroup("Group", { SUB: "label" })` stores the value `"Group — label"` (or just `"Group"`
  when the label is `""`). The reserved separator is defined in
  `src/app/data/watchModels/seriesGroup.ts` — never type it literally in a label.
- The grouping service (`collectionService` / `parseSeries`) splits that value back into a group +
  sub-label to render the two tags. A value with no separator is a normal flat series (one tag).
- The base sub-key (label `""`) holds watches that belong to the umbrella but no specific
  sub-series; they show only the group tag.
- Cards keep today's order: groups stay in their existing order and cards are sorted by year
  (newest first) within each group; there are no per-group section headers.

When adding a watch via `scripts/create_watch_model.py`, the series picker automatically lists
nested sub-series (e.g. `CHRONOMAT.CHRONOMAT_EVOLUTION`) and emits the correct nested reference.

### How the brand page renders & filters (maintenance notes)

The brand collection page is split between a server and a client component:

- **`src/app/collection/[brand]/page.tsx`** (server): fetches the grouped models, flattens them
  into one `cards` list (`{ entry, group, label }`) keeping group order with year-descending
  order inside each group, derives the distinct non-empty `groups`, and passes both to the grid.
- **`src/app/components/brandPage/BrandCollectionGrid.tsx`** (`"use client"`): owns the filter
  state and renders the cards.

Layout & tags:

- All models render in **one continuous grid** — no per-group section headers. Each card shows a
  filled brand-color **group tag** and, for sub-series members, a lighter **sub-series tag**.
- A watch with **no series** (or a `displayBySeries: false` brand) gets `group === ""` → no tags,
  and no filter is shown.

Series filter (only rendered when a brand has more than one group):

- **Desktop**: an always-visible row of toggle chips — an `All` chip plus one per group.
- **Mobile** (`< lg`): collapses into the shared `MultiSelect` dropdown (`src/components/ui/select.tsx`).
- **Behavior**: state is the array of individually-selected groups. **Empty = "All"** (default),
  which shows every model with only the `All` chip active. Selecting group chips narrows the grid
  to just those groups; selecting *every* group collapses back to `All` (empty). Clicking `All`
  resets to the default.
- **Styling** lives in `src/app/styles/textStyles.css`: `.series-tag` / `.series-tag-group` (card
  tags) and `.series-filter` / `.series-filter-chip(.is-active)` (filter chips). Note this file is
  pulled into `globals.css` via `@import`; Turbopack dev (`next dev --turbopack`) may not hot-reload
  edits to it — **restart the dev server** if new rules don't appear.

Authors normally don't touch any of this — just set the watch's `series` (and `displayBySeries` on
the brand). The grouping, tags, and filter all derive automatically.

---

## E. Inline Movement (alternative to MovementsDataDB reference)

When a movement is unique to a single watch and not shared, it can be defined inline instead of creating a separate movement file:

```tsx
movement: {
  title: "Tissot 782-1",
  description: "In-house Tissot movement produced around 1965 until 1972.",
  usefullLinks: {
    "Ranfft Tissot 782-1": "https://www.ranfft.de/...",
  },
  sliderImages: [
    "public/assets/Images/[Brand]/[Model]/movement_1.PNG",
  ],
  details: {
    manufacturer: "Tissot (Swiss Made)",
    modelReference: "782-1",
    type: "Mechanical",
    frequency: "18000 A/h",
    jewels: "17 (Seventeen) Jewels",
    reserve: "49 Hours",
    functions: "Date, Hours, Minutes, Sweep Seconds",
  },
},
```

**Note:** Inline movements use plain strings instead of enum values for the `details` fields. This is only used for older/legacy entries. Prefer creating a proper movement file with enum values when possible.

---

## F. File Tree Summary

```
src/app/
  data/
    collection-index.json       <-- Lightweight JSON index (generated, used at runtime)
    collectionIndex.ts          <-- CollectionIndexEntry type + JSON import
    caliberTypes.ts             <-- Caliber, CaliberTechinicalDetails types
    watchDetails.tsx            <-- WatchDetails, TechnicalData, ModelInformation types
    collectionCatalogue.tsx     <-- CollectionCatalogue type (for collection sets)
    brands.tsx                  <-- brandsDB array
    admin/
      collectionData.tsx        <-- Watch registry (require() imports, admin/scripts only)
      movementsData.tsx         <-- Movement registry (ES imports, admin/scripts only)
    watchModels/
      [Brand]/
        [Brand]_[Model]_[Year].tsx     <-- Watch definition (export default)
        [Brand]BrandSeries.tsx         <-- Series constants (if brand uses series)
        [Brand]_collection_set.tsx     <-- Collection set (if applicable)
    movements/
      template.tsx                     <-- Movement template (automatic)
      [Manufacturer]/
        [CaliberModel].tsx             <-- Movement definition (export default)
  enums/
    brandsEnum.tsx              <-- BrandsEnum
    caliberEnums.tsx            <-- CaliberBrandsEnum, FrequencyEnum, JewelsNumberEnum, ReserveHoursEnum
    (... all other enum files)
  services/
    collectionService.tsx       <-- Reads from collection-index.json (no changes needed)
    brandsService.tsx           <-- Reads from collection-index.json (no changes unless new brand)
scripts/
  generate-collection-index.ts  <-- Regenerates collection-index.json from collectionData.tsx
  generate-pdf-book.tsx         <-- Generates PDF book from collectionData.tsx
public/assets/Images/
  [Brand]/[Year]_[Brand]_[Model]/     <-- Watch photos
  Movements/[Manufacturer]/[Caliber]/ <-- Movement photos
  Brands_Logos/                        <-- Brand logos (.PNG)
```

---

## G. Key Conventions

- **Image paths** start with `public/assets/Images/` and use forward slashes
- **Watch model files** use `export default details` where `details: WatchDetails`
- **Movement files** use `export default VARIABLE_NAME` where variable is `Caliber`
- **Watch models import movements directly** — `import MOVEMENT from "../../movements/[Manufacturer]/[File]"` (not via MovementsDataDB hub)
- **collectionData.tsx** (in `data/admin/`) uses `require()` for watch imports — only used by scripts, not by the app at runtime
- **movementsData.tsx** (in `data/admin/`) is the movement registry — used by admin API routes and scripts
- **collection-index.json** is the runtime data source — regenerate with `npx tsx scripts/generate-collection-index.ts` after any changes to collectionData.tsx
- **Entry key must match `legend`** in `CollectionItemsDB`
- **No manual route updates** — Next.js dynamic routing handles it via `generateStaticParams()`
- **Brand folder names** use underscores for spaces (e.g., `Tag_Heuer`, `Maurice_Lacroix`)
- **All technical fields use enums** — diameter, thickness, material, finishing, bezel, dial color, bracelet material/width/color all use dedicated enums. Do NOT use hardcoded strings for these fields
- **Case finishingDetails uses `CaseFinishingEnum`**, dial finishingDetails uses `FinishingDetailsEnum` — they are different enums for different sections
