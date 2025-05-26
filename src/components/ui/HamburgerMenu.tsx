import React, { useState } from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Contact", href: "#contact" },
];

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Hamburger Icon Only on Mobile */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden flex flex-col justify-center items-center w-12 h-12 bg-white rounded-full shadow-lg focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open menu"
        style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
      >
        <span
          className={`block w-8 h-1 rounded bg-[#7BB9E8] transition-all duration-300 mb-1 ${open ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-8 h-1 rounded bg-[#7BB9E8] transition-all duration-300 mb-1 ${open ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-8 h-1 rounded bg-[#7BB9E8] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>
      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col font-sans ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ boxShadow: "-8px 0 32px 0 rgba(123,185,232,0.10)" }}
      >
        {/* Top Section: Centered Brand Text & Close */}
        <button
          className="fixed right-4 top-0 z-[60] text-black text-3xl p-2 rounded-bl-xl focus:outline-none md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{ fontSize: 32 }}
        >
          ×
        </button>
        <div className="pt-8 pb-6 flex flex-col items-center justify-center">
          <div className="mx-auto text-2xl font-extrabold text-[#7BB9E8] tracking-wide text-center w-full" style={{ letterSpacing: 1 }}>
            Dumo Digital
          </div>
        </div>
        {/* Middle Section: Nav Links */}
        <div className="flex flex-col gap-6 px-8 pb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl text-[#111] font-semibold py-2 tracking-wide hover:text-[#7BB9E8] transition-colors duration-200"
              style={{ letterSpacing: 0.5 }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Centered Keenan Logo */}
        <div className="flex justify-center items-center pb-16">
          <a href="https://keenan.osu.edu/" target="_blank" rel="noopener noreferrer">
            <img src="/images/keenan-logo.png" alt="Keenan Logo" className="h-32 w-auto object-contain" style={{ maxWidth: 200 }} />
          </a>
        </div>
        {/* Bottom Section: Social & Contact */}
        <div className="mt-auto px-8 pb-8">
          <hr className="mb-6 border-gray-200" />
          <div className="flex flex-col gap-4">
            <a
              href="https://instagram.com/dumodigital"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#111] hover:text-[#7BB9E8] text-lg font-medium transition-colors duration-200"
            >
              <FaInstagram className="text-2xl" /> Instagram
            </a>
            <a
              href="tel:8476246003"
              className="flex items-center gap-3 text-[#111] hover:text-[#7BB9E8] text-lg font-medium transition-colors duration-200"
            >
              <FaPhoneAlt className="text-xl" /> Call Us
            </a>
            <a
              href="mailto:info@dumodigital.com"
              className="flex items-center gap-3 text-[#111] hover:text-[#7BB9E8] text-lg font-medium transition-colors duration-200"
            >
              <FaEnvelope className="text-xl" /> Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu; 