import React from 'react';
import { Page } from '../types';

interface EventsProps {
  navigateTo: (page: Page) => void;
}

const Events: React.FC<EventsProps> = ({ navigateTo }) => {
  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Upcoming Events</span>
            <h2 className="font-display text-4xl font-bold text-text-main dark:text-white mb-6">
              Ready to Join Our Latest Upcoming Events
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
              Join the community to give education for the childrens and together make them educated for their lives. We help companies develop powerful corporate.
            </p>
            <button 
              onClick={() => navigateTo('contact')}
              className="bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-3 px-8 rounded-full shadow-lg transition inline-block"
            >
              Discover More
            </button>
          </div>
          
          <div className="mt-12 relative w-48 mx-auto lg:mx-0 opacity-80">
            <svg className="text-primary dark:text-primary-light w-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 160L20 80L180 80L160 160H40Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 80L100 120L180 80" stroke="currentColor" strokeWidth="2"/>
              <path d="M100 120V200" stroke="currentColor" strokeWidth="2"/>
              <circle cx="100" cy="50" r="20" stroke="currentColor" strokeWidth="2"/>
              <path d="M100 70V120" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
        
        <div className="lg:col-span-8 space-y-6">
          {[
            { date: '07 Sep, 2022', title: 'Fundraising Gala for Rural Schools', loc: 'Lagos, Nigeria', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80' },
            { date: '15 Oct, 2022', title: 'Community Health Drive & Vaccination', loc: 'Nairobi, Kenya', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80' },
            { date: '02 Nov, 2022', title: 'Youth Leadership Workshop 2022', loc: 'Accra, Ghana', img: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=400&q=80' },
          ].map((event, i) => (
            <div key={i} className="bg-white dark:bg-surface-dark p-4 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col sm:flex-row gap-6 border border-gray-100 dark:border-gray-700">
              <div className="w-full sm:w-48 h-48 sm:h-32 rounded-xl overflow-hidden flex-shrink-0 relative">
                <img src={event.img} alt="Event" className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">{event.date}</div>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-text-muted-light dark:text-text-muted-dark mb-2">
                  <span className="flex items-center gap-1"><i className="material-icons-round text-sm">schedule</i> 8:00am</span>
                  <span className="flex items-center gap-1"><i className="material-icons-round text-sm">location_on</i> {event.loc}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-2">{event.title}</h3>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="text-primary text-sm font-bold flex items-center gap-1 hover:underline text-left"
                >
                  Read More <i className="material-icons-round text-sm">arrow_forward</i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;