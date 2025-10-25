
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => (
  <section className="bg-light py-20">
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          {subtitle}
        </p>
      </div>
    </div>
  </section>
);

export default PageHeader;
