import Navigation from "@/components/ui/Navigation";
import Hero from "@/components/Hero";
import AsSeenOn from "@/components/AsSeenOn";
import Services from "@/components/Services";
import ServicesEcom from "@/components/ServicesEcom";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PrivacyConsent from "../components/ui/PrivacyConsent";

const Index = () => {
  return (
    <div>
      <PrivacyConsent />
      <Navigation />
      <Hero />
      <AsSeenOn />
      <Services />
      <Portfolio />
      <ServicesEcom />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
