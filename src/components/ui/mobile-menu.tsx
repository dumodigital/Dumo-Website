import React, { useState } from 'react';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu">
      <button onClick={toggleMenu} className="mobile-menu-button">
        {isOpen ? 'Close' : 'Menu'}
      </button>
      {isOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu; 