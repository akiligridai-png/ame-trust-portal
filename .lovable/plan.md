

# Plan: Reduce Header/Footer Logo Size + Hero Inline Layout

## Changes

### 1. Reduce Header Logo Size
**`src/components/Header.tsx`** L42: Change `h-10 md:h-12` → `h-8 md:h-10`

### 2. Reduce Footer Logo Size
**`src/components/Footer.tsx`** L62: Change `h-12` → `h-10`

### 3. Hero Section — Logo Inline with Heading
**`src/components/HeroSection.tsx`**: Merge the h1 (L38-45) and logo div (L46-53) into a single flex-wrapped container so "Benefits of being a member of" and the logo sit on the same line, wrapping naturally. The logo shrinks to `h-12 sm:h-16` to align with text. Buttons remain below.

No CSS color token changes — gold stays as is. The orange (#C1692D) used in "Innovative Solutions" and "Trust" text is already correctly hardcoded.

### Files
| File | Change |
|------|--------|
| `src/components/Header.tsx` | Logo: `h-8 md:h-10` |
| `src/components/Footer.tsx` | Logo: `h-10` |
| `src/components/HeroSection.tsx` | Inline logo with heading text |

