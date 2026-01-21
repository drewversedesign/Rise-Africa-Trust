import React from 'react';
import { Page } from '../types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="material-icons-round">volunteer_activism</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Rise Africa
                <span className="text-primary text-xs block font-normal -mt-1 tracking-wider uppercase">Trust</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We empower communities across the continent with sustainable development, education, and healthcare initiatives. Let's build a brighter future for Africa together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="hover:text-primary transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"><span className="material-icons-round text-base text-primary">chevron_right</span> Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className="hover:text-primary transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"><span className="material-icons-round text-base text-primary">chevron_right</span> About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('services'); }} className="hover:text-primary transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"><span className="material-icons-round text-base text-primary">chevron_right</span> Our Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('donations'); }} className="hover:text-primary transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"><span className="material-icons-round text-base text-primary">chevron_right</span> Donations</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }} className="hover:text-primary transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"><span className="material-icons-round text-base text-primary">chevron_right</span> Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-icons-round text-primary mt-1" aria-hidden="true">location_on</span>
                <span>124 Mandela Avenue<br/>Johannesburg, South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary" aria-hidden="true">phone</span>
                <span>(+27) 11 546 3257</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary" aria-hidden="true">mail</span>
                <span>info@riseafricatrust.org</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-round text-primary" aria-hidden="true">schedule</span>
                <span>Mon - Fri: 9:00am - 6:00pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rise Africa Trust. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"><span className="material-icons-round text-sm">facebook</span></a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"><span className="material-icons-round text-sm">filter_vintage</span></a>
            <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary"><span className="material-icons-round text-sm">smart_display</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;