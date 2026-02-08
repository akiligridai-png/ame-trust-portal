import ProductDetailLayout from "@/components/ProductDetailLayout";
import { motion } from "framer-motion";
import { Check, Hospital, Scan, Bone, Siren, Stethoscope, AlertTriangle } from "lucide-react";
import heroImg from "@/assets/accident-insurance-hero.jpg";

const coverageCategories = [
  {
    icon: Hospital,
    title: "Hospital Care",
    items: [
      "Admission to the hospital or intensive care unit",
      "Overnight stays in the hospital",
      "Lodging fees for family members who travel to be with you",
    ],
  },
  {
    icon: Scan,
    title: "Diagnostic Services",
    items: ["CT Scans or MRIs", "X-Rays"],
  },
  {
    icon: Bone,
    title: "Specific Injuries & Conditions",
    items: [
      "Concussion",
      "Emergency repair for a broken tooth",
      "Treatment for a gunshot wound",
      "Cuts requiring stitches",
      "Burns requiring skin grafts",
      "Prosthetic devices",
      "Repair of torn tendons, ligaments, rotator cuffs, or knee cartilage",
      "Dislocation of a joint",
      "Bone fractures",
    ],
  },
  {
    icon: Siren,
    title: "Emergency & Treatment Services",
    items: [
      "Emergency room visits",
      "Transportation by ambulance",
      "Prescription for medical appliances (e.g., pacemaker)",
      "Blood transfusions",
      "Treatment at an Urgent Care facility",
      "Surgery",
    ],
  },
  {
    icon: Stethoscope,
    title: "Post-Treatment Care",
    items: [
      "Epidural pain management",
      "Follow-up physician visits",
      "Prescribed therapy services",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Catastrophic Events",
    items: [
      "Death due to an accident",
      "Loss of a limb due to dismemberment",
      "Loss of use of a limb",
      "Loss of an eye or eyesight",
    ],
  },
];

const AccidentInsurancePage = () => {
  return (
    <ProductDetailLayout
      title="Accident Insurance"
      subtitle="Financial protection against unexpected costs from injuries. Receive fixed payments directly — regardless of your medical expenses."
      heroImage={heroImg}
      heroImageAlt="Person safely enjoying outdoor hiking activity"
    >
      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black text-primary mb-4">
                What is Accident Insurance?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Accident insurance from AME Trust provides financial protection against the unexpected costs associated with injuries. It offers a fixed amount of money for a wide array of unforeseen injuries and treatments, paid directly to the insured, regardless of their medical expenses.
              </p>
              <div className="p-5 rounded-lg bg-surface border border-border">
                <p className="text-sm text-muted-foreground mb-1">Benefits Received</p>
                <p className="text-primary font-bold text-lg">
                  A <span className="text-gold">fixed amount of money</span> which varies depending on the specific injury and treatment received
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-3">What's Covered</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage across a wide range of accident-related scenarios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coverageCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <cat.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-bold text-primary text-sm">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-primary mb-4">How It Works</h2>
            <div className="p-6 rounded-xl bg-surface border border-border">
              <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">Example Scenario</p>
              <p className="text-muted-foreground leading-relaxed">
                Mark is involved in a car accident, resulting in an emergency room visit where an X-Ray confirms a broken arm. After filing a claim with his AME Trust Accident policy, Mark receives payments including $200 for his fracture, a payment for his treatment, and a payment for the X-Ray. These payments are provided irrespective of his medical expenses, giving Mark financial relief to focus on his recovery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </ProductDetailLayout>
  );
};

export default AccidentInsurancePage;
