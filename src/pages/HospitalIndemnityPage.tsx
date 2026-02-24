import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { Check, Building2, HeartPulse, DollarSign } from "lucide-react";
import heroImg from "@/assets/hospital-indemnity-hero.jpg";

const coverageItems = [
  {
    icon: Building2,
    title: "Hospital Confinement",
    desc: "Daily benefit for each day of hospital stay",
  },
  {
    icon: HeartPulse,
    title: "ICU Confinement",
    desc: "Increased daily benefit for stays in the Intensive Care Unit",
  },
  {
    icon: DollarSign,
    title: "Hospital Admission Benefit",
    desc: "One-time payment upon admission to the hospital",
  },
];

const HospitalIndemnityPage = () => {
  return (
    <ProductDetailLayout
      title="Hospital Indemnity Plan"
      subtitle="Fixed cash benefits for hospital stays resulting from covered accidents or sicknesses – paid directly to you for any purpose."
      heroImage={heroImg}
      heroImageAlt="Modern hospital building exterior"
    >
      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black text-primary mb-4">
                What is Hospital Indemnity (HIP)?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The AME Trust Hospital Indemnity Plan (HIP) provides fixed cash benefits for hospital stays resulting from covered accidents or sicknesses. These benefits are paid directly to the insured and can be used for any purpose, providing a financial cushion during hospitalization.
              </p>
              <div className="p-5 rounded-lg bg-surface border border-border">
                <p className="text-sm text-muted-foreground mb-1">Benefits Received</p>
                <p className="text-primary font-bold text-lg">
                  <span className="text-gold">Fixed daily cash benefits</span> for hospital confinement
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
              Straightforward coverage with fixed benefits you can count on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coverageItems.map((item, i) => (
              <motion.div
                key={item.title}
                className="p-7 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
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
                David is hospitalized for four days due to a severe pneumonia infection. His AME Trust HIP policy pays him a fixed daily benefit for each day of his stay, plus a hospital admission benefit. These funds help him cover his high health insurance deductible and other out-of-pocket expenses, providing financial peace of mind during his recovery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </ProductDetailLayout>
  );
};

export default HospitalIndemnityPage;
