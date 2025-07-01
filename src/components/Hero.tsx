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
      }, 50);
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

  // Accessibility: close menu on Esc, trap focus, prevent background scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
      // Trap focus
      if (e.key === "Tab") {
        const focusableEls = [closeButtonRef.current, ...Array.from(document.querySelectorAll('.mobile-nav-link'))];
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);



  return (
    <div ref={heroRef} className="w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] relative overflow-hidden font-sans" role="region" aria-label="Homepage Hero Banner">
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
      <header className="relative z-30 w-full border-b border-white/5 backdrop-blur-sm">
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
        {/* Mobile Menu Drawer - slides in from right */}
        {menuOpen && (
          <>
            {/* Body scroll lock */}
            <style>{`body { overflow: hidden !important; }`}</style>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden"
              onClick={() => setMenuOpen(false)}
              role="button"
              tabIndex={-1}
              aria-label="Close menu"
            />
                      {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[1001] bg-black/95 backdrop-blur-xl transform translate-x-0 transition-transform duration-300 ease-out md:hidden flex flex-col" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
              {/* Close button */}
              <button
                className="absolute top-6 right-6 p-2 text-white hover:text-[#7BB9E8] transition-colors duration-200 focus:outline-none text-2xl z-[1010]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                ref={closeButtonRef}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeLinecap="round" />
                  <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </button>
              
              {/* Logo */}
              <div className="flex justify-center pt-8 pb-6">
                <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-12 w-auto" />
              </div>
              
              {/* Nav links */}
              <nav className="flex flex-col px-6 flex-1">
                {menuItems.map((item, idx) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-[#7BB9E8]/10 hover:text-[#7BB9E8] transition-all duration-200 tracking-wide focus:outline-none focus:ring-2 focus:ring-[#7BB9E8] focus:ring-inset"
                    onClick={() => setMenuOpen(false)}
                    tabIndex={0}
                    aria-label={item.name}
                    ref={idx === 0 ? firstLinkRef : idx === menuItems.length - 1 ? lastLinkRef : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              
              {/* CTA at the bottom */}
              <div className="p-6 border-t border-white/10">
                <a
                  href="https://calendly.com/charlie-dumo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-6 py-3 bg-gradient-to-r from-[#7BB9E8] to-[#4a90e2] text-black font-semibold text-lg rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7BB9E8] focus:ring-offset-2"
                  style={{boxShadow: '0 4px 32px #7BB9E8aa'}}
                  tabIndex={0}
                  aria-label="Get Started"
                >
                  Get Started
                </a>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Fancy, premium, editorial hero (restored, open layout) */}
      <section className="relative z-10 w-full min-h-[calc(100vh-120px)] flex items-center">
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-8 flex flex-col items-start justify-center animate-fade-in text-left">
          {/* Shopify badge integrated */}
          <div className="flex items-center space-x-4 mb-4 mt-2 animate-slide-in-1">
            <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
              <img
                src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
                alt="Shopify"
                className="h-6 w-auto"
              />
              <span className="text-[#7BB9E8] font-medium text-xs tracking-widest uppercase">Plus Partner</span>
            </div>
          </div>
          {/* Headline with blue accent and creative line breaks */}
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-3 sm:mb-6 relative animate-slide-in-2 text-left">
            <span className="block">Shopify</span>
            <span className="block text-[#7BB9E8] font-extralight">Management</span>
            <span className="block font-extralight">Redefined</span>
          </h1>
          {/* Subheadline as elegant text only, no block */}
          <div className="mb-6 sm:mb-10 animate-slide-in-3 text-left">
            <span className="text-base sm:text-lg text-white/80 font-light" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              {displayText}
              {currentIndex < typewriterText.length && <span className="typewriter-cursor text-[#7BB9E8] animate-pulse">|</span>}
            </span>
          </div>
          {/* Animated, glowing CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-6 sm:mb-10 animate-slide-in-4 text-left w-full max-w-xs sm:max-w-none">
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 sm:px-12 sm:py-5 bg-[#7BB9E8] text-black font-semibold text-base sm:text-lg rounded-[40px] overflow-hidden transition-all duration-300 hover:bg-[#5fa6d6] hover:scale-105 border-2 border-transparent hover:border-[#7BB9E8] ripple w-full sm:w-auto text-center"
            >
              Start Your Project
            </a>
            <a
              href="#portfolio"
              className="px-5 py-2.5 sm:px-12 sm:py-5 border-2 border-[#7BB9E8] text-white font-semibold text-base sm:text-lg rounded-full hover:bg-[#7BB9E8]/10 hover:text-[#7BB9E8] transition-all duration-300 hover:scale-105 backdrop-blur-sm animate-glow ripple w-full sm:w-auto text-center"
            >
              View Our Work
            </a>
          </div>
          {/* Animated stats with shimmer and hover effect */}
          <div className="flex items-center space-x-6 sm:space-x-10 text-white/70 text-sm sm:text-base font-light mt-2 mb-2 animate-slide-in-5 text-left">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold text-[#7BB9E8]">{animatedStats[0]}+</span>
              <span>Stores Managed</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold text-[#7BB9E8]">24/7</span>
              <span>Shopify Support</span>
            </div>
          </div>
        </div>
      </section>
      {/* Animations and microinteractions */}
      <style>{`
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow { animation: fadeIn 2.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
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
      `}</style>
    </div>
  );
};

export default Hero;
