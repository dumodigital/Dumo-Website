import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
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
      </div>
      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#10151a] flex flex-col justify-between overflow-hidden animate-fade-in">
          {/* Top bar: Logo left, close right */}
          <div className="flex items-center justify-between w-full px-6 pt-6">
            <img src="/images/DD.png" alt="Dumo Digital" className="h-10 w-auto" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 rounded-full bg-[#7BB9E8] text-white text-3xl shadow-lg focus:outline-none"
              aria-label="Close menu"
              style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          {/* Centered menu links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-12">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-3xl font-extrabold tracking-tight transition-all duration-200 group bg-transparent"
                style={{
                  fontFamily: 'Inter, Satoshi, sans-serif',
                  letterSpacing: '0.02em',
                  textShadow: '0 4px 24px #7BB9E8, 0 1.5px 0 #fff',
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
          {/* Get Started button at bottom */}
          <div className="w-full flex justify-center pb-8">
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[90%] max-w-xl text-center px-8 py-4 bg-gradient-to-r from-[#7BB9E8] to-[#357abd] text-black font-extrabold text-2xl rounded-[40px] shadow-2xl hover:from-[#5fa6d6] hover:to-[#357abd] transition-all duration-300 hover:scale-105 premium-btn"
              style={{
                fontFamily: 'Inter, Satoshi, sans-serif',
                letterSpacing: '0.02em',
                boxShadow: '0 0 32px 0 #7BB9E8cc',
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 