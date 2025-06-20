const marqueeStyles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee {
    display: flex;
    width: max-content;
    animation: marquee 20s linear infinite;
  }
`;

const Stats = () => {
  const stats = [
    { number: "3,000+", label: "Hours on Shopify", delay: "0ms" },
    { number: "92%", label: "Repeat Buyer Rate", delay: "200ms" },
    { number: "500+", label: "Campaigns Created", delay: "400ms" },
    { number: "25+", label: "Stores Launched", delay: "600ms" },
  ];

  const trustedBy = [
    {
      name: "Klaviyo",
      image: "/images/klaviyo-logo-white.png",
    },
    {
      name: "Meta",
      image: "/images/meta-logo-white.png",
    },
    {
      name: "Ohio State University",
      image: "/images/ohio-state-logo-white.png",
    },
    {
      name: "Shopify",
      image: "/images/shopify-logo-white.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Trusted By</h2>
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-2 gap-8 sm:flex sm:justify-center sm:gap-12 flex-wrap">
              {trustedBy.map((company) => (
                <div
                  key={company.name}
                  className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 whitespace-nowrap flex items-center justify-center min-h-[48px]"
                >
                  {company.image ? (
                    <img
                      src={company.image}
                      alt={company.name}
                      className="h-8 sm:h-10 object-contain"
                      style={{ maxWidth: 120 }}
                    />
                  ) : (
                    <span className="text-white font-semibold">
                      {company.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: stat.delay }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2 animate-pulse">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
