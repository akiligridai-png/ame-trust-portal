

# Fix Hero Section: New Logo + Button Click Issue

## Problem 1: Wrong Logo on Hero Image
The hero section currently shows the triangle logo (`ame-logo-dark-transparent.png`). The user wants the full "AMETrust Benefits" wordmark (uploaded image) displayed instead.

**Fix**: Copy uploaded `ametrust-benefits-dark-transparent.png` to `src/assets/` and import it in `HeroSection.tsx` replacing the current logo at line 52.

## Problem 2: Buttons Don't Work
The "Explore GAP Insurance" and "Learn More" buttons are unclickable because two overlay divs sit on top of them and intercept pointer events:
- Line 22: `gradient-hero` overlay covering the entire section
- Line 103: Bottom gradient fade div

**Fix**: Add `pointer-events-none` to both overlay divs so clicks pass through to the buttons beneath.

## Files

| File | Change |
|------|--------|
| `src/assets/ametrust-benefits-dark-transparent.png` | Copy uploaded logo |
| `src/components/HeroSection.tsx` | 1. Import new logo asset. 2. Replace img src at L52. 3. Add `pointer-events-none` to gradient overlay (L22) and bottom gradient (L103) |

