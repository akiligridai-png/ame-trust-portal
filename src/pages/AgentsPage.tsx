import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import brokerAppointedImg from "@/assets/broker-appointed.jpg";
import ameLogoLight from "@/assets/ame-logo-light-transparent.png";

const AgentsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <BackToHome />
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-4">
                Agents & <span className="text-gold">Brokers</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Everything you need to offer clients a world-class benefits experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Get Appointed CTA with Image */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center flex-wrap gap-3 mb-4">
                  <h2 className="text-3xl font-black text-primary">Get Appointed with</h2>
                  <img src={ameLogoTransparent} alt="AME Trust Logo" className="h-12 sm:h-14 w-auto" />
                </div>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  Join our network of trusted brokers and gain access to AMETrust's comprehensive benefits portfolio. Start the appointment process today.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-primary-foreground font-bold px-8 shadow-gold transition-all duration-200 hover:scale-[1.02]"
                >
                  <Link to="/broker-appointment">
                    Start Appointment Process
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <img
                  src={brokerAppointedImg}
                  alt="Professional brokers shaking hands in modern office"
                  className="rounded-2xl shadow-lg w-full h-[380px] object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
};

export default AgentsPage;
