import React from 'react';
import PageHeader from '../components/PageHeader';
import { AITenantIcon, ACHIcon, LeaseIcon, MoneyIcon } from '../components/icons';
import { useNavigation } from '../contexts/NavigationContext';

const ForLandlordsPage: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  const landlordFeatures = [
    {
      icon: <MoneyIcon className="w-8 h-8 text-primary" />,
      title: 'Get Paid Faster',
      description: 'Direct ACH payments mean rent is in your account in 2-3 business days. No more lost checks or waiting for funds to clear.'
    },
    {
      icon: <AITenantIcon className="w-8 h-8 text-primary" />,
      title: 'Find Better Tenants',
      description: 'Our AI-powered screening provides in-depth background, credit, and eviction reports, so you can choose tenants with confidence.'
    },
    {
      icon: <LeaseIcon className="w-8 h-8 text-primary" />,
      title: 'Automate Your Paperwork',
      description: 'Generate state-compliant leases in minutes, send for e-signature, and store everything securely online. No more printing or filing.'
    },
    {
      icon: <ACHIcon className="w-8 h-8 text-primary" />,
      title: 'Reduce Late Payments',
      description: 'Enable automated, recurring rent payments for your tenants. They set it once, and you get paid on time, every time.'
    },
  ];

  return (
    <>
      <PageHeader
        title="Empowering Landlords with Smarter Tools"
        subtitle="Take control of your properties, streamline your workflow, and maximize your returns with RentEase."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <img src="https://picsum.photos/600/400?random=10" alt="Landlord Dashboard" className="rounded-lg shadow-xl" />
             </div>
             <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Landlords Choose RentEase</h2>
                <ul className="space-y-6">
                    {landlordFeatures.map(feature => (
                      <li key={feature.title} className="flex items-start">
                          <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">{feature.icon}</div>
                          <div className="ml-4">
                              <h3 className="text-lg font-semibold">{feature.title}</h3>
                              <p className="text-gray-600 mt-1">{feature.description}</p>
                          </div>
                      </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Rental Management?</h2>
            <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">Join hundreds of landlords who trust RentEase to manage their properties efficiently.</p>
            <a href="#" onClick={(e) => handleNavClick(e, 'home#pricing')} className="bg-accent text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-105 duration-300">
              View Pricing
            </a>
        </div>
      </section>
    </>
  );
};

export default ForLandlordsPage;