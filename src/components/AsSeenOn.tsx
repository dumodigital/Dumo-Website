
const AsSeenOn = () => {
  const logos = [
    { name: "Blox", width: "w-24" },
    { name: "Amazon Prime Video", width: "w-32" },
    { name: "Featured Partner", width: "w-28" },
    { name: "Client Logo", width: "w-26" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
            As Seen On
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
            {logos.map((logo, index) => (
              <div 
                key={logo.name}
                className={`${logo.width} h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-gray-600 font-semibold text-sm">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
