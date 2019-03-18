import React, { Component } from 'react';
import s from './ListOfVariatesPage.module.css';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
// import HeaderVarieties from '../../organisms/header-varieties';
import Card from '../../molecules/card';
import CardHeader from '../../organisms/card-header';
import GroupButton from '../../organisms/group-button';
import DeleteVarietyButton from '../../molecules/delete-variety-button';

export default class ListOfVarietiesPage extends Component{
  state = {
    data: [],
    isvalue: "notarget",
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
      })
      .catch(() => {
        this.setState({
          loading:false,
          error:true,
        });
      });
  }

  handleChange(e) {
    this.setState({isvalue: `${e.target.value}`})
  }

  render(){
    const { data, isvalue } = this.state;
    const renderOptions = data.map(item => (
      <option value={`${item.name}`} key={item.id}>{item.name}</option>
    ));
    let filterData = data.filter(item => item.name === isvalue);
    let renderCard = filterData.map(item => (
      <Card
        key={item.id}
        col1={<span><strong>Название сорта: </strong>{item.name}</span>}
        col2={item.date}
        col3={item.description} /> 
    ));
    let select = 
    <select value={isvalue} onChange={this.handleChange.bind(this)}>
      <option value="notarget">Название</option>
      {renderOptions}
    </select>;
    return(
      <div className={s.wrapper}>
        <h2>Сорта яблок</h2>
        <Row className="justify-content-center">
          <Col sm={12} md={5} className="align-center">
            <GroupButton
              delete={<DeleteVarietyButton
                id={filterData.map(item=>item.id)} />}
              viewLink={filterData.map(item=>item.id)} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md={10}>
            <CardHeader
              select={select} />
          </Col>
          <Col sm={12} md={10}>
          {(isvalue==='notarget') ? <Col xs={12}><h5>Нет записей</h5></Col> :
           renderCard}
          </Col>
        </Row>
      </div>
    );
  }
}