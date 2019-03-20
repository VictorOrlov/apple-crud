import React, { Component } from 'react';
import s from './ViewVarietyPage.module.css'
import Helmet from 'react-helmet';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default class ViewVarietyPage extends Component{

  state={
    loading: false,
    error: false,
    data: null,
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetch();
    }, 500);
  }

  fetch(){
    this.setState({
      loading: true,
      error: false,
      data: null,
    });
    const { match } = this.props;
    axios
      .get(`http://localhost:3001/apple/${match.params.id}`)
      .then(response => {
        this.setState({
          loading: false,
          data: response.data,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  render(){
    const { loading, error, data } = this.state;
    return(
      <div className={s.wrapper}>
        {loading && (<h3>Зарузка...</h3>)}
        {!loading && !error && !data && 'Пусто'}
        {error && (
        <div>
          <p>Произошла ошибка при загруке</p>
          <button type="button" onClick={this.fetch}>Повторить загрузку</button>
        </div>
        )}
        {data && (
          <Card >
            <Helmet title={`Сорт: ${data.name}`} />
            <Card.Header bg="success" text="white">
            <strong>Название сорта: {data.name}</strong>  
            </Card.Header>
            <Card.Body>
            <p><strong>Дата добавления:</strong> {data.date}</p>
            <p><strong>Сезон:</strong> {data.season}</p>
            {data.color ? (<p><strong>Цвет:</strong> {data.color}</p>) : null}
            <p><strong>Описание:</strong> {data.description}</p>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}
