const AsSeenOn: React.FC = () => {
  const logos = [
    {
      name: "Blox",
      width: "w-40 sm:w-48",
      image: "/images/the-blox-logo.png",
      link: "https://www.betablox.com/theblox",
    },
    {
      name: "Amazon Prime Video",
      width: "w-48 sm:w-56",
      image: "/images/prime-video-logo.png",
    },
    {
      name: "Keenan",
      width: "w-40 sm:w-48",
      image: "/images/keenan-logo.png",
    },
  ];

  return (
    <section className="as-seen-on py-8 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide mb-4">
            As Seen On
          </h2>
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-6 sm:gap-10 opacity-60 hover:opacity-80 transition-opacity duration-300">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.width} h-16 sm:h-20 flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}
            >
              {logo.image ? (
                logo.link ? (
                  <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-full object-contain"
                    />
                  </a>
                ) : (
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="h-full object-contain"
                  />
                )
              ) : (
                <span className="text-gray-600 font-semibold text-sm">
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
