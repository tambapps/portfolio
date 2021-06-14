import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StatusCode } from 'react-http-status-code';
import { headData } from '../mock/data';
import '../style/main.scss';
import MarkdownRenderer from '../components/Markdown/MarkdownRenderer';

export default () => {
  const { lang } = headData;

  // hack to allow dynamic paths for groovy-shell
  // eslint-disable-next-line no-restricted-globals
  if (location.pathname.startsWith('/groovy-shell/')) {
    // eslint-disable-next-line no-restricted-globals
    let path = location.pathname.substr('/groovy-shell'.length);
    if (!path.endsWith('/')) {
      path += '/';
    }
    const url = `https://raw.githubusercontent.com/tambapps/groovy-shell-user-manual/main${path}index.md`;
    return (
      // don't know if it actually works
      <StatusCode code={200}>
        <div style={{ background: '#001C31' }} className="markdown">
          <MarkdownRenderer url={url} />
        </div>
      </StatusCode>
    );
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
