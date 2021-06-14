import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import { aboutData } from '../../mock/fandem';
import { isDesktopFunc } from '../../utils/utils';

const About = () => {
  const { img, paragraphOne, paragraphTwo, paragraphThree } = aboutData;
  const isDesktop = isDesktopFunc();
  const isMobile = !isDesktop;

  return (
    <section id="about" style={{ background: 'transparent' }}>
      <Container>
        <Title title="About The Project" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="cta-btn cta-btn--resume"
                    href="https://github.com/tambapps/P2P-File-Sharing"
                  >
                    Consult source
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
