import Hero from "@/components/Hero";
import AsSeenOn from "@/components/AsSeenOn";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PrivacyConsent from "../components/ui/PrivacyConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <PrivacyConsent />
      <Hero />
      <AsSeenOn />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
