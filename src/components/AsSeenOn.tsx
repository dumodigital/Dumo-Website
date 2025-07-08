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

// Shuffle the logos array each render
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const shuffledLogos = shuffle([...logos]);

const AsSeenOn = () => (
  <section className="partner-carousel pt-20 pb-8 md:pt-28 md:pb-12 bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22]">
    <div className="w-full px-4">
      {/* Section Header */}
      <div className="mb-4 md:mb-6 text-center relative mt-8 md:mt-10">
        {/* Clean horizontal lines for visual hierarchy */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-y-1/2"></div>
        
        {/* Header with clean styling */}
        <div className="relative inline-block px-8 md:px-10 py-2 md:py-3">
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight mb-0" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Our Trusted Partners
          </h2>
        </div>
        
        {/* Vertical accent lines */}
        <div className="absolute top-1/2 left-1/4 w-px h-8 md:h-10 bg-gradient-to-b from-transparent via-[#7BB9E8] to-transparent transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-px h-8 md:h-10 bg-gradient-to-b from-transparent via-[#7BB9E8] to-transparent transform -translate-y-1/2"></div>
      </div>
      {/* Infinite scrolling logo carousel */}
      <div className="relative overflow-hidden w-full">
        <div
          className="flex items-center gap-14 md:gap-20 animate-marquee whitespace-nowrap min-w-max"
          style={{}}
        >
          {[...shuffledLogos, ...shuffledLogos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-20 md:h-24 min-w-[160px] md:min-w-[200px] max-w-[220px] md:max-w-[275px]">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-18 md:h-24 w-auto object-contain filter brightness-0 invert partner-logo ${
                  logo.alt === "Celigo" ? "scale-75 celigo-logo" : ""
                }`}
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
          .partner-logo {
            max-height: 72px;
            max-width: 200px;
          }
          .celigo-logo {
            max-height: 54px;
            max-width: 150px;
          }
          @media (min-width: 768px) {
            .partner-logo {
              max-height: 90px;
              max-width: 250px;
            }
            .celigo-logo {
              max-height: 67px;
              max-width: 187px;
            }
          }
        `}</style>
      </div>
    </div>
  </section>
);

export default AsSeenOn;
