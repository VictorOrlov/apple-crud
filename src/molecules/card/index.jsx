import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Card = ({ style, col1, col2, col3 }) => (
  <Row className={style}>
    <Col xs={4}>
      {col1}
    </Col>
    <Col xs={4}>
      {col2}
    </Col>
    <Col xs={4}>
      {col3}
    </Col>
  </Row>
);

export default Card;