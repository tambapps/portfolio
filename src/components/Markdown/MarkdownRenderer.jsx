import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

const ReactMarkdown = require('react-markdown');

const components = {
  // eslint-disable-next-line react/prop-types
  h1({ level, ...props }) {
    const isDesktop = window.innerWidth > 769;
    const isMobile = !isDesktop;
    return (
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h1
          className="hero-title"
          style={{
            color: '#ffffff',
          }}
          {...props}
        >
          {
            /* eslint-disable-next-line react/prop-types */
            props.children
          }
        </h1>
      </Fade>
    );
  },
  // eslint-disable-next-line react/prop-types
  h2({ level, ...props }) {
    const isDesktop = window.innerWidth > 769;
    const isMobile = !isDesktop;
    return (
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h2
          className="hero-title"
          style={{
            color: '#ffffff',
            fontSize: '3.5rem',
          }}
          {...props}
        >
          {
            /* eslint-disable-next-line react/prop-types */
            props.children
          }
        </h2>
      </Fade>
    );
  },
  // eslint-disable-next-line react/prop-types
  h3({ level, ...props }) {
    const isDesktop = window.innerWidth > 769;
    const isMobile = !isDesktop;
    return (
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h3
          className="hero-title"
          style={{
            color: '#ffffff',
            fontSize: '3.5rem',
          }}
          {...props}
        >
          {
            /* eslint-disable-next-line react/prop-types */
            props.children
          }
        </h3>
      </Fade>
    );
  },
  // eslint-disable-next-line react/prop-types
  h4({ level, ...props }) {
    const isDesktop = window.innerWidth > 769;
    const isMobile = !isDesktop;
    return (
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h4
          className="hero-title"
          style={{
            color: '#ffffff',
            fontSize: '3.5rem',
          }}
          {...props}
        >
          {
            /* eslint-disable-next-line react/prop-types */
            props.children
          }
        </h4>
      </Fade>
    );
  },
  // eslint-disable-next-line react/prop-types
  p({ level, ...props }) {
    const isDesktop = window.innerWidth > 769;
    const isMobile = !isDesktop;
    return (
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <p {...props}>
          {
            /* eslint-disable-next-line react/prop-types */
            props.children
          }
        </p>
      </Fade>
    );
  },
  ul({ ...props }) {
    const isDesktop = window.innerWidth > 769;
    const isMobile = !isDesktop;
    return (
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <ul {...props}>
          {
            /* eslint-disable-next-line react/prop-types */
            props.children
          }
        </ul>
      </Fade>
    );
  },
};

const prefix = 'https://tambapps.github.io/';
class MarkdownRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: null,
    };
  }

  componentDidMount() {
    const { url } = this.props;
    fetch(url)
      .then((response) => response.text())
      .then((text) => this.setState({ markdown: text }));
  }

  linkTarget = (href) => {
    return href.startsWith(prefix) ? '_self' : '_blank';
  };

  transformLinkUri = (href) => {
    // hack to allow dynamic urls
    if (href.startsWith(prefix)) {
      const prefixToDelete = `${prefix}groovy-shell-user-manual/`;
      const url = `${window.location.origin}/groovy-shell/${href.substr(prefixToDelete.length)}`;
      console.log(url);
      return url;
    }
    return href;
  };

  render() {
    const { markdown } = this.state;
    return (
      <div>
        <ReactMarkdown
          components={components}
          linkTarget={this.linkTarget}
          transformLinkUri={this.transformLinkUri}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    );
  }
}

MarkdownRenderer.propTypes = {
  url: PropTypes.string,
};

export default MarkdownRenderer;
