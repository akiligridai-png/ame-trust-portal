import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, HeartPulse, Stethoscope, Activity, Building2, Briefcase } from "lucide-react";
import ameLogoLight from "@/assets/ame-logo-light-transparent.png";

const products = [
  {
    icon: HeartPulse,
    title: "GAP Insurance",
    subtitle: "Guaranteed Asset Protection",
    description:
      "Covers hospital and outpatient benefits that primary insurance doesn't fully cover. Available in all 50 states with no employer group size limitations.",
    highlight: true,
    href: "/products/gap-insurance",
  },
  {
    icon: Shield,
    title: "GAP+",
    subtitle: "Enhanced GAP with Wellness",
    description:
      "GAP insurance embedded plus Net Zero Cost to employer, FICA tax savings, dedicated health coaches, and unlimited telemedicine.",
    href: "/products/gap-plus",
  },
  {
    icon: Shield,
    title: "Protection+",
    subtitle: "Employer Health & Wellness Program",
    description:
      "Net zero cost to the employer with FICA tax savings. Includes dedicated health coaches, first dollar coverage, and unlimited telemedicine.",
    href: "/products/protection-plus",
  },
  {
    icon: Activity,
    title: "Accident Insurance",
    subtitle: "Fixed Injury Payments",
    description:
      "Provides a fixed amount of money for a wide array of unforeseen injuries and treatments, paid directly to you regardless of medical expenses.",
    href: "/products/accident-insurance",
  },
  {
    icon: Stethoscope,
    title: "Critical Illness",
    subtitle: "Lump Sum up to $50k",
    description:
      "Vital financial assistance during severe illness, paying a lump sum directly upon diagnosis of any covered condition including heart attack, stroke, and cancer.",
    href: "/products/critical-illness",
  },
  {
    icon: Building2,
    title: "Hospital Indemnity (HIP)",
    subtitle: "Fixed Daily Cash Benefits",
    description:
      "Fixed cash benefits for hospital stays resulting from covered accidents or sickness. Benefits paid directly to you for any purpose.",
    href: "/products/hospital-indemnity",
  },
  {
    icon: Briefcase,
    title: "Short-Term Disability",
    subtitle: "Income Replacement",
    description:
      "Partial income replacement if you're unable to work due to a covered injury or illness, helping maintain financial stability during recovery.",
    href: "/products/short-term-disability",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ProductsGrid = () => {
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
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src={ameIconOnly} alt="AME Trust Logo" className="h-12 sm:h-14 w-auto" />
            <h2 className="text-3xl sm:text-4xl font-black text-primary">Products</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive benefits solutions designed to protect what matters most – your health, your family, and your financial security.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product) => (
            <Link key={product.title} to={product.href}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative p-7 rounded-xl border transition-all duration-300 hover:shadow-card-hover cursor-pointer h-full ${
                  product.highlight
                    ? "bg-primary border-gold/30 shadow-card"
                    : "bg-card border-border hover:border-gold/30 shadow-card"
                }`}
              >
                {product.highlight && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gold/20 text-gold rounded-full border border-gold/30">
                    Featured Product
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300 ${
                    product.highlight
                      ? "bg-gold/20"
                      : "bg-primary/5 group-hover:bg-gold/10"
                  }`}
                >
                  <product.icon
                    className={`w-6 h-6 ${
                      product.highlight ? "text-gold" : "text-primary group-hover:text-gold"
                    } transition-colors duration-300`}
                  />
                </div>

                <h3
                  className={`text-lg font-bold mb-1 ${
                    product.highlight ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className="text-xs font-semibold mb-3 text-gold"
                >
                  {product.subtitle}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    product.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {product.description}
                </p>

                <span
                  className={`inline-flex items-center text-sm font-semibold transition-colors ${
                    product.highlight
                      ? "text-gold hover:text-gold-light"
                      : "text-gold hover:text-gold-dark"
                  }`}
                >
                  Learn More
                  <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsGrid;
