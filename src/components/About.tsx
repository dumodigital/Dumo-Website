const About = () => {
  return (
    <>
      {/* Section 1: Meet the Team */}
      <section className="w-full py-20 bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] scroll-mt-12 md:scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              Meet the Team
            </h2>
            <p className="text-xl text-white/70">
              Current students at The Ohio State University
            </p>
          </div>

          {/* Team Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Charlie - Left */}
            <div className="text-center lg:text-left">
              <div className="w-64 h-80 mx-auto lg:mx-0 rounded-lg overflow-hidden mb-6">
                <img src="/images/charlie-dumo.png" alt="Charlie Dumo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                Charlie Dumo
              </h3>
              <p className="text-[#7BB9E8] font-medium mb-3">Founder & CEO</p>
              <p className="text-white/70 leading-relaxed">
                Charlie started his first company from a dorm room and has since become a leader in digital brand strategy and e-commerce growth. He leads creative, strategy, and execution across every client project.
              </p>
            </div>

            {/* OSU Logo - Middle */}
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                <img src="/images/ohio-state-logo-white.png" alt="The Ohio State University" className="w-20 h-20" />
              </div>
            </div>

            {/* Alex - Right */}
            <div className="text-center lg:text-right">
              <div className="w-64 h-80 mx-auto lg:mx-0 lg:ml-auto rounded-lg overflow-hidden mb-6">
                <img src="/images/alex-laplante.png" alt="Alex LaPlante" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                Alex LaPlante
              </h3>
              <p className="text-[#7BB9E8] font-medium mb-3">Co-Founder & CFO</p>
              <p className="text-white/70 leading-relaxed">
                Alex keeps Dumo Digital running with precision. He handles operations, finance, and backend systems—making sure every project stays on track and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Story */}
      <section id="about" className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Story Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              Built From Grit.<br/>Designed for Growth.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              From gym sessions at OSU to building for clients nationwide.
            </p>
          </div>

          {/* Story Content */}
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed mb-16">
            <p>Charlie and Alex met at The Ohio State University—two students who didn't plan to become entrepreneurs but ended up building something together that neither of them could have done alone.</p>
            
            <p>It started at the gym. We'd bump into each other, swap life updates between sets, and eventually realized we both had a drive to build something real. One day, over post-workout smoothies, we sketched out a crazy idea. A few months later, that idea turned into Dumo Digital.</p>
            
            <p>We didn't have investors. We didn't have a roadmap. But we had each other—and the obsession to figure it out. Now, we help consumer brands bring their ideas to life online—especially in the CPG and food & beverage space. From bold brand storytelling to conversion-ready Shopify builds, we're focused on helping small teams look like national players.</p>
            
            <p className="font-medium text-gray-900">We haven't looked back since.</p>
          </div>

          {/* Logos */}
          <div className="flex items-center justify-center gap-8 mb-16">
            <img src="/images/shopify-logo-white.png" alt="Shopify Partner" className="h-6 opacity-60" />
            <img src="/images/DD.png" alt="Dumo Digital" className="h-6 opacity-60" />
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#7BB9E8] text-white rounded-lg font-semibold text-lg hover:bg-[#5fa6db] transition-colors"
              style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            >
              Work With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
