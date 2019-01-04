import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio } from '../helper'

class App extends Component {

  cotizarSeguro = (datos) => {
    console.log(datos);
  }

  render() {
    return(
      <div className="container set-margin-top">
        <Header 
          titulo = 'Cotizador de seguro de auto'
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro = {this.cotizarSeguro}
          />
        </div>
      </div>
    ); 
  }
}

export default App;
