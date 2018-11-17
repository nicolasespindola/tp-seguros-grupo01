import React, { Component } from 'react';
import './App.css';
import HeaderNav from './components/header-nav/HeaderNav';
import FormularioPolizaVida from './components/formulario-poliza-vida/FormularioPolizaVida';

class App extends Component {
  render() {
    return (
      <HeaderNav>
        <FormularioPolizaVida />
      </HeaderNav>
    );
  }
}

export default App;
