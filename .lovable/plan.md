

# Plan: Match Wordmark Orange to Exact Logo Color

## Color Change
Sampled directly from `src/assets/ametrust-benefits-logo.png` — the dominant orange in the "Trust" wordmark of the logo is **#BF4E14** (a deeper burnt orange).

Currently, the codebase uses **#C1692D** (a lighter, more amber tone) for "Trust" text and the "Innovative Solutions. Endless Possibilities." tagline — these don't match the actual logo.

## Files to Update

### 1. `src/components/BrandedText.tsx` (L13)
- Change `const gold = "#C1692D";` → `const gold = "#BF4E14";`
- Rename variable to `orange` for clarity (and update the JSDoc comment that incorrectly says "Trust in gold").
- Affects: Hero overview heading, Team page heading, and any other use of `<BrandedText>`.

### 2. `src/components/Footer.tsx` (L63, L70)
- Change tagline color `#C1692D` → `#BF4E14`
- Change inline "Trust" wordmark color `#C1692D` → `#BF4E14`

### 3. `mem://design/branding` and `mem://index.md`
- Update the documented "Burnt Orange" hex from `#C1692D` to `#BF4E14` so future work stays consistent.

## Result
Every "AME **Trust** Benefits" wordmark rendered as text (Header context via logo image is unchanged, Footer text wordmark, Hero "Overview" heading, Team page heading) will use the exact same orange as the logo image — visually seamless across all sections.

## Out of Scope
- The "Innovative Solutions" headline color elsewhere (HeroSection) — only the Footer tagline currently uses `#C1692D`; will verify and update if any other instance exists during implementation.
- Logo image files themselves (no change needed — they already contain #BF4E14).

| File | Change |
|------|--------|
| `src/components/BrandedText.tsx` | `#C1692D` → `#BF4E14` |
| `src/components/Footer.tsx` | Two `#C1692D` → `#BF4E14` |
| `mem://design/branding`, `mem://index.md` | Update documented orange hex |

