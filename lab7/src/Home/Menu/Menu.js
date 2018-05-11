import React, { Component } from 'react';
import logo from './logo.png'
import carrito from './carrito.png'
import camion1 from './camion1.png'
import usuario from './usuario.png'
import './Menu.css'
import '../../Login/Login/Login'
export default class Menu extends Component{

    render(){
        return (
        <div className="topnav" id="myTopnav">
        <div className="numero"><p>Asesoría telefónica 00-9999999999</p></div>
        <div className="menu2">
                 <img height="50" width="50" alt="hh" src={logo} className="logo"/>
                 <img alt="sdfs" src={carrito} className="logo1"/>
                 <img alt="sdfs" src={camion1} className="logo2"/>
                 <img alt="sdfs" src={usuario} className="logo3"/>
                <div class="form-element textfield">
                   <input type="text" />
               </div>
        
               <div class="form-element submit-btn">
                    <input className="btnb" type="submit" value="Buscar"/>
                    
               </div>
               
               
               
        </div>
        <h3 className="nombre">TECSHOP</h3>
        
        <a href="" class="active">Home</a>
        <a href="">News</a>
        <a href="">hhsadaf</a>
        <a href="">hhdsadf</a>
        <a href="">hhfdsfdf</a>
        <a href="">hhfdsfsdfsdf</a>
        <a href="">hhfds</a>
        <a href="">�jhjjhkjh</a>
        <a href="../../Login/Login/Login.js">About</a>
        <a href="" className="icon" >&#9776;</a>
      </div>
      )
        
    }
}