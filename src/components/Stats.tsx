
const Stats = () => {
  const stats = [
    { number: "1,000+", label: "Hours on Shopify", delay: "0ms" },
    { number: "92%", label: "Repeat Buyer Rate", delay: "200ms" },
    { number: "500+", label: "Campaigns Created", delay: "400ms" },
    { number: "25+", label: "Stores Launched", delay: "600ms" }
  ];

  const trustedBy = [
    "Ohio State University",
    "Shopify",
    "Klaviyo",
    "Meta"
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {trustedBy.map((company, index) => (
              <div 
                key={company}
                className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-white font-semibold">{company}</span>
              </div>
            ))}
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
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
