import { motion } from "framer-motion";
import { Shield, TrendingDown, Target } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Risk Pooling",
    description:
      "By pooling the risks of many policyholders, the financial impact of individual losses is distributed among the entire pool. The larger the pool, the more predictable and stable the premium can be.",
  },
  {
    icon: TrendingDown,
    title: "Affordability",
    description:
      "Risk pooling makes insurance more affordable for individual policyholders. Pools protect members from fluctuations in insurance rates that depend on market conditions.",
  },
  {
    icon: Target,
    title: "Focus & Expertise",
    description:
      "Pools may have more focus and expertise in specific types of entities or risks that are not well served by private insurers, providing targeted and effective coverage solutions.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ValueProposition = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-3">
            Why Choose AMETrust®?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A Multiple Employer Trust authorized by Congress in 1984 under Section 419(A) of the Internal Revenue Code.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group p-8 rounded-xl bg-card border border-border hover:border-gold/30 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
