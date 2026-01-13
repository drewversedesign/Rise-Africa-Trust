import React from 'react';
import { Page } from '../types';

interface AboutProps {
  navigateTo: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ navigateTo }) => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-secondary rounded-full transform rotate-6 scale-90 translate-x-4"></div>
          <div className="relative rounded-full overflow-hidden border-8 border-white dark:border-surface-dark shadow-2xl w-full max-w-md mx-auto aspect-square">
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80" alt="Happy Beneficiary" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute top-10 left-0 lg:left-10 bg-primary text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl border-4 border-white dark:border-surface-dark">
            <span className="text-2xl font-bold block">280K</span>
            <span className="text-[10px] leading-tight">We have helped poor children</span>
          </div>
          
          <div className="absolute bottom-10 right-0 lg:right-10 bg-white dark:bg-surface-dark px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
            <span className="material-icons-round text-secondary text-3xl">card_giftcard</span>
            <div>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-bold uppercase">Donations</p>
              <p className="font-bold text-text-main dark:text-white">Received</p>
            </div>
          </div>
        </div>
        
        <div>
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">Welcome to Rise Africa Trust</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
            Helping Each Other <br /> Can Make World Better
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed">
            We help communities develop powerful local support systems, grantmaking, and engagement strategies. Our impact is about more than moving money to where it's needed most; it's also about helping local nonprofits access information and ideas.
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-text-main dark:text-gray-300">
              <span className="w-2 h-2 rounded-full bg-secondary"></span> Empowering local leadership.
            </li>
            <li className="flex items-center gap-3 text-text-main dark:text-gray-300">
              <span className="w-2 h-2 rounded-full bg-secondary"></span> Sustainable community services.
            </li>
            <li className="flex items-center gap-3 text-text-main dark:text-gray-300">
              <span className="w-2 h-2 rounded-full bg-secondary"></span> Building a future of hope.
            </li>
          </ul>
          
          <button 
            onClick={() => navigateTo('about')}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition inline-block transform hover:-translate-y-0.5"
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;