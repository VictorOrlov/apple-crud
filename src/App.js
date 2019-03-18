import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import ListOfVarietiesPage from './pages/list_of_varieties-page';
import ViewVarietyPage from './pages/view-variety-page';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/list-of-variates" component={ListOfVarietiesPage} exact/>
      <Route path="/view-variaty/:id" component={ViewVarietyPage} exact/>
    </Switch>
  </BrowserRouter>
)

export default App;
