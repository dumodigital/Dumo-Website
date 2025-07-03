import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Show header on scroll up, hide on scroll down (desktop only)
  useEffect(() => {
    let ticking = false;
    const threshold = 10;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (window.innerWidth >= 1024) { // lg: breakpoint
            if (currentScrollY < threshold) {
              setShowHeader(true);
              // Debug
              // console.log('Show header: at top');
            } else if (currentScrollY < lastScrollY.current) {
              setShowHeader(true);
              // Debug
              // console.log('Show header: scrolling up');
            } else if (currentScrollY > lastScrollY.current) {
              setShowHeader(false);
              // Debug
              // console.log('Hide header: scrolling down');
            }
          } else {
            setShowHeader(true); // Always show on mobile
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute nav className so transform only applies on desktop
  const navClassName = [
    "fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 transition-transform duration-300 ease-in-out",
    isMenuOpen ? "" : "", // always visible if menu is open
    "lg:block",
    showHeader ? "lg:translate-y-0" : "lg:-translate-y-full"
  ].join(" ");

  return (
    <nav className={navClassName}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-0">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/DD.png"
              alt="Dumo Digital"
              className="h-10 w-auto md:h-14 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white/70 font-medium transition-colors duration-200 hover:text-[#7BB9E8] text-lg tracking-wide relative group bg-transparent"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7BB9E8] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 px-8 py-3 bg-gradient-to-r from-[#7BB9E8] to-[#357abd] text-black font-semibold rounded-[40px] shadow-lg hover:from-[#5fa6d6] hover:to-[#357abd] transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-[#7BB9E8] premium-btn"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl animate-fade-in">
            <div className="px-4 py-8 space-y-6 flex flex-col items-center">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-center px-4 py-4 text-white text-2xl font-semibold hover:text-[#7BB9E8] hover:bg-white/10 rounded-2xl transition-all duration-200 tracking-wide group bg-transparent"
                >
                  {item.name}
                  <span className="block h-0.5 w-0 bg-[#7BB9E8] transition-all duration-300 group-hover:w-full mt-2 mx-auto rounded-full"></span>
                </button>
              ))}
              <a
                href="https://calendly.com/charlie-dumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-8 py-4 bg-gradient-to-r from-[#7BB9E8] to-[#357abd] text-black font-semibold text-xl rounded-[40px] shadow-2xl hover:from-[#5fa6d6] hover:to-[#357abd] transition-all duration-300 hover:scale-105 premium-btn"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 