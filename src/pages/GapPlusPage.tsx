import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { Shield, Check, Smartphone, DollarSign, HeartPulse } from "lucide-react";
import heroImg from "@/assets/gap-insurance-hero.jpg";

const gapPlusBullets = [
  "Health program with Net Zero Cost to the employer",
  "Medical Claim Reimbursements are made by AME and sent directly to the Employee",
  "FICA tax savings per enrolled employee",
  "Access to Dedicated, Medically Licensed Health Coaches",
  "First Dollar Coverage on hospital bills for employees and dependents",
  "Unlimited Telemedicine including mental health support",
  "Access to the Allied Wellness App for premium health content",
];

const GapPlusPage = () => {
  return (
    <ProductDetailLayout
      title="GAP"
      titleAccent="+"
      subtitle="Enhanced GAP coverage with embedded GAP insurance, comprehensive wellness services, and employer savings – all in one powerful plan."
      heroImage={heroImg}
      heroImageAlt="Family protected by GAP+ enhanced coverage"
    >
      {/* GAP Embedded Callout */}
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
                Enhanced Coverage
              </span>
              <h2 className="text-3xl font-black text-primary mb-4">
                What is GAP<span className="text-gold">+</span>?
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                GAP+ has <span className="font-bold text-primary">GAP insurance embedded</span>. GAP+ integrates an enhanced GAP policy with a comprehensive bundle of healthcare services. It incentivizes individuals to actively participate in their well-being by providing a mechanism to fund the insurance.
              </p>

              <div className="p-5 rounded-lg bg-primary text-primary-foreground mb-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold text-gold">GAP insurance is included.</span> Every GAP+ plan comes with full GAP medical coverage built in, so you get all the benefits of standalone GAP plus advanced wellness and employer savings.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-lg bg-surface border border-border">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    AMETrust has composite and age-banded pricing. Custom pricing is available; please contact us directly with any specific need.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GAP+ Benefits */}
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
              GAP<span className="text-gold">+</span> Advanced Protection
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Beyond GAP coverage, GAP+ delivers employer savings and comprehensive wellness for every enrolled employee.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto mb-12">
            <motion.div
              className="p-6 rounded-xl bg-card border border-border shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-primary mb-4 text-lg">GAP+ Includes:</h3>
              <ul className="space-y-3">
                {gapPlusBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: DollarSign, title: "Net Zero Cost to Employer", desc: "The program is designed so employers see no additional cost – FICA tax savings offset the investment." },
              { icon: HeartPulse, title: "Medical Claim Reimbursements", desc: "Reimbursements are made by AME and sent directly to the Employee, reducing out-of-pocket burden." },
              { icon: Shield, title: "FICA Tax Savings", desc: "Employers save on payroll taxes for every enrolled employee, creating measurable ROI." },
              { icon: Smartphone, title: "Medically Licensed Health Coaches", desc: "Dedicated health coaches provide personalized guidance, driving engagement and better health outcomes." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Allied Wellness */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
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
              GAP+ provides access to Allied Wellness, a comprehensive wellness program that consolidates various healthcare services including a personal dietitian, prescription discount plan, and health advocacy services – all of which can be utilized to receive monthly GAP+ Health benefits.
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Active participation in health screenings and treatments qualifies members to receive monthly claim payments from their GAP+ policy, directly offsetting the cost of coverage.
            </p>
            <div className="p-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20">
              <p className="text-xs text-primary-foreground/60 uppercase font-bold tracking-wider mb-2">Real-World Example</p>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Ed, enrolled in GAP+, consults his personal dietitian and refills his blood pressure medication monthly. GAP would cover outpatient benefits. Additionally, his AME Trust Accident Policy would pay him for his ER treatment, MRI, and concussion diagnosis – irrespective of his medical expenses.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </ProductDetailLayout>
  );
};

export default GapPlusPage;
