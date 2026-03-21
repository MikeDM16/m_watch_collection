# Bootstrap-to-Tailwind Migration — Visual Fixes

Summary of styling fixes applied after removing Bootstrap dependencies.

---

## Fix 1: Content sections lost horizontal centering and padding

**Problem:** Bootstrap's `Container` provided `margin: 0 auto` (centering) and `padding: 0 0.75rem` (side padding). After migration, only top/bottom margin was kept — content was pushed to the left and touched screen edges on mobile.

**File:** `src/app/styles/container.css`

**Change:**

```css
.section-container {
  margin: 2rem auto; /* added horizontal auto centering */
  padding: 0 0.75rem; /* added side padding */
  max-width: 80%;
}

@media (max-width: 640px) {
  .section-container {
    max-width: 100%; /* full width on mobile, padding prevents edge-touch */
  }
}
```

---

## Fix 2: Header navbar icons pushed to the far right

**Problem:** `justify-between` in the header flex container pushed nav icons to the opposite end. Bootstrap's `Navbar` with `me-auto` on `Nav` kept links left-aligned after the brand title.

**Files:**

- `src/app/components/header/headerComponent.tsx` — changed `justify-between` to `gap-4`
- `src/app/components/header/MobileMenuToggle.tsx` — added `ml-auto` to hamburger button for mobile right-alignment

---

## Fix 3: Header nav icons too close together

**Problem:** Nav list items used `gap-1` which left almost no spacing between icons.

**File:** `src/app/components/header/headerComponent.tsx`

**Change:** `gap-1` → `gap-3` on the nav `<ul>` element.

---

## Fix 4: Brand page grid items — varying sizes and left-aligned

**Problem:** Two issues combined:

1. `.centered-container` class (`display: flex`) defined after `@tailwind utilities` in CSS cascade overrode Tailwind's `display: grid`, breaking grid layout entirely.
2. CSS Grid always left-aligns incomplete rows, while the expected layout centers them.

**File:** `src/app/collection/[brand]/page.tsx`

**Change:**

- Removed `centered-container` from grid div
- Switched from CSS Grid (`grid grid-cols-*`) to flexbox (`flex flex-wrap justify-center gap-4`) so incomplete rows are centered
- Set fixed responsive widths on items: `w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px]`

---

## Fix 5: Previous Sales — no spacing between text and swiper

**Problem:** The "Some links to my previous auctions at Catawiki!" text had no bottom margin, sitting directly on top of the swiper carousel.

**File:** `src/app/components/previousSales/previousSalesComponent.tsx`

**Change:** Added `mb-6` class to the text wrapper div.

---

## Fix 6: Header navbar size too small

**Problem:** After removing Bootstrap's Navbar, the title and link fonts had no explicit size, falling back to browser defaults.

**Files:** `src/app/styles/textStyles.css`, `src/app/components/header/headerComponent.tsx`

**Changes:**

- Added `font-size: 1.25rem` to `.header-navbar-title`
- Added `font-size: 0.95rem` to `.header-navbar-link`
- Changed `py-2` → `py-3` for more vertical padding

---

## Fix 7: Brand logo image too large on model detail page

**Problem:** Brand logo in the model details sidebar rendered at full size with no constraints.

**File:** `src/app/components/common/FeaturesListingComponent.tsx`

**Change:** Wrapped logo in a centered flex container with `max-h-[120px] object-contain`.

---

## Fix 8: Bug fixes and polish

### 8a. Typos in Contacts page

- "yout feedback" → "your feedback", "coffe" → "coffee"

### 8b. Invalid CSS

- `border-bottom-color: "black"` → `border-bottom-color: black` (quoted string was silently ignored)

### 8c. Breadcrumb trailing slash

- Brand page breadcrumb no longer shows trailing `/` after the last item

### 8d. Dead Bootstrap code removed

- Deleted `.btn-outline-danger` class (used `--bs-btn-hover-bg`, never referenced)

### 8e. CaliberDetailsComponent mobile responsiveness

- `col-span-4`/`col-span-8` → `col-span-12 md:col-span-4`/`col-span-12 md:col-span-8` so caliber image goes full-width on mobile

### 8f. Brand color CSS variable

- Added `--color-brand: #c40d2e` to `:root`, replaced all 5+ hardcoded `#c40d2e` values

### 8g. Mobile menu animation

- Replaced instant `hidden/block` toggle with smooth `max-height` transition
- Added `hover:opacity-80` and `focus-visible:outline` to hamburger button

### 8h. Semantic HTML

- Replaced `<a>` tags without `href` with `<span>` in SpecialItemsComponent and stats grid

### 8i. Page division horizontal overflow

- Changed `.page-division` from `width: 100dvw` → `width: 100%` to prevent horizontal scrollbar

### 8j. Consolidated .hover-animation

- Added `background-color` to transition for smoother hover effect
