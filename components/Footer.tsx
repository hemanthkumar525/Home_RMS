
import React from 'react';
import { BuildingIcon } from './icons';
import { useNavigation } from '../contexts/NavigationContext';

const Footer: React.FC = () => {
  const { navigate } = useNavigation();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };
  
  const footerLinks = {
    Product: [
      { name: 'Features', path: 'home#features' },
      { name: 'Pricing', path: 'home#pricing' },
      { name: 'For Landlords', path: 'for-landlords' },
      { name: 'For Tenants', path: 'for-tenants' },
    ],
    Company: [
      { name: 'About Us', path: 'about' },
      { name: 'Careers', path: 'careers' },
      { name: 'Contact', path: 'contact' },
      { name: 'Blog', path: 'blog' },
    ],
    Legal: [
      { name: 'Privacy Policy', path: 'privacy' },
      { name: 'Terms of Service', path: 'terms' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>, href: '#' },
    { name: 'Twitter', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.634 4.217 3.804 4.654-.77.208-1.592.238-2.42.088.616 1.924 2.394 3.315 4.512 3.355-1.791 1.4-4.036 2.24-6.49 2.24-.42 0-.834-.025-1.24-.073 2.298 1.474 5.042 2.34 8.016 2.34 9.621 0 14.885-7.994 14.885-14.886 0-.226 0-.452-.015-.676.98-.71 1.83-1.6 2.52-2.62z" /></svg>, href: '#' },
    { name: 'LinkedIn', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.022.82-3.398 2.822-3.398 1.777 0 2.658 1.06 2.658 3.398v8.396h4.98v-10.396c0-4.02-2.198-6.604-5.418-6.604-2.52 0-3.922 1.386-4.542 2.59z" /></svg>, href: '#' },
  ];

  return (
    <footer className="bg-[#2D2B4D] text-white relative overflow-hidden">
  {/* Top Gradient Accent */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#1f1d38] to-[#2D2B4D] opacity-95" />

  <div className="container mx-auto px-6 py-16 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
      
      {/* Brand Section */}
      <div className="md:col-span-4 lg:col-span-2">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'home')}
          className="inline-flex items-center space-x-3 bg-white px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <img src="/images/RMS-Logo.png" alt="App Logo" className="w-40 h-8 drop-shadow-[0_0_8px_rgba(210,180,124,0.3)]"/>
        </a>
        <p className="mt-4 text-gray-300 max-w-sm leading-relaxed">
          The modern solution for rental property management — connecting landlords and tenants seamlessly.
        </p>
      </div>

      {/* Footer Links */}
      {Object.keys(footerLinks).map((category) => (
        <div key={category}>
          <h4 className="font-semibold uppercase tracking-wider text-[#D2B47C] mb-4 text-sm">
            {category}
          </h4>
          <ul className="space-y-3">
            {footerLinks[category].map((link) => (
              <li key={link.name}>
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="text-gray-400 hover:text-[#D2B47C] transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Divider */}
    <div className="mt-14 border-t border-gray-700"></div>

    {/* Bottom Section */}
    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
      <p>&copy; {new Date().getFullYear()} <span className="text-[#D2B47C] font-semibold">RentEase</span>. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 sm:mt-0">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="text-gray-400 hover:text-[#D2B47C] transition-colors duration-300"
          >
            <span className="sr-only">{social.name}</span>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
