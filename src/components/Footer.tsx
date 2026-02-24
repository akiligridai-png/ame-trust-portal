import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "AMETrust® Overview", href: "/ametrust-overview" },
      { label: "Products", href: "/products" },
      { label: "Protection+", href: "/products/protection-plus" },
      { label: "Agents & Brokers", href: "/agents" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Protection+", href: "/products/protection-plus" },
      { label: "GAP & GAP+", href: "/products/gap-insurance" },
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
          <p className="text-gold italic text-lg font-light max-w-3xl mx-auto">
            "To make healthcare affordable for every working American through innovative products,
            creative strategies, cutting edge technology and comprehensive wellness initiatives."
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-black tracking-tight">
                AME<span className="text-gold">Trust</span>
              </span>
              <p className="text-xs tracking-widest uppercase text-primary-foreground/60 mt-0.5">
                Benefits
              </p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              AME Trust Benefits operates as the authorized sales and distribution arm for AMETrust®,
              a Multiple and Multi-Employer Trust encompassing various Employer groups and Associations.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
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
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/50 text-xs mb-0.5">General Inquiries</p>
                  <a
                    href="mailto:info@ametrustbenefits.com"
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    info@ametrustbenefits.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/50 text-xs mb-0.5">Broker Support</p>
                  <a
                    href="mailto:brokers@ametrustbenefits.com"
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    brokers@ametrustbenefits.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/50 text-xs mb-0.5">Client Services</p>
                  <a
                    href="mailto:support@ametrustbenefits.com"
                    className="text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    support@ametrustbenefits.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
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
              <a href="https://www.linkedin.com/company/ametrust" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-gold transition-colors" aria-label="AMETrust LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/ametrust-benefits" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-gold transition-colors" aria-label="AMETrust Benefits LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/ametrust-founder" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-gold transition-colors" aria-label="Founder LinkedIn">
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
