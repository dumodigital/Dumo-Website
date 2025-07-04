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
  const [showStickyHeader, setShowStickyHeader] = useState(true);
  const lastScrollY = useRef(0);

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

  // Sticky header on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setShowStickyHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowStickyHeader(false); // scrolling down
      } else {
        setShowStickyHeader(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="hero w-full bg-gradient-to-b from-[#181c22] via-[#10151a] to-[#181c22] relative overflow-hidden font-sans pt-0 md:pt-0 mobile-hero-padding" role="region" aria-label="Homepage Hero Banner">
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
        {/* Section bottom fade for smooth transition to Testimonials */}
        <div className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none" style={{background: 'linear-gradient(to bottom, rgba(24,28,34,0) 0%, #181c22 80%, #181c22 100%)'}} />
      </div>

      {/* Sticky Header (fixed on mobile, sticky on desktop) */}
      <header className="sticky top-0 z-30 w-full border-b border-white/5 backdrop-blur-sm mobile-fixed-header">
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
                className="p-1.5 text-white/70 hover:text-[#7BB9E8] transition-colors duration-200 rounded-full hover:bg-white/10 border border-[#7BB9E8]/20 shadow-sm"
                aria-label="Close menu"
                style={{width: 28, height: 28, minWidth: 28, minHeight: 28, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeLinecap="round" />
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {/* Navigation Section */}
            <div className="px-7 pt-6 pb-2 flex flex-col gap-2 relative z-10">
              <div className="uppercase text-xs tracking-widest text-white/40 font-semibold mb-2 pl-1">Navigation</div>
              <nav className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white text-lg font-semibold tracking-tight hover:text-[#7BB9E8] transition-all duration-200 text-left px-2 py-2 rounded-lg hover:bg-[#7BB9E8]/10 w-full"
                    onClick={() => setMenuOpen(false)}
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
              <div className="uppercase text-xs tracking-widest text-white/40 font-semibold mb-2 pl-1">Support</div>
              <div className="w-full text-left text-lg font-extrabold text-[#7BB9E8] pb-1">24/7 Shopify Support</div>
              <div className="w-full text-left text-white/80 font-medium text-base pb-1">Real people, real results.</div>
              <a
                href="https://calendly.com/charlie-dumo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#7BB9E8] to-[#4a90e2] text-black font-bold text-base rounded-xl shadow-lg hover:bg-white transition-all duration-300 hover:scale-105 tracking-wide border border-[#7BB9E8]/20 mt-2"
                style={{boxShadow: '0 4px 16px #7BB9E8aa'}}
                tabIndex={0}
                aria-label="Get Started"
              >
                Get Started
              </a>
            </div>
            {/* Divider */}
            <div className="w-full h-px bg-white/10 my-2" />
            {/* Connect Section */}
            <div className="px-7 pt-2 pb-2 flex flex-col gap-2 relative z-10">
              <div className="uppercase text-xs tracking-widest text-white/40 font-semibold mb-2 pl-1">Connect</div>
              <div className="w-full flex flex-row items-center justify-center gap-4 pb-2">
                <a href="https://www.instagram.com/dumo_digital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 text-white/70 hover:text-[#7BB9E8] hover:bg-white/10 rounded-full transition-all duration-200">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.77.312 4.01.54c-.77.23-1.42.54-2.07 1.19-.65.65-.96 1.3-1.19 2.07C.312 4.77.128 5.77.07 7.052.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.282.242 2.282.47 3.042.23.77.54 1.42 1.19 2.07.65.65 1.3.96 2.07 1.19.76.228 1.76.412 3.042.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.282-.058 2.282-.242 3.042-.47.77-.23 1.42-.54 2.07-1.19.65-.65.96-1.3 1.19-2.07.228-.76.412-1.76.47-3.042.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.282-.242-2.282-.47-3.042-.23-.77-.54-1.42-1.19-2.07-.65-.65-1.3-.96-2.07-1.19-.76-.228-1.76-.412-3.042-.47C15.668.012 15.264 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.162A3.999 3.999 0 1 1 12 8.001a3.999 3.999 0 0 1 0 7.999zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/dumo-digital/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-white/70 hover:text-[#7BB9E8] hover:bg-white/10 rounded-full transition-all duration-200">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                </a>
                <a href="mailto:info@dumodigital.com" aria-label="Email" className="p-2 text-white/70 hover:text-[#7BB9E8] hover:bg-white/10 rounded-full transition-all duration-200">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z"/></svg>
                </a>
              </div>
              {/* Partner Logos */}
              <div className="w-full flex flex-row items-center justify-center gap-6 pb-6 relative z-10">
                <img src="/images/buckeye.png" alt="Ohio State Logo" className="h-12 w-auto" />
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
