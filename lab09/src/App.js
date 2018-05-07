import React, { Component } from 'react';
import Contador from './components/Contador/Contador'
import Calculadora from './components/Calculadora/Calculadora'
import './App.css';

class App extends Component {
  render() {
    return (<div>
      <Contador valor={6} />
      <hr />
      <Contador valor={0} />
      <hr />
      <Calculadora />
      
    </div>
  
    );
  }
}

export default App;
