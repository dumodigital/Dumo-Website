import React, { useState } from 'react';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu">
      <button onClick={toggleMenu} className="menu-button">
        {isOpen ? 'Close' : 'Menu'}
      </button>
      {isOpen && (
        <nav className="mobile-nav">
          <ul>
            <li><a href="#home" onClick={handleMenuItemClick}>Home</a></li>
            <li><a href="#about" onClick={handleMenuItemClick}>About</a></li>
            <li><a href="#services" onClick={handleMenuItemClick}>Services</a></li>
            <li><a href="#portfolio" onClick={handleMenuItemClick}>Portfolio</a></li>
            <li><a href="#contact" onClick={handleMenuItemClick}>Contact</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu; 