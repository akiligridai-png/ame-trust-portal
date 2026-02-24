import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { Check, Shield, HeartPulse, Smartphone, DollarSign, Users, Stethoscope, Activity, Building2, Lock, Calculator, FileText, Scan } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import heroImg from "@/assets/protection-plus-hero.jpg";
import telemedicineImg from "@/assets/telemedicine.jpg";

const employerBenefits = [
  { benefit: "Health & Wellness Program", detail: "Net Zero Cost to put in place" },
  { benefit: "Attracts and Retains Employees", detail: "Valuable tool for building a competitive workforce" },
  { benefit: "FICA Savings", detail: "On plan for each Enrolled Employee" },
  { benefit: "Lower Group Health Renewals", detail: "Strategy from features that will lower Group Health Renewals" },
  { benefit: "Net Zero Cost to Most Employees", detail: "Uses subsidies from tax savings" },
  { benefit: "Renewal Strategy", detail: "Strategy on Renewals to keep costs the same or lower" },
];

const employeeBenefits = [
  { benefit: "Live Dedicated Health Coaches", detail: "Medically Licensed Health Coaches available to every employee" },
  { benefit: "First Dollar Coverage", detail: "On Hospital Bill (Employee and Dependents)" },
  { benefit: "Unlimited Telemedicine", detail: "For Employees and Dependents" },
  { benefit: "Additional Dollars (Benefit Bank)", detail: "Most employees will see additional dollars" },
];

const ProtectionPlusPage = () => {
  return (
    <ProductDetailLayout
      title="Protection"
      titleAccent="+"
      subtitle="An employer-sponsored Health and Wellness Program meticulously administered by AMETrust®. Designed to complement – not replace – existing health insurance or voluntary benefits."
      heroImage={heroImg}
      heroImageAlt="Employer and employee shaking hands with financial growth chart"
    >
      {/* What is Protection+ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
                Flagship Product
              </span>
              <h2 className="text-3xl font-black text-primary mb-4">
                What is Protection<span className="text-gold">+</span>?
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Protection+ is an employer Health and Wellness Program administered by AMETrust®. The program does not replace existing health insurance or voluntary benefits – it enhances them.
              </p>
              <div className="p-5 rounded-lg bg-surface border border-border mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-gold" />
                  <p className="text-primary font-bold text-lg">Net Zero Cost to the Employer</p>
                </div>
                <p className="text-gold font-black text-2xl">
                  $56,160 <span className="text-muted-foreground font-normal text-sm">annual savings example (100 employees)</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The program is structured to incur net zero cost for most employees, utilizing subsidies from tax savings. Most employees will see additional dollars accumulated in a "benefit bank."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={telemedicineImg}
                alt="Employee accessing telemedicine services"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Employer vs Employee Benefits Table */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-3">
              Benefits of Protection<span className="text-gold">+</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive comparison of how Protection+ benefits both employers and employees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Employer Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden border border-border shadow-card bg-card"
            >
              <div className="bg-primary px-6 py-4">
                <h3 className="text-lg font-bold text-primary-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold" />
                  Employer Benefits
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-primary">Benefit</TableHead>
                    <TableHead className="font-bold text-primary">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employerBenefits.map((item) => (
                    <TableRow key={item.benefit}>
                      <TableCell className="font-semibold text-primary">{item.benefit}</TableCell>
                      <TableCell className="text-muted-foreground">{item.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>

            {/* Employee Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden border border-border shadow-card bg-card"
            >
              <div className="bg-gold px-6 py-4">
                <h3 className="text-lg font-bold text-primary-foreground flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-primary-foreground" />
                  Employee Benefits
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-primary">Benefit</TableHead>
                    <TableHead className="font-bold text-primary">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeeBenefits.map((item) => (
                    <TableRow key={item.benefit}>
                      <TableCell className="font-semibold text-primary">{item.benefit}</TableCell>
                      <TableCell className="text-muted-foreground">{item.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Plan Options - Detailed */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-3">
              Protection<span className="text-gold">+</span> Plan Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your organization's needs. All options include access to wellness services and are Guaranteed Issue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Option 1: GAP Medical */}
            <motion.div
              className="p-7 rounded-xl bg-card border border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <HeartPulse className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-bold text-primary mb-1 text-lg">Option 1: GAP (Medical)</h4>
              <p className="text-gold text-sm font-semibold mb-4">$5,000 First Dollar Coverage</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Pays first dollar on coinsurance for Hospital Related Expenses ($5,000 or $2,500 options)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Family coverage at no extra cost</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Inpatient Coverage: pays when hospitalized for at least 24 hours</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Outpatient Coverage: pays for MRI, ER visits, and treatments without hospital stay</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> ER co-insurance and co-pays are covered</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Includes Standard/Premier Accident Plan</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Guaranteed Issue</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground italic border-t border-border pt-3">
                $2,500 with Premier Accident is also available. Protection+ rates are the same.
              </p>
            </motion.div>

            {/* Option 2: GAP Inpatient */}
            <motion.div
              className="p-7 rounded-xl bg-card border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-bold text-primary mb-1 text-lg">Option 2: GAP Inpatient (GIP)</h4>
              <p className="text-gold text-sm font-semibold mb-4">Hospital Indemnity</p>
              <p className="text-sm text-muted-foreground mb-4">
                For employees that <span className="font-bold text-primary">do not have medical coverage</span> – Guaranteed Issue
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Inpatient-Gap Benefit: 1 day @ $1,000</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Daily Confinement: 30 days @ $100</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Ambulance Benefit: 1 day @ $250</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Emergency Room (Injury): 1 day @ $150</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Emergency Room (Sickness): 1 day @ $150</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Includes Accident Plan</li>
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-gold/5 border border-gold/20">
                <p className="text-xs font-semibold text-gold text-center">Great alternative if you don't have health insurance!</p>
              </div>
            </motion.div>

            {/* Option 3: MEC Plan */}
            <motion.div
              className="p-7 rounded-xl bg-card border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-bold text-primary mb-1 text-lg">Option 3: MEC Plan</h4>
              <p className="text-gold text-sm font-semibold mb-4">Minimum Essential Coverage</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Family coverage at no extra cost</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Hospital reimbursement plan with MEC</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Hospital Care & Daily Confinement</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Physician Office Visits</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Emergency Care & Ambulance (ground/air)</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Doctor Office Visits (4/year) & Limited Rx</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Guaranteed Issue</li>
              </ul>
              <p className="mt-4 text-xs text-muted-foreground italic border-t border-border pt-3">
                Combined with Hospital Indemnity: $500 reimbursement for 1-3 days confinement.
              </p>
            </motion.div>
          </div>

          {/* All Options Include */}
          <motion.div
            className="max-w-4xl mx-auto p-6 rounded-xl bg-surface border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-primary text-lg mb-4 text-center">All Options Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "24/7 Accident Plan",
                "Unlimited Urgent Care, counseling, psychiatric services via Telehealth",
                "Personal Health Coaching with a Health Care Professional",
                "Allied Wellness App access with premium content",
                "No extra cost to add dependents",
                "Customizable plans for employer groups of 100+",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row justify-center gap-6 text-center">
              <div>
                <p className="text-xs text-muted-foreground">Plan Amount</p>
                <p className="text-lg font-bold text-primary">$1,205.00<span className="text-sm font-normal text-muted-foreground">/month</span></p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Employer Reimbursement</p>
                <p className="text-lg font-bold text-gold">$1,013.00<span className="text-sm font-normal text-muted-foreground">/month</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Employer Executive Summary / Savings */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-3">
              Employer Executive <span className="text-gold">Summary</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how Protection+ creates measurable savings for your organization.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="p-6 rounded-xl bg-card border border-border shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-gold" />
                Monthly Per-Employee Breakdown
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Monthly Deduction</span><span className="font-semibold text-primary">$1,205.00</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Employer Reimbursement</span><span className="font-semibold text-gold">- $1,013.00</span></div>
                <div className="flex justify-between border-t border-border pt-2"><span className="font-bold text-primary">Net Cost Per Employee</span><span className="font-black text-primary">$192.00</span></div>
              </div>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl bg-card border border-border shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-gold" />
                FICA Savings Calculation
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Monthly FICA Savings</span><span className="font-semibold text-primary">$91.80</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Allied Wellness Fee</span><span className="font-semibold text-muted-foreground">- $45.00</span></div>
                <div className="flex justify-between border-t border-border pt-2"><span className="font-bold text-primary">Net Savings Per Employee</span><span className="font-black text-gold">$46.80/mo</span></div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="max-w-4xl mx-auto p-6 rounded-xl bg-primary text-primary-foreground text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-primary-foreground/80 mb-1">Example: 100 Employees</p>
            <p className="text-3xl font-black text-gold mb-1">$56,160</p>
            <p className="text-primary-foreground/70 text-sm">Annual Savings ($4,680/month × 12)</p>
            <p className="mt-3 text-xs text-primary-foreground/60">Most employees will see additional take-home dollars with Protection+</p>
          </motion.div>
        </div>
      </section>

      {/* Tax Structure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-3">
              Tax-Advantaged <span className="text-gold">Structure</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Protection+ leverages established IRS code sections to deliver tax savings for employers and employees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {[
              { icon: FileText, title: "Section 125", year: "Since 1978", desc: "Allows employees to convert taxable benefits into nontaxable benefits through pre-tax payroll deductions." },
              { icon: FileText, title: "Section 213(d)", year: "Since 1954", desc: "Provides deduction for medical care expenses, enabling tax-free treatment of qualified health benefits." },
              { icon: FileText, title: "Section 105(b)", year: "Medical Reimbursement", desc: "Non-taxable medical reimbursement dispersed to employee by employer, reducing taxable income." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                <p className="text-xs text-gold font-semibold mb-2">{item.year}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto p-5 rounded-lg bg-surface border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              <span className="font-bold text-primary">How it works:</span> The employer deducts the premium from payroll (pre-tax), pays the Allied Wellness fee, and reduces FICA taxes — creating a net savings that benefits both the organization and its employees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Allied Wellness */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-3">
              Allied <span className="text-gold">Wellness</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive health and wellness platform integrated into every Protection+ plan.
            </p>
          </motion.div>

          {/* Face Scan Vitals */}
          <motion.div
            className="max-w-4xl mx-auto p-6 rounded-xl bg-card border border-border shadow-card mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Scan className="w-6 h-6 text-gold" />
              <h3 className="font-bold text-primary text-lg">Face Scan Vitals</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Remote screening tool using your smartphone, tablet, or computer via Transdermal Optical Imaging technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Contactless", desc: "No physical contact required" },
                { label: "Quick", desc: "Results in just 30 seconds" },
                { label: "Private", desc: "No images are saved" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-lg bg-surface border border-border text-center">
                  <p className="font-bold text-primary text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {/* Screening Benefits */}
            <motion.div
              className="p-6 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-gold" />
                Health Screening Benefits
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Biometric Screenings", "Health Risk Assessments", "Personalized Monthly Health Report", "Data analytics risk profiling", "24 Additional Diagnostic Tests"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Treatment Benefits */}
            <motion.div
              className="p-6 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-gold" />
                Health Treatment Benefits
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Physician Consultation", "Personal Dietitian", "Registered Dietician follow up", "Chiropractic Consultation", "Registered Nurse Consultation", "Prescription Refills", "Treatment for Alcoholism/Addiction", "Licensed Counselor Treatment"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Privacy */}
          <motion.div
            className="max-w-4xl mx-auto p-5 rounded-lg bg-primary text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold mb-1">Privacy & Security</h4>
                <p className="text-sm text-primary-foreground/80">
                  None of your personal information is shared with your employer or your health insurance company. The only person looking at your data is your health coach.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </ProductDetailLayout>
  );
};

export default ProtectionPlusPage;