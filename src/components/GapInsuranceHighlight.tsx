import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gapImg from "@/assets/gap-insurance-hero.jpg";

const benefits = [
  "First Dollar Coverage – pays directly on coinsurance for hospital-related expenses",
  "Available in all 50 states with no employer group size limitations",
  "Family coverage at no extra cost – covers employee and dependents",
  "Covers ER co-insurance, co-pays, MRI, and outpatient treatments",
  "Guaranteed Issue – no medical underwriting required",
];

const GapInsuranceHighlight = () => {
  return (
    <section className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
              Featured Product
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
              GAP <span className="text-gold">Insurance</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Medical Gap Coverage administered by AMETrust®
            </p>
            <motion.div
              className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-primary font-bold text-lg">
                First Dollar Coverage
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Up to $10,000 on coinsurance and max-out of pocket for hospital-related expenses
              </p>
            </motion.div>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm text-foreground/80">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-gold hover:bg-gold-dark text-primary-foreground font-bold px-8 shadow-gold transition-all duration-200 hover:scale-[1.02]"
            >
              <Link to="/products/gap-insurance">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <motion.img
                src={gapImg}
                alt="GAP Insurance coverage protecting families"
                className="w-full h-[420px] object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 left-2 sm:-left-6 bg-card rounded-xl p-4 sm:p-5 shadow-lg border border-border max-w-[200px] sm:max-w-[220px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Coverage</p>
              <p className="text-2xl font-black text-gold">$10,000</p>
              <p className="text-xs text-muted-foreground">First Dollar Benefits</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GapInsuranceHighlight;
