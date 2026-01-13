import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, currentPage, navigateTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page, e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="hidden lg:block bg-background-light dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs text-text-muted-light dark:text-text-muted-dark">
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"><i className="material-icons-round text-sm align-middle">facebook</i></a>
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"><i className="material-icons-round text-sm align-middle">filter_vintage</i></a>
            <a href="#" aria-label="YouTube" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"><i className="material-icons-round text-sm align-middle">smart_display</i></a>
          </div>
          <div className="flex space-x-6">
            <span className="flex items-center"><i className="material-icons-round text-sm mr-1" aria-hidden="true">location_on</i> 124 Mandela Avenue - Johannesburg, South Africa</span>
            <span className="flex items-center"><i className="material-icons-round text-sm mr-1" aria-hidden="true">phone</i> (+27) 11 546 3257</span>
            <span className="flex items-center"><i className="material-icons-round text-sm mr-1" aria-hidden="true">schedule</i> 9:00am - 6:00pm</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/90 dark:bg-surface-dark/95 backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" onClick={(e) => handleNavClick('home', e)} className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-primary-dark transition-colors">
              <span className="material-icons-round">volunteer_activism</span>
            </div>
            <span className="font-display font-bold text-2xl text-text-main dark:text-white">
              Rise Africa
              <span className="text-primary text-xs block font-normal -mt-1 tracking-wider uppercase">Trust</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden lg:flex items-center space-x-8 font-medium text-sm text-text-main dark:text-text-light">
            <a 
              href="#" 
              onClick={(e) => handleNavClick('home', e)}
              className={`${currentPage === 'home' ? 'text-primary font-bold' : 'hover:text-primary transition-colors'} focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1`}
              aria-current={currentPage === 'home' ? 'page' : undefined}
            >
              Home
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('about', e)}
              className={`${currentPage === 'about' ? 'text-primary font-bold' : 'hover:text-primary transition-colors'} focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1`}
              aria-current={currentPage === 'about' ? 'page' : undefined}
            >
              About
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('services', e)}
              className={`${currentPage === 'services' ? 'text-primary font-bold' : 'hover:text-primary transition-colors'} focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1`}
              aria-current={currentPage === 'services' ? 'page' : undefined}
            >
              Services
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('donations', e)}
              className={`${currentPage === 'donations' ? 'text-primary font-bold' : 'hover:text-primary transition-colors'} focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1`}
              aria-current={currentPage === 'donations' ? 'page' : undefined}
            >
              Donations
            </a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('contact', e)}
              className={`${currentPage === 'contact' ? 'text-primary font-bold' : 'hover:text-primary transition-colors'} focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1`}
              aria-current={currentPage === 'contact' ? 'page' : undefined}
            >
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="flex items-center text-sm font-bold text-text-main dark:text-white hover:text-primary gap-2 group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1">
              <span className="bg-secondary/20 p-1 rounded-full text-yellow-700 dark:text-secondary-dark group-hover:bg-secondary/30 transition-colors">
                <i className="material-icons-round text-lg">favorite</i>
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase text-text-muted-light dark:text-gray-400">Join Us Now</span>
                <span>Become a Volunteer</span>
              </div>
            </a>
            <button 
              onClick={() => navigateTo('donations')} 
              className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-primary/30 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Donate Now
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className="material-icons-round" aria-hidden="true">{darkMode ? 'light_mode' : 'dark_mode'}</i>
            </button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className="material-icons-round" aria-hidden="true">{darkMode ? 'light_mode' : 'dark_mode'}</i>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-main dark:text-white p-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <i className="material-icons-round text-3xl" aria-hidden="true">{mobileMenuOpen ? 'close' : 'menu'}</i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-700 py-4 px-4 shadow-xl">
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-4">
              <a 
                href="#" 
                onClick={(e) => handleNavClick('home', e)} 
                className={`${currentPage === 'home' ? 'text-primary font-bold' : 'text-text-main dark:text-white'} block py-2 border-b border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2`}
                aria-current={currentPage === 'home' ? 'page' : undefined}
              >
                Home
              </a>
              <a 
                href="#" 
                onClick={(e) => handleNavClick('about', e)} 
                className={`${currentPage === 'about' ? 'text-primary font-bold' : 'text-text-main dark:text-white'} block py-2 border-b border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2`}
                aria-current={currentPage === 'about' ? 'page' : undefined}
              >
                About
              </a>
              <a 
                href="#" 
                onClick={(e) => handleNavClick('services', e)} 
                className={`${currentPage === 'services' ? 'text-primary font-bold' : 'text-text-main dark:text-white'} block py-2 border-b border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2`}
                aria-current={currentPage === 'services' ? 'page' : undefined}
              >
                Services
              </a>
              <a 
                href="#" 
                onClick={(e) => handleNavClick('donations', e)} 
                className={`${currentPage === 'donations' ? 'text-primary font-bold' : 'text-text-main dark:text-white'} block py-2 border-b border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2`}
                aria-current={currentPage === 'donations' ? 'page' : undefined}
              >
                Donations
              </a>
              <a 
                href="#" 
                onClick={(e) => handleNavClick('contact', e)} 
                className={`${currentPage === 'contact' ? 'text-primary font-bold' : 'text-text-main dark:text-white'} block py-2 border-b border-gray-100 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg px-2`}
                aria-current={currentPage === 'contact' ? 'page' : undefined}
              >
                Contact
              </a>
              <button onClick={() => navigateTo('donations')} className="bg-primary text-white text-center py-3 rounded-full font-bold shadow-lg mt-4 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;