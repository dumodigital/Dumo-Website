const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DUMO DIGITAL
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your personal digital Genius Bar. Digital strategies that help
              businesses establish, optimize, and grow their online sales.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div>
                <a href="tel:8476246003" className="hover:underline text-gray-300">(847) 624-6003</a>
              </div>
              <div>info@dumodigital.com</div>
              <div>@dumo_digital</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#services"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#our-work"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Work
              </a>
              <a
                href="#testimonials"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400">
            © 2025 Dumo Digital. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="/PrivacyPolicy"
              className="text-gray-400 hover:text-white transition-colors duration-300 ml-4"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
