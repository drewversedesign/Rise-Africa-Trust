import React from 'react';
import { Cause } from '../types';

const causes: Cause[] = [
  {
    id: '1',
    title: 'Essential medicines for rural clinics',
    description: 'Helping providing critical medical supplies to clinics in remote villages.',
    category: 'Medical',
    categoryColor: 'bg-primary',
    raised: 25270,
    goal: 40000,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'School Counseling for children of refugees',
    description: 'Supporting mental health and integration for displaced children.',
    category: 'Education',
    categoryColor: 'bg-yellow-700',
    raised: 18500,
    goal: 32000,
    image: 'https://images.unsplash.com/photo-1427504746696-ea3025e87552?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'Promoting the basic rights of the poor children',
    description: 'Ensuring food security and basic rights for vulnerable youth.',
    category: 'Food',
    categoryColor: 'bg-green-600',
    raised: 12000,
    goal: 50000,
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80'
  }
];

const Causes: React.FC = () => {
  return (
    <section id="donations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-700 dark:text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Help & Donate Us Now</span>
          <h2 className="font-display text-4xl font-bold text-text-main dark:text-white">Find The Popular Cause <br /> and Donate Them</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause) => {
            const percentage = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
            return (
              <div key={cause.id} className="group bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="relative h-56 overflow-hidden">
                  <img src={cause.image} alt={cause.category} className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500" />
                  <span className={`absolute bottom-4 left-4 ${cause.categoryColor} text-white text-xs font-bold px-3 py-1 rounded shadow-md`}>
                    {cause.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-2">{cause.title}</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">{cause.description}</p>
                  
                  <div className="mb-2 flex justify-between text-xs font-bold">
                    <span className={cause.categoryColor.replace('bg-', 'text-')}>{percentage}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mb-4">
                    <div className={`${cause.categoryColor} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="font-bold text-text-main dark:text-white">${cause.raised.toLocaleString()}</span> 
                      <span className="text-text-muted-light dark:text-text-muted-dark text-xs ml-1">Raised</span>
                    </div>
                    <div>
                      <span className="font-bold text-text-main dark:text-white">${cause.goal.toLocaleString()}</span>
                      <span className="text-text-muted-light dark:text-text-muted-dark text-xs ml-1">Goal</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;