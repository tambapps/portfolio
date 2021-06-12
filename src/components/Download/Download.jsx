import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import DownloadImg from '../Image/DownloadImg';
// needed to avoid rows taking larger than whole width
import '../../style/row_override.scss';

const Download = () => {
  return (
    <section id="download" style={{ background: 'transparent' }}>
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Download
          </h2>
        </Fade>
      </Container>
      <Row>
        <Col md={6} sm={12}>
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
        </Col>
        <Col md={6} sm={12}>
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
        </Col>
      </Row>
    </section>
  );
};

export default Download;
