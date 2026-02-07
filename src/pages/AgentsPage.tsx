import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrokerSection from "@/components/BrokerSection";
import { motion } from "framer-motion";
import { Handshake, LayoutDashboard, FileSpreadsheet, BarChart3, BookOpen, Monitor } from "lucide-react";

const tools = [
  {
    icon: FileSpreadsheet,
    title: "Census Tool",
    description: "A streamlined tool for brokers to upload employee census data and generate accurate quotes.",
  },
  {
    icon: Monitor,
    title: "Enrollment Platform",
    description: "An intuitive online enrollment system for employees to easily select and sign up for benefits.",
  },
  {
    icon: BarChart3,
    title: "Reporting Dashboard",
    description: "Real-time access to enrollment data and participation rates for employer groups.",
  },
  {
    icon: BookOpen,
    title: "Marketing Materials",
    description: "A library of professionally designed brochures, presentations, and sales tools.",
  },
];

const AgentsPage = () => {
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
                Agents & <span className="text-gold">Brokers</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Everything you need to offer clients a world-class benefits experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Broker Tools */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black text-primary mb-3">Broker Tools</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Powerful tools designed to streamline your workflow and help you serve your clients better.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-card-hover text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-primary mb-2 text-sm">{tool.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BrokerSection />
      </main>
      <Footer />
    </div>
  );
};

export default AgentsPage;
