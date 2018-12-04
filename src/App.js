import React, { Component } from 'react';
import './App.css';
import HeaderNav from './components/header-nav/HeaderNav';
import FormularioPolizaVida from './components/formulario-poliza-vida/FormularioPolizaVida';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderNav>
          <Route path="/" exact component={Home} />
          <Route path="/detalle" exact component={FormularioPolizaVida} />
        </HeaderNav>
      </BrowserRouter>
    );
  }
}

export default App;
