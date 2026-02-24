import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import { motion } from "framer-motion";
import { Shield, Users, Scale, Building2, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Non-Profit Structure",
    description: "By definition, all METs are non-profits, ensuring that benefits serve the members rather than shareholders.",
  },
  {
    icon: Users,
    title: "Shared Benefits",
    description: "All participants share equally in benefits forfeited by other members of the group, maximizing value for everyone.",
  },
  {
    icon: Scale,
    title: "Equal Participation",
    description: "No single employer can contribute more than 10% of total funding, ensuring balanced representation.",
  },
  {
    icon: Building2,
    title: "Congressional Authorization",
    description: "Authorized by Congress in 1984 under Section 419(A) of the Internal Revenue Code for employer benefit trusts.",
  },
];

const AMETrustOverviewPage = () => {
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
                AMETrust® <span className="text-gold">Overview</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Understanding the Multiple Employer Trust structure and its benefits for employers and employees.
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
                <div className="p-6 rounded-xl bg-surface border border-border mb-8">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Authorized by Congress in 1984 under Section 419(A) of the Internal Revenue Code. A MET is a group of 10 or more employers where no single employer can contribute more than 10% of total funding. By definition, all METs are non-profits, and all participants share equally in benefits forfeited by other members of the group.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-primary text-primary-foreground mb-8">
                  <h3 className="text-xl font-bold mb-3">
                    About <span className="text-gold">AMETrust®</span>
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed mb-4">
                    AME Trust Benefits operates as the authorized sales and distribution arm for AMETrust®. Acting as the MGA for brokers & third-party administrators, we provide white-glove support to all employer groups.
                  </p>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    AMETrust® itself is structured as a Multiple and Multi-Employer Trust, encompassing various Employer groups and Associations. The organization is deeply committed to a broker-centric approach.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
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
                Key Benefits of a MET Structure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AMETrust distinguishes itself through its unique structure, affording tremendous design flexibility while ensuring cost-effectiveness for its members.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-card-hover text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-primary mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-black text-primary mb-6">How It Works</h2>
                <div className="space-y-4">
                  {[
                    "Employers join the trust as a group of 10 or more",
                    "No single employer contributes more than 10% of total funding",
                    "Benefits are pooled across all participating employers",
                    "Non-profit structure ensures all value flows to members",
                    "AMETrust® serves as named fiduciary and plan administrator",
                    "Professional management of plan documents and administration",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-border">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{step}</p>
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

export default AMETrustOverviewPage;
