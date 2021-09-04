import './App.css';
import React from 'react';
import Home from './Home';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import SearchFraud from './SearchFraud';
import SubmitFraud from './SubmitFraud';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>

    <Switch>
      <Route exact path='/SearchFraud' component={SearchFraud} />
      <Route exact path='/SubmitFraud' component={SubmitFraud} />
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
