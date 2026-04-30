import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import { motion } from "framer-motion";
import { Shield, Users, Lightbulb } from "lucide-react";
import teamImg from "@/assets/team-collaboration.jpg";
import familyImg from "@/assets/family-protection.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container mx-auto px-4">
            <BackToHome />
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-4">
                About <span className="text-gold">AMETrust®</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                AME Multiple Employer Trust – One Stop Shopping for employer benefits since 1984.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-black text-primary mb-4">
                  AME Trust Benefits Overview
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  AME Trust Benefits operates as the authorized sales and distribution arm for AMETrust®.
                  AMETrust® itself is structured as a Multiple and Multi-Employer Trust, encompassing
                  various Employer groups and Associations.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The organization is deeply committed to a broker-centric approach, providing its Client
                  Services team to offer "white glove support" to all employer groups.
                </p>
                <div className="p-5 rounded-lg bg-surface border border-border">
                  <h3 className="font-bold text-primary mb-2">What is a Multiple Employer Trust?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Authorized by Congress in 1984 under Section 419(A) of the IRC</li>
                    <li>• Group of 10 or more employers</li>
                    <li>• No single employer can contribute more than 10% of total funding</li>
                    <li>• By definition: All METs are non-profits</li>
                    <li>• All participants share equally in benefits forfeited by other members</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <img
                  src={familyImg}
                  alt="Family reviewing benefits together"
                  className="rounded-2xl shadow-lg w-full h-[380px] object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unique Value */}
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
                Our Unique Value Proposition
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AMETrust distinguishes itself through its unique structure, affording tremendous design
                flexibility while ensuring cost-effectiveness for its members.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Risk Pooling", desc: "Spreading risk among many policyholders for stability and predictability." },
                { icon: Users, title: "Broker-Centric", desc: "White glove support with dedicated Client Services for every employer group." },
                { icon: Lightbulb, title: "Innovation", desc: "Cutting edge technology and comprehensive wellness initiatives for every American." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-xl bg-card border border-border text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
