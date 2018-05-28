import React, { Component } from 'react';

import Slider from './Home/Slider/Slider'
import Home from './Home/Home'
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Home/Menu/Menu';
import Footer from './Home/Footer/Footer';

import classes from './App.css';

class App extends Component {
  render() {
    return (

      <div className={classes.App}>
     
      <Menu />
      <br />
      <Slider />
      <br />
      <Home />
      <br />
      <Footer />
      
     
      </div>
    );
  }
}

export default App;
