import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToHome from "@/components/BackToHome";
import ProductsGrid from "@/components/ProductsGrid";
import GapInsuranceHighlight from "@/components/GapInsuranceHighlight";
import { motion } from "framer-motion";
import AMETriangleLogo from "@/components/AMETriangleLogo";

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <BackToHome />
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-black text-primary-foreground mb-4 flex items-center flex-wrap gap-2">
                <AMETriangleLogo variant="dark" size={55} showText={false} />
                <span className="text-gold">Products</span>
              </h1>
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
