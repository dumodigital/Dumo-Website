import { useState, useEffect, useRef } from "react";

const typewriterText = "We manage, optimize, and scale your Shopify store so you can focus on what matters most.";

const menuItems = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const stats = [
  { label: "Stores Managed", value: 500 },
  { label: "Revenue Generated", value: 50 },
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0]);

  const [ribbonWipe, setRibbonWipe] = useState(0);
  const heroRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const lastLinkRef = useRef(null);

  // Typewriter effect with ribbon wipe
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

  // Animated stats
  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      return setInterval(() => {
        setAnimatedStats((prev) => {
          const next = [...prev];
          if (i === 0 && next[0] < stat.value) next[0] += 5;
          if (i === 1 && next[1] < stat.value) next[1] += 1;
          return next;
        });
      }, 20);
    });
    return () => intervals.forEach(clearInterval);
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

  // Prevent body scroll when menu is open
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
    <div ref={heroRef} className="hero w-full bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] relative overflow-hidden font-sans" role="region" aria-label="Homepage Hero Banner">
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

      {/* Header */}
      <header className="sticky top-0 z-30 w-full border-b border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
          <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-14 w-auto transition-all duration-300" />
          <nav className="hidden md:flex items-center space-x-12" aria-label="Main Navigation">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/50 hover:text-white font-light transition-all duration-300 text-sm tracking-wide relative group"
                tabIndex={0}
                aria-label={item.name}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7BB9E8] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 px-8 py-3 bg-[#7BB9E8] text-black font-medium text-sm tracking-wide hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
              tabIndex={0}
              aria-label="Get Started"
            >
              Get Started
            </a>
          </nav>
          <button
            className="md:hidden p-2 text-white hover:text-[#7BB9E8] transition-colors duration-200 focus:outline-none"
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
        
        {/* Mobile Menu - Left Side Drawer */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <div className="md:hidden fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-[#0a0a0a] via-[#10151a] to-[#181c22] border-r border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-out rounded-r-3xl backdrop-blur-lg" style={{boxShadow: '0 8px 32px #7BB9E833', borderRight: '1.5px solid #7BB9E822'}}>
              <div className="flex flex-col h-full relative">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-10 w-auto" />
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-1.5 text-white/70 hover:text-[#7BB9E8] transition-colors duration-200 rounded-full hover:bg-white/10 border border-[#7BB9E8]/30 shadow-sm"
                    aria-label="Close menu"
                    style={{width: 36, height: 36, minWidth: 36, minHeight: 36, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeLinecap="round" />
                      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                {/* Navigation */}
                <nav className="flex-1 px-6 py-8 space-y-2">
                  {menuItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-white font-bold text-2xl py-4 px-4 rounded-xl hover:bg-[#7BB9E8]/10 hover:text-[#7BB9E8] transition-all duration-200 tracking-wide border-l-4 border-transparent hover:border-[#7BB9E8] shadow-sm"
                      onClick={() => setMenuOpen(false)}
                      tabIndex={0}
                      aria-label={item.name}
                      style={{ animationDelay: `${index * 0.08 + 0.1}s` }}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                {/* Impact Section */}
                <div className="px-6 pb-32 pt-4">
                  <div className="bg-white/5 rounded-2xl p-4 mb-2 shadow-inner border border-white/10">
                    <h3 className="text-white/60 text-xs font-semibold mb-2 tracking-widest uppercase">Our Impact</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-xs">24/7 Shopify Support</span>
                        <span className="text-[#7BB9E8] font-bold text-base">Yes</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sticky CTA at Bottom */}
                <div className="absolute left-0 bottom-0 w-full px-6 pb-8 pt-4 bg-gradient-to-t from-[#10151a]/95 to-transparent z-50 flex flex-col gap-3 rounded-br-3xl">
                  <a
                    href="https://calendly.com/charlie-dumo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-[#7BB9E8] to-[#4a90e2] text-black font-extrabold text-lg rounded-2xl shadow-2xl hover:bg-white transition-all duration-300 hover:scale-105 tracking-wide border-2 border-[#7BB9E8]/30"
                    style={{boxShadow: '0 8px 32px #7BB9E8aa'}}
                    tabIndex={0}
                    aria-label="Start Your Project"
                  >
                    Start Your Project
                  </a>
                  <a
                    href="https://calendly.com/charlie-dumo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-4 bg-transparent text-[#7BB9E8] font-extrabold text-lg rounded-2xl border-2 border-[#7BB9E8] shadow hover:bg-[#7BB9E8]/10 hover:text-white transition-all duration-300 hover:scale-105 tracking-wide"
                    tabIndex={0}
                    aria-label="Get Started Today"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Fancy, premium, editorial hero (restored, open layout) */}
      <section className="hero relative z-10 w-full flex flex-col justify-center items-center min-h-screen pt-0 pb-0 mb-0" style={{ paddingBottom: '300vh' }}>
        <div className="max-w-5xl mx-auto w-full px-4 md:px-8 flex flex-col items-start justify-center text-left pt-0 pb-0 mb-0 md:mb-20">
          {/* Shopify badge integrated */}
          <div className="flex items-center space-x-4 mb-10 mt-10">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              <img
                src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
                alt="Shopify"
                className="h-6 w-auto"
              />
              <span className="text-[#7BB9E8] font-medium text-xs tracking-widest uppercase">Plus Partner</span>
            </div>
          </div>
          {/* Headline with blue accent and creative line breaks, each line animated */}
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-3 md:mb-6 relative text-left">
            <span key="hero-shopify" className="block animate-fade-in-hero opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>Shopify</span>
            <span key="hero-management" className="block text-[#7BB9E8] font-extralight animate-fade-in-hero opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>Management</span>
            <span key="hero-redefined" className="block font-extralight animate-fade-in-hero opacity-0" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>Redefined</span>
          </h1>
          {/* Subheadline as elegant text only, no block */}
          <div className="mb-4 md:mb-6 text-left animate-fade-in-hero opacity-0" style={{ animationDelay: '2.0s', animationFillMode: 'forwards' }}>
            <span className="text-base md:text-lg text-white/80 font-light" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              {displayText}
              {currentIndex < typewriterText.length && <span className="typewriter-cursor text-[#7BB9E8]">|</span>}
            </span>
          </div>
          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4 md:mb-6 text-left w-full max-w-xs md:max-w-none">
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 md:px-12 md:py-5 bg-[#7BB9E8] text-black font-semibold text-base md:text-lg rounded-[40px] overflow-hidden transition-all duration-300 hover:bg-[#5fa6d6] hover:scale-105 border-2 border-transparent hover:border-[#7BB9E8] w-full md:w-auto text-center"
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              className="px-5 py-2.5 md:px-12 md:py-5 border-2 border-[#7BB9E8] text-white font-semibold text-base md:text-lg rounded-full hover:bg-[#7BB9E8]/10 hover:text-[#7BB9E8] transition-all duration-300 hover:scale-105 w-full md:w-auto text-center"
            >
              View Our Work
            </a>
          </div>
          {/* Stats */}
          <div className="flex items-center space-x-6 md:space-x-10 text-white/70 text-sm md:text-base font-light mt-2 mb-2 md:mb-0 pb-0 text-left">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold text-[#7BB9E8]">{animatedStats[0]}+</span>
              <span>Stores Managed</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold text-[#7BB9E8]">24/7</span>
              <span>Shopify Support</span>
            </div>
          </div>
        </div>
      </section>
      {/* Animations and microinteractions */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow { animation: fadeIn 2.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-hero { animation: fadeInHero 1.5s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
        @keyframes fadeInHero { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: none; } }
        .animate-glow { box-shadow: 0 0 24px 0 #7BB9E8aa, 0 2px 8px 0 #0003; }
        .animate-countup { transition: color 0.3s; }
        .animate-accent-bar { animation: accentBar 1.2s cubic-bezier(.4,0,.2,1) 0.5s forwards, accentGlow 2.5s infinite alternate; }
        .animate-accent-bar-vertical { animation: accentBarVertical 2.5s infinite alternate; }
        @keyframes accentBar { from { width: 0; } to { width: 4rem; } }
        @keyframes accentGlow { from { box-shadow: 0 0 8px 0 #7BB9E8; } to { box-shadow: 0 0 24px 4px #7BB9E8; } }
        @keyframes accentBarVertical { 0% { box-shadow: 0 0 0 0 #7BB9E8; } 100% { box-shadow: 0 0 32px 8px #7BB9E8; } }
        .animate-slide-in-1 { animation: fadeIn 1.1s 0.1s both; }
        .animate-slide-in-2 { animation: fadeIn 1.1s 0.3s both; }
        .animate-slide-in-3 { animation: fadeIn 1.1s 0.5s both; }
        .animate-slide-in-4 { animation: fadeIn 1.1s 0.7s both; }
        .animate-slide-in-5 { animation: fadeIn 1.1s 0.9s both; }
        .ripple { position: relative; overflow: hidden; }
        .ripple:after { content: ''; position: absolute; left: 50%; top: 50%; width: 0; height: 0; background: rgba(123,185,232,0.2); border-radius: 100%; transform: translate(-50%, -50%); transition: width 0.4s, height 0.4s; z-index: 0; }
        .ripple:active:after { width: 200px; height: 200px; transition: 0s; }
        .animate-glass-float { animation: glassFloat 1.5s cubic-bezier(.4,0,.2,1) both; }
        @keyframes glassFloat { from { opacity: 0; transform: translateY(60px) scale(0.98); filter: blur(8px); } to { opacity: 1; transform: none; filter: blur(0); } }
        .animate-bounce-slow {
          animation: none;
        }
        .mobile-drawer-enter {
          transform: translateX(-100%);
        }
        .mobile-drawer-enter-active {
          transform: translateX(0);
          transition: transform 300ms ease-out;
        }
        .mobile-drawer-exit {
          transform: translateX(0);
        }
        .mobile-drawer-exit-active {
          transform: translateX(-100%);
          transition: transform 300ms ease-in;
        }
      `}</style>
    </div>
  );
};

export default Hero;
