import { useState, useEffect, useRef } from "react";

const typewriterText = "We manage, optimize, and scale your Shopify store so you can focus on what matters most.";

const menuItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const stats = [
  { label: "Client Retention Rate", value: 98, format: "%" },
  { label: "Shopify Support", value: "24/7", format: "" },
  { label: "AOV Increase", value: 34, format: "%" },
];

// Optimized image component with WebP fallback
const OptimizedImage = ({ src, alt, className, loading = "lazy" }: { 
  src: string; 
  alt: string; 
  className?: string; 
  loading?: "lazy" | "eager" 
}) => {
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/, '.webp');
  const optimizedSrc = src.includes('/images/') 
    ? src.replace('/images/', '/images/optimized/') 
    : src;
  
  return (
    <picture>
      <source srcSet={optimizedSrc.replace(/\.(png|jpg|jpeg)$/, '.webp')} type="image/webp" />
      <img 
        src={optimizedSrc} 
        alt={alt} 
        className={className}
        loading={loading}
        decoding="async"
      />
    </picture>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, "24/7", 0]);

  const [ribbonWipe, setRibbonWipe] = useState(0);
  const heroRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const lastLinkRef = useRef(null);

  // Mobile navigation scroll function with proper offset
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const mobileHeaderHeight = 88; // Height of mobile sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - mobileHeaderHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
  };

  // Typewriter effect with ribbon wipe - optimized for performance
  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(typewriterText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
        setRibbonWipe(((currentIndex + 1) / typewriterText.length) * 100);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Optimized stats animation
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepDuration = duration / steps;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats([
        Math.round(98 * progress),
        "24/7",
        Math.round(34 * progress)
      ]);
      
      if (step >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, []);

  // Accessibility: close menu on Esc
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Prevent body scroll when menu is open (no scroll-to-top)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <div id="hero" ref={heroRef} className="hero w-full bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] relative overflow-hidden font-sans pt-0 md:pt-0 mobile-hero-padding" role="region" aria-label="Homepage Hero Banner">
      <style>{`
        @media (max-width: 767px) {
          .mobile-hero-padding {
            padding-top: 72px !important;
          }
        }
      `}</style>
      {/* Parallax luxury background: blue spotlight + faint grid + vignette + diagonal light streak */}
      <div className="absolute left-0 top-0 w-screen h-full pointer-events-none z-0" style={{minWidth: '100vw'}}>
        <div
          className="absolute left-0 top-0 w-screen h-full bg-gradient-to-r from-[#7BB9E8]/30 to-transparent"
          style={{
            minWidth: '100vw',
            left: 0,
            boxShadow: 'none',
            border: 'none',
          }}
        />
        <div
          className="absolute left-[-10%] top-1/4 w-[700px] h-[700px] bg-[#7BB9E8]/10 rounded-full blur-3xl"
          style={{
            minWidth: '100vw',
            left: 0,
            boxShadow: 'none',
            border: 'none',
          }}
        />
        <svg
          className="absolute left-0 top-0 w-screen h-full opacity-10"
          style={{
            minWidth: '100vw',
            left: 0,
            boxShadow: 'none',
            border: 'none',
            zIndex: 0,
          }}
          width="100vw"
          height="100%"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7BB9E8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Diagonal light streak */}
        <div className="absolute -top-32 left-1/4 w-2/3 h-48 bg-gradient-to-tr from-[#7BB9E8]/30 via-transparent to-transparent blur-2xl rotate-[-12deg]" style={{zIndex:1, minWidth: '100vw', left: 0, boxShadow: 'none', border: 'none'}} />
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 60%, #0a0a0a 100%)",
          zIndex: 2,
          minWidth: '100vw',
          left: 0,
          boxShadow: 'none',
          border: 'none',
        }} />
      </div>

      {/* Sticky Header (mobile only) */}
      <header className="lg:hidden sticky top-0 z-30 w-full border-b border-white/5 backdrop-blur-sm mobile-fixed-header">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
          <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-14 w-auto transition-all duration-300" />
          <button
            className="p-2 text-white hover:text-[#7BB9E8] transition-colors duration-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open navigation menu"
            ref={menuButtonRef}
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="7" x2="19" y2="7" stroke="currentColor" strokeLinecap="round" />
              <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeLinecap="round" />
              <line x1="5" y1="17" x2="19" y2="17" stroke="currentColor" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Left-side Mobile Drawer Menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm md:hidden" onClick={() => setMenuOpen(false)} />
          {/* Drawer - full height, scalable, premium hierarchy */}
          <div className="fixed inset-0 z-[999] bg-gradient-to-b from-[#0a0a0a]/90 via-[#10151a]/95 to-[#181c22]/98 backdrop-blur-2xl shadow-2xl rounded-r-3xl border-r border-white/10 flex flex-col md:hidden animate-slide-in-drawer overflow-y-auto" style={{boxShadow: '8px 0 32px 0 #7BB9E844', borderRight: '1.5px solid #7BB9E822', maxWidth: '90vw', width: '340px'}}>
            {/* Faint pattern overlay for depth */}
            <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{background: 'url(/images/pattern.svg) repeat'}} />
            {/* Header: Logo & Close */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 relative z-10">
              <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-8 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 text-white/70 hover:text-[#7BB9E8] transition-colors duration-200 rounded-full hover:bg-white/10 border-0 outline-none focus:outline-none"
                aria-label="Close menu"
                style={{width: 28, height: 28, minWidth: 28, minHeight: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', boxShadow: 'none'}}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeLinecap="round" />
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {/* Navigation Section */}
            <div className="px-7 pt-6 pb-2 flex flex-col gap-2 relative z-10">
              <div className="uppercase text-xs tracking-widest text-white/40 font-semibold mb-2 pl-1" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>Navigation</div>
              <nav className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white text-lg font-semibold tracking-tight hover:text-[#7BB9E8] transition-all duration-200 text-left px-2 py-2 rounded-lg hover:bg-[#7BB9E8]/10 w-full"
                    style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    tabIndex={0}
                    aria-label={item.name}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-2" />
            {/* Support Section */}
            <div className="px-7 pt-2 pb-2 flex flex-col gap-2 relative z-10">
              <div className="uppercase text-xs tracking-widest text-white/40 font-semibold mb-2 pl-1" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>Support</div>
              <a 
                href="tel:847-624-6003" 
                className="w-full text-left text-lg font-extrabold text-[#7BB9E8] pb-1 hover:text-[#5fa6d6] transition-colors duration-200 flex items-center gap-2"
                style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
                aria-label="Call us at 847-624-6003"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                24/7 Shopify Support
              </a>
              <div className="w-full text-left text-white/80 font-medium text-base pb-1 pt-12" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>Ready to scale your business?</div>
              <a
                href="https://calendly.com/charlie-dumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#7BB9E8] to-[#4a90e2] text-black font-bold text-base rounded-xl shadow-lg hover:bg-white transition-all duration-300 hover:scale-105 tracking-wide border border-[#7BB9E8]/20 mt-2"
                style={{boxShadow: '0 4px 16px #7BB9E8aa', fontFamily: 'Inter, Satoshi, sans-serif'}}
                tabIndex={0}
                aria-label="Get Started"
              >
                Get Started
              </a>
            </div>
            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-2" />
            {/* Dumo Digital Logo Section */}
            <div className="flex-1 flex items-center justify-center py-8 relative z-10">
              <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-24 w-auto opacity-90" />
            </div>
            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-2" />
            {/* Connect Section */}
            <div className="px-7 pt-2 pb-2 flex flex-col gap-2 relative z-10">
              <div className="uppercase text-xs tracking-widest text-white/40 font-semibold mb-2 pl-1" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>Connect</div>
              <div className="w-full flex flex-row items-center justify-center gap-4 pb-2">
                <a href="https://www.instagram.com/dumo_digital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 text-white/70 hover:text-[#7BB9E8] hover:bg-white/10 rounded-full transition-all duration-200">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/dumo-digital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-white/70 hover:text-[#7BB9E8] hover:bg-white/10 rounded-full transition-all duration-200">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@dumo.digital" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 text-white/70 hover:text-[#7BB9E8] hover:bg-white/10 rounded-full transition-all duration-200">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="mailto:info@dumodigital.com" aria-label="Email" className="p-2 text-white/70 hover:text-[#7BB9E8] hover:bg-white/10 rounded-full transition-all duration-200">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"/></svg>
                </a>
              </div>
              {/* Partner Logos */}
              <div className="w-full flex flex-row items-center justify-center gap-6 pb-6 relative z-10">
                <img src="/images/ohio-state-logo-white.png" alt="Ohio State Logo" className="h-12 w-auto" />
                <img src="/images/shopify-logo-white.png" alt="Shopify Logo" className="h-10 w-auto" />
              </div>
            </div>
            <style>{`
              @media (max-width: 767px) {
                .animate-slide-in-drawer {
                  animation: slideInDrawer 0.3s cubic-bezier(.4,0,.2,1) both;
                }
                @keyframes slideInDrawer {
                  from { transform: translateX(-100%); opacity: 0; }
                  to { transform: translateX(0); opacity: 1; }
                }
              }
            `}</style>
          </div>
        </>
      )}

      {/* Fancy, premium, editorial hero (restored, open layout) */}
      <section className="hero relative z-10 w-full flex flex-col justify-center items-center min-h-screen pt-0 pb-0 mb-0" style={{ paddingBottom: '300vh' }}>
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8 flex flex-col items-start justify-center text-left pt-0 pb-0 mb-0 md:mb-20">
          {/* Shopify badge integrated */}
          <div className="flex items-center space-x-4 mb-10 mt-10">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
              <img
                src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
                alt="Shopify"
                className="h-6 md:h-8 w-auto"
              />
              <span className="text-[#7BB9E8] font-medium text-xs md:text-sm tracking-widest uppercase">Plus Partner</span>
            </div>
          </div>
          {/* Headline with blue accent and creative line breaks, each line animated */}
          <h1 className="text-6xl md:text-9xl font-bold text-white leading-[1.05] tracking-tight mb-3 md:mb-8 relative text-left">
            <span key="hero-shopify" className="block animate-fade-in-hero opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>Shopify</span>
            <span key="hero-management" className="block text-[#7BB9E8] font-extralight animate-fade-in-hero opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>Management</span>
            <span key="hero-redefined" className="block font-extralight animate-fade-in-hero opacity-0" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>Redefined</span>
          </h1>
          {/* Subheadline as elegant text only, no block */}
          <div className="mb-4 md:mb-8 text-left animate-fade-in-hero opacity-0" style={{ animationDelay: '2.0s', animationFillMode: 'forwards' }}>
            <span className="text-base md:text-xl text-white/80 font-light" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              {displayText}
              {currentIndex < typewriterText.length && <span className="typewriter-cursor text-[#7BB9E8]">|</span>}
            </span>
          </div>
          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-8 mb-4 md:mb-8 text-left w-full max-w-xs md:max-w-none animate-fade-in-hero opacity-0" style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 md:px-16 md:py-6 bg-[#7BB9E8] text-black font-semibold text-base md:text-xl rounded-[40px] overflow-hidden transition-all duration-300 hover:bg-[#5fa6d6] hover:scale-105 border-2 border-transparent hover:border-[#7BB9E8] w-full md:w-auto text-center"
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              className="px-5 py-2.5 md:px-16 md:py-6 border-2 border-[#7BB9E8] text-white font-semibold text-base md:text-xl rounded-full hover:bg-[#7BB9E8]/10 hover:text-[#7BB9E8] transition-all duration-300 hover:scale-105 w-full md:w-auto text-center"
            >
              View Our Work
            </a>
          </div>
          {/* Stats */}
          <div className="flex items-center space-x-6 md:space-x-12 text-white/70 text-sm md:text-lg font-light mt-2 mb-2 md:mb-0 pb-0 text-left">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xl md:text-3xl font-bold text-[#7BB9E8]">{animatedStats[0]}%</span>
              <span>Client Retention Rate</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xl md:text-3xl font-bold text-[#7BB9E8]">{animatedStats[1]}</span>
              <span>Shopify Support</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xl md:text-3xl font-bold text-[#7BB9E8]">{animatedStats[2]}%</span>
              <span>AOV Increase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-hero {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-hero {
          animation: fade-in-hero 0.8s ease-out;
        }
        @media (max-width: 767px) {
          .mobile-fixed-header {
            position: fixed !important;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
