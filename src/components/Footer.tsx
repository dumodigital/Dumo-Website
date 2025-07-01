import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full bg-gradient-to-br from-[#10151a] to-[#181c22] border-t border-white/10 py-10 px-4 md:px-0 mt-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
      {/* Logo */}
      <div className="flex items-center justify-center w-full md:w-auto mb-6 md:mb-0">
        <img src="/images/DD.png" alt="Dumo Digital Logo" className="h-12 w-auto" />
      </div>
      {/* Links */}
      <div className="flex flex-col md:flex-row items-center gap-6 text-white/70 text-base font-medium">
        <a href="#services" className="hover:text-[#7BB9E8] hover:underline transition-all duration-200">Services</a>
        <a href="#portfolio" className="hover:text-[#7BB9E8] hover:underline transition-all duration-200">Portfolio</a>
        <a href="#about" className="hover:text-[#7BB9E8] hover:underline transition-all duration-200">About</a>
        <a href="#contact" className="hover:text-[#7BB9E8] hover:underline transition-all duration-200">Contact</a>
        <a href="/PrivacyPolicy" className="hover:text-[#7BB9E8] hover:underline transition-all duration-200" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a href="https://www.instagram.com/dumo_digital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center gap-2 hover:text-[#7BB9E8] transition-all duration-200">
          <FaInstagram className="text-lg" />
          <span className="hidden md:inline">Instagram</span>
        </a>
      </div>
      {/* Copyright */}
      <div className="text-white/40 text-sm mt-6 md:mt-0 text-center md:text-right w-full md:w-auto">
        © {new Date().getFullYear()} Dumo Digital. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
