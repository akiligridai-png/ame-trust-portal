import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { Check, Shield, HeartPulse, Smartphone, DollarSign, Users, TrendingDown, Stethoscope, Activity } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import heroImg from "@/assets/protection-plus-hero.jpg";
import telemedicineImg from "@/assets/telemedicine.jpg";

const employerBenefits = [
  { benefit: "Health & Wellness Program", detail: "Net Zero Cost to put in place" },
  { benefit: "Employee Attraction & Retention", detail: "Valuable tool for attracting and retaining high-quality employees" },
  { benefit: "FICA Tax Savings", detail: "$561.60 annual net reduction per enrolled employee" },
  { benefit: "Group Health Renewal Strategy", detail: "Features designed to lower group health insurance renewals" },
];

const employeeBenefits = [
  { benefit: "Dedicated Health Coach", detail: "Live, dedicated, medically licensed health professionals" },
  { benefit: "First Dollar Coverage", detail: "Hospital bill coverage for employees and dependents" },
  { benefit: "Unlimited Telemedicine", detail: "Including mental health support for employees and dependents" },
  { benefit: "Net Zero Cost", detail: "To most employees — uses subsidies from tax savings" },
  { benefit: "Benefit Bank", detail: "Most employees will see additional dollars accumulated" },
  { benefit: "Renewal Strategy", detail: "Strategies to help keep costs the same or lower" },
];

const planOptions = [
  { icon: Shield, name: "MEC Plan", desc: "Minimum Essential Coverage for employer compliance" },
  { icon: HeartPulse, name: "Hospital Indemnity", desc: "Fixed daily cash benefits for hospital stays" },
  { icon: Activity, name: "GAP Coverage", desc: "Covers expenses primary insurance doesn't" },
  { icon: Shield, name: "MEC + Hospital Indemnity", desc: "Combined coverage for comprehensive protection" },
];

const ProtectionPlusPage = () => {
  return (
    <ProductDetailLayout
      title="Protection"
      titleAccent="+"
      subtitle="An employer-sponsored Health and Wellness Program meticulously administered by AMETrust®. Designed to complement — not replace — existing health insurance or voluntary benefits."
      heroImage={heroImg}
      heroImageAlt="Employer and employee shaking hands with financial growth chart"
    >
      {/* What is Protection+ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-gold/10 text-gold border border-gold/20">
                Flagship Product
              </span>
              <h2 className="text-3xl font-black text-primary mb-4">
                What is Protection<span className="text-gold">+</span>?
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Protection+ is an employer Health and Wellness Program administered by AMETrust®. The program does not replace existing health insurance or voluntary benefits — it enhances them.
              </p>
              <div className="p-5 rounded-lg bg-surface border border-border mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-gold" />
                  <p className="text-primary font-bold text-lg">Net Zero Cost to the Employer</p>
                </div>
                <p className="text-gold font-black text-2xl">
                  $561.60 <span className="text-muted-foreground font-normal text-sm">annual FICA tax savings per enrolled employee</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The program is structured to incur net zero cost for most employees, utilizing subsidies from tax savings. Most employees will see additional dollars accumulated in a "benefit bank."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={telemedicineImg}
                alt="Employee accessing telemedicine services"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Employer vs Employee Benefits Table */}
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
              Benefits of Protection<span className="text-gold">+</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive comparison of how Protection+ benefits both employers and employees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Employer Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden border border-border shadow-card bg-card"
            >
              <div className="bg-primary px-6 py-4">
                <h3 className="text-lg font-bold text-primary-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-gold" />
                  Employer Benefits
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-primary">Benefit</TableHead>
                    <TableHead className="font-bold text-primary">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employerBenefits.map((item) => (
                    <TableRow key={item.benefit}>
                      <TableCell className="font-semibold text-primary">{item.benefit}</TableCell>
                      <TableCell className="text-muted-foreground">{item.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>

            {/* Employee Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden border border-border shadow-card bg-card"
            >
              <div className="bg-gold px-6 py-4">
                <h3 className="text-lg font-bold text-primary-foreground flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-primary-foreground" />
                  Employee Benefits
                </h3>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-primary">Benefit</TableHead>
                    <TableHead className="font-bold text-primary">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeeBenefits.map((item) => (
                    <TableRow key={item.benefit}>
                      <TableCell className="font-semibold text-primary">{item.benefit}</TableCell>
                      <TableCell className="text-muted-foreground">{item.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-3">
              What's Included in Protection<span className="text-gold">+</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of benefits customizable for employer groups. Choose the plan that fits your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {planOptions.map((plan, i) => (
              <motion.div
                key={plan.name}
                className="p-6 rounded-xl bg-card border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-bold text-primary mb-2">{plan.name}</h4>
                <p className="text-xs text-muted-foreground">{plan.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional inclusions */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {[
              { icon: Stethoscope, title: "Telehealth Services", desc: "Unlimited Urgent Care, counseling, and psychiatric services via Telehealth." },
              { icon: HeartPulse, title: "Personal Health Coaching", desc: "Provided by a licensed Health Care Professional via the Allied Wellness platform." },
              { icon: Smartphone, title: "Allied Wellness App", desc: "Access to program features and premium content. No extra cost to add dependents." },
            ].map((item, i) => (
              <div key={item.title} className="flex items-start gap-4 p-5 rounded-lg bg-surface border border-border">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </ProductDetailLayout>
  );
};

export default ProtectionPlusPage;
