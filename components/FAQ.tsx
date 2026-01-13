import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
        <div className="hidden lg:block">
            {/* Using stats from sibling component for layout balance in the main view, but visually the FAQ is the focus of this split section content in the template */}
            {/* Placeholder to maintain grid structure from template which had stats on left and FAQ on right */}
             <div className="relative h-full flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" alt="FAQ Illustration" className="rounded-3xl shadow-xl object-cover" />
             </div>
        </div>
        
        <div>
          <span className="text-text-muted-light dark:text-text-muted-dark font-bold text-sm tracking-wider uppercase mb-2 block">Recently Asked Questions</span>
          <h2 className="font-display text-4xl font-bold text-text-main dark:text-white mb-8">Frequently Asked <br /> Questions</h2>
          
          <div className="space-y-4">
            {[
              { q: "Can I change where I want my donation to go?", a: "Yes, you can usually specify where you'd like your donation to go when you make it. Most charities will have a 'designation' field on their donation form." },
              { q: "Where does my transaction processing fee go?", a: "Adding an additional 2.5% to the amount of your donation will help cover processing fees and other expenses associated with the processing of your gift.", active: true },
              { q: "How can I receive a refund?", a: "Please contact our support team within 30 days of your donation to request a refund. We handle requests on a case-by-case basis." },
              { q: "Is my credit card information secure?", a: "Yes, absolutely. We use industry-standard encryption and security protocols to ensure your payment information is always protected." },
            ].map((item, i) => (
              <details key={i} className="group bg-white dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700" open={item.active}>
                <summary className={`flex justify-between items-center font-bold cursor-pointer list-none ${item.active ? 'text-primary' : 'text-text-main dark:text-white'}`}>
                  <span>{item.q}</span>
                  <span className="transition group-open:rotate-180">
                    <i className="material-icons-round">{item.active ? 'expand_less' : 'expand_more'}</i>
                  </span>
                </summary>
                <div className="text-text-muted-light dark:text-text-muted-dark text-sm mt-3 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;