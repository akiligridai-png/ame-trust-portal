

# Comprehensive Site Update Plan

Based on a thorough comparison of the annotated PPTX slides, branding guidelines, uploaded logos, and team photos against the current codebase, here is every change needed.

---

## Current State Assessment

Many changes from the previous round are already implemented correctly:
- Homepage: MET box removed, heading enlarged, family park image kept
- Team page: Correct names, phone numbers (201-425-5561, 281-305-5805, 281-652-4975), LinkedIn for Jed
- Partner contacts: AMETrust, Allied TPA, Allied Wellness, ATPA Claims all correct
- Products page: GAP Insurance is already the featured/flagship product
- GAP Insurance page: Blue box at top, updated description text
- Broker Appointment: mailto to Jed.regen@ametrustbenefits.com
- Contact page: Office address added, mission statement box removed
- Header: Broker Login links to external portal

## Changes Still Needed

### 1. Team Page: Add Real Photos for Jed & Chase (`src/pages/TeamPage.tsx`)
- Copy `user-uploads://JED.jpg` to `src/assets/jed-regen.jpg`
- Copy `user-uploads://Chase_Clissold.jpg` to `src/assets/chase-clissold.jpg`
- Replace the generic `User` icon placeholder for Jed with his actual photo
- Replace the generic `User` icon placeholder for Chase with his actual photo
- Mackenzie stays with placeholder (no photo provided)
- Import both images and use `<img>` tags instead of the User icon circle

### 2. Logo Update: Use Uploaded AMETrust Benefits Logo (`src/components/Header.tsx`, `src/components/Footer.tsx`)
- The user uploaded `Screenshot_2026-03-13_at_09.55.27.png` showing the desired header/footer logo treatment (dark navy background, "AME" white bold, "Trust" in gold/orange, "BENEFITS" below in white)
- Copy this PNG to replace the current `src/assets/ame-trust-benefits-logo-dark.png`
- The BIG_LOGO_TYPE doc shows the "dark orange" look the user wants — the current screenshot logo already has this treatment and should be used as the header/footer logo on dark backgrounds

### 3. AMETrust Overview Page: Generate Business Image (`src/pages/AMETrustOverviewPage.tsx`)
- Page 4 annotated screenshot says "Change to a business type picture if possible" and shows a reference image of two men in suits in a corporate meeting
- The current `ametrust-overview-business.jpg` was generated previously — need to generate a new high-quality 8K ultra-realistic business professionals image (diverse professionals reviewing documents in a boardroom/office setting)
- Remove the "About AMETrust®" blue box — already done in current code

### 4. Footer: Remove Contact Email Column (`src/components/Footer.tsx`)
- Page 9 (Contact page screenshot) annotates the footer's CONTACT column with "Please remove this info"
- The current footer already has the contact column removed — this is done
- Verify LinkedIn URL is correct: `https://www.linkedin.com/in/jedregen` — already set

### 5. Contact Page: Form Should Send to Jed's Email
- The contact form currently just shows a toast — it should also open a mailto to `jed.regen@ametrustbenefits.com` (same as broker appointment pattern)
- Add a `Telephone` field to the contact form (page 9 shows Name, Email, Subject, Tel, Message)

### 6. Products Page: Verify Protection+ Highlight Still Shows on Products Page
- Page 3 shows Protection+ as "Flagship Product" on the Products page — but annotation says "Change this page to GAP as initial view"
- Current code uses `GapInsuranceHighlight` — this is correct per the annotation
- The ProtectionPlusHighlight component is unused but should be kept for potential future use

### 7. Branding: Typography Update (`src/index.css`)
- Branding doc specifies: **Verdana Pro Black** for headings, **Aptos** for body text
- Currently using Lato from Google Fonts
- Verdana Pro Black is not available on Google Fonts; closest web-safe option is **Verdana** (bold/black weight)
- Aptos is a Microsoft font not on Google Fonts; closest fallback is system font stack
- Update CSS to use Verdana for headings and Aptos with system font fallback for body

---

## Summary of Files to Edit

| # | File | Change |
|---|------|--------|
| 1 | `src/assets/jed-regen.jpg` | Copy uploaded Jed photo |
| 2 | `src/assets/chase-clissold.jpg` | Copy uploaded Chase photo |
| 3 | `src/pages/TeamPage.tsx` | Use real photos for Jed & Chase instead of User icon |
| 4 | `src/assets/ame-trust-benefits-logo-dark.png` | Replace with uploaded screenshot logo |
| 5 | `src/pages/AMETrustOverviewPage.tsx` | Generate new 8K business image |
| 6 | `src/pages/ContactPage.tsx` | Add telephone field, add mailto to Jed on submit |
| 7 | `src/index.css` | Update font imports to Verdana/Aptos per branding |

### Verification Plan (Agent Mode)
After all changes, use agent mode to navigate every page and verify:
- Homepage: family park image present, enlarged heading, no MET box
- Overview: full MET definition, no "About AMETrust®" box, business image
- Products: GAP as featured product, all 7 products in grid
- Team: Jed & Chase photos, correct phone numbers and LinkedIn
- Contact: address, form with telephone field, mailto to Jed
- Broker Appointment: mailto to Jed
- Footer: no contact email column, mission statement banner, correct logo
- Header: correct logo, Broker Login external link

