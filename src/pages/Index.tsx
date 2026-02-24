import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ProtectionPlusHighlight from "@/components/ProtectionPlusHighlight";
import ProductsGrid from "@/components/ProductsGrid";
import BrokerSection from "@/components/BrokerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ProtectionPlusHighlight />
        <ProductsGrid />
        <BrokerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
