import React from "react";

const logos = [
  { src: "/images/shopify-logo-white.png", alt: "Shopify" },
  { src: "/images/keenan-logo.png", alt: "Keenan" },
  { src: "/images/klaviyo-logo-white.png", alt: "Klaviyo" },
  { src: "/images/meta-logo-white.png", alt: "Meta" },
  { src: "/images/ohio-state-logo-white.png", alt: "Ohio State" },
  { src: "/images/prime-video-logo.png", alt: "Prime Video" },
  { src: "/images/the-blox-logo.png", alt: "The Blox" },
  // Add more logos as needed
];

const TrustedBy = () => (
  <section className="pt-4 pb-2 md:py-20 bg-gradient-to-br from-[#10151a] to-[#181c22] border-b border-white/10" style={{ marginTop: '100vh' }}>
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-xl md:text-4xl font-bold text-white mb-4 md:mb-10 text-center tracking-tight">
        Partners We've Grown
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-8 items-center justify-items-center bg-white/5 rounded-xl p-3 md:p-8 shadow-lg">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-6 md:h-14 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
            style={{ maxHeight: 56, maxWidth: 160 }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
