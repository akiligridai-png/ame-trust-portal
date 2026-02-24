import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { User, Phone, Mail, ExternalLink } from "lucide-react";

const teamMembers = [
  { name: "Bob Worgaftik", title: "General Agent", bio: "Seasoned benefits professional with extensive experience in employee benefits and trust administration." },
  { name: "Richard Gribinas", title: "General Agent", bio: "Strategic leader focused on broker partnerships and organizational growth." },
  { name: "Pamela Mellor", title: "Associate General Agent", bio: "Experienced professional dedicated to day-to-day operations and client services excellence." },
];

const partnerSections = [
  {
    title: "AMETrust®",
    role: "Trust Administration & Plan Design",
    description: "AMETrust® creates and uses its own plan designs. Responsible for fiduciary oversight and plan administration service-operations.",
  },
  {
    title: "Allied TPA",
    role: "Technology, Claims & Customer Service",
    description: "Allied TPA supports technology, claims and customer service for all AMETrust® plans.",
  },
  {
    title: "Allied Wellness",
    role: "Health & Wellness Platform",
    description: "Allied Wellness delivers the health and wellness platform & health coaches. Provides access to professional health coaches and comprehensive wellness programs.",
    contacts: [
      { type: "phone", value: "(800) 555-0100", label: "Main Line" },
      { type: "email", value: "wellness@alliedwellness.com", label: "General Inquiries" },
      { type: "link", value: "https://www.alliedwellness.com", label: "Visit Website" },
    ],
  },
  {
    title: "ATPA Claims / Customer Service",
    role: "Technology, Claims & Customer Service",
    description: "For claims and customer service inquiries, please reach out to the appropriate contact.",
    contacts: [
      { type: "phone", value: "(800) 555-0200", label: "Claims Line" },
      { type: "email", value: "claims@atpa.com", label: "Claims Support" },
      { type: "link", value: "https://www.atpa.com", label: "Visit Website" },
    ],
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
                The AME Trust Benefits team works synergistically with dedicated and experienced partners to deliver comprehensive benefits solutions. Each partner brings unique specialties.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black text-primary mb-3">Meet the Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our leadership brings decades of combined experience in employee benefits, trust administration, and broker partnerships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  className="rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="h-48 bg-primary/5 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-12 h-12 text-primary/40" />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-primary text-lg mb-1">{member.name}</h3>
                    <p className="text-gold text-sm font-semibold mb-3">{member.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Synergistic Partnership */}
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black text-primary mb-3">Synergistic Partnership</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reach out to our trusted partners for wellness, claims, and customer service support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {partnerSections.map((section, i) => (
                <motion.div
                  key={section.title}
                  className="p-6 rounded-xl bg-card border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="font-bold text-primary text-lg mb-1">{section.title}</h3>
                  <p className="text-gold text-sm font-semibold mb-2">{section.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{section.description}</p>
                  {section.contacts && (
                    <div className="space-y-3">
                      {section.contacts.map((contact) => (
                        <div key={contact.label} className="flex items-center gap-3">
                          {contact.type === "phone" && <Phone className="w-4 h-4 text-gold shrink-0" />}
                          {contact.type === "email" && <Mail className="w-4 h-4 text-gold shrink-0" />}
                          {contact.type === "link" && <ExternalLink className="w-4 h-4 text-gold shrink-0" />}
                          <div>
                            <p className="text-xs text-muted-foreground">{contact.label}</p>
                            <p className="text-sm text-primary font-medium">{contact.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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

export default TeamPage;
