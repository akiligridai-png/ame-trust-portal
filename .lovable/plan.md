

# Comprehensive Site Update – Document Compliance Audit & Fixes

After a thorough comparison of both uploaded documents against the current codebase, here are the specific gaps and updates needed.

---

## 1. Protection+ Page – Accurate 3 Plan Options (from Protection Presentation Deck)

The current Protection+ page has the right structure but the **option details are incomplete/inaccurate** per the presentation deck. Here are the corrected options:

**Option 1: GAP (Medical) – $5,000 First Dollar**
- Pays first dollar on coinsurance for Hospital Related Expenses ($5,000 or $2,500 options)
- Family coverage at no extra cost
- Inpatient Coverage: pays when hospitalized for at least 24 hours
- Outpatient Coverage: pays for MRI, ER visits, and treatments without hospital stay
- ER co-insurance and co-pays are covered
- Includes Standard/Premier Accident Plan
- Guaranteed Issue
- Note: "$2,500 with Premier Accident is also available. Protection+ rates are the same."

**Option 2: GAP Inpatient (GIP) – Hospital Indemnity**
- For employees that **do not have medical coverage** – Guaranteed Issue
- Inpatient-Gap Benefit: 1 day @ $1,000
- Daily Confinement: 30 days @ $100
- Ambulance Benefit: 1 day @ $250
- Emergency Room (Injury): 1 day @ $150
- Emergency Room (Sickness): 1 day @ $150
- Includes Accident Plan
- "Great alternative if you don't have health insurance!"

**Option 3: MEC Plan**
- Family coverage at no extra cost
- MEC is a hospital reimbursement plan with Minimum Essential Coverage
- Fixed payments for ambulance, daily inpatient, wellness visits, limited doctor visits
- Plan includes: Hospital Care, Daily confinement, Physician office visits, Emergency Care, Ambulance (ground/air), Doctor Office Visits (4/year), Limited Rx
- Guaranteed Issue
- Combined with Hospital Indemnity: $500 reimbursement for 1-3 days confinement

**All options include:**
- 24/7 Accident Plan
- Unlimited Urgent Care, counseling, psychiatric services via Telehealth
- Personal Health Coaching with a Health Care Professional
- Allied Wellness App access with premium content
- No extra cost to add dependents
- Customizable plans for employer groups of 100+
- Plan Amount: $1,205.00/month; Employer Reimbursement: $1,013.00/month

**Files:** `src/pages/ProtectionPlusPage.tsx`

---

## 2. Protection+ Benefits Table – Correct Content from Deck

Update the Employer and Employee benefits tables to match the presentation:

**Employer Benefits:**
- Health & Wellness Program – Net Zero Cost to put in place
- Attracts and Retains Employees
- FICA savings on plan for each Enrolled Employee
- Strategy from features that will lower Group Health Renewals
- Net Zero Cost to Most Employees
- Strategy on Renewals to keep costs the same or lower

**Employee Benefits:**
- Live Dedicated Medically Licensed Health Coaches
- First Dollar Coverage on Hospital Bill (Employee and Dependents)
- Unlimited Telemedicine (Employees and Dependents)
- Most employees will see additional dollars (benefit bank)

**Files:** `src/pages/ProtectionPlusPage.tsx`

---

## 3. GAP Page – Ensure "Featured Product" Badge Reads Correctly

The current ProductsGrid badge says "Door Opener" – update to say **"Featured Product"** to be more professional and client-facing. GAP remains the first product in the grid with a highlighted card style.

**Files:** `src/components/ProductsGrid.tsx`

---

## 4. GAP+ Page – Enhanced Content from Document

The GAP+ page content matches well but needs the following addition from the document:
- Add the description: "GAP+ integrates an enhanced GAP policy with a comprehensive bundle of healthcare services. It incentivizes individuals to actively participate in their well-being by providing a mechanism to fund the insurance."
- Add the GAP example scenario from the document: "Ed, enrolled in GAP+, consults his personal dietitian and refills his blood pressure medication monthly. GAP would cover outpatient benefits. Additionally, his AME Trust Accident Policy would pay him for his ER treatment, MRI, and concussion diagnosis – irrespective of his medical expenses."

**Files:** `src/pages/GapPlusPage.tsx`

---

## 5. Home Page – Add "Get Appointed" Link Text per Document

The document says: "If you are interested in getting appointed as a Broker, please click on Get Appointed with AMETrust." Add this text above or near the existing CTA button.

**Files:** `src/pages/Index.tsx`

---

## 6. Allied Wellness Section on Protection+ (from Deck pages 22-24)

Add Allied Wellness content from the presentation deck:

**Face Scan Vitals:** Remote screening tool using smartphone/tablet/computer (Transdermal Optical Imaging)
- Contactless, Quick (30 seconds), Private (no images saved)

**Health Screening Benefits:** Biometric Screenings, Health Risk Assessments, Personalized Monthly Health Report, Data analytics risk profiling, 24 Additional Diagnostic Tests

**Health Treatment Benefits:** Physician Consultation, Personal Dietitian, Registered Dietician follow up, Chiropractic Consultation, Registered Nurse Consultation, Prescription Refills, Treatment for Alcoholism/Addiction, Licensed Counselor Treatment

**Privacy & Security:** "None of your personal information is shared with your employer or your health insurance company. The only person looking at your data is your health coach."

**Files:** `src/pages/ProtectionPlusPage.tsx`

---

## 7. Protection+ Flowchart / Tax Sections Info (from Deck pages 12-13)

Add informational sections about the tax structure:
- Section 125: Allows employees to convert taxable benefits into nontaxable benefits (available since 1978)
- Section 213d: Deduction for medical care expenses (available since 1954)
- Section 105(b): Non-taxable medical reimbursement dispersed to employee by employer
- Employer deducts premium from payroll, pays Allied Wellness fee, reduces FICA taxes

**Files:** `src/pages/ProtectionPlusPage.tsx`

---

## 8. Protection+ Employer Executive Summary (from Deck pages 9-11)

Add pricing/savings summary:
- Monthly deduction example: $1,205.00 deduction, $1,013.00 reimbursement = **$192.00 net per employee**
- Monthly FICA savings: $91.80 per employee
- Net savings: $91.80 - $45.00 Allied Wellness = **$46.80 per month per employee**
- Example: 100 employees = $4,680/month = **$56,160 annual savings**
- Take-home pay example showing employees see additional dollars with Protection+

**Files:** `src/pages/ProtectionPlusPage.tsx`

---

## 9. Team Page – "AMETrust creates and uses its own plan designs" text

Add the following from the deck (page 6):
- "AMETrust® creates and uses its own plan designs"
- "Allied TPA supports technology, claims and customer service"
- "Allied Wellness delivers the health and wellness platform & health coaches"

This is already partially there but should be more explicit in the partner descriptions.

**Files:** `src/pages/TeamPage.tsx`

---

## Technical Summary

| File | Changes |
|------|---------|
| `ProtectionPlusPage.tsx` | Major overhaul: accurate 3 options with full details, benefits tables, pricing summary, Allied Wellness, tax structure |
| `ProductsGrid.tsx` | Change "Door Opener" badge to "Featured Product" |
| `GapPlusPage.tsx` | Add scenario example and enhanced description |
| `Index.tsx` | Add "Get Appointed" link text |
| `TeamPage.tsx` | Refine partner descriptions |

