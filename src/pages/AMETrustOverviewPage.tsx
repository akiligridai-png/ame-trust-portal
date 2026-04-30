import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import { motion } from "framer-motion";
import { Shield, Users, Scale, Building2, CheckCircle } from "lucide-react";
import overviewImg from "@/assets/ametrust-overview-business.jpg";
import ameLogoDark from "@/assets/ame-logo-dark-transparent.png";

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
              <div className="flex items-center flex-wrap gap-4 mb-4">
                <img src={ameLogoDark} alt="AME Trust Logo" className="h-16 sm:h-20 w-auto" />
                <h1 className="text-4xl sm:text-5xl font-black text-gold">Overview</h1>
              </div>
              <p className="text-lg text-primary-foreground/80">
                Understanding the Multiple Employer Trust structure and its benefits for employers and employees.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is a MET */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                  <div className="space-y-4">
                    <div className="p-6 rounded-xl bg-surface border border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        A Multiple Employer Trust (MET) is a group of ten or more employers who form a trust in order to minimize the tax implications of providing certain types of benefits for their employees, including life insurance. The U.S. Congress authorized the formation of METs in 1984 under Section 419(A) of the Internal Revenue Code. A MET is a group of 10 or more employers where no single employer can contribute more than 10% of total funding. By definition, all METs are non-profits, and all participants share equally in benefits forfeited by other members of the group.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-surface border border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        AMETrust is distinguished through its structure for ensuring flexibility while ensuring cost-effectiveness for its members. The rules set forth for METs are stringent and require that no single employer contribute more than 10 percent of total funding for the benefit plan purchased by the MET. In addition, the MET must be an indivisible entity, with all participating employers sharing equally in the benefits forfeited by other members of the group. The employees of each participating employer are viewed as if they worked for a single company and are subject to the same requirements.
                      </p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    <img
                      src={overviewImg}
                      alt="Business professionals reviewing benefit plan documents in modern office"
                      className="rounded-2xl shadow-lg w-full h-[380px] object-cover"
                      loading="lazy"
                    />
                  </motion.div>
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
