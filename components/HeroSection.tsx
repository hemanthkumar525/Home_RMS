import React from 'react';
import { useNavigation } from '../contexts/NavigationContext';

const HeroSection: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <section className="bg-light py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Effortless Rental Management,
            <span className="text-primary"> Direct to You.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            The all-in-one platform for modern landlords. Automate rent collection, generate leases, and find the best tenants with our powerful AI-driven tools.
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'home#pricing')} className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-105 duration-300">
              Start Your Free Trial
            </a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'home#how-it-works')} className="bg-white text-primary font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 border border-gray-200 transition-transform transform hover:scale-105 duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;