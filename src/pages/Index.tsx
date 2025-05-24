
import Hero from "@/components/Hero";
import AsSeenOn from "@/components/AsSeenOn";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <AsSeenOn />
      <Services />
      <Stats />
      <About />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
