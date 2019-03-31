import React, { Component } from 'react';
import WOW from 'wowjs';

import '../personalinfo/personalinfo.sass'
import logo from '../../img/foto2.png'
import skylab from '../../img/skylab.png'
import about from '../../img/about.png'



export class Personalinfo extends Component { 
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
        <div class="background personal  is-fullhd" id="personal">
          <div class="container containertext is-fullhd">
          <div class="linew wow slideInLeft"></div> 
          <img class="picture  wow fadeIn"src={logo} width="300px"></img>
              <div class="columns info ">
                <div class="column wow fadeIn">
                  <img class=""src={skylab} width="300px"></img>
                  <p class=" bold" >SKYLAB STUDENT</p>
                  <p class="info" > I am an entusiast of learning, as a Junior Web Developer
                    i enjoy turning problems into a great solution in gain to get experience and 
                    learn something new.
                    </p>  
                </div>
              </div>
              <div class="linew wow slideInLeft"></div>
          </div>
          <div class="line wow slideInLeft"></div>
        </div>
    );
  }
}