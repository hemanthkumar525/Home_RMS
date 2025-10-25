import React from 'react';
import type { PricingPlan } from '../types';
import { useNavigation } from '../contexts/NavigationContext';


const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '10',
    period: 'per unit/month',
    features: [
      '1 Property Listing',
      'AI Tenant Screening',
      'Digital Lease Generation',
      'ACH Rent Collection',
      'Email Support',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '25',
    period: 'per unit/month',
    features: [
      'Unlimited Listings',
      'All Starter Features',
      'Expense Tracking',
      'Maintenance Requests',
      'Priority Phone Support',
    ],
    isPopular: true,
  },
  {
    name: 'Business',
    price: 'Contact Us',
    period: 'for 50+ units',
    features: [
      'All Pro Features',
      'Custom Onboarding',
      'Dedicated Account Manager',
      'API Access',
      'Advanced Reporting',
    ],
    isPopular: false,
  },
];

const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  const { navigate } = useNavigation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };
  
  const isContact = plan.price.startsWith('Contact');

  return (
    <div className={`border rounded-xl p-8 flex flex-col ${plan.isPopular ? 'border-primary shadow-2xl relative' : 'border-gray-200 shadow-lg'}`}>
      {plan.isPopular && (
        <div className="absolute top-0 -translate-y-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
      )}
      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
      <div className="mt-4 mb-6">
        {isContact ? (
           <p className="text-4xl font-extrabold text-gray-900">{plan.price}</p>
        ) : (
          <p className="text-5xl font-extrabold text-gray-900">${plan.price}<span className="text-lg font-medium text-gray-500 ml-1">/mo</span></p>
        )}
        <p className="text-gray-500">{plan.period}</p>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href={isContact ? "#" : "#"} 
        onClick={isContact ? (e) => handleNavClick(e, 'contact') : undefined}
        className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-accent text-white hover:bg-accent-hover' : 'bg-secondary text-white hover:bg-primary'}`}>
        {isContact ? 'Contact Sales' : 'Choose Plan'}
      </a>
    </div>
  );
}

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Affordable Prices for Every Landlord</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your portfolio. No hidden fees, no surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;