

# Plan: Tablet Breakpoint Polish for Team Page

## Issue
At the tablet viewport (768px), the leadership grid uses `md:grid-cols-3`, giving each card only ~230px of width. The longest email (`mackenzie.quinones@ametrustbenefits.com`) cannot fit on one line at this width even at 11px and is being truncated with an ellipsis. The partner cards section also feels cramped at this width.

## Changes — `src/pages/TeamPage.tsx`

### 1. Leadership grid — defer 3-column layout to `lg`
- Change `grid-cols-1 md:grid-cols-3` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- At 768px (tablet), cards will display in a 2-column layout where each card is ~360px wide — comfortably fitting the longest email on one line.
- The third card (Mackenzie) wraps to a new row and centers naturally.
- Add `justify-items-center` and constrain card max-width with `w-full max-w-sm` so the lone third card on tablet doesn't stretch awkwardly.

### 2. Photo container — slightly tighter on tablet
- Reduce photo container height from `h-48` to `h-44 sm:h-48` for better proportion on tablet cards.

### 3. Synergistic Partnership grid — keep 2 columns but tighten gap on tablet
- Change `gap-8` → `gap-6 lg:gap-8` so partner cards have a bit more breathing room within the 768px container.

### 4. Hero heading — ensure it scales cleanly at tablet
- Already uses `text-4xl sm:text-5xl` which is fine; no change needed.

## Result
- Tablet (768px): Leadership cards in 2 columns, full emails visible on a single line, third card centered below.
- Mobile (<640px): Single column (unchanged).
- Desktop (≥1024px): 3-column layout (unchanged from current `md` behavior, just shifted to `lg`).
- Partner cards keep equal sizing across all breakpoints.

## Files
| File | Change |
|------|--------|
| `src/pages/TeamPage.tsx` | Adjust grid breakpoints, photo container height, and partner gap for tablet polish |

