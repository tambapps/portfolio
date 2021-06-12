import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import DownloadImg from '../Image/DownloadImg';

const Download = () => {
  // TODO handle better mobile display
  return (
    <section id="download" style={{ background: 'transparent' }}>
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Download
          </h2>
        </Fade>
      </Container>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{ width: '50%' }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.tambapps.p2p.peer_transfer.android"
            target="_blank"
            rel="noreferrer"
          >
            <span className="cta-btn cta-btn--hero">
              <h1 className="hero-title">Android</h1>
              <DownloadImg alt="Android" filename="android.png" />
            </span>
          </a>
        </div>
        <div style={{ width: '50%' }}>
          <a
            href="https://github.com/tambapps/P2P-File-Sharing/releases/download/v2.1/tambapps-fandem-desktop_2.1-1_amd64.deb"
            target="_blank"
            rel="noreferrer"
          >
            <span className="cta-btn cta-btn--hero">
              <h1 className="hero-title">Linux amd64</h1>
              <DownloadImg alt="Linux" filename="linux.png" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
