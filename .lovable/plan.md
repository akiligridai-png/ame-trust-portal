

# Plan: Logo Swaps + GAP Insurance Content Fixes

## Part 1: Swap All Logos to New Light/Dark Transparent Versions

Replace old PNG assets with the two new uploaded transparent logos based on background color.

| # | File | Background | Current Asset | New Asset | Size |
|---|------|-----------|---------------|-----------|------|
| 1 | `HeroSection.tsx` L52 | Dark | `ame-logo-dark-bg.png` | `ame-logo-dark-transparent.png` | `h-20 sm:h-24` |
| 2 | `AMETrustOverviewPage.tsx` L48 | Dark | `ame-logo-dark-bg.png` | `ame-logo-dark-transparent.png` | `h-16 sm:h-20` |
| 3 | `ProductsPage.tsx` L25 | Dark | `ame-logo-dark-bg.png` | `ame-logo-dark-transparent.png` | `h-14 sm:h-16` |
| 4 | `Index.tsx` L77 | Light | `ame-icon-only-transparent.png` | `ame-logo-light-transparent.png` | `h-10 sm:h-12` |
| 5 | `ProductsGrid.tsx` L90 | Light | `ame-icon-only-transparent.png` | `ame-logo-light-transparent.png` | `h-12 sm:h-14` |
| 6 | `AgentsPage.tsx` L49 | Light | `ame-logo-transparent.png` | `ame-logo-light-transparent.png` | `h-10 sm:h-12` |
| 7 | **`BrokerAppointmentPage.tsx` L80-81** | **Dark** | **Text only ("AMETrust®")** | **`ame-logo-dark-transparent.png`** | **`h-12 sm:h-14`** |

### Broker Appointment Page (NEW)
Currently L80-81 says: `Get Appointed with <span className="text-gold">AMETrust®</span>`
Replace with: `Get Appointed with` + `<img>` of the dark transparent logo inline, removing the text span.

## Part 2: GAP Insurance Content Fixes

### `GapInsuranceHighlight.tsx` (Products page featured section)

1. **L13**: Remove `"Includes Standard/Premier Accident Plan"` from the benefits array
2. **L48**: Change `$5,000` to `$10,000` and update text to: `"Up to $10,000 on coinsurance and max-out of pocket for hospital-related expenses"`
3. **L108**: Change floating stat card from `$5,000` to `$10,000`

## Steps

1. Copy 2 new uploaded images to `src/assets/`
2. Edit 7 files for logo swaps (update imports + img src)
3. Edit `GapInsuranceHighlight.tsx` for content fixes
4. Header & Footer remain untouched

## Files Summary

| # | File | Action |
|---|------|--------|
| 1 | `src/assets/ame-logo-light-transparent.png` | Copy from upload |
| 2 | `src/assets/ame-logo-dark-transparent.png` | Copy from upload |
| 3 | `src/components/HeroSection.tsx` | Swap to dark transparent |
| 4 | `src/pages/AMETrustOverviewPage.tsx` | Swap to dark transparent |
| 5 | `src/pages/ProductsPage.tsx` | Swap to dark transparent |
| 6 | `src/pages/Index.tsx` | Swap to light transparent |
| 7 | `src/components/ProductsGrid.tsx` | Swap to light transparent |
| 8 | `src/pages/AgentsPage.tsx` | Swap to light transparent |
| 9 | `src/pages/BrokerAppointmentPage.tsx` | Add dark transparent logo replacing text |
| 10 | `src/components/GapInsuranceHighlight.tsx` | $10K fix + remove last benefit |

