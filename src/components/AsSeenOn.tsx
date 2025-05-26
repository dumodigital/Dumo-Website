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
      link: "https://www.amazon.com/The-Blox/dp/B0CGRZMX2K",
    },
    {
      name: "Keenan",
      width: "w-40 sm:w-48",
      image: "/images/keenan-logo.png",
      link: "https://keenan.osu.edu/",
    },
  ];

  return (
    <section className="as-seen-on py-8 px-2 sm:py-8 sm:px-0 bg-white">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide mb-4">
            As Seen On
          </h2>
        </div>
        <div className="grid grid-cols-3 w-full gap-x-4 sm:gap-x-16 items-center justify-items-center opacity-60 hover:opacity-80 transition-opacity duration-300">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`flex flex-col items-center justify-center h-14 sm:h-20 transform hover:scale-105 transition-transform duration-300`}
            >
              {logo.image ? (
                logo.link ? (
                  <a href={logo.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-14 sm:h-20 max-w-[100px] w-auto object-contain mx-auto"
                    />
                  </a>
                ) : (
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="h-14 sm:h-20 max-w-[100px] w-auto object-contain mx-auto"
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
