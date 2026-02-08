import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { Shield, HeartPulse, Stethoscope, Activity, Smartphone, Check } from "lucide-react";
import heroImg from "@/assets/gap-insurance-hero.jpg";

const inpatientBenefits = [
  "Hospital charges for room and board",
  "Miscellaneous hospital charges including operating room, equipment, supplies, and drugs",
  "Intensive Care Unit (ICU) charges",
  "Physician charges incurred during the hospital stay",
];

const outpatientBenefits = [
  "Facility and Physician expenses for surgery in a hospital or free-standing surgery center",
  "Facility and Physician expenses for diagnostic testing in a hospital, imaging facility, or laboratory",
  "Hospital and Physician expenses for emergency room treatment",
  "Hospital and Physician expenses for other outpatient treatments",
];

const gapPlusFeatures = [
  { icon: HeartPulse, title: "Inpatient Benefits", desc: "Payment when hospitalized for a minimum period due to sickness or injury." },
  { icon: Activity, title: "Outpatient Benefits", desc: "Payment for specific treatments like MRI scans or emergency room visits without hospital stay." },
  { icon: Stethoscope, title: "Screening & Diagnostic", desc: "Payment for biometric screens, cholesterol tests, or health risk assessments." },
  { icon: Shield, title: "Treatment Benefits", desc: "Covers consultations with healthcare professionals, prescription refills, and dental visits." },
];

const GapInsurancePage = () => {
  return (
    <ProductDetailLayout
      title="GAP & GAP"
      titleAccent="+"
      subtitle="Guaranteed Asset Protection insurance that works alongside your primary health insurance to cover the financial gaps in your medical expenses."
      heroImage={heroImg}
      heroImageAlt="Bridge symbolizing financial protection gap coverage"
    >
      {/* What is GAP */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
                GAP Insurance
              </span>
              <h2 className="text-3xl font-black text-primary mb-4">
                What is GAP Insurance?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                GAP insurance functions in conjunction with primary health insurance to alleviate the financial burden of medical expenses that would typically be the patient's responsibility. In the event of an injury or illness covered by health insurance, AME Trust will provide reimbursement up to a specified maximum benefit.
              </p>
              <div className="p-5 rounded-lg bg-surface border border-border mb-8">
                <p className="text-sm text-muted-foreground mb-1">Benefits Received</p>
                <p className="text-primary font-bold text-lg">
                  Up to the annual maximum <span className="text-gold">covering both Inpatient and Outpatient Benefits</span> per Covered Member
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-3">What's Covered</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage for both inpatient and outpatient medical expenses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Inpatient */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-7 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-primary">Hospital Inpatient Benefits</h3>
              </div>
              <ul className="space-y-3">
                {inpatientBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Outpatient */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-7 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary">Hospital Outpatient Benefits</h3>
              </div>
              <ul className="space-y-3">
                {outpatientBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-4">How It Works</h2>
            <div className="p-6 rounded-xl bg-surface border border-border">
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Example Scenario</p>
              <p className="text-muted-foreground leading-relaxed">
                Consider John, who suffers a heart attack, leading to a five-day hospital admission and bypass surgery. His maximum out-of-pocket cost for the hospital stay, anesthesia, and surgery amounts to $6,300. AMETrust GAP insurance would then reimburse him for his expenses up to the policy maximum, significantly reducing his financial burden during recovery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GAP+ Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
              Enhanced Coverage
            </span>
            <h2 className="text-3xl font-black text-primary mb-3">
              GAP<span className="text-gold">+</span> — Advanced Protection
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              GAP+ integrates an enhanced GAP policy with a comprehensive bundle of healthcare services. It incentivizes individuals to actively participate in their well-being by providing a mechanism to fund the insurance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {gapPlusFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-bold text-primary mb-2 text-sm">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Allied Wellness */}
          <motion.div
            className="max-w-3xl mx-auto p-6 rounded-xl bg-primary text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-6 h-6 text-gold" />
              <h3 className="text-lg font-bold">Allied Wellness Integration</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              GAP+ provides access to Allied Wellness, a comprehensive wellness program that consolidates various healthcare services including a personal dietitian, prescription discount plan, and health advocacy services — all of which can be utilized to receive monthly GAP+ Health benefits.
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Active participation in health screenings and treatments qualifies members to receive monthly claim payments from their GAP+ policy, directly offsetting the cost of coverage.
            </p>
          </motion.div>

          {/* GAP+ Example */}
          <motion.div
            className="max-w-3xl mx-auto mt-8 p-6 rounded-xl bg-card border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">GAP+ Example Scenario</p>
            <p className="text-muted-foreground leading-relaxed">
              Ed, enrolled in GAP+, consults his personal dietitian and refills his blood pressure medication monthly. For engaging in these health activities, he receives monthly payments deposited on the same day as his paycheck, helping offset the cost of his GAP+ policy. If Ed were to fall and require emergency room treatment, an MRI, and be diagnosed with a concussion, his GAP+ policy would cover $2,500 of outpatient benefits. Additionally, his AME Trust Accident Policy would pay him for his ER treatment, MRI, and concussion diagnosis — irrespective of his medical expenses.
            </p>
          </motion.div>
        </div>
      </section>
    </ProductDetailLayout>
  );
};

export default GapInsurancePage;
