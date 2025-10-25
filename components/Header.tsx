import React, { useState } from 'react';
import { BuildingIcon } from './icons';
import { useNavigation } from '../contexts/NavigationContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { navigate } = useNavigation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Features', path: 'home#features' },
    { name: 'How It Works', path: 'home#how-it-works' },
    { name: 'Pricing', path: 'home#pricing' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center space-x-2 text-primary">
            <img src="Home_RMS/images/RMS-Logo.png" alt="Logo" className="w-40 h-8"/>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={`#${link.path.split('#')[1]}`} onClick={(e) => handleNavClick(e, link.path)} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
             <a href="#" className="text-primary font-semibold hover:underline">Log In</a>
            <a href="#" className="bg-accent text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-accent-hover transition-all duration-300">
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={`#${link.path.split('#')[1]}`} onClick={(e) => handleNavClick(e, link.path)} className="text-gray-600 hover:text-primary transition-colors duration-300 font-medium text-center py-2 rounded-md hover:bg-gray-100">
                  {link.name}
                </a>
              ))}
              <a href="#" className="text-primary font-semibold hover:underline text-center py-2">Log In</a>
              <a href="#" className="bg-accent text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-accent-hover transition-all duration-300 text-center">
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
