

# Plan: Refine Team Card Sizing & Photo Consistency

## Issues to Fix
1. Email addresses currently use `break-all`, which wraps mid-word and looks unprofessional.
2. Chase's and Mackenzie's headshots may render at slightly different effective sizes than Jed's due to source image cropping.

## Changes — `src/pages/TeamPage.tsx`

### 1. Stop email wrapping; shrink font instead
- Remove `break-all` from the email link and span.
- Reduce email font size to `text-[11px]` (keeping phone/LinkedIn at `text-xs` for hierarchy).
- Add `whitespace-nowrap` + `overflow-hidden text-ellipsis` as a safety net so the email never breaks but truncates gracefully on very narrow widths.
- Slightly widen the card grid: change `max-w-4xl` → `max-w-5xl` and bump gap from `gap-8` → `gap-6` so each card has more horizontal room to fit the longest email (`mackenzie.quinones@ametrustbenefits.com`) on one line.
- Reduce icon+text gap from `gap-2` → `gap-1.5` to reclaim a few pixels.

### 2. Normalize headshot sizing across all three members
- All three photos already use `w-24 h-24 rounded-full object-cover object-top` — visually identical.
- Confirm and keep the photo container at `h-48 bg-primary/5 flex items-center justify-center` for all three (already consistent).
- No code change needed for sizing classes; the perceived difference comes from source image framing. Add `aspect-square` explicitly alongside `w-24 h-24` for guaranteed equality, and keep `object-cover object-top` so faces stay framed.

### 3. Keep card heights equal
- Already handled via `h-full flex flex-col` + `items-stretch` on the grid — no change.

## Result
- Emails display on a single line at slightly smaller font, professional and readable.
- All three headshots render at identical 96×96 circular size.
- Cards remain perfectly equal in width and height.

## Files
| File | Change |
|------|--------|
| `src/pages/TeamPage.tsx` | Remove `break-all`, shrink email font, widen card grid, enforce `aspect-square` on photos |

