import React from 'react';
import s from './HomePage.module.css';
import { Row, Col, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShortDesc from '../../atoms/text-for-homePage';

const HomePage = () => {
  return(
    <div className={s.wrapper}>
      <Row className="justify-content-center">
        <Col sm={10} md={8} className={s.short_desc}>
          <ShortDesc />
          <Link to="/list-of-variates">
            <Button variant="outline-success">
              Перейти к списку сортов
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;