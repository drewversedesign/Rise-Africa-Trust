import React from 'react';
import { Page } from '../types';

interface TeamProps {
  navigateTo: (page: Page) => void;
}

const Team: React.FC<TeamProps> = ({ navigateTo }) => {
  const teamMembers = [
    { name: 'Esther Howard', role: 'Volunteer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Arlene McCoy', role: 'Volunteer', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
    { name: 'Devon Lane', role: 'Volunteer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Floyd Miles', role: 'Volunteer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Our Expert Team</span>
            <h2 className="font-display text-4xl font-bold text-text-main dark:text-white">Meet The Team Behind <br /> Their Success Story</h2>
          </div>
          <button 
            onClick={() => navigateTo('about')}
            className="hidden sm:inline-block bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-3 px-6 rounded-full text-sm shadow transition"
          >
            View All Members
          </button>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="rounded-3xl overflow-hidden mb-4 relative">
                <img src={member.img} alt={member.name} className="w-full aspect-[3/4] object-cover filter grayscale group-hover:grayscale-0 transition duration-500" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                {i === 1 && (
                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-4 py-1 rounded-full">Volunteer</div>
                )}
              </div>
              <h3 className="font-display font-bold text-xl text-text-main dark:text-white">{member.name}</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;