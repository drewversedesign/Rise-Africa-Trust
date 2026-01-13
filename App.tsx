import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ServicePage from './components/ServicePage';
import DonationPage from './components/DonationPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { Page } from './types';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'services':
        return <ServicePage navigateTo={navigateTo} />;
      case 'donations':
        return <DonationPage />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white p-4 z-50 rounded-lg shadow-xl font-bold ring-2 ring-white"
      >
        Skip to main content
      </a>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        currentPage={currentPage}
        navigateTo={navigateTo}
      />
      <main id="main-content" className="flex-grow flex flex-col focus:outline-none" tabIndex={-1}>
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;