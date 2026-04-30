import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import ProductsGrid from "@/components/ProductsGrid";
import GapInsuranceHighlight from "@/components/GapInsuranceHighlight";
import { motion } from "framer-motion";
import ameLogoDark from "@/assets/ame-logo-dark-transparent.png";

const ProductsPage = () => {
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
                <h1 className="text-4xl sm:text-5xl font-black text-gold">Products</h1>
              </div>
              <p className="text-lg text-primary-foreground/80">
                Comprehensive benefits solutions designed to protect what matters most.
              </p>
            </motion.div>
          </div>
        </section>

        <GapInsuranceHighlight />
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
