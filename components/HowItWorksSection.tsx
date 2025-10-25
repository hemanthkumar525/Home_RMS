
import React from 'react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'List Your Property',
      description: 'Create a beautiful listing in minutes and publish it to top rental sites with a single click.',
    },
    {
      step: 2,
      title: 'Screen with AI',
      description: 'Invite applicants and let our AI-powered screening provide you with a comprehensive report to choose the best tenant.',
    },
    {
      step: 3,
      title: 'Sign & Get Paid',
      description: 'Generate a digital lease for e-signature, then automate rent collection directly to your bank account via ACH.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Get Started in 3 Simple Steps</h2>
          <p className="mt-4 text-lg text-gray-600">
            Managing your rentals has never been this easy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {steps.map((item, index) => (
            <div key={item.step} className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-full h-1 bg-gray-300 ml-8"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
