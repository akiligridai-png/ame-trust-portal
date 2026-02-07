import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import teamImg from "@/assets/team-collaboration.jpg";

const teamPartners = [
  {
    name: "AMETrust®",
    role: "Plan Design & Administration",
    description: "Responsible for creating and implementing proprietary plan designs. AMETrust® is the named fiduciary and plan administrator.",
  },
  {
    name: "Allied TPA",
    role: "Technology, Claims & Customer Service",
    description: "Provides essential support for technology infrastructure, claims processing, and customer service operations.",
  },
  {
    name: "Allied Wellness",
    role: "Health & Wellness Platform",
    description: "Delivers the comprehensive health and wellness platform, including access to professional health coaches.",
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-4">
                The AMETrust® <span className="text-gold">Team</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                AME Trust Benefits works synergistically with its dedicated and experienced team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Image */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={teamImg}
                  alt="AME Trust professional team collaborating"
                  className="rounded-2xl shadow-lg w-full h-[380px] object-cover"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h2 className="text-3xl font-black text-primary mb-4">
                  Synergistic Partnership
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The AME Trust Benefits team works synergistically with dedicated and experienced partners
                  to deliver comprehensive benefits solutions. Each partner brings specialized expertise
                  to ensure every member receives exceptional service.
                </p>
                <div className="space-y-4">
                  {teamPartners.map((partner, i) => (
                    <div
                      key={partner.name}
                      className="p-5 rounded-lg border border-border bg-card hover:border-gold/20 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-sm font-bold text-gold">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="font-bold text-primary text-sm">{partner.name}</h3>
                          <p className="text-xs text-gold">{partner.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                        {partner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
