import React, { useRef, useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Custom Shopify Store Design",
    description:
      "Bespoke, high-converting Shopify stores tailored to your brand and audience.",
  },
  {
    number: "02",
    title: "Ongoing Support & Growth",
    description:
      "Proactive support, optimization, and strategy to keep your store performing at its best.",
  },
  {
    number: "03",
    title: "Shopify Plus Integrations",
    description:
      "Seamless integrations, automation, and advanced features for ambitious brands.",
  },
];

const marqueeServices = [
  {
    title: "Frictionless Checkout",
    description: "Streamline every step from cart to confirmation for higher conversion."
  },
  {
    title: "Smart Subscriptions",
    description: "Unlock recurring revenue with seamless, flexible subscription flows."
  },
  {
    title: "Retention Engine",
    description: "Automated journeys that turn first-time buyers into loyal fans."
  },
  {
    title: "Omnichannel Sync",
    description: "Connect your DTC, retail, and marketplace for unified growth."
  },
  {
    title: "Real-Time Insights",
    description: "Live analytics and reporting to power every decision you make."
  },
  {
    title: "Brand Magnetism",
    description: "Story-driven creative that makes your brand impossible to ignore."
  }
];

const DESKTOP_HEADLINE_MIN_HEIGHT = '4.5rem'; // Adjust as needed for perfect alignment

const Services: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [setWidth, setSetWidth] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);

  // Calculate the width of one set of services for seamless animation
  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2); // since we repeat twice
    }
  }, []);

  // Measure the width of one set of columns for perfect looping
  useEffect(() => {
    if (measureRef.current) {
      setSetWidth(measureRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <section
        id="services"
        className="w-full py-10 md:py-28 font-sans bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] min-h-[80vh] flex flex-col justify-center mt-8"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-10 md:mb-20 mt-16 animate-fadein">
            <span className="block uppercase tracking-[0.25em] text-xs text-neutral-400 font-semibold mb-4 pl-1 letter-spacing-wide">What We Do</span>
            <h2 className="text-[2.1rem] xs:text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white mb-3 max-w-3xl" style={{fontFamily: 'Inter, Satoshi, sans-serif', lineHeight: 1.1}}>
              Your brand and our model.<br />
              <span className="bg-gradient-to-r from-[#7BB9E8] to-[#4A90E2] bg-clip-text text-transparent italic font-semibold">The perfect match.</span>
            </h2>
            <div className="w-20 h-1 rounded-full bg-[#7BB9E8] mb-6 mt-2" />
            <p className="text-base xs:text-lg text-white/80 max-w-xl font-light">
              Your vision, realized—exceptional Shopify stores, ongoing growth, and expert support from a team trusted by leading brands.
            </p>
          </div>
          {/* Vertical timeline/stepper for mobile, grid for desktop */}
          <div className="block md:hidden relative pl-8">
            {/* Vertical connector line */}
            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-[#7BB9E8]/30 z-0" style={{borderRadius: '2px'}} />
            <div className="flex flex-col gap-12 relative z-10">
              {services.map((service, idx) => (
                <div key={service.number} className="flex items-start gap-4 relative">
                  {/* Step circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#7BB9E8] flex items-center justify-center text-white font-bold text-base shadow-md mb-1" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      {service.number}
                    </div>
                    {/* Connector for all but last */}
                    {idx !== services.length - 1 && (
                      <div className="flex-1 w-0.5 bg-[#7BB9E8]/30 mt-1" style={{minHeight: '2.5rem', borderRadius: '2px'}} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{service.title}</h3>
                    <p className="text-base text-white/80 leading-relaxed font-medium mb-1">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop grid unchanged, but with aligned headlines */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col shadow-lg min-h-[240px] transition-all duration-200 hover:border-[#7BB9E8] group"
                style={{ boxShadow: "0 4px 24px 0 rgba(20,40,80,0.08)" }}
              >
                <span className="text-sm text-neutral-400 font-mono mb-2">{service.number}</span>
                <div style={{ minHeight: DESKTOP_HEADLINE_MIN_HEIGHT, display: 'flex', alignItems: 'flex-end' }}>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 group-hover:text-[#7BB9E8] transition-colors duration-200" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{service.title}</h3>
                </div>
                <div className="w-full h-px bg-neutral-200 mb-4" />
                <p className="text-base text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          {/* CTA Button */}
          <div className="flex justify-center mt-8">
            <a
              href="#contact"
              className="inline-block px-8 py-4 rounded-full bg-[#7BB9E8] text-white text-lg font-bold shadow-md hover:bg-[#5fa6db] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7BB9E8] focus:ring-offset-2"
              style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Ecom Services Section - Premium Editorial, Infinite Marquee, Modern Copy */}
      <section className="w-full py-24 md:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="pt-16 mb-14 md:mb-20 text-center">
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
                width: setWidth ? setWidth * 2 : undefined,
                animation: setWidth
                  ? `ecom-marquee-scroll ${setWidth / 40}s linear infinite`
                  : undefined,
              }}
            >
              {[...marqueeServices, ...marqueeServices].map((service, idx) => (
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
                100% { transform: translateX(-${setWidth}px); }
              }
            `}</style>
          </div>
          <div className="flex flex-col items-center justify-center mt-8">
            {/* Mobile-only CTA button */}
            <a
              href="#contact"
              className="flex md:hidden btn premium-btn w-full max-w-xs mx-auto mb-4 text-center text-white text-lg font-bold shadow-md hover:bg-[#5fa6db] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7BB9E8] focus:ring-offset-2 animate-fadein"
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

export default Services;
