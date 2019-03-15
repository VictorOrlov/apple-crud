import React, { Component } from 'react';
import s from './ListOfVariatesPage.module.css';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

export default class ListOfVariatesPage extends Component{
  state = {
    data: [],
  }

  componentDidMount(){
    this.fetch();
  }

  fetch(){
    this.setState({
      data: [],
      loading: true,
      error: false,
    });
    axios
      .get(`http://localhost:3001/apple`)
      .then(resp => {
        this.setState({
          data: resp.data,
          loading: false,
          error: false,
        });
        console.log(this.state.data)
      })
      .catch(() => {
        this.setState({
          loading:false,
          error:true,
        });
      });
  }

  render(){
    return(
      <div className={s.wrapper}>
        <Row>
          <Col>
          ListOfVariatesPage
          </Col>
        </Row>
      </div>
    );
  }
}