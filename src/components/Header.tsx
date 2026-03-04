import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "AMETrust® Overview", href: "/ametrust-overview" },
  { label: "Products", href: "/products" },
  { label: "The AME Trust Team", href: "/team" },
  { label: "Agents and Brokers", href: "/agents" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-navy shadow-lg py-2"
          : "bg-navy/95 py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tight text-primary-foreground">
              AME<span className="text-gold">Trust</span>
            </span>
            <span className="text-[10px] md:text-xs font-light tracking-widest uppercase text-primary-foreground/70">
              Benefits
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                location.pathname === link.href
                  ? "text-gold"
                  : "text-primary-foreground/80 hover:text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login Button + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://ame.benefitportal.com/agents/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-md bg-gold hover:bg-gold-dark text-primary-foreground font-bold text-sm shadow-gold transition-all duration-200 hover:scale-[1.02]"
          >
            Broker Login
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground/80 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "text-gold bg-navy-light/20"
                    : "text-primary-foreground/80 hover:text-gold hover:bg-navy-light/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="mt-3 bg-gold hover:bg-gold-dark text-primary-foreground font-bold shadow-gold transition-all duration-200 hover:scale-[1.02] border-none sm:hidden"
            >
              Broker Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
