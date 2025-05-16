import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Nikolina </span>
            from <span className="purple"> Croatia.</span>
            <br />
            <br />
            I am currently self-employed at VibeIT, company specializing in web
            development.
            <br />
            <br />
            I have a Master's Degree in Information Science from Polytechnic of
            Rijeka, Croatia.
            <br />
            <br />
            Apart from coding, I am:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Color & Light Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Depth seeker
            </li>
            <li className="about-activity">
              <ImPointRight /> Nature photographer
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "I am here to tell you that you can do it on your own!"{' '}
          </p>
          <footer className="blockquote-footer">Nikolina</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
