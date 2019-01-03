import React, { Component } from 'react';
import './App.css';
import Home from "../components/Home/Home"
import Header from "../components/Header/Header"
import Content from "../components/Content/Content"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Stores from "../components/Stores/Stores"
import {BrowserRouter, Route} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <p className="title"> Vino </p>
          <hr />
          <Header /> 
          <hr />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About}/> 
          <Route exact path="/products" component={Content}/> 
          <Route exact path="/stores" component={Stores}/> 
          <Route exact path="/contact" component={Contact}/> 
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
