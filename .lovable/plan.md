

# Plan: Replace Logo Assets with Correct Light/Dark Transparent Versions

## Current State
The site uses older PNG files (`ame-logo-dark-bg.png`, `ame-icon-only-transparent.png`, `ame-logo-transparent.png`) that don't match the newly uploaded high-quality transparent logos.

## Two New Assets
- **`ame-logo-light-transparent.png`** — Dark navy "A" triangle + navy "AME™ MULTIPLE EMPLOYER" text. For **light backgrounds**.
- **`ame-logo-dark-transparent.png`** — Gold/silver "A" triangle + white "AME™ MULTIPLE EMPLOYER" text. For **dark backgrounds**.

## Replacements (6 locations)

| # | File | Background | Current Asset | New Asset | Height | Notes |
|---|------|-----------|---------------|-----------|--------|-------|
| 1 | `HeroSection.tsx` L52 | Dark (hero overlay) | `ame-logo-dark-bg.png` | `ame-logo-dark-transparent.png` | `h-20 sm:h-24` (80-96px) | Large — this is the main hero logo below "Benefits of being a member of" |
| 2 | `AMETrustOverviewPage.tsx` L48 | Dark (navy hero) | `ame-logo-dark-bg.png` | `ame-logo-dark-transparent.png` | `h-16 sm:h-20` (64-80px) | Inline with "Overview" text — slightly smaller than hero |
| 3 | `ProductsPage.tsx` L25 | Dark (navy hero) | `ame-logo-dark-bg.png` | `ame-logo-dark-transparent.png` | `h-14 sm:h-16` (56-64px) | Inline with "Products" text — align with text height |
| 4 | `Index.tsx` L77 | Light (surface bg) | `ame-icon-only-transparent.png` | `ame-logo-light-transparent.png` | `h-10 sm:h-12` (40-48px) | Small accent beside "'s Unique Value Proposition" heading |
| 5 | `ProductsGrid.tsx` L90 | Light (white bg) | `ame-icon-only-transparent.png` | `ame-logo-light-transparent.png` | `h-12 sm:h-14` (48-56px) | Beside "Products" heading — slightly larger for section anchor |
| 6 | `AgentsPage.tsx` L49 | Light (white bg) | `ame-logo-transparent.png` | `ame-logo-light-transparent.png` | `h-12 sm:h-14` (48-56px) | Beside "Get Appointed with" text — match text baseline |

## Steps

1. Copy `user-uploads://ame-logo-light-transparent.png` → `src/assets/ame-logo-light-transparent.png`
2. Copy `user-uploads://ame-logo-dark-transparent.png` → `src/assets/ame-logo-dark-transparent.png`
3. Update imports and `<img>` src in all 6 files — swap old assets for new ones with correct sizing classes
4. Header and Footer remain untouched (they use `AMETrustBenefitsLogo` SVG wordmark)

## Files Summary

| # | File | Action |
|---|------|--------|
| 1 | `src/assets/ame-logo-light-transparent.png` | Copy from upload |
| 2 | `src/assets/ame-logo-dark-transparent.png` | Copy from upload |
| 3 | `src/components/HeroSection.tsx` | Swap import + img src |
| 4 | `src/pages/AMETrustOverviewPage.tsx` | Swap import + img src |
| 5 | `src/pages/ProductsPage.tsx` | Swap import + img src |
| 6 | `src/pages/Index.tsx` | Swap import + img src to light version |
| 7 | `src/components/ProductsGrid.tsx` | Swap import + img src to light version |
| 8 | `src/pages/AgentsPage.tsx` | Swap import + img src to light version |

