
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ForLandlordsPage from './pages/ForLandlordsPage';
import ForTenantsPage from './pages/ForTenantsPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import { NavigationProvider } from './contexts/NavigationContext';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (path: string) => {
    const [page, hash] = path.split('#');
    setCurrentPage(page || 'home');
    
    if (hash) {
      // Defer scrolling until after the new page has rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'for-landlords':
        return <ForLandlordsPage />;
      case 'for-tenants':
        return <ForTenantsPage />;
      case 'about':
        return <AboutPage />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <NavigationProvider value={{ navigate, currentPage }}>
      <div className="bg-white font-sans text-gray-800 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default App;
