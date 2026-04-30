

# Plan: Remove White Gap at Top of Every Page

## The Issue
The `<Header>` is `fixed` at the top (transparent navy, ~72–88px tall). Every page wraps its `<main>` in `pt-24` (96px of top padding) to push content below the header. Because that padding sits on the page's default white background, you see a thin **white strip** above each colored hero section — looks unfinished.

## The Fix
Remove `pt-24` from `<main>` on every page and instead let each page's first/hero section extend full-bleed to the top of the viewport, with its own internal top padding (`pt-32` or `pt-28`) so content still clears the fixed header — but the hero's background color (navy, etc.) goes edge-to-edge under the header. No more white gap.

## Files & Changes

| File | Change |
|------|--------|
| `src/pages/Index.tsx` | `pt-28` → `pt-32` on first section (already correct pattern; verify) |
| `src/pages/ProductsPage.tsx` | Remove `pt-24` from `<main>`; add `pt-32` to first hero section |
| `src/pages/TeamPage.tsx` | Same |
| `src/pages/AMETrustOverviewPage.tsx` | Same |
| `src/pages/AgentsPage.tsx` | Same |
| `src/pages/AboutPage.tsx` | Same |
| `src/pages/ContactPage.tsx` | Same |
| `src/pages/BrokerAppointmentPage.tsx` | Same |
| `src/components/ProductDetailLayout.tsx` | Same (covers all 7 product detail pages) |
| `src/components/HeroSection.tsx` | Adjust `pt-24` if needed for visual consistency |

## Pattern Applied
```tsx
// Before
<main className="pt-24">
  <section className="py-16 bg-primary">...</section>
</main>

// After
<main>
  <section className="pt-32 pb-16 bg-primary">...</section>
</main>
```

## Result
- Hero background colors flow seamlessly under the fixed header — no white strip.
- Content still clears the header (32 = 128px > header's ~88px max).
- Cleaner, more polished, magazine-style edge-to-edge look across every page.

