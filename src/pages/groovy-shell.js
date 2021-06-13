import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import '../style/markdown.scss';
import MarkdownRenderer from '../components/Markdown/MarkdownRenderer';

export default () => {
  return (
    <div style={{ background: '#001C31' }} className="markdown">
      <MarkdownRenderer url="https://raw.githubusercontent.com/tambapps/groovy-shell-user-manual/main/index.md" />
    </div>
  );
};
