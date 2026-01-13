import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Testimonials</span>
        <h2 className="font-display text-4xl font-bold text-text-main dark:text-white mb-16">Trusted by Thousand of <br /> People & Companies</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Sarah", role: "HR Manager", quote: "Rise Africa Trust is my go-to organization for making a real impact. My family and I are always impressed by their dedication!", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
            { name: "John Doe", role: "Donor", quote: "This site is seriously perfect. I love the layout, and its the first place I check before making plans with friends.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 dark:bg-surface-dark p-10 rounded-3xl relative border border-gray-100 dark:border-gray-800 text-left">
              <span className="absolute top-8 left-8 text-secondary text-6xl font-serif opacity-30">“</span>
              <p className="text-text-muted-light dark:text-text-muted-dark italic mb-8 relative z-10">{item.quote}</p>
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">{item.name}</h4>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;