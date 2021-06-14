import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import React from 'react';
import { heroData } from '../../mock/fandem';
import { isDesktopFunc } from '../../utils/utils';

export default () => {
  const isDesktop = isDesktopFunc();
  const isMobile = !isDesktop;
  const { title, subtitle, cta } = heroData;
  return (
    <section id="hero" className="jumbotron" style={{ background: 'transparent' }}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1
            className="hero-title"
            style={{
              color: '#ffffff',
            }}
          >
            {title}
          </h1>
          <h2
            className="hero-title"
            style={{
              color: '#ffffff',
              fontSize: '3.5rem',
              marginLeft: 4,
            }}
          >
            {subtitle}
          </h2>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          {cta && (
            <p className="hero-cta">
              <span className="d-flex mt-3">
                <Link
                  to="about"
                  smooth
                  duration={1000}
                  className="cta-btn cta-btn--resume"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  {cta}
                </Link>
              </span>
              <span className="d-flex mt-3" style={{ marginLeft: 20 }}>
                <Link
                  to="download"
                  smooth
                  duration={1000}
                  className="cta-btn cta-btn--resume"
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Download
                </Link>
              </span>
            </p>
          )}
        </Fade>
      </Container>
    </section>
  );
};
