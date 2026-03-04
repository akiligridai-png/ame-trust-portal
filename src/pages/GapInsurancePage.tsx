import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Check, DollarSign, AlertCircle } from "lucide-react";
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

const GapInsurancePage = () => {
  return (
    <ProductDetailLayout
      title="GAP Insurance"
      subtitle="Guaranteed Asset Protection insurance that works alongside your primary health insurance to cover the financial gaps in your medical expenses."
      heroImage={heroImg}
      heroImageAlt="Bridge symbolizing financial protection gap coverage"
    >
      {/* Key Messaging */}
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
              {/* Key Messaging Box - Top Priority */}
              <div className="p-5 rounded-lg bg-primary text-primary-foreground mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold text-gold">AMETrust®'s Medical Gap Coverage</span> is available in all 50 states with Employer Group size limitations (10 or more) eliminated.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                GAP insurance functions in conjunction with primary health insurance to alleviate the financial burden of medical expenses that would typically be the patient's responsibility with first dollar coverage that can be paid directly to the provider.
              </p>

              {/* Pricing Note */}
              <div className="p-5 rounded-lg bg-surface border border-border mb-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AMETrust has composite and age-banded pricing. Custom pricing is available; please contact us directly with any specific need.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-surface border border-border">
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
              Comprehensive coverage for both inpatient and outpatient medical expenses. See products tab for additional information.
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

    </ProductDetailLayout>
  );
};

export default GapInsurancePage;
