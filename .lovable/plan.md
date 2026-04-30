# Plan: Use Real Wordmark Logo Inline (Homepage + Team Page)

## The Issue
On the homepage Overview heading and the Team page hero heading, "AME Trust Benefits" is rendered as styled **text** via the `<BrandedText>` component. The user wants the **actual wordmark logo image** (the same one used in the Header) to appear inline, followed by the trailing word ("Overview" / "Team"), with seamless — not awkward — spacing.

The Header already correctly uses the wordmark image (`AMETrustBenefitsLogo`); no change needed there.

## Where the Swap Happens

| Location | Current | New |
|---|---|---|
| `src/pages/Index.tsx` line 31 — Overview section H2 | `<BrandedText variant="light" /> Overview` | Wordmark image + " Overview" |
| `src/pages/TeamPage.tsx` line 92 — hero H1 | `The <BrandedText variant="dark" /> <span class="text-gold">Team</span>` | "The " + wordmark image + gold "Team" |

## Why the Spacing Looks Awkward Today
The wordmark PNG is a two-line lockup ("AMETrust" / "Benefits") with a wide aspect ratio. Dropping it inline with a single-line heading means:
1. It must be **vertically centered** with the trailing word (not baseline-aligned, since the image has no baseline).
2. Its height should approximate the heading's **cap-height** (~0.8× line-height), not the full line-height — otherwise it looks oversized and the trailing word looks tiny.
3. Horizontal spacing should be a clean ~0.5rem gap, not text-space + image-margin double padding.

## The Fix Pattern

Wrap heading content in a flex container so the image sits cleanly beside the text:

```tsx
// Index.tsx — Overview section
<h2 className="text-4xl sm:text-5xl font-black text-primary mb-4 flex items-center flex-wrap gap-x-3 gap-y-1">
  <AMETrustBenefitsLogo variant="light" className="h-10 sm:h-12 w-auto" />
  <span>Overview</span>
</h2>

// TeamPage.tsx — hero
<h1 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-4 flex items-center flex-wrap gap-x-3 gap-y-1">
  <span>The</span>
  <AMETrustBenefitsLogo variant="dark" className="h-10 sm:h-12 w-auto" />
  <span className="text-gold">Team</span>
</h1>
```

Note: `AMETrustBenefitsLogo` currently ignores its `variant` prop (the PNG is white-on-transparent). The component accepts the prop already so no API change is needed; it works on both navy (Team hero, Header) and on the homepage's light background — but on a light background the white wordmark would be invisible. We'll use the existing **dark-on-light** variant asset `ame-trust-benefits-logo-dark.png` (already in `src/assets`) for the homepage case by extending `AMETrustBenefitsLogo` to actually honor the `variant` prop:

```tsx
// AMETrustBenefitsLogo.tsx
import lightBg from "@/assets/ame-trust-benefits-logo-dark.png"; // dark logo for light backgrounds
import darkBg from "@/assets/ametrust-benefits-logo.png";        // white logo for dark backgrounds

const src = variant === "light" ? lightBg : darkBg;
```

(Verify `ame-trust-benefits-logo-dark.png` is the dark/navy version of the wordmark before wiring it; if not, fall back to keeping `BrandedText` only on the homepage Overview section.)

## Sizing Rationale
- `h-10` (40px) on mobile / `h-12` (48px) on `sm+` keeps the wordmark visually matched to a `text-4xl`/`text-5xl` heading without dwarfing the trailing word.
- `flex items-center` ensures vertical centering — no baseline mismatch.
- `gap-x-3` (12px) gives consistent spacing whether the wordmark wraps or not.
- `flex-wrap` lets the trailing word drop to a new line on very narrow viewports rather than crushing.

## Files
| File | Change |
|---|---|
| `src/components/AMETrustBenefitsLogo.tsx` | Honor `variant` prop; pick dark or light asset based on background |
| `src/pages/Index.tsx` | Replace `<BrandedText variant="light" />` in Overview H2 with the wordmark image inside a flex heading; remove unused `BrandedText` import |
| `src/pages/TeamPage.tsx` | Replace `<BrandedText variant="dark" />` in hero H1 with the wordmark image inside a flex heading; remove unused `BrandedText` import |

## Out of Scope (Unchanged)
- Header — already uses the wordmark image correctly.
- Footer — uses the wordmark image at top + `BrandedText` styling inside a body paragraph (text inside running copy must stay text, not an image).
- All other pages — no inline `<BrandedText />` usage in headings.
