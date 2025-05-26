import React, { useState } from "react";

const links = [
  { label: "Our Services", href: "#services" },
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
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-4 py-3 sm:px-8 transition-all">
        <div className="font-bold text-xl text-[#7BB9E8]">Dumo Digital</div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <span
            className={`block w-7 h-1 rounded bg-[#7BB9E8] transition-all duration-300 mb-1 ${open ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-7 h-1 rounded bg-[#7BB9E8] transition-all duration-300 mb-1 ${open ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-7 h-1 rounded bg-[#7BB9E8] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#7BB9E8] font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full pt-24 px-8 gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg text-gray-800 font-semibold hover:text-[#7BB9E8] transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu; 