import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import { obtenerDiferenciaAnio } from '../helper';

class App extends Component {

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    // Agregar una base de 200
    let resultado = 2000;

    // Obtener diferencia de años
    const diferencia = obtenerDiferenciaAnio(year);
    console.log('la diferencia es' + diferencia);
    //  y restar 3% al valor por año

    // americano 15%


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
