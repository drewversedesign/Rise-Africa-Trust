import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.type === 'email' ? 'email' : e.target.type === 'tel' ? 'phone' : e.target.type === 'text' ? 'name' : 'message']: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after a delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Contact Us</span>
          <h2 className="font-display text-4xl font-bold text-text-main dark:text-white">We Love to Hear from Our <br /> Happy Customers</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 bg-white dark:bg-surface-dark rounded-3xl p-6 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
          <div>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Contact" className="rounded-2xl w-full h-64 object-cover mb-8" />
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
              There are many variations of passages of available but the majority have suffered alteration in some form, by injected randomized words even slightly believable.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-text-main dark:text-white">
                  <i className="material-icons-round">phone</i>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">Phone</h4>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">+27 11 546 3257</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-text-main dark:text-white">
                  <i className="material-icons-round">location_on</i>
                </div>
                <div>
                  <h4 className="font-bold text-text-main dark:text-white">Address</h4>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">124 Mandela Avenue, Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
          </div>
          
          {submitted ? (
             <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
               <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                 <i className="material-icons-round text-4xl">check</i>
               </div>
               <h3 className="text-2xl font-bold text-text-main dark:text-white mb-2">Message Sent!</h3>
               <p className="text-text-muted-light dark:text-text-muted-dark">We'll get back to you shortly.</p>
             </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  required
                  className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg py-3 px-4 text-text-main dark:text-white focus:ring-2 focus:ring-primary" 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg py-3 px-4 text-text-main dark:text-white focus:ring-2 focus:ring-primary" 
                />
              </div>
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg py-3 px-4 text-text-main dark:text-white focus:ring-2 focus:ring-primary" 
              />
              <textarea 
                rows={4} 
                placeholder="Message" 
                required
                className="w-full bg-gray-50 dark:bg-gray-700 border-none rounded-lg py-3 px-4 text-text-main dark:text-white focus:ring-2 focus:ring-primary"
              ></textarea>
              <button type="submit" className="bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-3 px-8 rounded-lg transition w-full md:w-auto">
                Make an Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;