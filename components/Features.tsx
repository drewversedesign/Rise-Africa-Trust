import React from 'react';
import { Page } from '../types';

interface FeaturesProps {
  navigateTo: (page: Page) => void;
}

const Features: React.FC<FeaturesProps> = ({ navigateTo }) => {
  return (
    <div className="container mx-auto px-4 -mt-10 lg:-mt-16 relative z-20 mb-20">
      <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl p-6 lg:p-10 grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
        <div 
          onClick={() => navigateTo('contact')}
          className="flex items-start gap-4 pt-4 md:pt-0 cursor-pointer group transition-transform hover:-translate-y-1"
        >
          <div className="w-14 h-14 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-icons-round text-3xl">diversity_3</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-1 group-hover:text-primary transition-colors">Become a Volunteer</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Join our network of changemakers across the continent.</p>
          </div>
        </div>
        
        <div 
          onClick={() => navigateTo('donations')}
          className="flex items-start gap-4 pt-4 md:pt-0 pl-0 md:pl-8 cursor-pointer group transition-transform hover:-translate-y-1"
        >
          <div className="w-14 h-14 rounded-full bg-yellow-50 dark:bg-yellow-900/30 flex items-center justify-center text-secondary-dark flex-shrink-0 group-hover:bg-secondary group-hover:text-primary-dark transition-colors">
            <span className="material-icons-round text-3xl">savings</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-1 group-hover:text-secondary-dark transition-colors">Quick Fundraise</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Support vital projects with easy and transparent fundraising tools.</p>
          </div>
        </div>
        
        <div 
          onClick={() => navigateTo('donations')}
          className="flex items-start gap-4 pt-4 md:pt-0 pl-0 md:pl-8 cursor-pointer group transition-transform hover:-translate-y-1"
        >
          <div className="w-14 h-14 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-icons-round text-3xl">volunteer_activism</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-1 group-hover:text-primary transition-colors">Start Donating</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Make a direct impact on lives with your generous contribution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;