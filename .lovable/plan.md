

# Complete Implementation Plan: All Audit Changes

## 1. Homepage Layout Restructure (`src/pages/Index.tsx`)
- Move the AME Trust Benefits Overview section (text + family park image) **above** `<HeroSection />`
- Add `pt-24` padding to the overview section so it clears the fixed header
- The cinematic hero banner moves below as a secondary section

## 2. Header: Broker Login Link (`src/components/Header.tsx`)
- Change both Broker Login buttons (desktop line 72-77, mobile line 107-112) from `<Button>` to `<a>` tags linking to `https://ame.benefitportal.com/agents/`

## 3. GAP Insurance Page (`src/pages/GapInsurancePage.tsx`)
- Move the blue box (lines 48-56, "AMETrust®'s Medical Gap Coverage...") to the **top** of the content, before the "What is GAP Insurance?" heading
- Update the description text (line 45) to the exact specified copy: *"GAP insurance functions in conjunction with primary health insurance to alleviate the financial burden of medical expenses that would typically be the patient's responsibility with first dollar coverage that can be paid directly to the provider."*

## 4. Protection+ Page (`src/pages/ProtectionPlusPage.tsx`)
- **Update Net Zero text** (line 62): Change to *"The program is structured to be at a net zero cost for most employees."* — remove the sentence about "benefit bank"
- **Remove pricing** (lines 295-304): Delete the `$1,205.00/month` and `$1,013.00/month` display from "All Options Include"
- **Delete entire Employer Executive Summary section** (lines 309-378): Remove Monthly Per-Employee Breakdown and FICA Savings Calculation entirely
- **Keep** Tax-Advantaged Structure section as-is

## 5. Team Page (`src/pages/TeamPage.tsx`)
- Rename page heading to **"The AME Trust Benefits Team"**
- Replace the 3 current team members (Bob Worgaftik, Richard Gribinas, Pamela Mellor) with:
  - **Jed Regen** | President | Jed.regen@ametrustbenefits.com | Cell: 201-835-5161 | Direct: 281-805-3771
  - **Chase Clissold** | Director of Client Services | Chase.Clissold@ametrustbenefits.com | Direct: 281-305-5801
  - **Mackenzie Quinones** | Client Services Manager | mackenzie.quinones@ametrustbenefits.com | Direct: 281-612-4973
- Add email/phone links under each card with proper icons

## 6. Contact Page (`src/pages/ContactPage.tsx`)
- Add physical address entry to `contactInfo` array: **15814 Champion Forest Drive, Ste 78, Spring TX 77379** with `MapPin` icon (already imported)

## 7. Broker Appointment Form (`src/pages/BrokerAppointmentPage.tsx`)
- Add `mailto:` fallback: on submit, open `mailto:Jed.regen@ametrustbenefits.com` with form data as subject/body
- Success message already matches: *"Thanks for taking the time to reach out to us. We will be following up soon!"*

## 8. Footer LinkedIn URLs (`src/components/Footer.tsx`)
- LinkedIn icons already present with placeholder URLs — these need the actual AMETrust LinkedIn URLs when provided by the client

**Total files to edit: 7**

