
import React from 'react';
import PageHeader from '../components/PageHeader';

const teamMembers = [
  { name: 'Alice Johnson', role: 'Founder & CEO', avatarUrl: 'https://picsum.photos/150/150?random=5' },
  { name: 'Bob Williams', role: 'Chief Technology Officer', avatarUrl: 'https://picsum.photos/150/150?random=6' },
  { name: 'Charlie Brown', role: 'Head of Product', avatarUrl: 'https://picsum.photos/150/150?random=7' },
  { name: 'Diana Prince', role: 'Lead UX Designer', avatarUrl: 'https://picsum.photos/150/150?random=8' },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Revolutionizing the Rental Industry"
        subtitle="We believe managing rental properties should be simple, transparent, and accessible for everyone."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              RentEase was founded by a group of landlords and software engineers who were frustrated with the clunky, expensive, and inefficient tools available for property management. We knew there had to be a better way. Our mission is to empower independent landlords with the same powerful, streamlined technology that large property management companies use, all at an affordable price. We're dedicated to simplifying the entire rental lifecycle, from finding the perfect tenant to collecting rent, making the experience better for both landlords and renters.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet the Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              We are a passionate team of innovators, thinkers, and creators dedicated to building the future of rental management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.avatarUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
