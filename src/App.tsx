import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AMETrustOverviewPage from "./pages/AMETrustOverviewPage";
import TeamPage from "./pages/TeamPage";
import ProductsPage from "./pages/ProductsPage";
import ProtectionPlusPage from "./pages/ProtectionPlusPage";
import GapInsurancePage from "./pages/GapInsurancePage";
import AccidentInsurancePage from "./pages/AccidentInsurancePage";
import CriticalIllnessPage from "./pages/CriticalIllnessPage";
import HospitalIndemnityPage from "./pages/HospitalIndemnityPage";
import ShortTermDisabilityPage from "./pages/ShortTermDisabilityPage";
import AgentsPage from "./pages/AgentsPage";
import BrokerAppointmentPage from "./pages/BrokerAppointmentPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ametrust-overview" element={<AMETrustOverviewPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/protection-plus" element={<ProtectionPlusPage />} />
          <Route path="/products/gap-insurance" element={<GapInsurancePage />} />
          <Route path="/products/accident-insurance" element={<AccidentInsurancePage />} />
          <Route path="/products/critical-illness" element={<CriticalIllnessPage />} />
          <Route path="/products/hospital-indemnity" element={<HospitalIndemnityPage />} />
          <Route path="/products/short-term-disability" element={<ShortTermDisabilityPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/broker-appointment" element={<BrokerAppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
