import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#10151a] to-[#181c22] border-t border-white/10 py-8 px-4 md:px-8 mt-16">
    <div className="max-w-7xl mx-auto">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mb-6">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-10 w-auto mb-3" />
          <p className="text-white/60 text-sm font-light tracking-wide">Premium Shopify Management</p>
        </div>
        
        {/* Quick Links - Horizontal on mobile */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white/70 text-sm font-medium">
          <a href="#services" className="hover:text-[#7BB9E8] transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/5">Services</a>
          <a href="#portfolio" className="hover:text-[#7BB9E8] transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/5">Portfolio</a>
          <a href="#about" className="hover:text-[#7BB9E8] transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/5">About</a>
          <a href="#contact" className="hover:text-[#7BB9E8] transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/5">Contact</a>
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.instagram.com/dumo_digital/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a 
            href="https://www.linkedin.com/company/dumo-digital/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a 
            href="mailto:info@dumodigital.com" 
            aria-label="Email"
            className="p-3 text-white/60 hover:text-[#7BB9E8] hover:bg-white/5 rounded-full transition-all duration-200"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
        <div className="text-white/40 text-xs text-center md:text-left">
          © {new Date().getFullYear()} Dumo Digital. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a href="/PrivacyPolicy" className="text-white/40 hover:text-[#7BB9E8] transition-all duration-200" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <span className="text-white/20">•</span>
          <a href="#" className="text-white/40 hover:text-[#7BB9E8] transition-all duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
