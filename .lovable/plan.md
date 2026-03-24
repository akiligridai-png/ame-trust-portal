

# Plan: Replace SVG Triangle Logos with Correct Uploaded Images

## The Problem
Every instance currently uses the hand-coded `AMETriangleLogo` SVG component (broken triangle outlines). The user uploaded 4 image files and wants them used instead. The previous plan incorrectly proposed using icon-only everywhere — the **full logo with text** (`ame-logo-dark-bg.png` or `ame-logo-transparent.png`) should be used where the logo represents "AMETrust" as an entity name, and icon-only where it's just a small accent mark.

## Logo Selection Logic
- **Full logo with text** (includes triangle + "AME™" + "MULTIPLE EMPLOYER"): Use where the logo IS the name — hero sections, page titles, anywhere it replaces the words "AMETrust"
- **Icon only** (just the triangle mark): Use as a small decorative accent beside headings where text already says the name

## 6 Replacements

| # | Location | Current | Replace With | Why |
|---|----------|---------|-------------|-----|
| 1 | **Hero** (`HeroSection.tsx` L52-53) | `AMETriangleLogo dark size=80 showText=true` + ® span | `ame-logo-dark-bg.png` ~90px | Full logo represents "AMETrust" — the entity name. Remove ® span (baked into image) |
| 2 | **Overview hero** (`AMETrustOverviewPage.tsx` L48-49) | `AMETriangleLogo dark size=70 showText=true` + ® span | `ame-logo-dark-bg.png` ~75px | Full logo represents the trust entity in page title. Remove ® span |
| 3 | **Products page hero** (`ProductsPage.tsx` L25) | `AMETriangleLogo dark size=70 showText=false` | `ame-logo-dark-bg.png` ~65px | Full logo before "Products" — reads as "[AME Trust] Products" |
| 4 | **Value Proposition** (`Index.tsx` L77) | `AMETriangleLogo light size=40 showText=false` | `ame-icon-only-transparent.png` ~40px | Small accent beside "'s Unique Value Proposition" — icon-only is appropriate here |
| 5 | **ProductsGrid heading** (`ProductsGrid.tsx` L90) | `AMETriangleLogo light size=50 showText=false` | `ame-icon-only-transparent.png` ~50px | Small accent beside "Products" on white bg — icon-only works |
| 6 | **Agents "Get Appointed"** (`AgentsPage.tsx` L49-50) | `AMETriangleLogo light size=45 showText=false` + ® span | `ame-logo-transparent.png` ~50px | Full logo represents the trust entity on light background. Remove ® span |

## Steps

### 1. Copy 3 uploaded images to `src/assets/`
- `ame-icon-only-transparent.png`
- `ame-logo-dark-bg.png`
- `ame-logo-transparent.png`

### 2. Edit 6 files
Each file: remove `AMETriangleLogo` import, add image import, replace component with `<img>` tag. Remove orphaned ® spans where the full logo already contains the text.

### 3. Header & Footer — NO CHANGES
These use `AMETrustBenefitsLogo` (the SVG wordmark), which is correct and stays.

## Files Summary

| # | File | Action |
|---|------|--------|
| 1 | `src/assets/ame-icon-only-transparent.png` | Copy from upload |
| 2 | `src/assets/ame-logo-dark-bg.png` | Copy from upload |
| 3 | `src/assets/ame-logo-transparent.png` | Copy from upload |
| 4 | `src/components/HeroSection.tsx` | Full dark-bg logo, remove ® |
| 5 | `src/pages/AMETrustOverviewPage.tsx` | Full dark-bg logo, remove ® |
| 6 | `src/pages/ProductsPage.tsx` | Full dark-bg logo |
| 7 | `src/pages/Index.tsx` | Icon-only for value prop accent |
| 8 | `src/components/ProductsGrid.tsx` | Icon-only for products accent |
| 9 | `src/pages/AgentsPage.tsx` | Full transparent logo, remove ® |

