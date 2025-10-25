
import React from 'react';
import PageHeader from '../components/PageHeader';

const jobOpenings = [
  {
    title: 'Senior Frontend Engineer (React)',
    location: 'Remote',
    department: 'Engineering',
  },
  {
    title: 'Product Manager, Payments',
    location: 'New York, NY',
    department: 'Product',
  },
  {
    title: 'Customer Success Specialist',
    location: 'Remote',
    department: 'Support',
  },
  {
    title: 'Digital Marketing Manager',
    location: 'Remote',
    department: 'Marketing',
  },
];

const CareersPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Join Us in Shaping the Future of Renting"
        subtitle="We're looking for passionate, talented people to join our mission. See our open roles below."
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Work at RentEase?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
                <p className="text-gray-600">Help us build tools that empower thousands of landlords and improve the renting experience for millions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Culture</h3>
                <p className="text-gray-600">We're a remote-first company that values work-life balance, trust, and autonomy.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Great Benefits</h3>
                <p className="text-gray-600">Enjoy competitive salary, comprehensive health insurance, and generous paid time off.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
            <div className="bg-white rounded-lg shadow-xl border border-gray-200">
              {jobOpenings.map((job, index) => (
                <div key={job.title} className={`p-6 flex flex-col sm:flex-row justify-between items-center ${index < jobOpenings.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                    <p className="text-gray-600 mt-1">{job.department} &middot; {job.location}</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <a href="#" className="bg-secondary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary transition-all duration-300">
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;
