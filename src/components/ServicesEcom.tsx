import React, { useState, useRef, useEffect } from 'react';

const marqueeServices = [
  {
    title: "Store Design & Development",
    description: "Custom Shopify themes, performance optimization, and conversion-focused design that drives sales.",
  },
  {
    title: "Email & SMS Marketing",
    description: "Klaviyo automations, segmentation strategies, and lifecycle campaigns that turn browsers into buyers.",
  },
  {
    title: "Paid Media & SEO",
    description: "Meta and Google Ads management, search optimization, and data-driven growth strategies.",
  },
  {
    title: "Brand Strategy & Creative",
    description: "Brand positioning, creative direction, and content that resonates with your target audience.",
  },
  {
    title: "Analytics & Optimization",
    description: "Performance tracking, A/B testing, and data insights to maximize ROI and growth.",
  },
  {
    title: "Customer Experience",
    description: "UX/UI optimization, customer journey mapping, and retention strategies that build loyalty.",
  }
];

const ServicesEcom: React.FC = () => {
  const [setWidth, setSetWidth] = useState<number>(0);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  // Measure the width of one set of columns for perfect looping
  useEffect(() => {
    if (measureRef.current) {
      setSetWidth(measureRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      {/* Ecom Services Section - Premium Editorial, Infinite Marquee, Modern Copy */}
      <section className="w-full py-20 bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="mb-14 md:mb-20 text-center mt-12">
            <h2 className="text-3xl xs:text-4xl md:text-6xl font-extrabold leading-tight text-white mb-4 tracking-tight" style={{fontFamily: 'Inter, Satoshi, sans-serif', lineHeight: 1.08}}>
              For CPG Brands <span className="text-[#7BB9E8]">Ready to Scale Direct-to-Consumer</span>
            </h2>
            <div className="mx-auto w-24 h-1 bg-[#7BB9E8] rounded-full mb-7" />
            <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mx-auto" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              Digital experiences and growth strategies for ecommerce brands—built to drive sales, loyalty, and scale.
            </p>
          </div>

          {/* Editorial, premium horizontal row, seamless infinite scroll */}
          {/* Hidden measure container */}
          <div className="absolute left-0 top-0 opacity-0 pointer-events-none" style={{position: 'absolute', visibility: 'hidden', height: 0, overflow: 'hidden'}}>
            <div ref={measureRef} className="flex flex-row items-start divide-x divide-[#7BB9E8]/20">
              {marqueeServices.map((service, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-start px-10 py-8 min-w-[260px] max-w-sm"
                  style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
                >
                  <div className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight text-left">{service.title}</div>
                  <div className="text-white/70 text-base md:text-lg font-normal leading-snug text-left">{service.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full overflow-hidden" style={{height: 'auto'}}>
            <div
              ref={marqueeRef}
              className="ecom-marquee flex flex-row items-start divide-x divide-[#7BB9E8]/20"
              style={{
                width: setWidth ? setWidth * 4 : undefined,
                animation: setWidth
                  ? `ecom-marquee-scroll ${setWidth / 25}s linear infinite`
                  : undefined,
              }}
            >
              {[...marqueeServices, ...marqueeServices, ...marqueeServices, ...marqueeServices].map((service, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-start px-10 py-8 min-w-[260px] max-w-sm"
                  style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
                >
                  <div className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight text-left">{service.title}</div>
                  <div className="text-white/70 text-base md:text-lg font-normal leading-snug text-left">{service.description}</div>
                </div>
              ))}
            </div>
            <style>{`
              @keyframes ecom-marquee-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-${setWidth * 2}px); }
              }
            `}</style>
          </div>
          <div className="flex flex-col items-center justify-center mt-8">
            {/* Mobile-only CTA button */}
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:hidden btn premium-btn w-full max-w-xs mx-auto mb-4 justify-center items-center text-white text-lg font-bold shadow-md hover:bg-[#5fa6db] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7BB9E8] focus:ring-offset-2 animate-fadein"
              style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            >
              Scale Your Brand Today
            </a>
            {/* Desktop-only button row (unchanged) */}
            <div className="hidden md:flex flex-row gap-4 w-full justify-center flex-wrap">
              <a
                href="https://www.shopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#181c22] text-white font-bold text-base border-2 border-[#7BB9E8] hover:bg-[#222c38] transition min-w-[140px] justify-center whitespace-nowrap"
                style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
              >
                <img src="/images/shopify-logo-white.png" alt="Shopify" className="h-12 w-12 object-contain" />
                Work With Us on Shopify
              </a>
              <a
                href="https://www.klaviyo.com/partner/signup?utm_source=001Nu00000NqoTKIAZ&utm_medium=partner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#181c22] text-white font-bold text-base border-2 border-[#7BB9E8] hover:bg-[#222c38] transition min-w-[140px] justify-center whitespace-nowrap"
                style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
              >
                <img src="/images/klaviyo-logo-white.png" alt="Klaviyo" className="h-12 w-12 object-contain" />
                Work With Us on Klaviyo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hide scrollbars for horizontal scroll */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default ServicesEcom; 