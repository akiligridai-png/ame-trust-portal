import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductDetailLayoutProps {
  title: string;
  titleAccent?: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  children: React.ReactNode;
}

const ProductDetailLayout = ({
  title,
  titleAccent,
  subtitle,
  heroImage,
  heroImageAlt,
  children,
}: ProductDetailLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-primary/80" />
          <div className="relative container mx-auto px-4">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-primary-foreground/60 hover:text-gold">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/products" className="text-primary-foreground/60 hover:text-gold">
                      Products
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/40" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gold font-semibold">
                    {titleAccent ? `${title}${titleAccent}` : title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-4">
                {title}
                {titleAccent && <span className="text-gold">{titleAccent}</span>}
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl">{subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        {children}

        {/* CTA Banner */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-black text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Contact us today to learn how AME Trust Benefits can help protect you and your employees.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-primary-foreground font-bold px-8 shadow-gold transition-all duration-200 hover:scale-[1.02]"
                >
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8"
                >
                  <Link to="/products">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    All Products
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailLayout;
