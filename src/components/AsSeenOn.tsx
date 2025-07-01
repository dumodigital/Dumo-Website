import React from "react";

const logos = [
  { src: "/images/shopify-logo-white.png", alt: "Shopify" },
  { src: "/images/klaviyo-logo-white.png", alt: "Klaviyo" },
  { src: "/images/meta-logo-white.png", alt: "Meta" },
  { src: "/images/Celigo.png", alt: "Celigo" },
  { src: "/images/keenan-logo.png", alt: "Keenan" },
  { src: "/images/jotform.png", alt: "Jotform" },
  { src: "/images/ohio-state-logo-white.png", alt: "Ohio State" },
  { src: "/images/monday.png", alt: "Monday" },
  { src: "/images/prime-video-logo.png", alt: "Prime Video" },
  { src: "/images/netsuite.webp", alt: "NetSuite" },
  { src: "/images/SS.webp", alt: "SS" },
  // Removed The Blox logo
];

const AsSeenOn = () => (
  <section className="py-8 bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22]">
    <div className="w-full px-4">
      {/* Section Header */}
      <div className="mb-6 text-center relative">
        {/* Clean horizontal lines for visual hierarchy */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-y-1/2"></div>
        
        {/* Header with clean styling */}
        <div className="relative inline-block px-8 py-2">
          <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight mb-0" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Our Trusted Partners
          </h2>
        </div>
        
        {/* Vertical accent lines */}
        <div className="absolute top-1/2 left-1/4 w-px h-8 bg-gradient-to-b from-transparent via-[#7BB9E8] to-transparent transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-8 bg-gradient-to-b from-transparent via-[#7BB9E8] to-transparent transform -translate-y-1/2"></div>
      </div>
      {/* Infinite scrolling logo carousel */}
      <div className="relative overflow-hidden w-full">
        <div
          className="flex items-center gap-14 animate-marquee whitespace-nowrap min-w-max"
          style={{}}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-20 min-w-[160px] max-w-[220px]">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-18 w-auto object-contain filter brightness-0 invert ${
                  logo.alt === "Celigo" ? "scale-75" : ""
                }`}
                style={{ 
                  maxHeight: logo.alt === "Celigo" ? 54 : 72, 
                  maxWidth: logo.alt === "Celigo" ? 150 : 200 
                }}
                draggable={false}
              />
            </div>
          ))}
        </div>
        {/* Marquee animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 45s linear infinite;
            will-change: transform;
          }
        `}</style>
      </div>
    </div>
  </section>
);

export default AsSeenOn;
