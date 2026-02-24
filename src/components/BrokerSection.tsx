import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Handshake, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import brokersImg from "@/assets/brokers-support.jpg";

const features = [
  {
    icon: Handshake,
    title: "White Glove Support",
    description: "Access to a dedicated Client Services team for personalized assistance.",
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description: "Regular webinars and resources on product updates and industry trends.",
  },
];

const BrokerSection = () => {
  return (
    <section className="py-20 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <motion.img
                src={brokersImg}
                alt="Professional insurance brokers collaborating in modern office"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
              Agents & Brokers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
              Broker-Centric Approach
            </h2>
            <p className="text-muted-foreground mb-8">
              AME Trust Benefits is deeply committed to a broker-centric approach, providing our Client Services team to offer white glove support to all employer groups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="p-4 rounded-lg bg-card border border-border hover:border-gold/20 transition-colors"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                >
                  <feature.icon className="w-5 h-5 text-gold mb-2" />
                  <h4 className="text-sm font-bold text-primary mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Button
              asChild
              className="bg-gold hover:bg-gold-dark text-primary-foreground font-bold px-8 shadow-gold transition-all duration-200 hover:scale-[1.02]"
            >
              <Link to="/agents">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrokerSection;
