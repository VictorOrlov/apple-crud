import React, {Component} from 'react';
import axios from 'axios';
import generateID from '../atoms/randomID';
import PresentDay from '../atoms/presentDay';

export default class PostIndex extends Component {
  state = {
    name: "",
    description: "",
    isSubmit: false,
  }

  handleChangeName = event => {
    this.setState({ 
      name: event.target.value 
    });
  }
  handleChangeDesc = event => {
    this.setState({ 
      description: event.target.value 
    });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const user = {
      "id": generateID(16),
      "name": this.state.name,
      "description": this.state.description,
      "date": PresentDay(),
    };
  
    axios
      .post(`http://localhost:3000/apple`, user)
      .then(response => {
        console.log(response.data);
      })
      .catch(() => {
        console.log("hahaha")
      })
      this.setState({isSubmit: true})
  }

  render(){
    const { isSubmit } = this.state;
    return(
      <div>
        {!isSubmit && (
        <form onSubmit={this.handleSubmit}>
          <label>
            Название сорта:
            <input type="text" name="name" onChange={this.handleChangeName} />
          </label>
          <br />
          <label>
            краткое описание:
            <input type="text" name="description" onChange={this.handleChangeDesc} />
          </label>
          <br />
          <button type="submit">Add</button>
        </form>)}
        {isSubmit && (
        <button onClick={()=>this.setState({isSubmit: false})} >добавить ещё</button>)}
      </div>
    );
  }
}