

# Plan: Use Triangle Logo to Represent "The Trust" Instead of Text

## Key Insight
The user wants the **AME Triangle Logo (Logo B)** to visually **replace the word "AMETrust"** wherever the trust entity is referenced. The logo IS the trust — not a decoration beside text. The text wordmark "AME Trust Benefits" (Logo A) stays in header/footer only.

---

## Changes

### 1. Hero Section (`src/components/HeroSection.tsx`)
- Line 44-45: Change heading from "Benefits of being a member of `<AMETriangleLogo inline/>`" to:
  - `"Benefits of being a member of"` on first line
  - `<AMETriangleLogo>` rendered below/beside as the visual representation of "AMETrust®" — NOT as inline text, but as a standalone element that reads as the trust name
  - Remove the orphaned `®` span

### 2. AMETrust Overview Page (`src/pages/AMETrustOverviewPage.tsx`)
- Line 47-49: Replace `<AMETriangleLogo> ® Overview` with:
  - `<AMETriangleLogo size={55} showText={false} />` followed by text `Overview` — the logo represents "AMETrust", so the heading reads as "[Logo] Overview"
  - Keep them in a flex row with proper alignment

### 3. Products Page (`src/pages/ProductsPage.tsx`)
- Line 24-26: Already using `<AMETriangleLogo> Products` — this is correct in concept. Clean up: ensure logo + "Products" text are properly aligned as "[Logo] Products"

### 4. ProductsGrid White Section (`src/components/ProductsGrid.tsx`)
- Lines 88-91: Replace the colored text "AMETrust Products" with:
  - `<AMETriangleLogo variant="light" size={40} showText={false} />` + text "Products"
  - The triangle logo replaces the "AMETrust" words, so it reads as "[Logo] Products"

### 5. Homepage Value Proposition (`src/pages/Index.tsx`)
- Line 75-76: Replace text "AMETrust's Unique Value Proposition" with:
  - `<AMETriangleLogo variant="light" size={40} showText={false} />` + text "'s Unique Value Proposition"
  - Logo replaces the word "AMETrust"

### 6. Agents Page (`src/pages/AgentsPage.tsx`)
- Line 46-47: Replace text "Get Appointed with AMETrust®" with:
  - "Get Appointed with" + `<AMETriangleLogo variant="light" size={40} showText={false} />` + "®"
  - Logo replaces the word "AMETrust"

### 7. Header/Footer — No Change
- These use Logo A (text wordmark "AME Trust Benefits") — correct per instructions. No triangle logo here.

### 8. Create `AMETrustBenefitsLogo` SVG Component (`src/components/AMETrustBenefitsLogo.tsx`)
- Clean SVG text-only component for header/footer: "AMETrust" line 1 (AME white, Trust orange #C1692D), "B E N E F I T S" spaced on line 2
- Replace the current PNG in Header and Footer with this component for crisp rendering

---

## Files Summary

| # | File | Action |
|---|------|--------|
| 1 | `src/components/AMETrustBenefitsLogo.tsx` | Create — SVG wordmark for header/footer |
| 2 | `src/components/Header.tsx` | Replace PNG with SVG wordmark component |
| 3 | `src/components/Footer.tsx` | Replace PNG with SVG wordmark component |
| 4 | `src/components/HeroSection.tsx` | Fix: logo represents "AMETrust", not inline in text |
| 5 | `src/pages/AMETrustOverviewPage.tsx` | Logo replaces "AMETrust" word in heading |
| 6 | `src/pages/ProductsPage.tsx` | Clean up logo + "Products" alignment |
| 7 | `src/components/ProductsGrid.tsx` | Replace colored "AMETrust" text with triangle logo |
| 8 | `src/pages/Index.tsx` | Replace "AMETrust" text with triangle logo |
| 9 | `src/pages/AgentsPage.tsx` | Replace "AMETrust" text with triangle logo |

