import React from 'react';

const Download = () => {
  return (
    <section id="download" style={{ background: 'transparent' }}>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{ width: '50%' }}>
          <span className="cta-btn cta-btn--hero">
            <h1 className="hero-title">Android</h1>
          </span>
        </div>
        <div style={{ width: '50%' }}>
          <span className="cta-btn cta-btn--hero">
            <h1 className="hero-title">Linux</h1>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Download;
