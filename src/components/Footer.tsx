import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import AMETrustBenefitsLogo from "@/components/AMETrustBenefitsLogo";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "AMETrust® Overview", href: "/ametrust-overview" },
      { label: "Products", href: "/products" },
      { label: "The AME Trust Team", href: "/team" },
      { label: "Agents & Brokers", href: "/agents" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "GAP Insurance", href: "/products/gap-insurance" },
      { label: "GAP+", href: "/products/gap-plus" },
      { label: "Protection+", href: "/products/protection-plus" },
      { label: "Accident Insurance", href: "/products/accident-insurance" },
      { label: "Critical Illness", href: "/products/critical-illness" },
      { label: "Hospital Indemnity", href: "/products/hospital-indemnity" },
      { label: "Short-Term Disability", href: "/products/short-term-disability" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Mission Banner */}
      <div className="border-b border-navy-light/20">
        <div className="container mx-auto px-4 py-8 text-center">
          <motion.p
            className="text-gold italic text-lg font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            "To make healthcare affordable for every working American through innovative products,
            creative strategies, cutting edge technology and comprehensive wellness initiatives."
          </motion.p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <img src={logoDark} alt="AME Trust Benefits" className="h-12 w-auto" />
              <p className="mt-2 text-sm italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#C1692D" }}>
                Innovative Solutions. Endless Possibilities.
              </p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              <span style={{ fontFamily: "Verdana, Geneva, sans-serif", fontWeight: 900 }}>
                <span style={{ color: "#FFFFFF" }}>AME</span>{" "}
                <span style={{ color: "#C1692D" }}>Trust</span>{" "}
                <span style={{ color: "#FFFFFF" }}>Benefits</span>
              </span>{" "}
              operates as the authorized sales and distribution arm for AMETrust®,
              a Multiple and Multi-Employer Trust encompassing various Employer groups and Associations.
            </p>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light/20">
        <div className="container mx-auto px-4 py-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-3">
          <p className="text-xs text-primary-foreground/50 text-center sm:text-left">
            © {new Date().getFullYear()} AME Trust Benefits. All rights reserved.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/in/jedregen" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-gold transition-colors" aria-label="Jed Regen LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-primary-foreground/50">
              <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Legal Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
