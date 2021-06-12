import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import React from 'react';
import { heroData } from '../../mock/fandem';

export default () => {
  const isDesktop = window.innerWidth > 769;
  const isMobile = !isDesktop;
  const { title, subtitle, cta } = heroData;
  return (
    <section id="hero" className="jumbotron" style={{ background: 'transparent' }}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title}
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          {cta && (
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta}
                </Link>
              </span>
            </p>
          )}
        </Fade>
      </Container>
    </section>
  );
};
