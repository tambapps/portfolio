import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import React from 'react';

export default () => {
  const steps = [
    {
      title: 'Make sure both devices are on the same network',
      description:
        'In order for the P2P transfer to work, both devices need to be under the same Wi-Fi, Or\n' +
        '            if one of the devices is a smartphone, you can share data (mobile hotspot) and have the\n' +
        '            other device connect to it',
    },
    {
      title: '(Sender) Select a file to share',
      description:
        'The sender should select a file. You can do it from the app, or by sharing a file on Android, and then select Fandem. Once it is done, the sender peer will wait for a connection. ' +
        'If one of the devices is a smartphone, you can share data (mobile hotspot) and have the ' +
        'other device connect to it',
    },
    {
      title: '(Receiver) Find the sender peer',
      description:
        'The app can automatically detect the sender peer, it will be proposed to you once the sender selected a file',
    },
    {
      title: 'Let the transfer begin',
      description: 'The transfer can now begin. Enjoy sharing files!',
    },
  ];
  return (
    <section id="steps" className="jumbotron" style={{ background: 'transparent' }}>
      <Container>
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            How to use
          </h2>
        </Fade>
        {steps.map((value, index) => (
          <Fade bottom duration={1000} delay={300} distance="0px">
            <h3
              className="section-title"
              style={{ color: '#ffffff', fontSize: '3rem', paddingBottom: 10, marginBottom: 0 }}
            >
              {index + 1}. {value.title}
            </h3>
            <p style={{ color: '#ffffff', fontWeight: 'bold', paddingBottom: 64, marginBottom: 0 }}>
              {value.description}
            </p>
          </Fade>
        ))}
      </Container>
    </section>
  );
};
