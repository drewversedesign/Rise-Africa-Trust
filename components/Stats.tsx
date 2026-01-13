import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface StatItemProps {
  end: number;
  label: string;
  icon: string;
  colorClass: string;
}

const StatItem: React.FC<StatItemProps> = ({ end, label, icon, colorClass }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current && countRef.current) {
          hasAnimated.current = true;
          
          // Using anime.js for performant DOM updates without React re-renders
          anime({
            targets: { val: 0 },
            val: end,
            round: 1, // No decimals
            easing: 'easeOutExpo',
            duration: 2500,
            update: function(anim) {
              if (countRef.current) {
                countRef.current.innerHTML = anim.animations[0].currentValue.toFixed(0);
              }
            }
          });

          // Animate the container popping up
          anime({
            targets: elementRef.current,
            translateY: [20, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 800
          });

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end]);

  return (
    <div ref={elementRef} className="bg-white dark:bg-surface-dark p-8 rounded-3xl text-center shadow-sm flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300 opacity-0">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${colorClass}`}>
        <span className="material-icons-round text-3xl">{icon}</span>
      </div>
      {/* We init with 0 and let anime.js update innerHTML */}
      <h3 ref={countRef} className="text-3xl font-display font-bold text-text-main dark:text-white tabular-nums">
        0
      </h3>
      <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium uppercase mt-2">{label}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 pt-20">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { count: 4850, label: 'Total Campaigns', icon: 'card_giftcard', color: 'text-yellow-700 dark:text-secondary-dark bg-yellow-50 dark:bg-yellow-900/20' },
          { count: 2068, label: 'Happy Volunteers', icon: 'sentiment_satisfied_alt', color: 'text-primary bg-green-50 dark:bg-green-900/20' },
          { count: 3456, label: 'Released Funds', icon: 'account_balance_wallet', color: 'text-yellow-700 dark:text-secondary-dark bg-yellow-50 dark:bg-yellow-900/20' },
          { count: 480, label: 'Satisfied Donors', icon: 'volunteer_activism', color: 'text-primary bg-green-50 dark:bg-green-900/20' }
        ].map((stat, i) => (
          <StatItem 
            key={i}
            end={stat.count}
            label={stat.label}
            icon={stat.icon}
            colorClass={stat.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;