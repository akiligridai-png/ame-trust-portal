

# Plan: Dark Logo Replacement + Logo Sizing + Broker Tools Section

## Part 1: Replace Dark Background Logo Asset

The uploaded `ame-logo-dark-transparent_V2.jpg` is the new truly transparent dark-background logo. Copy it to `src/assets/ame-logo-dark-transparent.png`, overwriting the current file that has white background artifacts. This single asset swap fixes all 4 dark-background locations automatically (they already import from this path).

## Part 2: Increase Logo Sizes

| # | File (Line) | Background | Current Size | New Size |
|---|-------------|-----------|-------------|---------|
| 1 | `HeroSection.tsx` L52 | Dark | `h-20 sm:h-24` | `h-24 sm:h-28` |
| 2 | `AMETrustOverviewPage.tsx` L48 | Dark | `h-[70px] sm:h-20` | `h-16 sm:h-20` |
| 3 | `ProductsPage.tsx` L25 | Dark | `h-14 sm:h-16` | `h-16 sm:h-20` |
| 4 | `BrokerAppointmentPage.tsx` L83 | Dark | `h-12 sm:h-14` | `h-14 sm:h-16` |
| 5 | `Index.tsx` L77 (Value Prop) | Light | `h-10 sm:h-12` | `h-14 sm:h-16` |
| 6 | `ProductsGrid.tsx` L90 | Light | `h-12 sm:h-14` | `h-16 sm:h-20` |
| 7 | `AgentsPage.tsx` L49 | Light | `h-10 sm:h-12` | `h-14 sm:h-16` |

## Part 3: Add Broker Tools Section to Agents Page

The Agents page currently only has a Hero and a "Get Appointed" CTA section. Add a **Broker Tools** section between them with:

- A "Broker Tools" heading with descriptive text
- A card for the **Proposal Engine** tool linking to `https://proposals.ametrustbenefits.com` (opens in new tab)
- Keep the existing White Glove Support and Training features from `BrokerSection.tsx` as reference for card styling
- Professional styling consistent with the rest of the site

## No Changes To
- Header and Footer logos (already correct)
- Light background logo asset (already fine)

## Files Summary

| File | Action |
|------|--------|
| `src/assets/ame-logo-dark-transparent.png` | Overwrite with uploaded V2 |
| `src/components/HeroSection.tsx` | Size: `h-24 sm:h-28` |
| `src/pages/AMETrustOverviewPage.tsx` | Size: `h-16 sm:h-20` |
| `src/pages/ProductsPage.tsx` | Size: `h-16 sm:h-20` |
| `src/pages/BrokerAppointmentPage.tsx` | Size: `h-14 sm:h-16` |
| `src/pages/Index.tsx` | Size: `h-14 sm:h-16` |
| `src/components/ProductsGrid.tsx` | Size: `h-16 sm:h-20` |
| `src/pages/AgentsPage.tsx` | Size: `h-14 sm:h-16` + add Broker Tools section with Proposal Engine CTA |

