import React, {Component} from 'react';
import classes from './Calculadora.css'
export default class Calculadora extends Component{
   
    render(){
        
        return (<div className={classes.Calculadora}>
            <h1>Calculadora</h1>
            <p>Escriba los numeros</p>
            <input id="n1" type="number" />
            <input id="n2" type="number" />
            <button onClick={this.sumarHandler}>Sumar</button>
            <input id="rpt" type="text" />
            
            
            
        </div>)
    }
}

