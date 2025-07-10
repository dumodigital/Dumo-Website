const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22]">
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <a href="/" className="flex items-center gap-2 text-white/70 hover:text-[#7BB9E8] transition-colors duration-200" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </a>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Privacy Policy
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Your privacy is important to us. Here's how we handle your data.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                Contents
              </h3>
              <nav className="space-y-3">
                {[
                  { id: 'introduction', label: 'Introduction' },
                  { id: 'collection', label: 'Data Collection' },
                  { id: 'usage', label: 'How We Use Data' },
                  { id: 'security', label: 'Data Security' },
                  { id: 'rights', label: 'Your Rights' },
                  { id: 'contact', label: 'Contact Us' },
                  { id: 'changes', label: 'Policy Changes' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 text-white/60 hover:text-[#7BB9E8] transition-colors duration-200 group py-1"
                  >
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover:bg-[#7BB9E8] transition-colors duration-200"></div>
                    <span className="text-sm" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Introduction */}
            <section id="introduction">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  Introduction
                </h2>
                <p className="text-white/80 text-lg leading-relaxed" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  At Dumo Digital, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you visit our website or use our services.
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section id="collection">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  Information We Collect
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  We collect information to provide better services to our users:
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-[#7BB9E8] pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Personal Information
                    </h3>
                    <p className="text-white/70" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Name, email address, phone number, and other contact details you provide when reaching out to us.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[#7BB9E8] pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Technical Information
                    </h3>
                    <p className="text-white/70" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      IP address, browser type, device information, and how you interact with our website.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-[#7BB9E8] pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Usage Data
                    </h3>
                    <p className="text-white/70" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Information about how you use our website, including pages visited and time spent.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section id="usage">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  How We Use Your Information
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  We use your information for the following purposes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Provide and improve our services",
                    "Respond to your inquiries and requests",
                    "Send you relevant updates and information",
                    "Analyze website usage and performance",
                    "Ensure website security and functionality",
                    "Comply with legal requirements"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7BB9E8] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/70" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section id="security">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  Data Security
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white/3 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Encryption
                    </h3>
                    <p className="text-white/70" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      All data transmission is encrypted using industry-standard SSL/TLS protocols.
                    </p>
                  </div>
                  
                  <div className="bg-white/3 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Access Control
                    </h3>
                    <p className="text-white/70" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Access to your data is limited to authorized personnel only.
                    </p>
                  </div>
                  
                  <div className="bg-white/3 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Regular Audits
                    </h3>
                    <p className="text-white/70" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      We regularly review and update our security measures to ensure optimal protection.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  Your Rights
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  You have the following rights regarding your personal data:
                </p>
                
                <div className="space-y-3">
                  {[
                    "Access: Request a copy of your personal data",
                    "Correction: Request correction of inaccurate data",
                    "Deletion: Request deletion of your personal data",
                    "Restriction: Request restriction of data processing",
                    "Portability: Request transfer of your data",
                    "Objection: Object to processing of your data"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white/3 rounded-lg">
                      <div className="w-6 h-6 bg-[#7BB9E8]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="text-[#7BB9E8]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-white/80 font-medium" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  Contact Us
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  If you have any questions about this privacy policy, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/3 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Email
                    </h3>
                    <a href="mailto:info@dumodigital.com" className="text-[#7BB9E8] hover:text-white transition-colors duration-200" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      info@dumodigital.com
                    </a>
                  </div>
                  
                  <div className="bg-white/3 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      Phone
                    </h3>
                    <a href="tel:8476246003" className="text-[#7BB9E8] hover:text-white transition-colors duration-200" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                      (847) 624-6003
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy Changes */}
            <section id="changes">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  Changes to This Policy
                </h2>
                <p className="text-white/80 text-lg leading-relaxed" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. This policy was last updated on <span className="text-[#7BB9E8] font-semibold">December 2024</span>.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              Ready to work together?
            </h3>
            <p className="text-white/60 mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
              Get in touch to discuss your project.
            </p>
            <a
              href="https://calendly.com/charlie-dumo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#7BB9E8] text-black font-semibold rounded-lg hover:bg-[#5fa6d6] transition-colors duration-200"
              style={{fontFamily: 'Inter, Satoshi, sans-serif'}}
            >
              Schedule a Call
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
