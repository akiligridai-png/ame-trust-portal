

# AME Trust Benefits Website Restructure

This is a comprehensive update covering navigation, content, new pages, form functionality, and layout redesign across the entire site.

---

## 1. Navigation and Routing Restructure

**Current**: Home (/) shows hero + value props + products grid + broker section. "About Us" is a separate page.

**Changes**:
- The current "About Us" page content becomes the new Home page (/).
- The current Home page hero/landing content is merged into the new home layout (keeping the hero but updating the body to match About content).
- A new nav tab "AMETrust Overview" is added, containing the MET explanation content.
- "Broker Tools" section on the Agents page is hidden.
- Nav order becomes: **AMETrust Overview | Products | Agents and Brokers | Contact Us**

**Files affected**: `Header.tsx`, `App.tsx`, new `src/pages/AMETrustOverviewPage.tsx`, `Index.tsx`, `AboutPage.tsx`

---

## 2. Home Page Overhaul

The Home page (/) will retain the existing hero section but the body will feature the About content:
- AME Trust Benefits Overview (updated text: "...Acting as the MGA for brokers & third-party administrators, we provide white-glove support to all employer groups.")
- "What is a Multiple Employer Trust?" info box
- Unique Value Proposition cards (Risk Pooling, Broker-Centric, Innovation)
- Products Grid and Broker Section remain below
- A "Get Appointed with AMETrust" link/CTA is added

---

## 3. New AMETrust Overview Page

A dedicated page at `/ametrust-overview` with:
- **Heading**: "What is a Multiple Employer Trust (MET)?"
- **Body**: The full MET explanation text as specified
- Additional context about AMETrust structure and benefits

---

## 4. GAP Insurance Page Updates

**File**: `GapInsurancePage.tsx`

- Add key messaging: "AMETrust's Medical Gap Coverage is available in all 50 states with Employer Group size limitations (10 or more) eliminated."
- Add pricing note: "AMETrust has composite and age-banded pricing. Custom pricing is available; please contact us directly with any specific need."
- In the "What's Covered" section, add: "See products tab for additional information."
- GAP is positioned as the primary "door opener" product (reorder in ProductsGrid to show GAP first)
- Video section placeholder added at the bottom

**GAP+ section updates** -- clearly state GAP insurance is embedded, and add these bullet points:
- Health program with Net Zero Cost to the employer
- Medical Claim Reimbursements made by AME, sent directly to Employee
- FICA tax savings per enrolled employee
- Access to Dedicated, Medically Licensed Health Coaches
- First Dollar Coverage on hospital bills for employees and dependents
- Unlimited Telemedicine including mental health support
- Access to the Allied Wellness App for premium health content

---

## 5. Protection+ Page Overhaul

**File**: `ProtectionPlusPage.tsx`

Replace the current 4 plan options with 3 distinct options:
- **Option 1**: GAP (Medical) -- Pays first dollar on coinsurance for Hospital Related Expenses ($5,000 or $2,500 options). Includes Premier Accident Plan.
- **Option 2**: Hospital Indemnity -- Fixed daily cash benefits (replaces standalone MEC icon).
- **Option 3**: MEC + Hospital Indemnity -- Combined coverage for comprehensive protection.

Key features highlighted:
- Guaranteed Issue (no medical underwriting)
- No Extra Cost for Dependents (must be added during Open Enrollment)
- Employer Savings: $561.60 annual FICA tax savings per enrolled employee
- Video section placeholder at bottom

---

## 6. Broker Appointment Form

**File**: New `src/pages/BrokerAppointmentPage.tsx` + update `AgentsPage.tsx`

Create a "Get Appointed with AMETrust" form with:
- Input fields: First Name, Last Name, Telephone, Email Address
- Yes/No radio selections for 4 questions:
  1. "Are you connected to any affiliated brokers?"
  2. "Do you have immediate pending business?"
  3. "Are you life and health licensed in your home state?"
  4. "Do you have E&O coverage?"
- Notes textarea for custom messaging
- Submit button shows toast: "Thanks for taking the time to reach out to us. We will be following up soon!"
- Form validation using zod

The Agents page will hide the "Broker Tools" section and add a prominent CTA to the appointment form.

---

## 7. Team Page Redesign

**File**: `TeamPage.tsx`

Redesign using the CFS LLC team page as reference -- a clean, professional layout with:
- Hero section with team intro text
- "Meet the Leadership Team" heading
- Team member cards in a grid layout with photo placeholders, name, title
- Placeholder entries for team members (Bob Worgaftik, Richard Gribinas, Pamela Mellor as mentioned)
- Contact sections for:
  - Allied Wellness (placeholder for contact info and links)
  - ATPA Claims / Customer Service (placeholder for contact info and links)

---

## 8. Footer Updates

**File**: `Footer.tsx`

- Add LinkedIn icons with links to:
  - AMETrust LinkedIn (placeholder URL)
  - AMETrust Benefits LinkedIn (placeholder URL)
  - Founder/Executive LinkedIn (placeholder URL)
- Keep existing footer structure

---

## 9. Video Section Placeholder on Product Pages

**File**: `ProductDetailLayout.tsx`

Add a reusable video placeholder section before the CTA banner on every product detail page:
- Title: "Learn More About [Product Name]"
- Caption: "This video can be shared across AMETrust's website and all social media channels."
- Styled placeholder with a play icon

---

## 10. Content Updates

- **AME Trust Benefits Overview text** (on new home page): Updated to include "Acting as the MGA for brokers & third-party administrators, we provide white-glove support to all employer groups."
- **ProductsGrid**: Reorder to lead with GAP Insurance as the first product (door opener), followed by Protection+ and others.
- Maintain high-end, corporate, professional tone throughout.

---

## Technical Summary

| Area | Files Created/Modified |
|------|----------------------|
| Routing | `App.tsx` |
| Navigation | `Header.tsx` |
| Home page | `Index.tsx` (merge About content) |
| AMETrust Overview | New `AMETrustOverviewPage.tsx` |
| GAP page | `GapInsurancePage.tsx` |
| Protection+ page | `ProtectionPlusPage.tsx` |
| Broker form | New `BrokerAppointmentPage.tsx` |
| Agents page | `AgentsPage.tsx` (hide tools, add CTA) |
| Team page | `TeamPage.tsx` (full redesign) |
| Footer | `Footer.tsx` (LinkedIn icons) |
| Video placeholder | `ProductDetailLayout.tsx` |
| Products grid | `ProductsGrid.tsx` (reorder) |
| About page | `AboutPage.tsx` (may be removed or redirected) |

