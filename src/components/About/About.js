import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import laptopImg from '../../Assets/about.png';
import Toolstack from './Toolstack';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              Something <strong className="purple">about</strong> me
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Approach </strong>
        </h1>
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: 'justify' }}>
                I thrive in collaboration with development teams and agencies,
                but also work independently when needed — always aiming for
                clarity, reliability, and maintainability. Whether it's fixing a
                tricky deployment issue, improving SEO, or building a site from
                scratch, I aim to deliver what’s most effective for the current
                moment while keeping long-term quality in mind.
              </p>
            </blockquote>
          </Card.Body>
        </Card>

        {/* <Techstack /> */}
        <h1 className="project-heading">
          Areas of<strong className="purple"> Expertise</strong>
        </h1>
        <Techstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
