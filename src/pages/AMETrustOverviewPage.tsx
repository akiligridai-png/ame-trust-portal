import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Users, Scale, Building2 } from "lucide-react";

const AMETrustOverviewPage = () => {
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
                AMETrust® <span className="text-gold">Overview</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Understanding the structure and benefits of a Multiple Employer Trust.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is a MET */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
                  Multiple Employer Trust
                </span>
                <h2 className="text-3xl font-black text-primary mb-6">
                  What is a Multiple Employer Trust (MET)?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Authorized by Congress in 1984 under Section 419(A) of the Internal Revenue Code. A MET is a group of 10 or more employers where no single employer can contribute more than 10% of total funding. By definition, all METs are non-profits, and all participants share equally in benefits forfeited by other members of the group.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Scale,
                    title: "Congressional Authorization",
                    desc: "Authorized by Congress in 1984 under Section 419(A) of the Internal Revenue Code.",
                  },
                  {
                    icon: Building2,
                    title: "Employer Group Structure",
                    desc: "A group of 10 or more employers, with no single employer contributing more than 10% of total funding.",
                  },
                  {
                    icon: Shield,
                    title: "Non-Profit by Definition",
                    desc: "All Multiple Employer Trusts are structured as non-profit entities by definition.",
                  },
                  {
                    icon: Users,
                    title: "Shared Benefits",
                    desc: "All participants share equally in benefits forfeited by other members of the group.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="p-6 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AME Trust Benefits Role */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-black text-primary mb-4">
                  AME Trust Benefits
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  AME Trust Benefits operates as the authorized sales and distribution arm for AMETrust®. Acting as the MGA for brokers & third-party administrators, we provide white-glove support to all employer groups.
                </p>
                <div className="p-6 rounded-xl bg-primary">
                  <p className="text-gold italic text-lg font-light leading-relaxed">
                    "To make healthcare affordable for every working American through innovative products,
                    creative strategies, cutting edge technology and comprehensive wellness initiatives."
                  </p>
                  <p className="text-primary-foreground/60 text-sm mt-3">— AMETrust® Mission Statement</p>
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

export default AMETrustOverviewPage;
