
import React from 'react';
import PageHeader from '../components/PageHeader';

const blogPosts = [
  {
    title: '5 Tips for Screening Tenants Like a Pro',
    category: 'Landlord Tips',
    excerpt: 'Learn how to effectively screen applicants to find reliable, long-term tenants for your property.',
    imageUrl: 'https://picsum.photos/400/250?random=20',
    author: 'Jane Doe',
    date: 'October 26, 2023',
  },
  {
    title: 'Understanding ACH Payments for Rent Collection',
    category: 'Finance',
    excerpt: 'A deep dive into how ACH works and why it\'s the most secure and efficient way to collect rent.',
    imageUrl: 'https://picsum.photos/400/250?random=21',
    author: 'John Smith',
    date: 'October 22, 2023',
  },
  {
    title: 'The Ultimate Checklist for New Landlords',
    category: 'Getting Started',
    excerpt: 'Navigating your first rental property? Our comprehensive checklist covers everything you need to know.',
    imageUrl: 'https://picsum.photos/400/250?random=22',
    author: 'Alice Johnson',
    date: 'October 15, 2023',
  },
   {
    title: 'How to Create an Ironclad Digital Lease',
    category: 'Legal',
    excerpt: 'Protect yourself and your property with a legally sound digital lease. Here are the key clauses to include.',
    imageUrl: 'https://picsum.photos/400/250?random=23',
    author: 'Jane Doe',
    date: 'October 10, 2023',
  },
];

const BlogPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="The RentEase Blog"
        subtitle="Insights, tips, and news for modern landlords and property managers."
      />
      
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-primary font-semibold">{post.category}</p>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 hover:text-primary transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-gray-600 flex-grow">{post.excerpt}</p>
                  <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500">
                    <span>By {post.author} on {post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
