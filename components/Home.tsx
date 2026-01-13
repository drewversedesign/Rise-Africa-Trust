import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Services from './Services';
import About from './About';
import Causes from './Causes';
import Events from './Events';
import VolunteerCTA from './VolunteerCTA';
import Team from './Team';
import Stats from './Stats';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Contact from './Contact';
import { Page } from '../types';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <>
      <Hero navigateTo={navigateTo} />
      <Features navigateTo={navigateTo} />
      <About navigateTo={navigateTo} />
      <Services navigateTo={navigateTo} />
      <Causes />
      <VolunteerCTA navigateTo={navigateTo} />
      <Events navigateTo={navigateTo} />
      <Team navigateTo={navigateTo} />
      <Stats />
      <FAQ />
      <Testimonials />
      <Newsletter />
      <Contact />
    </>
  );
};

export default Home;