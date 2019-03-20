import React, {Component} from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import generateID from '../../atoms/randomID';
import PresentDay from '../../atoms/presentDay';

export default class PutIndex extends Component {
  state = {
    season: "Зима",
    isSubmit: false,
    isColor: true,
  }

  
  handleChangeName = event => {
    this.setState({ 
      name: event.target.value 
    });
  }
  
  handleChangeColor = event => {
    this.setState({ 
      color: event.target.value 
    });
  }
  
  handleChangeDesc = event => {
    this.setState({ 
      description: event.target.value 
    });
  }
  
  handleChangeSeason = event => {
    this.setState({ 
      season: event.target.value  
    });
  }

  onClick = event =>{
    if(event.target.value !== "Зима"){
      this.setState({isColor: false});
    }else return this.setState({isColor: true});
  }
  
  handleSubmit = event => {
    event.preventDefault();
    document.location.href = "/list-of-variates"; //<<<-Костыль
    const { name, season, color, description } = this.state;
    const dressCode = (item, def) => {
      if(item===undefined){return def}return item
    };
    const user = {
      "id": generateID(16),
      "name": dressCode(name, this.props.defName),
      "season": season,
      "color": color,
      "description": dressCode(description, this.props.defDesc),
      "date": PresentDay(),
    };
  
    axios
      .put(`http://localhost:3001/apple/${this.props.id}`, user, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        this.setState({
          addData: response.data,
        })
      })
      .catch(() => {
        console.log("hahaha")
      })
      this.setState({isSubmit: true});
  }

  render(){
    const { isSubmit, isColor } = this.state;
    return(
      <div>
        {!isSubmit && (
        <Form id="put" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Название сорта:</Form.Label>
            <Form.Control 
              name="name" onChange={this.handleChangeName} 
              defaultValue={this.props.defName} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Сезон</Form.Label>
            <Form.Control 
              as="select" 
              onClick={this.onClick} 
              onChange={this.handleChangeSeason.bind(this)}>
              <option value="Зима">Зима</option>
              <option value="Весна">Весна</option>
              <option value="Лето">Лето</option>
              <option value="Осень">Осень</option>
            </Form.Control>
          </Form.Group>
          {!isColor ? (<Form.Group>
            <Form.Label>Цвет:</Form.Label>
            <Form.Control name="name" onChange={this.handleChangeColor} />
          </Form.Group>) : null}
          <Form.Group>
            <Form.Label>Краткое описание:</Form.Label>
            <Form.Control 
              as="textarea" 
              rows="3" 
              onChange={this.handleChangeDesc}
              defaultValue={this.props.defDesc} />
          </Form.Group>
        </Form>)}
        {isSubmit && (
        <p>...Идёт редактирование</p>)}
      </div>
    );
  }
}