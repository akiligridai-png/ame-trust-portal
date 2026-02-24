import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import telemedicineImg from "@/assets/telemedicine.jpg";

const benefits = [
  "Dedicated Health Coaches – Live, medically licensed professionals",
  "First Dollar Coverage on hospital bills for employees & dependents",
  "Unlimited Telemedicine including mental health support",
  "Net Zero Cost to most employees – uses subsidies from tax savings",
  "No extra cost to add dependents",
  "Allied Wellness App for premium health content",
];

const ProtectionPlusHighlight = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
              Flagship Product
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
              Protection<span className="text-gold">+</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Employer Health & Wellness Program administered by AMETrust®
            </p>
            <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-primary font-bold text-lg">
                Net Zero Cost <span className="text-muted-foreground font-normal text-sm">to the employer</span>
              </p>
              <p className="text-gold font-bold text-xl mt-1">
                $561.60 <span className="text-muted-foreground font-normal text-sm">annual FICA tax savings per enrolled employee</span>
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-gold hover:bg-gold-dark text-primary-foreground font-bold px-8 shadow-gold transition-all duration-200 hover:scale-[1.02]"
            >
              <Link to="/products/protection-plus">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={telemedicineImg}
                alt="Employee using telemedicine services via smartphone"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-2 sm:-left-6 bg-card rounded-xl p-4 sm:p-5 shadow-lg border border-border max-w-[200px] sm:max-w-[220px]">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Employer Benefit</p>
              <p className="text-2xl font-black text-gold">Net Zero</p>
              <p className="text-xs text-muted-foreground">Cost to implement</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionPlusHighlight;
