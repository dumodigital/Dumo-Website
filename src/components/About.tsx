const About = () => {
  return (
    <>
      {/* Section 1: Meet the Team */}
      <section id="about" className="w-full pt-20 pb-16 bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0a0a0a] scroll-mt-32 md:scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header - moved down */}
          <div className="text-center mb-20 mt-8">
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
            <div className="text-center">
              <div className="w-64 h-80 mx-auto rounded-lg overflow-hidden mb-6">
                <img src="/images/charlie-dumo.png" alt="Charlie Dumo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                Charlie Dumo
              </h3>
              <p className="text-[#7BB9E8] font-medium mb-3">Founder & CEO</p>
              <p className="text-white/70 leading-relaxed mb-4 max-w-xs mx-auto">
                Charlie started his first company from a dorm room and has since become a leader in digital brand strategy and e-commerce growth. He leads creative, strategy, and execution across every client project.
              </p>
              
              {/* Charlie's Social Links */}
              <div className="flex justify-center gap-4">
                <a href="https://www.instagram.com/charlie.dumo/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#7BB9E8] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/charlie-dumo-b337992a6/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#7BB9E8] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* OSU Logo - Middle - Fixed */}
            <div className="flex justify-center items-start">
              <img src="/images/buckeye.png" alt="The Ohio State University" className="w-40 h-40 object-contain -mt-8" />
            </div>

            {/* Alex - Right */}
            <div className="text-center">
              <div className="w-64 h-80 mx-auto rounded-lg overflow-hidden mb-6">
                <img src="/images/alex-laplante.png" alt="Alex LaPlante" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                Alex LaPlante
              </h3>
              <p className="text-[#7BB9E8] font-medium mb-3">Co-Founder & CFO</p>
              <p className="text-white/70 leading-relaxed mb-4 max-w-xs mx-auto">
                Alex keeps Dumo Digital running with precision. He handles operations, finance, and backend systems—making sure every project stays on track and on budget.
              </p>
              
              {/* Alex's Social Links */}
              <div className="flex justify-center gap-4">
                <a href="https://www.instagram.com/alexlaaplante/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#7BB9E8] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/alexanderlaplante05/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#7BB9E8] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Story - Updated to match site theme */}
      <section className="w-full pt-16 pb-20 bg-gradient-to-b from-[#0a0a0a] via-[#10151a] to-[#181c22]">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Story Header - moved down more */}
          <div className="text-center mb-20 mt-8">
            <span className="block uppercase tracking-[0.25em] text-xs text-neutral-400 font-semibold mb-4 letter-spacing-wide">Our Story</span>
            <h2 className="text-5xl font-bold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              Built From Grit.<br/>Designed for Growth.
            </h2>
            <div className="w-20 h-1 rounded-full bg-[#7BB9E8] mb-6 mt-2 mx-auto" />
            <p className="text-xl text-white/70 mb-8">
              From gym sessions at OSU to building for clients nationwide.
            </p>
          </div>

          {/* Story Content - Properly spaced and formatted */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-8 text-lg text-white/80 leading-relaxed text-center">
              <p className="mb-6">Charlie and Alex met at The Ohio State University—two students who didn't plan to become entrepreneurs but ended up building something together that neither of them could have done alone.</p>
              
              <p className="mb-6">It started at the gym. We'd bump into each other, swap life updates between sets, and eventually realized we both had a drive to build something real. One day, over post-workout smoothies, we sketched out a crazy idea. A few months later, that idea turned into Dumo Digital.</p>
              
              <p className="mb-6">We didn't have investors. We didn't have a roadmap. But we had each other—and the obsession to figure it out. Now, we help consumer brands bring their ideas to life online—especially in the CPG and food & beverage space. From bold brand storytelling to conversion-ready Shopify builds, we're focused on helping small teams look like national players.</p>
              
              <p className="font-medium text-white text-xl">We haven't looked back since.</p>
            </div>
          </div>

          {/* Logos - Truly centered */}
          <div className="w-full flex justify-center mb-16">
            <div className="flex items-center justify-center gap-12 md:gap-16">
              <img src="/images/DD.png" alt="Dumo Digital" className="h-10 md:h-12 opacity-60 hover:opacity-80 transition-opacity filter brightness-0 invert" />
              <img src="/images/buckeye.png" alt="The Ohio State University" className="h-12 md:h-16 opacity-60 hover:opacity-80 transition-opacity" />
              <img src="/images/shopify-logo-white.png" alt="Shopify Partner" className="h-10 md:h-12 opacity-60 hover:opacity-80 transition-opacity" />
            </div>
          </div>

          {/* CTA - Updated styling */}
          <div className="text-center">
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#7BB9E8] text-white rounded-xl font-semibold text-lg hover:bg-[#5fa6db] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            >
              Work With Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
