import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import FandemHero from '../components/Hero/FandemHero';
import FandemAbout from '../components/About/FandemAbout';
import Footer from '../components/Footer/Footer';

export default () => {
  return (
    <div style={{ background: 'linear-gradient(#3F51B5, #43cea2)', width: '100%' }}>
      <FandemHero />
      <FandemAbout />
      <Footer />
    </div>
  );
};
