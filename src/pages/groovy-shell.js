import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import '../style/groovy-shell.scss';
import MarkdownRenderer from '../components/Markdown/MarkdownRenderer';

export default (props) => {
  // eslint-disable-next-line react/prop-types
  const { location, window } = props;
  console.log(window);
  // eslint-disable-next-line react/prop-types
  let path = location.pathname.substr('/groovy-shell'.length);
  // eslint-disable-next-line react/prop-types
  const { hash } = location;
  if (!path.endsWith('/')) {
    path += '/';
  }
  const url = `https://raw.githubusercontent.com/tambapps/groovy-shell-user-manual/main${path}index.md`;
  return (
    <div style={{ background: '#001C31' }} className="markdown">
      <MarkdownRenderer url={url} hash={hash} />
    </div>
  );
};
