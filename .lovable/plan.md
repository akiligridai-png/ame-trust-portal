

# Updated Plan: Branding Color Fix + Custom Homepage Image

## Changes

### 1. Fix "Trust" Orange Color Everywhere
Replace `#F2D696` (pale gold) with `#C1692D` (burnt orange from the AMETrust Benefits logo) in all branded text locations:

- **`src/components/BrandedText.tsx`** (line 13): `#F2D696` → `#C1692D`
- **`src/components/Footer.tsx`** (line 63, 70): Tagline color and inline "Trust" text
- **`src/components/ProductsGrid.tsx`** (line 90): "Trust" in "AMETrust Products" heading

### 2. Rename Value Proposition Heading
- **`src/pages/Index.tsx`** (line 76): "Our Unique Value Proposition" → "AMETrust's Unique Value Proposition"

### 3. ScrollToTop Component
- **Create `src/components/ScrollToTop.tsx`**: `useEffect` + `useLocation` to scroll to top on every route change
- **`src/App.tsx`**: Add `<ScrollToTop />` inside `<BrowserRouter>`

### 4. Generate Custom Homepage Business Image
- Replace the current family park image (`src/assets/family-protection.jpg`) on the homepage overview section with a new **8K ultra-realistic business/corporate image** — professionals in a formal business setting (e.g., diverse team in suits reviewing documents in a modern office/boardroom), maintaining the same layout and sizing

### 5. Dark-Background Logo for Header/Footer
- Replace `src/assets/ame-trust-benefits-logo-dark.png` with a properly generated version: white "AME", burnt orange `#C1692D` "Trust", white "Benefits" on transparent background — matching the uploaded BIG_LOGO_TYPE document style

---

## Files Summary

| # | File | Action |
|---|------|--------|
| 1 | `src/components/BrandedText.tsx` | Change `#F2D696` → `#C1692D` |
| 2 | `src/components/Footer.tsx` | Update tagline + inline Trust color to `#C1692D`, update logo |
| 3 | `src/components/ProductsGrid.tsx` | Update "Trust" color to `#C1692D` |
| 4 | `src/pages/Index.tsx` | Rename value proposition heading, swap homepage image |
| 5 | `src/components/ScrollToTop.tsx` | Create — scroll to top on route change |
| 6 | `src/App.tsx` | Add ScrollToTop component |
| 7 | `src/assets/family-protection.jpg` | Replace with formal business image |
| 8 | `src/assets/ame-trust-benefits-logo-dark.png` | Regenerate with burnt orange Trust |

