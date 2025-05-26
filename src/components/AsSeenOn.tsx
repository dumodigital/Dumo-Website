const AsSeenOn: React.FC = () => {
  const logos = [
    {
      name: "Blox",
      width: "w-40 sm:w-48",
      image: "/images/the-blox-logo.png",
    },
    {
      name: "Amazon Prime Video",
      width: "w-48 sm:w-56",
      image: "/images/prime-video-logo.png",
    },
  ];

  return (
    <section className="as-seen-on">
      <h2>As Seen On</h2>
      <div className="logos">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className={`${logo.width} h-20 sm:h-24 flex items-center justify-center transform hover:scale-105 transition-transform duration-300`}
            >
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full object-contain"
                />
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
