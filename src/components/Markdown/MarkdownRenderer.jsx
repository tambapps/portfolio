import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import '../../style/markdown.scss';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Helmet } from 'react-helmet';
import { isDesktopFunc } from '../../utils/utils';

const ReactMarkdown = require('react-markdown');

const hComponent = (props, fontSize) => {
  // eslint-disable-next-line no-restricted-globals
  const isDesktop = isDesktopFunc();
  const isMobile = !isDesktop;
  let id = null;
  // eslint-disable-next-line react/prop-types
  if (props.children.length === 1) {
    // eslint-disable-next-line react/prop-types
    id = props.children[0].toString().toLowerCase().replace(/ /g, '-');
  }
  return (
    <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
      <h3
        className="hero-title"
        style={{
          color: '#ffffff',
          fontSize,
        }}
        {...props}
        id={id}
      >
        {
          /* eslint-disable-next-line react/prop-types */
          props.children
        }
      </h3>
    </Fade>
  );
};
const components = {
  // eslint-disable-next-line react/prop-types
  code({ node, inline, className, children, ...props }) {
    let codeComponent;
    if (inline) {
      codeComponent = (
        <code className={className} {...props}>
          {children}
        </code>
      );
    } else {
      codeComponent = (
        <div className="groovy-code">
          <SyntaxHighlighter language="groovy" PreTag="div" {...props} style={coldarkDark}>
            {children}
          </SyntaxHighlighter>
        </div>
      );
    }
    const isDesktop = isDesktopFunc();
    const isMobile = !isDesktop;
    return (
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        {codeComponent}
      </Fade>
    );
  },
  // eslint-disable-next-line react/prop-types
  h1({ level, ...props }) {
    return hComponent(props, '5.6rem');
  },
  // eslint-disable-next-line react/prop-types
  h2({ level, ...props }) {
    return hComponent(props, '3.5rem');
  },
  // eslint-disable-next-line react/prop-types
  h3({ level, ...props }) {
    return hComponent(props, '3.5rem');
  },
  // eslint-disable-next-line react/prop-types
  h4({ level, ...props }) {
    return hComponent(props, '3.5rem');
  },
  // eslint-disable-next-line react/prop-types
  p({ level, ...props }) {
    const isDesktop = isDesktopFunc();
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
    const isDesktop = isDesktopFunc();
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
      .then((text) => this.setState({ markdown: text.trim() }));
  }

  linkTarget = (href) => {
    return href.startsWith(prefix) ? '_self' : '_blank';
  };

  getFirstLine = (text) => {
    let index = text.indexOf('\n');
    if (index === -1) index = undefined;
    return text.substring(0, index);
  };

  transformLinkUri = (href) => {
    // hack to allow dynamic urls
    if (href.startsWith(prefix)) {
      const prefixToDelete = `${prefix}groovy-shell-user-manual/`;
      // eslint-disable-next-line no-restricted-globals
      const url = `${location.origin}/groovy-shell/${href.substr(prefixToDelete.length)}`;
      return url;
    }
    return href;
  };

  render() {
    const { markdown } = this.state;
    let title = 'Groovy Shell for Android';
    if (markdown) {
      const firstLine = this.getFirstLine(markdown);
      if (firstLine) {
        title += ` - ${firstLine.trim().substring(1).trim()}`;
      }
    }
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <html lang="en" />
          <meta name="description" content={title} />
        </Helmet>
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
