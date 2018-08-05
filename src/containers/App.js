import React, { Component } from 'react';
import './App.css';
import Header from "../components/Header/Header"
import Content from "../components/Content/Content"
import About from "../components/About/About"
import {BrowserRouter, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header /> 
          {/* <Content /> */}
          <Route exact path="/" component={Content} />
          <Route exact path="/home" component={Content} />
          <Route exact path="/about" component={About}/> 
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
