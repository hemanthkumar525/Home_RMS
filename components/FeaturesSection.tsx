import React from 'react';
import type { Feature } from '../types';
import { AITenantIcon, ACHIcon, LeaseIcon, MoneyIcon, SubscriptionIcon } from './icons';

const features: Feature[] = [
  {
    icon: <MoneyIcon className="w-10 h-10 text-primary" />,
    title: 'Direct Rent to Owner',
    description: 'Cut out the middleman. Tenants pay rent directly to your bank account, ensuring you get your money faster and with full transparency.',
  },
  {
    icon: <AITenantIcon className="w-10 h-10 text-primary" />,
    title: 'AI-Powered Tenant Screening',
    description: 'Make informed decisions with our comprehensive, AI-driven screening reports, including background checks, credit history, and eviction records.',
  },
  {
    icon: <LeaseIcon className="w-10 h-10 text-primary" />,
    title: 'Automatic Digital Leases',
    description: 'Generate, customize, and send state-compliant digital lease agreements in minutes. Get them e-signed and stored securely in the cloud.',
  },
  {
    icon: <ACHIcon className="w-10 h-10 text-primary" />,
    title: 'Automated ACH Payments',
    description: 'Set up recurring rent payments with our secure ACH facility. Tenants can "set it and forget it", reducing late payments and hassle.',
  },
  {
    icon: <SubscriptionIcon className="w-10 h-10 text-primary" />,
    title: 'Affordable Subscriptions',
    description: 'Access powerful property management tools without the hefty price tag. Our simple, flat-fee pricing scales with your needs.',
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-start">
    <div className="bg-indigo-100 p-4 rounded-full mb-6">
      {feature.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">The Landlord Superpower You've Been Waiting For</h2>
          <p className="mt-4 text-lg text-gray-600">
            RentEase streamlines every aspect of the rental lifecycle, from listing to lease renewal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;