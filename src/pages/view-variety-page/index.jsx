import React, { Component } from 'react';
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
      <div>
        {loading && 'Зарузка...'}
        {!loading && !error && !data && 'Пусто'}
        {error && (
        <div>
          <p>Произошла ошибка при загруке</p>
          <button type="button" onClick={this.fetch}>Повторить загрузку</button>
        </div>
        )}
        {data && (
          <Card>
            <Card.Header>
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
