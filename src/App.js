import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import ListOfVariatesPage from './pages/list_of_varieties-page';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/list-of-variates" component={ListOfVariatesPage} exact/>
    </Switch>
  </BrowserRouter>
)

export default App;
