
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "RentEase has been a game-changer. The AI screening saved me from a potentially disastrous tenant, and getting rent through ACH is incredibly convenient.",
    author: 'Sarah Johnson',
    role: 'Landlord, 5 Properties',
    avatarUrl: 'https://picsum.photos/100/100?random=2',
  },
  {
    quote: "As a new landlord, I was overwhelmed. This platform simplified everything. The digital lease generation is brilliant and so easy to use.",
    author: 'Michael Chen',
    role: 'Independent Property Owner',
    avatarUrl: 'https://picsum.photos/100/100?random=3',
  },
  {
    quote: "The direct-to-owner payment system is the best feature. No more waiting for checks to clear. The pricing is also very fair for the value provided.",
    author: 'Jessica Miller',
    role: 'Portfolio Manager',
    avatarUrl: 'https://picsum.photos/100/100?random=4',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col h-full">
        <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center mt-auto">
            <img src={testimonial.avatarUrl} alt={testimonial.author} className="w-14 h-14 rounded-full mr-4" />
            <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Loved by Landlords Everywhere</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
