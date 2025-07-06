const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] scroll-mt-12 md:scroll-mt-20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
        }}
      />
      
      <div className="max-w-6xl mx-auto px-8 md:px-16 relative z-10">
        {/* Refined Header */}
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-block">
            <p className="text-white/40 text-xs md:text-sm font-light tracking-[0.3em] uppercase mb-4">
              Meet The Team
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight text-white mb-6 tracking-tight leading-[0.9]" style={{fontFamily: 'Inter, Satoshi, sans-serif', fontWeight: 200}}>
              The Minds Behind<br/>
              <span className="text-[#7BB9E8] font-light italic">Dumo Digital</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#7BB9E8]/60"></div>
              <div className="w-2 h-2 bg-[#7BB9E8] rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#7BB9E8]/60"></div>
            </div>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
              Two Ohio State graduates revolutionizing ecommerce, one brand at a time
            </p>
          </div>
        </div>

        {/* Sophisticated Founders Layout */}
        <div className="space-y-24 md:space-y-32 mb-24 md:mb-32">
          {/* Charlie - Editorial Style */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7BB9E8]/20 to-[#4A90E2]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative w-full aspect-square max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src="/images/charlie-dumo.png"
                    alt="Charlie Dumo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#7BB9E8] to-[#4A90E2] rounded-2xl flex items-center justify-center shadow-xl">
                  <img src="/images/ohio-state-logo-white.png" alt="OSU" className="w-7 h-7" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-extralight text-white mb-3 tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif', fontWeight: 200}}>
                  Charlie Dumo
                </h3>
                <div className="flex items-center gap-3 mb-8">
                  <p className="text-[#7BB9E8] font-medium text-xl md:text-2xl tracking-wide">Founder & CEO</p>
                  <div className="w-8 h-px bg-[#7BB9E8]/40"></div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-white/85 text-lg md:text-xl leading-relaxed font-light">
                  Charlie orchestrates Dumo Digital's strategic vision, bringing a methodical, data-driven approach to ecommerce transformation. With deep expertise in business strategy and emerging technologies, he architects comprehensive growth frameworks that scale brands through innovative Shopify solutions and sophisticated digital marketing ecosystems.
                </p>
                <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                  Beyond the analytics and optimization strategies, Charlie finds balance in Chicago's vibrant fitness scene and culinary landscape. His philosophy merges analytical precision with creative innovation, consistently delivering quantifiable results that propel growing brands toward sustainable success.
                </p>
              </div>
            </div>
          </div>

          {/* Alex - Editorial Style Reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-1 lg:order-1 space-y-6">
              <div className="text-left lg:text-right">
                <h3 className="text-3xl md:text-4xl font-extralight text-white mb-3 tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif', fontWeight: 200}}>
                  Alex LaPlante
                </h3>
                <div className="flex items-center gap-3 mb-8 justify-start lg:justify-end">
                  <div className="w-8 h-px bg-[#7BB9E8]/40 order-2 lg:order-1"></div>
                  <p className="text-[#7BB9E8] font-medium text-xl md:text-2xl tracking-wide order-1 lg:order-2">Co-Founder & CFO</p>
                </div>
              </div>
              <div className="space-y-6 text-left lg:text-right">
                <p className="text-white/85 text-lg md:text-xl leading-relaxed font-light">
                  Alex masterminds the technical architecture and operational excellence that powers Dumo Digital's world-class Shopify experiences. With profound expertise in development, automation, and system optimization, he ensures every digital touchpoint delivers both aesthetic brilliance and robust, scalable performance.
                </p>
                <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                  Driven by a passion for creating intelligent, scalable systems that evolve with businesses, Alex's meticulous attention to detail and unwavering commitment to excellence ensures every Shopify ecosystem we craft is engineered for exponential growth and long-term market dominance.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 order-2 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7BB9E8]/20 to-[#4A90E2]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative w-full aspect-square max-w-sm mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src="/images/alex-laplante.png"
                    alt="Alex LaPlante"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#7BB9E8] to-[#4A90E2] rounded-2xl flex items-center justify-center shadow-xl">
                  <img src="/images/ohio-state-logo-white.png" alt="OSU" className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elevated Story Section */}
        <div className="text-center mb-20 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extralight text-white mb-12 tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif', fontWeight: 200}}>
              Our Story
            </h3>
            <div className="space-y-8">
              <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light italic">
                "What started as a chance encounter at The Ohio State University gym has evolved into a transformative partnership that's reshaping how ambitious brands approach ecommerce."
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#7BB9E8] to-transparent mx-auto"></div>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
                Alex approached Charlie with a simple introduction that sparked an immediate connection. Their shared entrepreneurial vision and complementary skills transformed casual conversations into a mission to revolutionize digital commerce for growing brands.
              </p>
              <p className="text-white/60 text-base md:text-lg leading-relaxed font-light">
                Today, we synthesize strategic thinking with technical mastery, delivering comprehensive Shopify solutions, data-driven marketing strategies, and growth frameworks that empower brands to achieve sustainable, scalable success.
              </p>
            </div>
          </div>
        </div>

        {/* Premium Partner Showcase */}
        <div className="text-center">
          <p className="text-white/30 text-xs md:text-sm font-light tracking-[0.4em] uppercase mb-12">
            Alumni & Partners
          </p>
          <div className="flex items-center justify-center gap-16 md:gap-20">
            <div className="group cursor-pointer">
              <img
                src="/images/ohio-state-logo-white.png"
                alt="The Ohio State University"
                className="h-12 md:h-14 w-auto object-contain opacity-25 group-hover:opacity-50 transition-all duration-500 transform group-hover:scale-110"
              />
            </div>
            <div className="group cursor-pointer">
              <img
                src="/images/shopify-logo-white.png"
                alt="Shopify Partner"
                className="h-12 md:h-14 w-auto object-contain opacity-25 group-hover:opacity-50 transition-all duration-500 transform group-hover:scale-110"
              />
            </div>
            <div className="group cursor-pointer">
              <img
                src="/images/DD.png"
                alt="Dumo Digital"
                className="h-12 md:h-14 w-auto object-contain opacity-25 group-hover:opacity-50 transition-all duration-500 transform group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
