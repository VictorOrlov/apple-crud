import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import PostIndex from './component/postindex';

class App extends Component {
  state ={
    data: [],
    name: '',
  }

  componentDidMount() {
    this.fetch();
  }

  fetch= () => {
   this.setState({
     data: [],
     loading: true,
     error: false,
   });
   axios
    .get(`http://localhost:3000/apple`)
    .then(response => {
      // this.setState(() => ({
      //   loading: false,
      //   data: response.data,
      // }));
      console.log(response.data)
    })
    .catch(() => {
      this.setState({
        loading: false,
        error: true,
      });
    });
 }

  render() {
    return (
      <div className="App">
        <PostIndex />
      </div>
    );
  }
}

export default App;
