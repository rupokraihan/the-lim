/* eslint-disable eol-last */
import React from 'react';
import Header from './Header/Header';
import ChooseUs from './ChooseUs/ChooseUs';
import Reviews from './Reviews/Reviews';
import Gallery from './Galllery/Gallery';
import Contact from './Contact/Contact';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
      <Header />
      <ChooseUs />
      <Gallery />
      <Services />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;