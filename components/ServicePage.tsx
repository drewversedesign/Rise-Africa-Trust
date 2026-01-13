import React from 'react';
import { Page } from '../types';

interface ServicePageProps {
  navigateTo?: (page: Page) => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Hero Background" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">Our Mission in Action</span>
          <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
            Empowering Communities through <br/><span className="text-secondary">Sustainable Programs</span>
          </h1>
          <p className="text-gray-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            We are dedicated to fostering resilience and growth across Africa through targeted interventions in health, education, and nutrition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#core-pillars" className="bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-4 px-8 rounded-full shadow-xl transition transform hover:-translate-y-1">
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-background-light dark:bg-background-dark relative" id="core-pillars">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Our Core Pillars</span>
            <h2 className="font-display text-4xl font-bold text-text-main dark:text-white">Holistic Support Services</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mt-4 text-lg">We focus on four key areas to ensure comprehensive community development and long-term sustainability.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Food */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-4xl">lunch_dining</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-3">Healthy Food & Nutrition</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                Combatting malnutrition through school feeding programs and sustainable agriculture training.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <h4 className="text-xs font-bold uppercase text-text-muted-light dark:text-gray-400 mb-3 tracking-wide">Key Initiatives</h4>
                <ul className="space-y-2">
                  {['Daily School Meals', 'Community Gardens', 'Emergency Food Relief'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-main dark:text-gray-300">
                      <span className="material-icons-round text-secondary text-base">check_circle</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-4xl">school</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-3">Quality Education</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                Ensuring every child has access to quality learning environments and materials.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <h4 className="text-xs font-bold uppercase text-text-muted-light dark:text-gray-400 mb-3 tracking-wide">Key Initiatives</h4>
                <ul className="space-y-2">
                  {['Scholarships', 'Teacher Training', 'School Supplies'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-main dark:text-gray-300">
                      <span className="material-icons-round text-blue-500 text-base">check_circle</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Medical */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-4xl">medical_services</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-3">Medical Care</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                Bridging the healthcare gap in remote areas with essential services and supplies.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <h4 className="text-xs font-bold uppercase text-text-muted-light dark:text-gray-400 mb-3 tracking-wide">Key Initiatives</h4>
                <ul className="space-y-2">
                  {['Mobile Clinics', 'Maternal Health', 'Vaccination Drives'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-main dark:text-gray-300">
                      <span className="material-icons-round text-rose-500 text-base">check_circle</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Water */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-20 h-20 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons-round text-4xl">water_drop</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-3">Clean Water Access</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                Implementing sustainable water solutions to prevent disease and improve quality of life.
              </p>
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <h4 className="text-xs font-bold uppercase text-text-muted-light dark:text-gray-400 mb-3 tracking-wide">Key Initiatives</h4>
                <ul className="space-y-2">
                  {['Borehole Drilling', 'Filtration Systems', 'Hygiene Education'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text-main dark:text-gray-300">
                      <span className="material-icons-round text-cyan-500 text-base">check_circle</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary dark:bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">How We Work</span>
            <h2 className="font-display text-4xl font-bold">Our Approach</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assess', desc: 'We identify community needs through direct engagement.' },
              { step: '02', title: 'Plan', desc: 'We develop sustainable strategies with local leaders.' },
              { step: '03', title: 'Implement', desc: 'We execute projects with transparency and efficiency.' },
              { step: '04', title: 'Sustain', desc: 'We ensure long-term impact through training and support.' },
            ].map((item, i) => (
              <div key={i} className="relative p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <span className="text-6xl font-display font-bold text-white/10 absolute top-2 right-4">{item.step}</span>
                <h3 className="font-bold text-xl mb-3 text-secondary">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
            Ready to make a difference?
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg mb-10">
            Your support changes lives. Whether you donate or volunteer, you are helping build a better future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigateTo && navigateTo('donations')}
              className="bg-primary hover:bg-primary-dark text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl shadow-primary/30 transition transform hover:-translate-y-1"
            >
              Start Donating
            </button>
            <button 
              onClick={() => navigateTo && navigateTo('contact')}
              className="bg-white dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-gray-700 text-text-main dark:text-white border border-gray-200 dark:border-gray-700 text-lg font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:-translate-y-1"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;