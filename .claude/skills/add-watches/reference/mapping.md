# Mapping rules: pasted block → files

Everything here turns one pasted block into decided values. Anything you had to
guess is marked ⚠ in the review. Anything taken from a fetched source is marked ✱.

## 1. Parsing a block

Blocks are separated by one or more blank lines. Lines are matched in order.

| Line | Shape                                                         | Example                                          |
| ---- | ------------------------------------------------------------- | ------------------------------------------------ |
| 1    | Brand                                                         | `Ernest Borel`                                   |
| 2    | Title, separator, year                                        | `Doxa Conquistador (By Synchron) – 1973`         |
| 3    | Movement type `\|` size `\|` case material                    | `Automatic \| 37mm x11 \| Stainless Steel`       |
| 4    | `Cal.` maker + reference, jewels, frequency (commas optional) | `Cal. Certina 25-651 27 Jewels 19800 A/h`        |
| 5+   | URLs (one per line), then free notes                          | `https://ranfft.org/caliber/...`, a variant list |

Tolerate:

- `-`, `–` or `—` as the separator before the year. The year is the **last
  4-digit number** on line 2.
- `37mm x11`, `37 mm x 11`, `37x11`, `37mm x 7.5`. Diameter first, thickness second.
- A missing comma between reference, jewels and frequency.
- Curly or straight quotes in titles.
- Trailing spaces, and a brand line with a trailing space (`Ernest Borel `).

**Optional lines**, recognised anywhere after line 3 by their prefix (case-insensitive):

| Prefix    | Meaning                                       | Maps to                                                            |
| --------- | --------------------------------------------- | ------------------------------------------------------------------ |
| `Ref:`    | Case / catalogue reference                    | `information.catalogueReference`                                   |
| `Series:` | Series name                                   | `information.series` (series-file key if the brand has one)        |
| `Style:`  | dress / casual / sports / dive                | `WatchStyleEnum` + `WatchTypeEnum` (same key)                      |
| `Dial:`   | colour, markers, e.g. `silver, arabic sticks` | `dial.color` (`ColorEnum`), `dial.dialMarkers` (`DialMarketsEnum`) |
| `Strap:`  | width, colour, material: `18mm brown leather` | `bracelet.width`, `bracelet.color`, `bracelet.material`            |
| `Images:` | photo folder name in the resources repo       | photo folder for `sliderImages` / `srcImage` / `hoverSrc`          |
| `Sold:`   | `<price> <dd/mm/yyyy> <url>`                  | `saleReport: { price, date, url }`                                 |

Every other non-URL line after line 4 is a **note**. A note that lists caliber
variants (`174(CLD): rotor, sub second, date`) becomes the movement's variant
list.

**Descriptions in plain prose.** The user often describes a watch in prose
instead of prefixed lines, inside the block or in a later message, naming the
watch by brand or model (`Doxa is stick indices and white dial…`). Map that
prose exactly like the optional lines, and mark the values ✱ (from the user):

| Phrase                                                    | Value                                                               |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| stick indices / arabic / roman                            | `BATTON` / `ARABIC` / `ROMAN`; "arabic and stick" → `ARABIC_STICKS` |
| applied (gold) indices                                    | dial finishing `APPLIED_INDECES`                                    |
| sunburst / radial effect                                  | dial finishing `RADIAL_BRUSHED_EFFECT`                              |
| tuxedo ring / tuxedo dial                                 | dial finishing `TUXEDO`                                             |
| case back with details / without details                  | `DETAILS_ENGRAVED` / `WITHOUT_DECORATION`                           |
| date at 3 o'clock / no date                               | `AT_3_OCLOCK` / `WITHOUT`                                           |
| no lume                                                   | `LuminescentIndexesEnum.NONE`                                       |
| hands or lugs worth noting (heat-blued hands, fancy lugs) | a plain-string feature, e.g. `"Heat-blued hands"` ⚠ for wording     |

- **One finish per field.** `dial.finishingDetails` and `dial.calendar` hold one
  value each. Their display strings don't join cleanly: `APPLIED_INDECES +
RADIAL_BRUSHED_EFFECT` renders "Applied IndecesRadial Brushed Effect". Only
  `CYCLOPS_LENS` starts with a space and is meant to be appended. When the
  prose describes two finishes, pick the more distinctive one and ask. When it
  describes a calendar layout no key covers (a day window plus a date pointer),
  propose a new combined key.
- **Mislabelled blocks.** When a block's label contradicts its content (a
  "Record" note describing a day window and a date pointer, in a batch where
  only the Benrus has those), assign it to the watch it describes. Say so in
  one line at the top of the review.
- **Duplicates.** Use a block that appears twice once.

## 2. Names

`ascii(x)` means: strip accents, drop everything except letters, digits, spaces
and dashes, then turn runs of spaces and dashes into one `_`. For example,
`Neuchâtel Incabloc` becomes `Neuchatel_Incabloc` and `Certina “Fancy Lugs”`
becomes `Certina_Fancy_Lugs`.

**Brand**

| Thing         | Rule                                                                   | Example                     |
| ------------- | ---------------------------------------------------------------------- | --------------------------- |
| Display value | Existing `BrandsEnum` value, else as typed, accents kept               | `Cortébert`, `Ernest Borel` |
| Enum key      | Existing key, else `ascii(display)` in UPPER_SNAKE                     | `CORTEBERT`, `ERNEST_BOREL` |
| Code folder   | The folder `lookup.ts` reports, else `ascii(display)`                  | `Ernest_Borel`              |
| Logo          | `Brands_Logos/<ascii(display) lowercase>_logo.PNG`; lookup confirms it | `ernest_borel_logo.PNG`     |

**Watch**

- **Model name.** Take line 2 without the year and its separator. Then strip a
  leading repeat of the brand plus any separator after it, matching
  accent-insensitively. So `Certina President` becomes `President`, and
  `Hertig - Certina “Fancy Lugs”` becomes `Certina “Fancy Lugs”`.
- **Tidying.** Capitalise words typed all-lowercase (`Precision tank` →
  `Precision Tank`). Turn en and em dashes inside the name into `-`. Turn
  straight double quotes into curly ones (`“…”`). Keep everything else as typed,
  and list every change you made under the watch in the review.
- **Title:** `"<Year> <Brand display> <Model name>"`.
- **Legend and registry key:** the title without `"<Year> "`. It must not
  collide with an existing legend; lookup prints the brand's legends.
- **Model file:** `watchModels/<Code folder>/<Code folder>_<ascii(Model name)>_<Year>.tsx`.
- **Photo folder.** Use the `Images:` line if given. Else use a folder that
  lookup lists under the brand whose name starts with `<Year>_` and plainly
  matches the model. Otherwise propose
  `<Year>_<Code folder>_<ascii(Model name)>_<ascii(caliber ref)>`, for example
  `1950_Benrus_Day_Date_Pointer_CE13`.

**Movement**

- **Folder:** the folder lookup reports for the maker, else `ascii(maker)`
  (`Cortebert`, `Record`, `Benrus`).
- **File:** `movements/<Folder>/<Folder>_<ascii(ref)>_<jewels>J.tsx`, for
  example `Cortebert_573_15J.tsx` or `Record_171_20J.tsx`.
- **Variable and registry key:** `<CALIBER BRAND KEY>_<ASCII(REF) UPPER>`, for
  example `CORTEBERT_573`, `ETA_2750` or `BENRUS_CE13`. If that key already
  exists for a different jewel count, append `_<jewels>J`. The model imports
  it as `movement_<KEY>`.
- **Title:** copy the style of the maker's existing movements. Lookup prints
  them as `style:` lines: `A. Schild 1130`, `ETA 2783`, `Certina Cal. 25-651`.
  A new maker gets `<Maker display> Cal. <Ref>`.
- **`modelReference`:** `Cal. <Ref>`, unless the maker's existing files use the
  bare reference.
- **Photos.** If lookup lists a matching movement photo folder, list its
  originals with `3_list_images.py` (see SKILL.md). Otherwise use
  `sliderImages: []`. The model page then falls back to a photo of the watch,
  which is better than a placeholder path that 404s.

## 3. Enum mapping

Match against the **display values** that `lookup.ts --enums` prints, not the keys.

1. **Exact match**, ignoring case and spacing: use it. For example,
   `Gold Plated` → `GP` and `Stainless Steel` → `STAINLESS_STEEL`.
2. **Close match**: use it and mark it ⚠ with what the user typed. For example,
   `Chromed Steel` → `SS_CHROMED` (`Stainless Steel - Chromed`) and
   `Nickel chromed` → `SS_NICKEL_CHROMED`.
3. **No match**: propose a new key and list it under "New enum keys". Never
   force a wrong value to avoid adding a key.

**Movement type** (`information.movementType` and the movement's `details.type`):

| Typed                           | Key           |
| ------------------------------- | ------------- |
| Mechanical, Manual, Hand-wound  | `MECHANIQUE`  |
| Automatic, Self-winding, Bumper | `AUTOMATIC`   |
| Quartz                          | `QUARTZ`      |
| Tuning fork                     | `TUNING_FORK` |
| Meca-quartz                     | `MECA_QUARTZ` |

**Number-keyed enums.** A missing key is proposed in numeric position:

| Enum                | Key from    | New key looks like                  |
| ------------------- | ----------- | ----------------------------------- |
| `CaseDiameterEnum`  | `29mm`      | `D_29: "29 mm",`                    |
| `CaseThicknessEnum` | `x 7.5`     | `T_7_5: "7.5 mm",` (already exists) |
| `JewelsNumberEnum`  | `20 Jewels` | `J_20: "20 (Twenty) Jewels",`       |
| `FrequencyEnum`     | `18800 A/h` | `F_18800: "18800 A/h",`             |
| `ReserveHoursEnum`  | 46 h        | `R_46: "46 Hours",`                 |
| `BraceletWidthEnum` | 13 mm       | `W_13: "13 mm",`                    |

**Frequency** is always stored in A/h. Convert vph 1:1. Convert hertz as
2.5 Hz = 18000, 2.75 Hz = 19800, 3 Hz = 21600, 4 Hz = 28800, 5 Hz = 36000.
The existing 5 Hz key is spelled `F_36600: "36600 A/h"`. Use it for 36000 and
don't add a second key.

**Case material** with no exact match: propose a key in the matching group of
`caseMaterialEnum.tsx` ("Gold Plated variants", "Stainless Steel variants", …).
Use the user's wording as the display value. For example, `10K Gold Plated`
could become `GP_10K: "10K Gold Plated"`. Raise it as a question if the wording
could mean an existing value. "Gold filled" and "rolled gold" are not the same
as "gold plated", and neither are µm (micron) and karat (K).

**Reserve.** Take it from a source only. If no source gives it, write
`reserve: undefined`; about ten movements already do this. Never estimate it.

**Functions** are free text, in the phrasing the repo uses:

- `Hours, Minutes, Sub Seconds at 6 o'clock`
- `Hours, Minutes, Sweep Seconds`
- `Date, Hours, Minutes, Sweep Seconds`
- `Day, Date, Hours, Minutes, Sweep Seconds`

## 4. Derived fields

**Features**, in this order:

1. `featuresEnum.MECHANICAL` or `featuresEnum.AUTOMATIC`, from the movement type.
2. `featuresEnum.SMALL_SECONDS` when the functions have sub seconds or small seconds.
3. `featuresEnum.DATE` when the movement shows the date.
4. `featuresEnum.INCABLOC` when the title, notes or a source says Incabloc.
5. `featuresEnum.ANTI_MAGNETIC` when the title or notes say antimagnetic.
6. A gold feature (`GOLD_PLATED_10M`, `GOLD_PLATED_20M`, `GOLD_PLATED_80M`,
   `GOLD_PLATED_14k`) only when the material states that exact thickness or karat.

**Calendar** (`dial.calendar`):

| Functions                    | Value                                          |
| ---------------------------- | ---------------------------------------------- |
| No date                      | `CalendarWatchTypeEnum.WITHOUT`                |
| Date, position unknown       | `CalendarWatchTypeEnum.AT_3_OCLOCK` ⚠          |
| Day and date by pointer hand | `CalendarWatchTypeEnum.CALENDAR_POINTER`       |
| Day and date windows         | `CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK` ⚠ |

**Series.**

- If the brand has a series file, use the key whose label matches the model
  family. For a pre-1990 watch, use a `Vintage`-style key if the file has one
  (Certina: `CertinaBrandSeries.VINTAGE_SERIES`). Otherwise propose a new key.
- Brands without a series file get a plain string: the model family, which is
  usually the first word or words of the model name (`"Conquistador"`), ⚠.
- Nested series (`seriesGroup`) are referenced by their full dotted path; see
  ADDING_WATCHES_GUIDE.md §D2.

## 5. Batch defaults

Use these for every field the block does not give. The review lists them
**once** for the whole batch, all ⚠, and does not repeat them per watch. You
chose not to have photos inspected, so nothing overrides them except the
optional lines.

| Field                               | Default                                                                          |
| ----------------------------------- | -------------------------------------------------------------------------------- |
| `information.catalogueReference`    | `"-"`                                                                            |
| `information.style` / registry type | `WatchStyleEnum.CASUAL` / `WatchTypeEnum.CASUAL`                                 |
| `case.waterResistance`              | `WaterResistanceEnum.WATER_RESISTANT`                                            |
| `case.finishingDetails`             | `CaseFinishingEnum.POLISHED`                                                     |
| `case.bezel`                        | `BezelTypeEnum.WITHOUT`                                                          |
| `case.crownType`                    | `CrownWatchTypeEnum.PUSH_PULL`                                                   |
| `case.crystal`                      | `CrystalMaterialEnum.ACRYLIC`                                                    |
| `case.caseback`                     | `CaseBackDetailsEnum.WITHOUT_DECORATION`                                         |
| `dial.color`                        | `ColorEnum.SILVER`                                                               |
| `dial.dialMarkers`                  | `DialMarketsEnum.ARABIC_STICKS`                                                  |
| `dial.finishingDetails`             | `FinishingDetailsEnum.NONE`                                                      |
| `dial.luminiscentIndexes`           | `LuminescentIndexesEnum.NONE`                                                    |
| `bracelet.material` / `buckleType`  | `BraceletMaterialEnum.LEATHER` / `BuckleTypeEnum.STANDARD_BUCKLE`                |
| `bracelet.color`                    | `ColorEnum.BROWN`                                                                |
| `bracelet.width`                    | From the diameter: ≤31 mm → `W_16`, 32–35 → `W_18`, 36–39 → `W_20`, ≥40 → `W_22` |

A title word overrides its default only when it is unambiguous: `Tuxedo` sets
`FinishingDetailsEnum.TUXEDO` on the dial. Mark it ✱ with the reason.

## 6. Research

**Movements.** WebFetch every URL in the block. ranfft, emmywatch and 17jewels
pages all give jewels, frequency and often the reserve, functions and family. If
a fetch fails, try one WebSearch for `<maker> <ref> caliber`. Then:

- Cross-check jewels and frequency. If a source disagrees with the user, **keep
  the user's value** and raise it as a question that quotes both.
- Write a 2–4 sentence `description` from source facts only: what the caliber
  is, who made it and when, the trait worth knowing (bumper automatic, an
  ébauche used by brand X), and its family (`Later produced as the ETA 980 when
A. Schild joined ETA`).
- Then add a variant list if the source or the notes have one, in the style of
  `movements/ETA/ETA_2783.tsx` (`- 2750 / 2770, 2776: no date`).
- No marketing language, nothing a source doesn't support.
- `usefullLinks` gets one entry per URL, labelled `<Site> <Maker> <Ref>`:
  `"Ranfft Cortebert 573"`, `"EmmyWatch ETA 2750"`, `"17jewels AS 980"`.

**New brands.** Do one WebSearch per brand for its founding year, city and
whether it still trades.

- `description` is one plain sentence in the house style: `"Cortébert is a
Swiss watch manufacturer founded in …, known for …"`, or the local pattern
  `"Vintage Portuguese brand with Swiss Made parts and assembly."`.
- `foundedInformation` is `{ year, details: "Founded in <City>, <Country>" }`.
- `website` only if the brand has a current official site.
- Put the source URLs in the review, not in the file. If nothing reliable turns
  up, propose the minimal entry (name + logo only, like Doxa) and say so.
