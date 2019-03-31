import React, { Component } from 'react';
import WOW from 'wowjs';
import './App.sass';
import 'bulma/css/bulma.css'

import { Navbar } from './components/navbar/navbar';
import { Landing } from './components/landing/landing';
import { About } from './components/about/about';
import { Personalinfo } from './components/personalinfo/personalinfo';
import { Skills } from './components/skills/skills';
import { Social } from './components/social/social';

class App extends Component {
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="App ">
        <Landing></Landing>
        <Navbar></Navbar>
        <div class="bordernav"></div>
        <About></About>
        <div class="line wow slideInLeft"></div>
        <Personalinfo></Personalinfo>
        <Skills></Skills>
        <Social></Social>
      </div>
        
      
    );
  }
}

export default App;
