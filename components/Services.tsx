import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Service, Page } from '../types';

interface ServicesProps {
  navigateTo?: (page: Page) => void;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Healthy Food',
    description: 'Providing nutritious meals to schools and community centers across the region.',
    icon: 'lunch_dining',
    colorClass: 'text-primary bg-green-50 dark:bg-green-900/30 group-hover:bg-primary',
  },
  {
    id: '2',
    title: 'Kids Education',
    description: 'Supporting scholarships and school infrastructure to ensure every child learns.',
    icon: 'school',
    colorClass: 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 group-hover:bg-blue-600',
  },
  {
    id: '3',
    title: 'Pure Water',
    description: 'Building wells and sanitation systems to provide clean, safe drinking water.',
    icon: 'water_drop',
    colorClass: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-900/30 group-hover:bg-cyan-600',
  },
  {
    id: '4',
    title: 'Medical Care',
    description: 'Deploying mobile clinics and supplies to remote and underserved areas.',
    icon: 'medical_services',
    colorClass: 'text-rose-500 bg-rose-50 dark:bg-rose-900/30 group-hover:bg-rose-500',
  },
];

const Services: React.FC<ServicesProps> = ({ navigateTo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          anime({
            targets: '.service-card',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150), // Increase delay for each subsequent card
            easing: 'easeOutQuad',
            duration: 800
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="services" className="py-20" ref={containerRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Our Services</span>
            <h2 className="font-display text-4xl font-bold text-text-main dark:text-white">We Are Here to Help Them</h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mt-4">
              At Rise Africa Trust, let us help you solve problems so that you can focus on your mission. We support communities through difficult periods.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="service-card opacity-0 bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow group hover:-translate-y-2 duration-300">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:text-white transition-colors ${service.colorClass}`}>
                  <span className="material-icons-round text-3xl">{service.icon}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-3">{service.title}</h3>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-orange-50/50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Why Choose Us</span>
            <h2 className="font-display text-4xl font-bold text-text-main dark:text-white mb-6">
              Join Your Hands with Us for <br /> A Better Life and Future
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
              Join the community to give education for the childrens and together make them educated for their lives. We help companies develop powerful corporate.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Our Missions', icon: 'star', desc: 'We help communities develop powerful social responsibility and engagement strategies.' },
                { title: 'Our Stories', icon: 'auto_stories', desc: 'Read about the lives changed through our pan-African initiatives.' },
                { title: 'Donate for Them', icon: 'volunteer_activism', desc: 'Your contribution goes directly to where it is needed most.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <span className="bg-primary/10 text-primary p-2 rounded-lg block">
                      <span className="material-icons-round text-xl">{item.icon}</span>
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-main dark:text-white">{item.title}</h4>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-secondary rounded-full transform -rotate-6 scale-90 translate-y-4 opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80" alt="Children Smiling" className="rounded-full w-full h-full object-cover border-8 border-white dark:border-surface-dark shadow-2xl relative z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-dots-pattern opacity-50 z-0"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;