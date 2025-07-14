import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaTiktok } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] border-t border-white/10 py-12 px-4 md:px-8 mt-16">
    <div className="max-w-7xl mx-auto">
      {/* Main Footer Content - Mobile Friendly Layout */}
      <div className="flex flex-col md:grid md:grid-cols-4 gap-8 md:gap-12 mb-10">
        
        {/* Mobile: Logo and Contact Combined */}
        <div className="flex flex-col md:hidden items-center text-center mb-6">
          <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-10 w-auto mb-4" />
          <p className="text-white/70 text-base font-medium tracking-wide mb-6" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Premium Shopify Management
          </p>
          
          {/* Contact Info - Mobile */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <a 
              href="mailto:info@dumodigital.com" 
              className="flex items-center gap-3 text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium group"
            >
              <FaEnvelope className="text-[#7BB9E8] group-hover:scale-110 transition-transform duration-200" />
              <span>info@dumodigital.com</span>
            </a>
            <a 
              href="tel:8476246003" 
              className="flex items-center gap-3 text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium group"
            >
              <FaPhone className="text-[#7BB9E8] group-hover:scale-110 transition-transform duration-200" />
              <span>(847) 624-6003</span>
            </a>
          </div>
          
          {/* Navigation Links - Mobile */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#services" className="text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium">
              Services
            </a>
            <a href="#portfolio" className="text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium">
              About
            </a>
            <a href="#contact" className="text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium">
              Contact
            </a>
          </div>
          
          {/* Social Links - Mobile */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/dumo_digital/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200 hover:scale-110 border border-white/10 hover:border-[#7BB9E8]/30"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/company/dumo-digital" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200 hover:scale-110 border border-white/10 hover:border-[#7BB9E8]/30"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://www.tiktok.com/@dumodigital?_t=ZP-8xns4cSilNn&_r=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok"
              className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200 hover:scale-110 border border-white/10 hover:border-[#7BB9E8]/30"
            >
              <FaTiktok className="text-xl" />
            </a>
          </div>
        </div>
        
        {/* Desktop: Logo and Tagline */}
        <div className="hidden md:flex flex-col items-start text-left">
          <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-12 w-auto mb-4" />
          <p className="text-white/70 text-base font-medium tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Premium Shopify Management
          </p>
          <p className="text-white/50 text-sm font-light mt-2 max-w-xs">
            Scaling ecommerce brands with expert Shopify development and strategic growth solutions.
          </p>
        </div>
        
        {/* Desktop: Quick Links */}
        <div className="hidden md:flex flex-col items-start text-left">
          <h3 className="text-white font-semibold text-lg mb-4 tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Quick Links
          </h3>
          <div className="flex flex-col gap-3">
            <a href="#services" className="text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium hover:translate-x-1">
              Services
            </a>
            <a href="#portfolio" className="text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium hover:translate-x-1">
              Portfolio
            </a>
            <a href="#about" className="text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium hover:translate-x-1">
              About
            </a>
            <a href="#contact" className="text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium hover:translate-x-1">
              Contact
            </a>
          </div>
        </div>
        
        {/* Desktop: Contact Information */}
        <div className="hidden md:flex flex-col items-start text-left">
          <h3 className="text-white font-semibold text-lg mb-4 tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Get In Touch
          </h3>
          <div className="flex flex-col gap-3">
            <a 
              href="mailto:info@dumodigital.com" 
              className="flex items-center gap-3 text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium group"
            >
              <FaEnvelope className="text-[#7BB9E8] group-hover:scale-110 transition-transform duration-200" />
              <span>Email Us</span>
            </a>
            <a 
              href="tel:8476246003" 
              className="flex items-center gap-3 text-white/70 hover:text-[#7BB9E8] transition-all duration-200 text-base font-medium group"
            >
              <FaPhone className="text-[#7BB9E8] group-hover:scale-110 transition-transform duration-200" />
              <span>Call Us</span>
            </a>
            <div className="text-white/50 text-sm mt-2 font-light">
              <p>info@dumodigital.com</p>
              <p>(847) 624-6003</p>
            </div>
          </div>
        </div>
        
        {/* Desktop: Social Links */}
        <div className="hidden md:flex flex-col items-start text-left">
          <h3 className="text-white font-semibold text-lg mb-4 tracking-wide" style={{fontFamily: 'Inter, Satoshi, sans-serif'}}>
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/dumo_digital/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200 hover:scale-110 border border-white/10 hover:border-[#7BB9E8]/30"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/company/dumo-digital" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200 hover:scale-110 border border-white/10 hover:border-[#7BB9E8]/30"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://www.tiktok.com/@dumodigital?_t=ZP-8xns4cSilNn&_r=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok"
              className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200 hover:scale-110 border border-white/10 hover:border-[#7BB9E8]/30"
            >
              <FaTiktok className="text-xl" />
            </a>
          </div>
          <p className="text-white/50 text-sm mt-4 font-light">
            Stay updated with our latest projects and insights.
          </p>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
        <div className="text-white/50 text-sm text-center md:text-left font-light">
          © {new Date().getFullYear()} Dumo Digital. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="/PrivacyPolicy" className="text-white/50 hover:text-[#7BB9E8] transition-all duration-200 font-light" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <span className="text-white/30">•</span>
          <span className="text-white/50 font-light">
            Designed & Built with ❤️ in Chicago
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
