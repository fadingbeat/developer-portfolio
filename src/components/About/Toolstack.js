import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiTrello,
  SiMicrosoftonenote,
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftonenote />
      </Col>
    </Row>
  );
}

export default Toolstack;
