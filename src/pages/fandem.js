import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { Helmet } from 'react-helmet';
import FandemHero from '../components/Hero/FandemHero';
import FandemAbout from '../components/About/FandemAbout';
import Footer from '../components/Footer/Footer';
import Download from '../components/Download/Download';
import Steps from '../components/Steps/Steps';

export default () => {
  return (
    <div style={{ background: 'linear-gradient(#3F51B5, #43cea2)', width: '100%' }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fandem - P2P file sharing</title>
        <html lang="en" />
        <meta name="description" content="Fandem - P2P file sharing" />
      </Helmet>
      <FandemHero />
      <FandemAbout />
      <Steps />
      <Download />
      <Footer />
    </div>
  );
};
