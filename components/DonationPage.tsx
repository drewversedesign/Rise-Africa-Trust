import React, { useState } from 'react';

const DonationPage: React.FC = () => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly' | 'yearly'>('one-time');
  const [amount, setAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedCause, setSelectedCause] = useState<string>('Where Needed Most');

  const handleAmountChange = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(0);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Happy Children" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80"
          />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-text-main text-xs font-bold tracking-widest uppercase mb-4 animate-fade-in-up">Every Penny Counts</span>
          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
            Give Hope. Give Love. <br /> <span className="text-secondary">Donate Now.</span>
          </h1>
          <p className="text-gray-200 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow-md">
            Your generous contribution directly supports education, healthcare, and nutrition for vulnerable children across Africa.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="relative z-20 -mt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl p-6 lg:p-10 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8">
                <h3 className="font-display font-bold text-2xl text-text-main dark:text-white mb-6">Select Donation Amount</h3>
                
                {/* Frequency Selector */}
                <div className="flex bg-gray-100 dark:bg-gray-800 p-1.5 rounded-xl mb-8" role="group" aria-label="Donation frequency">
                  {['one-time', 'monthly', 'yearly'].map((freq) => (
                    <div key={freq} className="flex-1">
                      <button
                        onClick={() => setFrequency(freq as any)}
                        aria-pressed={frequency === freq}
                        className={`w-full block text-center py-2.5 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                          frequency === freq 
                            ? 'bg-secondary text-text-main font-bold shadow-sm' 
                            : 'text-text-muted-light dark:text-gray-400 hover:text-text-main dark:hover:text-white'
                        }`}
                      >
                        {freq.charAt(0).toUpperCase() + freq.slice(1)}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Amount Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6" role="group" aria-label="Donation amounts">
                  {[10, 25, 50, 100].map((val) => (
                    <div key={val}>
                      <button
                        onClick={() => handleAmountChange(val)}
                        aria-pressed={amount === val}
                        className={`w-full flex flex-col items-center justify-center h-20 border-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                          amount === val
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-primary text-text-main dark:text-white'
                        }`}
                      >
                        <span className="text-xl font-bold font-display">${val}</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative mb-8">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold" aria-hidden="true">$</span>
                  <input 
                    type="number" 
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    aria-label="Enter custom donation amount"
                    className="w-full pl-8 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-none focus:ring-2 focus:ring-primary text-text-main dark:text-white font-bold placeholder-gray-400" 
                    placeholder="Enter custom amount" 
                  />
                </div>

                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <span>Complete Donation</span>
                  <span className="material-icons-round" aria-hidden="true">arrow_forward</span>
                </button>
                
                <div className="mt-4 text-center">
                  <span className="text-xs text-text-muted-light dark:text-text-muted-dark flex items-center justify-center gap-1">
                    <span className="material-icons-round text-sm" aria-hidden="true">lock</span> Secure 256-bit SSL Encrypted Payment
                  </span>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-lg text-text-main dark:text-white mb-4">Your Impact</h4>
                  <ul className="space-y-4">
                    {[
                      { label: 'Tax Deductible', desc: 'Receive an instant tax receipt for your records.' },
                      { label: 'Transparency', desc: '100% of your donation goes directly to the field.' },
                      { label: 'Updates', desc: 'Get quarterly reports on how your money helps.' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-surface-dark text-yellow-700 dark:text-secondary-dark flex items-center justify-center shadow-sm shrink-0">
                          <span className="material-icons-round text-sm">check</span>
                        </div>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          <strong>{item.label}:</strong> {item.desc}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <img alt="Donor" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"/>
                      <img alt="Donor" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"/>
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-gray-800">+2k</div>
                    </div>
                    <span className="text-xs font-bold text-text-main dark:text-white">Join 2,000+ donors today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Visuals */}
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-yellow-700 dark:text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Where Your Money Goes</span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white">
              See the Power of Your Gift
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { amount: 10, title: 'Provides 5 Meals', desc: 'Ensures a child receives nutritious school lunches for a week, fighting malnutrition and aiding focus.', icon: 'lunch_dining', color: 'primary' },
              { amount: 50, title: 'School Supplies', desc: "Provides a full term's worth of textbooks, notebooks, and writing materials for two students.", icon: 'school', color: 'yellow-600', highlight: true },
              { amount: 100, title: 'Life-Saving Medicine', desc: 'Supplies essential antibiotics and malaria treatments for a rural clinic serving 20 families.', icon: 'medical_services', color: 'primary' }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`group bg-white dark:bg-surface-dark p-8 rounded-3xl border ${item.highlight ? 'border-2 border-primary/20 shadow-lg md:-translate-y-4' : 'border-gray-100 dark:border-gray-800'} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className={`material-icons-round text-9xl text-${item.color}`}>{item.icon}</span>
                </div>
                <div className={`w-16 h-16 rounded-2xl ${item.color === 'yellow-600' ? 'bg-secondary text-primary-dark' : 'bg-primary/10 text-primary'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="material-icons-round text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-display font-bold text-4xl text-text-main dark:text-white mb-2">${item.amount}</h3>
                <h4 className={`font-bold text-lg text-${item.color} mb-3`}>{item.title}</h4>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cause Selector */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-yellow-700 dark:text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Direct Your Impact</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-text-main dark:text-white">
                Choose a Cause Close to Your Heart
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark mt-4">
                If you prefer, you can direct your donation to a specific project.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'Medical Aid', desc: 'Support rural clinics with equipment and medicine.', img: 'https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&w=600&q=80' },
              { id: 'Education', desc: 'Fund scholarships and build classrooms.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80' },
              { id: 'Clean Water', desc: 'Install wells and filtration systems.', img: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=600&q=80' },
              { id: 'Where Needed Most', desc: 'Allow us to allocate funds to urgent needs.', icon: 'volunteer_activism' }
            ].map((cause) => (
              <label key={cause.id} className="group cursor-pointer block">
                <input 
                  type="radio" 
                  name="cause" 
                  className="hidden peer" 
                  checked={selectedCause === cause.id} 
                  onChange={() => setSelectedCause(cause.id)}
                />
                <div className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all h-full focus-within:ring-2 focus-within:ring-primary">
                  <div className={`h-40 overflow-hidden relative ${!cause.img ? 'bg-primary flex items-center justify-center' : ''}`}>
                    {cause.img ? (
                      <img src={cause.img} alt={cause.id} className="w-full h-full object-cover transition transform group-hover:scale-110 duration-500" />
                    ) : (
                      <span className="material-icons-round text-6xl text-white/50">{cause.icon}</span>
                    )}
                    {cause.img && <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>}
                    <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 px-2 py-1 rounded text-xs font-bold text-text-main dark:text-white flex items-center gap-1 transition-opacity">
                      <span className={`material-icons-round text-xs ${selectedCause === cause.id ? 'text-primary' : 'text-gray-400'}`}>check_circle</span> 
                      {selectedCause === cause.id ? 'Selected' : 'Select'}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-text-main dark:text-white mb-1">{cause.id}</h3>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark line-clamp-2">{cause.desc}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-12 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-primary">
                <span className="material-icons-round">lock</span>
              </div>
              <div>
                <h4 className="font-bold text-text-main dark:text-white">100% Secure Donation</h4>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Encrypted transactions & secure payment gateways.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="h-8 flex items-center font-bold text-xl text-blue-900 italic tracking-tighter">Visa</div>
              <div className="h-8 flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-red-500 opacity-80"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80 -ml-3"></div>
                <span className="font-bold text-sm text-gray-700 dark:text-gray-300 ml-1">Mastercard</span>
              </div>
              <div className="h-8 flex items-center font-bold text-xl text-blue-600 italic">PayPal</div>
              <div className="h-8 flex items-center font-bold text-lg text-black dark:text-white border border-gray-300 px-2 rounded">Apple Pay</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Supporters Ticker */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10">
          <span className="text-yellow-700 dark:text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Our Community</span>
          <h2 className="font-display text-3xl font-bold text-text-main dark:text-white">Recent Supporters</h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10"></div>
          <div className="flex gap-6 animate-scroll w-max px-4 hover:[animation-play-state:paused]">
            {/* Doubled list for infinite scroll illusion */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {[
                  { name: 'John Doe', amt: '$50', time: '2m ago', color: 'blue', initials: 'JD' },
                  { name: 'Alice Smith', amt: '$100', time: '5m ago', color: 'pink', initials: 'AS' },
                  { name: 'Michael Ross', amt: '$25', time: '12m ago', color: 'yellow', initials: 'MR' },
                  { name: 'Elena K.', amt: '$200', time: '20m ago', color: 'green', initials: 'EK' },
                  { name: 'Tech Youth', amt: '$500', time: '1h ago', color: 'purple', initials: 'TY' },
                  { name: 'David A.', amt: '$10', time: '2h ago', color: 'teal', initials: 'DA' },
                  { name: 'Sarah J.', amt: '$75', time: '3h ago', color: 'indigo', initials: 'SJ' },
                ].map((donor, idx) => (
                  <div key={`${i}-${idx}`} className="flex items-center gap-3 bg-white dark:bg-surface-dark p-4 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 w-64 flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full bg-${donor.color}-100 text-${donor.color}-600 flex items-center justify-center font-bold`}>{donor.initials}</div>
                    <div>
                      <p className="font-bold text-sm text-text-main dark:text-white">{donor.name}</p>
                      <p className="text-xs text-primary">Donated {donor.amt}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 ml-auto">{donor.time}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-yellow-700 dark:text-secondary-dark font-bold text-sm tracking-wider uppercase mb-2 block">Common Questions</span>
            <h2 className="font-display text-3xl font-bold text-text-main dark:text-white">Donation FAQs</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Will I receive a tax receipt?", a: "Yes! Rise Africa Trust is a registered non-profit organization. Once your donation is processed, you will immediately receive an email with your official tax-deductible receipt attached.", active: true },
              { q: "How can I cancel my recurring donation?", a: "You can manage your recurring donation at any time by logging into your donor profile or by contacting our support team at donations@riseafricatrust.org. We process cancellation requests within 24 hours." },
              { q: "Is my payment information secure?", a: "Absolutely. We use industry-standard SSL encryption and partner with PCI-compliant payment processors (Stripe & PayPal) to ensure your financial data is never stored on our servers and is fully protected." },
              { q: "Can I donate via bank transfer?", a: "Yes, for larger donations or corporate giving, we accept direct bank transfers. Please contact our finance department for our banking details and reference number to ensure your donation is tracked correctly." },
            ].map((item, i) => (
              <details key={i} className="group bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700" open={item.active}>
                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  <span>{item.q}</span>
                  <span className="transition group-open:rotate-180">
                    <i className="material-icons-round text-primary">expand_more</i>
                  </span>
                </summary>
                <div className="text-text-muted-light dark:text-text-muted-dark mt-4 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;