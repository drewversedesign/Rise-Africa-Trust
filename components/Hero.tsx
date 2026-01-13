import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Page } from '../types';
import { createDrawable } from '../utils/drawable';
import SplitText from './SplitText';

interface HeroProps {
  navigateTo: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize Canvas Background
    if (canvasRef.current) {
      const cleanup = createDrawable(canvasRef.current);
      return cleanup;
    }
  }, []);

  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    tl
    .add({
      targets: '.hero-tag',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 300
    })
    .add({
      targets: '.hero-title .word', 
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(50), 
    }, '-=600')
    .add({
      targets: '.hero-desc',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 800
    }, '-=600')
    .add({
      targets: '.hero-btn',
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100)
    }, '-=700')
    .add({
      targets: '.hero-image-col',
      opacity: [0, 1],
      translateX: [20, 0],
      duration: 1200,
      easing: 'easeOutQuad'
    }, '-=1000');

  }, []);

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden" ref={containerRef}>
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
      />

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-5 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L100 80 Q50 100 0 80 Z" fill="url(#hero-gradient)" />
          <defs>
            <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f3f4f6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 max-w-xl">
          <div className="hero-tag opacity-0">
            <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 px-3 py-1 rounded-full">
              Always Donate For Children
            </span>
          </div>
          
          <h1 className="hero-title font-display text-5xl lg:text-6xl font-bold leading-tight text-text-main dark:text-white">
            <SplitText wordClassName="word opacity-0">Lend a Helping Hand to</SplitText>{' '}
            <span className="relative inline-block z-10">
              <SplitText wordClassName="word opacity-0">Those in Need</SplitText>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/40 -z-10 rounded-sm"></span>
            </span>
          </h1>

          <p className="hero-desc opacity-0 text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed">
            We empower communities across the continent with sustainable development, education, and healthcare initiatives. Let's build a brighter future for Africa together.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => navigateTo('donations')} 
              className="hero-btn opacity-0 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full shadow-xl shadow-primary/30 transition transform hover:scale-105 hover:-translate-y-1"
            >
              Donate Now
            </button>
            
            <button 
              onClick={() => navigateTo('contact')}
              className="hero-btn opacity-0 flex items-center gap-3 bg-white dark:bg-surface-dark py-2 px-4 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform"
            >
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80" alt="Volunteer" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Volunteer" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark object-cover" />
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Volunteer" className="w-10 h-10 rounded-full border-2 border-white dark:border-surface-dark object-cover" />
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-text-main border-2 border-white dark:border-surface-dark z-10">
                  +4k
                </div>
              </div>
              <div className="text-xs font-bold text-text-main dark:text-white leading-tight text-left">
                Join Our <br />Volunteer
              </div>
            </button>
          </div>
        </div>

        {/* Image Grid */}
        <div className="relative hero-image-col opacity-0">
          {/* Decorative Blurs */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="relative group">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80" alt="Volunteers" className="rounded-3xl shadow-soft object-cover h-64 w-full" />
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-surface-dark/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-primary shadow">DONATIONS</div>
              </div>
              <div className="p-6 bg-white dark:bg-surface-dark rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-text-muted-light dark:text-gray-400">Total Donation</span>
                  <span className="text-primary font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-primary text-white p-6 rounded-3xl rounded-tr-[4rem] shadow-xl flex flex-col items-center text-center justify-center h-48 relative overflow-hidden">
                <span className="material-icons-round text-5xl mb-2 opacity-80">volunteer_activism</span>
                <span className="font-bold text-lg">Help The Children</span>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              </div>
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="Child Smiling" className="rounded-3xl shadow-soft object-cover h-64 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;