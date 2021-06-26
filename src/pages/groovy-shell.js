import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import MarkdownRenderer from '../components/Markdown/MarkdownRenderer';

export default (props) => {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  // eslint-disable-next-line react/prop-types
  let path = location.pathname.substr('/groovy-shell'.length);
  if (!path.endsWith('/')) {
    path += '/';
  }
  const url = `https://raw.githubusercontent.com/tambapps/groovy-shell-user-manual/main${path}index.md`;
  return (
    <div style={{ background: '#001C31' }} className="markdown">
      <MarkdownRenderer url={url} />
    </div>
  );
};
