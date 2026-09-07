import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Works from '../components/Works';
import Teams from '../components/Teams';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';

/**
 * Home page that displays all sections in a single-page layout.
 * This provides a seamless browsing experience without page reloads.
 */
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Teams />
      <Testimonials />
      <Pricing />
      <Blog />
    </>
  );
};

export default Home;