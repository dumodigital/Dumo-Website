import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Expert Team",
    description:
      "Work with seasoned Shopify & ecom specialists—no juniors, no handoffs. Every brand gets senior-level strategy and execution.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M18 4l11 4v7c0 7.732-4.5 13.5-11 15-6.5-1.5-11-7.268-11-15V8l11-4z" fill="#10151a" stroke="#7BB9E8" strokeWidth="2"/>
        <path d="M18 14l1.902 3.855 4.255.619-3.078 3.002.727 4.242L18 23.25l-3.806 1.468.727-4.242-3.078-3.002 4.255-.619L18 14z" fill="#7BB9E8"/>
      </svg>
    ),
  },
  {
    title: "Growth Focused",
    description:
      "Every decision, design, and campaign is built to drive measurable growth. We obsess over your KPIs as much as you do.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect x="5" y="25" width="4" height="6" rx="2" fill="#7BB9E8" />
        <rect x="14" y="19" width="4" height="12" rx="2" fill="#7BB9E8" />
        <rect x="23" y="13" width="4" height="18" rx="2" fill="#7BB9E8" />
        <path d="M7 27l8-8 6 6 8-12" stroke="#7BB9E8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="31" cy="11" r="2" fill="#7BB9E8" />
      </svg>
    ),
  },
  {
    title: "Flexible Scaling",
    description:
      "Scale up or down as needed—no long-term contracts, no bloated retainers. Get exactly what you need, when you need it.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect x="7" y="7" width="8" height="8" rx="2" fill="#7BB9E8" fillOpacity="0.18" stroke="#7BB9E8" strokeWidth="1.5"/>
        <rect x="21" y="7" width="8" height="8" rx="2" fill="#7BB9E8" fillOpacity="0.18" stroke="#7BB9E8" strokeWidth="1.5"/>
        <rect x="7" y="21" width="8" height="8" rx="2" fill="#7BB9E8" fillOpacity="0.18" stroke="#7BB9E8" strokeWidth="1.5"/>
        <rect x="21" y="21" width="8" height="8" rx="2" fill="#7BB9E8" fillOpacity="0.18" stroke="#7BB9E8" strokeWidth="1.5"/>
        <path d="M18 18v-4m0 4h4m-4 0v4m0-4h-4" stroke="#7BB9E8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const additionalFeatures = [
  {
    title: "24/7 Monitoring",
    description:
      "Round-the-clock store monitoring and performance optimization to ensure your site never misses a sale.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="14" fill="#7BB9E8" fillOpacity="0.18" stroke="#7BB9E8" strokeWidth="2"/>
        <path d="M18 6v12l8 4" stroke="#7BB9E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="2" fill="#7BB9E8"/>
      </svg>
    ),
  },
  {
    title: "Conversion Optimization",
    description:
      "Data-driven A/B testing and UX improvements that turn more visitors into customers and boost your AOV.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M6 26l6-6 4 4 8-8 6 6" stroke="#7BB9E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 16v6h-6" stroke="#7BB9E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="2" fill="#7BB9E8"/>
        <circle cx="12" cy="20" r="1.5" fill="#7BB9E8"/>
        <circle cx="24" cy="14" r="1.5" fill="#7BB9E8"/>
      </svg>
    ),
  },
  {
    title: "Strategic Partnership",
    description:
      "More than a service provider—we become your strategic ecommerce partner, invested in your long-term success.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M12 18c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#7BB9E8" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 18c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#7BB9E8" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="3" fill="#7BB9E8"/>
        <path d="M14 24l4-4 4 4" stroke="#7BB9E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const FinalCTA = () => {
  return (
    <section id="contact" className="scroll-mt-16 w-full pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] relative overflow-hidden font-sans" style={{backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(123, 185, 232, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(123, 185, 232, 0.08) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%)'}}>
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="27" cy="7" r="1"/%3E%3Ccircle cx="47" cy="7" r="1"/%3E%3Ccircle cx="7" cy="27" r="1"/%3E%3Ccircle cx="27" cy="27" r="1"/%3E%3Ccircle cx="47" cy="27" r="1"/%3E%3Ccircle cx="7" cy="47" r="1"/%3E%3Ccircle cx="27" cy="47" r="1"/%3E%3Ccircle cx="47" cy="47" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      <div className="max-w-4xl mx-auto px-4 md:px-0 relative z-10 flex flex-col items-center justify-center">
        <span className="block uppercase tracking-[0.25em] text-xs text-neutral-400 font-semibold mb-10 mt-10 text-center" style={{ fontWeight: 700, letterSpacing: '0.18em' }}>READY TO SCALE?</span>
        <h2 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.1] text-white mb-2 tracking-tight text-center" style={{fontFamily: 'Inter, Satoshi, sans-serif', letterSpacing: '-0.01em'}}>
          Let's Build Your <span className="text-[#7BB9E8]">Ecommerce Empire</span>
        </h2>
        <div className="w-24 h-1 bg-[#7BB9E8] rounded-full mb-8 mt-2 mx-auto" />
        <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mb-10 text-center mx-auto" style={{fontFamily: 'Inter, Satoshi, sans-serif', color: '#bfc9d4', fontWeight: 400}}>
          Our flexible Shopify management model gives growing brands access to expert ecommerce support without the overhead of full-time hires or expensive agency retainers. Scale your store, not your costs.
        </p>
        {/* Main Benefits Row */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-6 mb-8 md:mb-12 items-stretch justify-center md:items-stretch">
          {/* Mobile: Vertical Stack */}
          <div className="flex flex-col md:hidden w-full gap-6 items-center">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="group w-full max-w-sm bg-white/5 border border-[#7BB9E8]/20 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#7BB9E8] hover:bg-[#10151a]/80 cursor-pointer"
                style={{ boxShadow: "0 4px 24px 0 rgba(20,40,80,0.10)" }}
              >
                <div className="mb-4" style={{width: 40, height: 40}}>{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7BB9E8] transition-colors duration-200" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{benefit.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Desktop: Horizontal Row */}
          <div className="hidden md:flex flex-row w-full gap-6 justify-center items-stretch">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="group flex-1 bg-white/5 border border-[#7BB9E8]/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#7BB9E8] hover:bg-[#10151a]/80 cursor-pointer max-w-[340px] mx-2"
                style={{ boxShadow: "0 4px 24px 0 rgba(20,40,80,0.10)" }}
              >
                <div className="mb-4" style={{width: 32, height: 32}}>{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#7BB9E8] transition-colors duration-200" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{benefit.title}</h3>
                <p className="text-base text-white/80 leading-relaxed font-medium mb-1" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop CTA Button - Between Rows */}
        <div className="hidden md:flex flex-col items-center mb-12">
          <a
            href="https://calendly.com/charlie-dumo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#7BB9E8] text-black text-xl md:text-2xl font-bold shadow-xl hover:bg-[#5fa6db] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7BB9E8] focus:ring-offset-2 hover:scale-105 premium-btn"
            style={{fontFamily: 'Inter, Satoshi, sans-serif', letterSpacing: '-0.01em'}}
          >
            Schedule Strategy Call
          </a>
          <span className="block text-sm text-white/60 mt-4 font-medium tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>No sales pitch. Just strategy.</span>
        </div>

        {/* Additional Features Row - Desktop Only */}
        <div className="hidden md:flex w-full flex-row gap-6 mb-12 items-stretch justify-center">
          {additionalFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className="group flex-1 bg-white/5 border border-[#7BB9E8]/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#7BB9E8] hover:bg-[#10151a]/80 cursor-pointer max-w-[340px] mx-2"
              style={{ boxShadow: "0 4px 24px 0 rgba(20,40,80,0.10)" }}
            >
              <div className="mb-4" style={{width: 32, height: 32}}>{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#7BB9E8] transition-colors duration-200" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{feature.title}</h3>
              <p className="text-base text-white/80 leading-relaxed font-medium mb-1" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>{feature.description}</p>
            </div>
          ))}
        </div>



        {/* Mobile CTA Button - At Bottom */}
        <div className="md:hidden flex flex-col items-center">
          <a
            href="https://calendly.com/charlie-dumo/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#7BB9E8] text-black text-xl font-bold shadow-xl hover:bg-[#5fa6db] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7BB9E8] focus:ring-offset-2 hover:scale-105 premium-btn"
            style={{fontFamily: 'Inter, Satoshi, sans-serif', letterSpacing: '-0.01em'}}
          >
            Schedule Strategy Call
          </a>
          <span className="block text-sm text-white/60 mt-4 font-medium tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>No sales pitch. Just strategy.</span>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
