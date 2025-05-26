const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the founders behind Dumo Digital
          </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1 transform group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/charlie-dumo.png"
                    alt="Charlie Dumo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Charlie Dumo
            </h3>
            <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                <span className="text-gray-600 font-medium">OSU Graduate</span>
              </div>
            </div>
          </div>

          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 transform group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/alex-laplante.png"
                    alt="Alex LaPlante"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Alex LaPlante
            </h3>
            <p className="text-purple-600 font-semibold mb-4">
              Co-Founder & CFO
            </p>
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg px-4 py-2">
                <span className="text-gray-600 font-medium">OSU Graduate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Dumo Digital Strategies was founded by two students at The Ohio
              State University, Charlie and Alex. We originally met at the
              campus gym—Alex came up and introduced himself, and we've been
              friends (and now co-founders) ever since. What started as a casual
              conversation between two college students turned into a shared
              vision to help small businesses grow through better digital
              strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
