import React from 'react';
import { Page } from '../types';

interface VolunteerCTAProps {
  navigateTo: (page: Page) => void;
}

const VolunteerCTA: React.FC<VolunteerCTAProps> = ({ navigateTo }) => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=80" 
          alt="Hands joining" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-3 block">Become A Volunteers</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">
          Join Your Hand With Us For A <br /> Better Life And Future
        </h2>
        <button 
          onClick={() => navigateTo('contact')}
          className="bg-secondary hover:bg-white hover:text-primary text-primary-dark font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 inline-block"
        >
          Become A Volunteer
        </button>
      </div>
    </section>
  );
};

export default VolunteerCTA;