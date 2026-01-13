import React from 'react';
import { Page } from '../types';

interface AboutPageProps {
  navigateTo?: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-primary/5 dark:bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img alt="Community Impact" className="w-full h-full object-cover opacity-10 grayscale" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80"/>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="text-primary font-bold tracking-widest text-xs uppercase bg-white/80 dark:bg-surface-dark/80 backdrop-blur px-4 py-2 rounded-full shadow-sm mb-6 inline-block">Our Story</span>
          <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-text-main dark:text-white mb-6">
            Empowering Africa's Future, <span className="text-primary">One Child</span> at a Time
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg leading-relaxed max-w-2xl mx-auto">
            Founded with a heart for service and a vision for change, Rise Africa Trust has grown from a local initiative into a pan-African movement dedicated to uplifting vulnerable communities through education, healthcare, and sustainable development.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-surface-dark p-10 rounded-3xl shadow-xl border-t-4 border-secondary hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-dark mb-6">
                <span className="material-icons-round text-4xl">visibility</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-text-main dark:text-white mb-4">Our Vision</h2>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                We envision a continent where every child, regardless of their background, has access to quality education, healthcare, and the opportunity to thrive in a supportive, self-sustaining community.
              </p>
            </div>
            <div className="bg-white dark:bg-surface-dark p-10 rounded-3xl shadow-xl border-t-4 border-primary hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-icons-round text-4xl">flag</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-text-main dark:text-white mb-4">Our Mission</h2>
              <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                To implement sustainable development programs that empower local leadership, provide essential resources to underserved areas, and nurture the potential of the next generation of African leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Our History</span>
            <h2 className="font-display text-4xl font-bold text-text-main dark:text-white">A Decade of Dedication</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { year: '2012', title: 'The Beginning', desc: 'Founded as a small community group in Johannesburg supporting 20 families.', color: 'bg-primary text-white border-gray-50 dark:border-gray-800' },
                { year: '2015', title: 'First School Built', desc: 'Completed construction of our first primary school, serving 300 students.', color: 'bg-white dark:bg-surface-dark text-primary border-primary mt-0 lg:mt-12' },
                { year: '2019', title: 'Regional Expansion', desc: 'Expanded operations to Kenya and Nigeria, launching healthcare initiatives.', color: 'bg-white dark:bg-surface-dark text-primary border-primary' },
                { year: '2023', title: 'Rise Africa Trust', desc: 'Rebranded to unify our mission across the continent with renewed focus.', color: 'bg-secondary text-primary-dark border-gray-50 dark:border-gray-800 mt-0 lg:mt-12' },
              ].map((item, index) => (
                <div key={index} className={`group text-center ${index % 2 === 1 ? 'lg:mt-12' : ''}`}>
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg relative z-10 ${item.color.includes('border-') ? 'border-2 ' + item.color : 'border-4 ' + item.color}`}>
                    {item.year}
                  </div>
                  <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition">
                    <h3 className="font-bold text-lg text-text-main dark:text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Core Principles</span>
            <h2 className="font-display text-4xl font-bold text-text-main dark:text-white">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'volunteer_activism', title: 'Compassion', desc: 'We lead with empathy, understanding the deep needs of those we serve.', color: 'text-primary' },
              { icon: 'handshake', title: 'Integrity', desc: 'We are transparent, accountable, and honest in all our operations.', color: 'text-secondary-dark' },
              { icon: 'groups', title: 'Community', desc: 'We believe in the power of collective action and local leadership.', color: 'text-primary' },
              { icon: 'lightbulb', title: 'Innovation', desc: 'We constantly seek better, more sustainable ways to solve problems.', color: 'text-secondary-dark' },
            ].map((item, index) => (
              <div key={index} className={`p-8 bg-white dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-800 text-center hover:border-${item.color.replace('text-', '')} transition group`}>
                <span className={`material-icons-round text-4xl ${item.color} mb-4 group-hover:scale-110 transition-transform block`}>{item.icon}</span>
                <h3 className="font-bold text-xl mb-3 text-text-main dark:text-white">{item.title}</h3>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img alt="Background Pattern" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80"/>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            {[
              { val: '50k+', label: 'Children Helped' },
              { val: '120', label: 'Communities Reached' },
              { val: '15', label: 'Schools Built' },
              { val: '95%', label: 'Graduation Rate' },
            ].map((item, index) => (
              <div key={index} className="p-4">
                <h3 className="text-5xl font-display font-bold text-secondary mb-2">{item.val}</h3>
                <p className="text-sm font-medium tracking-wider uppercase opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Accountability */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Transparency</span>
              <h2 className="font-display text-4xl font-bold text-text-main dark:text-white mb-6">Financial Accountability</h2>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed">
                We take our responsibility to our donors and the communities we serve very seriously. Every dollar donated is meticulously tracked and allocated to ensure maximum impact.
              </p>
              <ul className="space-y-4">
                {[
                  { title: '80% Program Services', desc: 'Directly funding our schools, clinics, and community projects.', color: 'bg-primary' },
                  { title: '15% Fundraising', desc: 'Costs associated with raising the funds needed to operate.', color: 'bg-secondary' },
                  { title: '5% Administration', desc: 'Essential management and operational oversight.', color: 'bg-gray-300 dark:bg-gray-600' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className={`w-4 h-4 mt-1 rounded-full ${item.color} flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-bold text-text-main dark:text-white">{item.title}</h4>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a className="text-primary font-bold hover:underline flex items-center gap-2" href="#" onClick={(e) => e.preventDefault()}>View our 2023 Annual Report <i className="material-icons-round text-sm">arrow_forward</i></a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="w-full h-full donut-chart shadow-2xl relative flex items-center justify-center">
                  <div className="bg-white dark:bg-background-dark w-48 h-48 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center shadow-inner z-10">
                    <span className="text-text-muted-light dark:text-text-muted-dark text-xs uppercase tracking-widest mb-1">Total Funds</span>
                    <span className="text-3xl md:text-4xl font-bold text-text-main dark:text-white">$2.4M</span>
                    <span className="text-xs text-green-500 font-bold mt-1">+12% vs 2022</span>
                  </div>
                </div>
                <div className="absolute top-10 left-0 bg-white dark:bg-surface-dark px-3 py-1 rounded shadow text-xs font-bold text-primary border border-primary/20 transform -translate-x-4">Programs</div>
                <div className="absolute bottom-10 right-0 bg-white dark:bg-surface-dark px-3 py-1 rounded shadow text-xs font-bold text-secondary-dark border border-secondary/20 transform translate-x-4">Fundraising</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6">
            Be Part of the Change
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg mb-10">
            Whether you choose to volunteer your time or make a donation, your contribution directly impacts the lives of children and families across Africa. Join our mission today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => navigateTo && navigateTo('donations')}
              className="bg-primary hover:bg-primary-dark text-white text-lg font-bold py-4 px-10 rounded-full shadow-xl shadow-primary/30 transition transform hover:-translate-y-1"
            >
              Donate Now
            </button>
            <button 
              onClick={() => navigateTo && navigateTo('contact')}
              className="bg-white dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-gray-700 text-text-main dark:text-white border border-gray-200 dark:border-gray-700 text-lg font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:-translate-y-1"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;