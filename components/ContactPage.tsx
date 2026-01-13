import React, { useState } from 'react';
import { Page } from '../types';

interface ContactPageProps {
  navigateTo?: (page: Page) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState<'message' | 'volunteer'>('message');

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePartnerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab('message');
    scrollToForm();
  };

  const handleVolunteerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab('volunteer');
    scrollToForm();
  };

  return (
    <div className="animate-fade-in flex-grow">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Community gathering" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          />
          <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block bg-white/10 w-fit mx-auto px-4 py-1 rounded-full backdrop-blur-sm">Contact Us</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Have questions or want to get involved with Rise Africa Trust? We'd love to hear from you. Together we can build a brighter future.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] text-background-light dark:text-background-dark fill-current" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="relative z-20 -mt-20 mb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-xl border-b-4 border-primary text-center group hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-icons-round text-3xl">location_on</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-2">Visit Our Office</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">124 Mandela Avenue<br/>Johannesburg, South Africa</p>
            </div>
            
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-xl border-b-4 border-secondary text-center group hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center text-secondary-dark mb-4 group-hover:bg-secondary group-hover:text-primary-dark transition-colors duration-300">
                <span className="material-icons-round text-3xl">phone</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-2">Call Us</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">Mon-Fri from 9am to 6pm</p>
              <a className="font-bold text-primary mt-1 block hover:underline" href="tel:+27115463257">(+27) 11 546 3257</a>
            </div>
            
            <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-xl border-b-4 border-primary text-center group hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-icons-round text-3xl">mail</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-main dark:text-white mb-2">Email Us</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">Send us your query anytime!</p>
              <a className="font-bold text-primary mt-1 block hover:underline" href="mailto:info@riseafricatrust.org">info@riseafricatrust.org</a>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-12 lg:py-20" id="contact-form-section">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl mb-8 relative z-20">
               <button 
                 onClick={() => setActiveTab('message')}
                 className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary ${activeTab === 'message' ? 'bg-white dark:bg-surface-dark shadow-sm text-primary' : 'text-text-muted-light dark:text-gray-400 hover:text-text-main dark:hover:text-white'}`}
               >
                 Send Message
               </button>
               <button 
                 onClick={() => setActiveTab('volunteer')}
                 className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary ${activeTab === 'volunteer' ? 'bg-white dark:bg-surface-dark shadow-sm text-primary' : 'text-text-muted-light dark:text-gray-400 hover:text-text-main dark:hover:text-white'}`}
               >
                 Volunteer Sign-up
               </button>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-[100px] -z-0"></div>
            
            {activeTab === 'message' ? (
              <div className="relative z-10 animate-fade-in">
                <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Send a Message</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">We are here to help you</h2>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
                  Whether you have a question about our programs, volunteering, or how to donate, our team is ready to answer all your questions.
                </p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Your Name</label>
                      <input id="name" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white" placeholder="John Doe" type="text"/>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Your Email</label>
                      <input id="email" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white" placeholder="john@example.com" type="email"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Subject</label>
                    <input id="subject" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white" placeholder="How can we help?" type="text"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Message</label>
                    <textarea id="message" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white" placeholder="Write your message here..." rows={5}></textarea>
                  </div>
                  <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-primary/30 transition transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">
                    Send Message
                    <span className="material-icons-round group-hover:translate-x-1 transition-transform">send</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="relative z-10 animate-fade-in">
                <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Join Our Team</span>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white mb-6">Become a Volunteer</h2>
                <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
                  Make a real impact. Fill out the form below to join our community of changemakers.
                </p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="vol-name" className="block text-xs font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Full Name</label>
                      <input id="vol-name" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white" placeholder="John Doe" type="text"/>
                    </div>
                    <div>
                      <label htmlFor="vol-phone" className="block text-xs font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Phone Number</label>
                      <input id="vol-phone" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white" placeholder="+27 ..." type="tel"/>
                    </div>
                  </div>
                  <div>
                      <label htmlFor="vol-email" className="block text-xs font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Email Address</label>
                      <input id="vol-email" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white" placeholder="john@example.com" type="email"/>
                  </div>
                  
                  <div>
                      <label className="block text-xs font-bold text-text-main dark:text-gray-300 mb-3 uppercase tracking-wide">Areas of Interest</label>
                      <div className="grid grid-cols-2 gap-3">
                          {['Fundraising', 'Event Support', 'Field Work', 'Administrative'].map((area) => (
                              <label key={area} className="flex items-center gap-2 cursor-pointer p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary w-4 h-4" />
                                  <span className="text-sm text-text-main dark:text-gray-300 font-medium">{area}</span>
                              </label>
                          ))}
                      </div>
                  </div>

                  <div>
                    <label htmlFor="vol-avail" className="block text-xs font-bold text-text-main dark:text-gray-300 mb-2 uppercase tracking-wide">Availability (Days/Times)</label>
                    <input id="vol-avail" className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text-main dark:text-white" placeholder="e.g. Weekends, Mondays 9am-12pm" type="text"/>
                  </div>
                  
                  <button className="bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-4 px-10 rounded-full shadow-lg shadow-secondary/30 transition transform hover:-translate-y-1 w-full md:w-auto flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary" type="submit">
                    Submit Application
                    <span className="material-icons-round group-hover:translate-x-1 transition-transform">volunteer_activism</span>
                  </button>
                </form>
              </div>
            )}
          </div>
          
          <div className="h-full min-h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-soft relative border border-gray-100 dark:border-gray-700 group isolate">
            {/* Status Badge */}
            <div className="absolute top-4 left-4 z-10 bg-white dark:bg-surface-dark px-4 py-2 rounded-lg shadow-md flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-text-main dark:text-white">Office Open Now</span>
            </div>

            {/* Get Directions Button Overlay */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=124+Mandela+Avenue+Johannesburg+South+Africa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 bg-white dark:bg-surface-dark text-text-main dark:text-white px-6 py-3 rounded-full shadow-xl font-bold text-sm flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <span className="material-icons-round text-lg">directions</span>
              Get Directions
            </a>

            {/* Map Iframe */}
            <iframe 
              title="Office Location Map"
              allowFullScreen 
              className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.75549065603!2d27.96589995574345!3d-26.17150459733056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1652882585258!5m2!1sen!2sus" 
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-primary/5 dark:bg-gray-800/30">
        <div className="container mx-auto px-4 text-center max-w-4xl relative">
          <div className="absolute top-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-3 block">Partnerships</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">Work With Us</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
            Interested in partnering with Rise Africa Trust? We are always looking for organizations, companies, and dedicated individuals who share our vision for a self-sustaining Africa. Let's create impactful change together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handlePartnerClick}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-primary/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Partnership Inquiry
              <span className="material-icons-round text-sm">arrow_forward</span>
            </button>
            <button 
              onClick={handleVolunteerClick}
              className="bg-white dark:bg-surface-dark hover:bg-gray-50 text-text-main dark:text-white font-bold py-4 px-10 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Volunteer Programs
              <span className="material-icons-round text-sm text-secondary-dark">volunteer_activism</span>
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-display font-bold text-2xl text-text-main dark:text-white mb-8 relative inline-block">
            Follow Our Journey
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-secondary rounded-full"></span>
          </h3>
          <div className="flex justify-center flex-wrap gap-6">
            <a aria-label="Facebook" className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-text-muted-light dark:text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary" href="#">
              <span className="material-icons-round text-2xl">facebook</span>
            </a>
            <a aria-label="Twitter" className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-text-muted-light dark:text-gray-400 hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary" href="#">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a aria-label="Instagram" className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-text-muted-light dark:text-gray-400 hover:bg-[#E1306C] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary" href="#">
              <span className="material-icons-round text-2xl">smart_display</span>
            </a>
            <a aria-label="LinkedIn" className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-text-muted-light dark:text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary" href="#">
              <span className="material-icons-round text-2xl">work</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;