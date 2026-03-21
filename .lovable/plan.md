

# Implementation Plan: Complete Site Update

## Overview
7 changes across 10 files, implementing branding, routing, contact form, and inline SVG logo components.

---

## 1. Create `vercel.json` — SPA Routing Fix
Simple rewrite rule at project root to prevent 404s on direct URL access.

## 2. Contact Page — Remove Sidebar, Center Form
**File:** `src/pages/ContactPage.tsx`
- Delete `contactInfo` array (lines 12-17) and the entire right-side "Get in touch" `motion.div` (lines 127-155)
- Change grid to single centered column with `max-w-[700px] mx-auto`
- Remove unused `Mail`, `Phone`, `MapPin` imports

## 3. Create `AMETriangleLogo` SVG Component
**File:** `src/components/AMETriangleLogo.tsx`
- Inline SVG replicating the left-column triangle "A" from the PDF:
  - Dark navy (`#273349`) outer triangle shape
  - Gold gradient band (`#F2D696`) across the middle (the "A" crossbar)
  - Below: bold "AME" text + superscript "TM" + "MULTIPLE EMPLOYER" subtitle
- Props: `variant` ("light" | "dark"), `size` (height in px), `showText` (boolean)
- Light variant: navy triangle, navy "AME" text — for white/light backgrounds
- Dark variant: navy triangle stays dark navy, but "AME" text becomes white, "MULTIPLE EMPLOYER" becomes white — for dark navy backgrounds
- No background rendered — pure SVG paths blend naturally with any container

## 4. Create `BrandedText` Component
**File:** `src/components/BrandedText.tsx`
- Renders "AME Trust Benefits" with Verdana (weight 900)
- Light variant: "AME" `#273349`, "Trust" `#F2D696`, "Benefits" `#273349`
- Dark variant: "AME" `#FFFFFF`, "Trust" `#F2D696`, "Benefits" `#FFFFFF`
- Used inline within headings — only affects these specific branded words

## 5. Apply Branded Text & Triangle Logo Across Pages

| File | Change |
|------|--------|
| `src/pages/Index.tsx` (line 28-29) | "AME Trust Benefits Overview" → use `BrandedText` for "AME Trust Benefits" + " Overview" |
| `src/components/HeroSection.tsx` (line 43-44) | Replace `<span>AMETrust®</span>` with inline `AMETriangleLogo` (dark variant, ~55px) + "®" |
| `src/pages/AMETrustOverviewPage.tsx` (line 46-47) | Replace "AMETrust®" with inline `AMETriangleLogo` (dark variant) + "® Overview" |
| `src/pages/ProductsPage.tsx` (line 24) | "Our Products" → inline `AMETriangleLogo` (dark variant) + " Products" |
| `src/components/ProductsGrid.tsx` (line 88-89) | "Our Products" → colored text: "AME" navy, "Trust" gold, "Products" navy (keep existing font) |
| `src/components/Footer.tsx` (line 64-66) | Style "AME Trust Benefits" in description with branded colors (dark variant inline) |
| `src/pages/TeamPage.tsx` heading | Style "The AME Trust Benefits Team" with `BrandedText` (light variant) |

## 6. Dark-Background Header/Footer Logo
**File:** `src/assets/ame-trust-benefits-logo-dark.png`
- The current logo has navy text on white — poor contrast on dark navy header/footer
- Generate a version with white "AME", dark orange "Trust", white "Benefits" text on transparent background
- This is the full "AME Trust Benefits" wordmark logo (not the triangle), used only in Header and Footer

## 7. Footer Tagline
**File:** `src/components/Footer.tsx`
- Add *"Innovative Solutions. Endless Possibilities."* in italic serif font (`Georgia, 'Times New Roman', serif`) below the logo in the brand column

---

## Files Summary

| # | File | Action |
|---|------|--------|
| 1 | `vercel.json` | Create |
| 2 | `src/pages/ContactPage.tsx` | Remove sidebar, center form |
| 3 | `src/components/AMETriangleLogo.tsx` | Create — inline SVG component |
| 4 | `src/components/BrandedText.tsx` | Create — branded word styling |
| 5 | `src/pages/Index.tsx` | Apply BrandedText to heading |
| 6 | `src/components/HeroSection.tsx` | Replace AMETrust text with triangle logo |
| 7 | `src/pages/AMETrustOverviewPage.tsx` | Replace AMETrust text with triangle logo |
| 8 | `src/pages/ProductsPage.tsx` | Triangle logo + "Products" |
| 9 | `src/components/ProductsGrid.tsx` | Colored "AMETrust Products" text |
| 10 | `src/components/Footer.tsx` | Branded text in description + tagline |
| 11 | `src/pages/TeamPage.tsx` | BrandedText in heading |
| 12 | `src/assets/ame-trust-benefits-logo-dark.png` | Replace with white-text version |

## Verification
After implementation, navigate all pages to confirm triangle logos render inline naturally, branded text colors are correct, contact form is centered with no sidebar, and all routes work on direct access.

