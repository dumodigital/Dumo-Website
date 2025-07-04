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
    <div>
      <PrivacyConsent />
      {/* Persistent grid and noise overlay for seamless, unified background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0V40' stroke='%237BB9E8' stroke-width='0.5'/%3E%3C/svg%3E"),
            url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")
          `,
          backgroundRepeat: 'repeat, repeat',
          backgroundSize: '40px 40px, cover',
          opacity: 0.12,
          zIndex: 0,
        }}
      />
      <Hero />
      <AsSeenOn />
      <Services />
      <Testimonials />
      <Portfolio />
      <Stats />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
