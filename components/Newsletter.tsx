import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative py-20 bg-background-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">Subscribe Us</span>
        <h2 className="font-display text-4xl font-bold mb-4">Subscribe for Newsletter</h2>
        <p className="text-gray-400 mb-8 text-sm">Stay updated with our latest missions and success stories across the continent.</p>
        
        {subscribed ? (
           <div className="bg-green-500/20 border border-green-500 text-green-200 py-4 px-6 rounded-lg mb-6 animate-fade-in">
             Thank you for subscribing! You'll hear from us soon.
           </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email Address" 
              aria-label="Email Address for newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow py-4 px-6 rounded-lg text-text-main focus:outline-none focus:ring-2 focus:ring-secondary border-none"
            />
            <button type="submit" className="bg-secondary hover:bg-white hover:text-secondary-dark text-primary-dark font-bold py-4 px-8 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
              Subscribe Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;