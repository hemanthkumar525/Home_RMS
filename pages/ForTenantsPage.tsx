import React from 'react';
import PageHeader from '../components/PageHeader';
import { ACHIcon, LeaseIcon } from '../components/icons';

const ForTenantsPage: React.FC = () => {

  const tenantFeatures = [
    {
      icon: <ACHIcon className="w-8 h-8 text-primary" />,
      title: 'Pay Rent Online, Securely',
      description: 'Forget writing checks. Pay your rent easily and securely with your bank account (ACH). Set up autopay and never miss a due date.'
    },
    {
      icon: <LeaseIcon className="w-8 h-8 text-primary" />,
      title: 'Access Documents Anytime',
      description: 'Your lease and other important documents are stored securely online. Access them whenever you need, from any device.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
      title: 'Streamlined Communication',
      description: 'Easily communicate with your landlord for maintenance requests and other inquiries through our simple messaging portal.'
    },
  ];

  return (
    <>
      <PageHeader
        title="Your Rental Experience, Simplified"
        subtitle="Enjoy a seamless, modern, and secure renting experience with RentEase."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">A Better Way to Rent</h2>
                <ul className="space-y-6">
                    {tenantFeatures.map(feature => (
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
             <div className="order-1 md:order-2">
                <img src="https://picsum.photos/600/400?random=11" alt="Tenant paying rent on phone" className="rounded-lg shadow-xl" />
             </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Is your landlord not using RentEase?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Let them know about a simpler way to manage their property and make your life easier.</p>
            <a href="#" className="bg-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-primary transition-transform transform hover:scale-105 duration-300">
              Invite Your Landlord
            </a>
        </div>
      </section>
    </>
  );
};

export default ForTenantsPage;