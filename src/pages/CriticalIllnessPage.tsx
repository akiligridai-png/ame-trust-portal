import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { Check, Heart, Shield, Brain, Activity } from "lucide-react";
import heroImg from "@/assets/critical-illness-hero.jpg";

const coverageCategories = [
  {
    icon: Heart,
    title: "Major Health Events",
    items: [
      "Heart Attack",
      "Stroke",
      "Coronary Artery Bypass Surgery",
    ],
  },
  {
    icon: Shield,
    title: "Cancer-Related Conditions",
    items: [
      "Invasive Cancer",
      "Carcinoma in Situ",
    ],
  },
  {
    icon: Activity,
    title: "Organ & System Failures",
    items: [
      "Major Organ Failure",
      "End-Stage Renal Failure",
    ],
  },
  {
    icon: Brain,
    title: "Other Serious Conditions",
    items: [
      "Occupational HIV",
      "Benign Brain Tumor",
    ],
  },
];

const CriticalIllnessPage = () => {
  return (
    <ProductDetailLayout
      title="Critical Illness Insurance"
      subtitle="Vital financial assistance during severe illness – receive a lump sum payment directly upon diagnosis to cover deductibles, co-pays, and living expenses."
      heroImage={heroImg}
      heroImageAlt="Resilient person with supportive family in comforting home environment"
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
                What is Critical Illness Insurance?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Critical Illness insurance from AME Trust offers vital financial assistance during severe illness, helping to cover deductibles, co-pays, and other medical expenses. The policy pays a lump sum directly to the insured upon diagnosis of any covered condition.
              </p>
              <div className="p-5 rounded-lg bg-surface border border-border">
                <p className="text-sm text-muted-foreground mb-1">Benefits Received</p>
                <p className="text-primary font-bold text-lg">
                  Lump sum payment up to <span className="text-gold">$50,000</span> upon diagnosis
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
              Coverage for a range of serious health conditions with direct lump sum payments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coverageCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <cat.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-bold text-primary text-sm mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
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
                Jane, a non-smoker, is diagnosed with invasive breast cancer. Having an AME Trust Critical Illness policy with a $30,000 benefit amount, she receives the full lump sum payment upon diagnosis. This financial support allows her to focus on her treatment and recovery without the immediate burden of medical bills and lost income.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </ProductDetailLayout>
  );
};

export default CriticalIllnessPage;
