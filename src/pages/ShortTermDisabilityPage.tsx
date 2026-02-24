import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { Check, Briefcase, HeartPulse, Baby } from "lucide-react";
import heroImg from "@/assets/short-term-disability-hero.jpg";

const coverageItems = [
  {
    icon: Briefcase,
    title: "Covered Accident",
    desc: "Disability resulting from a covered accident preventing you from working",
  },
  {
    icon: HeartPulse,
    title: "Covered Sickness",
    desc: "Disability resulting from a covered sickness or illness",
  },
  {
    icon: Baby,
    title: "Pregnancy-Related",
    desc: "Pregnancy-related disability coverage (subject to policy terms)",
  },
];

const ShortTermDisabilityPage = () => {
  return (
    <ProductDetailLayout
      title="Short-Term Disability"
      subtitle="Partial income replacement when you're unable to work due to a covered injury or illness – helping maintain financial stability during recovery."
      heroImage={heroImg}
      heroImageAlt="Professional woman recovering at home working on laptop"
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
                What is Short-Term Disability Insurance?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                AME Trust Short-Term Disability insurance provides partial income replacement if an insured individual is unable to work due to a covered injury or illness. This coverage helps maintain financial stability during a temporary period of disability.
              </p>
              <div className="p-5 rounded-lg bg-surface border border-border">
                <p className="text-sm text-muted-foreground mb-1">Benefits Received</p>
                <p className="text-primary font-bold text-lg">
                  <span className="text-gold">Weekly cash benefits</span>, typically a percentage of your pre-disability earnings
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
              Coverage for temporary disability from multiple causes.
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
                Sarah, an office manager, undergoes surgery and is required to take six weeks off work for recovery. Her AME Trust Short-Term Disability policy provides her with weekly benefit payments during her absence, helping her cover her essential living expenses like rent and groceries until she can return to work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </ProductDetailLayout>
  );
};

export default ShortTermDisabilityPage;
