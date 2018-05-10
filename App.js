import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './component/Header';
import Home from './component/Home';
import Portfolio from './component/Portfolio';
import Playground from './component/Playground';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/playground" component={Playground}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
