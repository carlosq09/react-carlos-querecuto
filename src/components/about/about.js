import React, { Component } from 'react';
import WOW from 'wowjs';

import '../about/about.sass'
import logo from '../../img/foto.png'
import about from '../../img/about.png'
import iconquest from '../../img/iconquestion.png'
import note from '../../img/note2.png'
import heart from '../../img/heart2.png'
import pc from '../../img/pc2.png'
import car from '../../img/Car2.png'
import who from '../../img/who.png'


export class About extends Component { 
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
        <div class="backout is-fullhd" id="about">
          <div class="container containertext is-fullhd">
              <img class="wow fadeInUp"src={about}  width="300px"></img>
              <div class="content">
                <img class="wow fadeIn delay-1s"src={who}  width="300px"></img>
                <div class="line wow slideInLeft "></div>
                <img class="iconquest wow fadeIn delay-1s"src={iconquest}></img>
                <p class="wow fadeIn delay-1s infotext">
                  Im a fullstack developer student
                </p>
                <div class="columns wow fadeInUp">
                  <div class="column">  
                      <img class="picture wow rollIn delay-1s"src={note} width="100px"></img>
                      <p class="infotext" > My hobbies are musical instruments and Digital design (Graphic and 3D)</p>
                  </div>
                  <div class="column">  
                      <img class="picture wow rollIn delay-s"src={pc} width="100px"></img>
                      <p class="infotext" > Interested in tecnology, Proactive, i like to research what i dont know</p>
                  </div>
                  <div class="column">  
                      <img class="picture wow rollIn delay-1s"src={heart} width="100px"></img>
                      <p class="infotext" > Complete love of coding, i will be enthusiastic of working in projects</p>
                  </div>
                </div>        
              </div>
          </div>
          <div class="wow fadeInLeft">
            <img class="picture car wow fadeInRight delay-1s"src={car} width="500"></img>
          </div>
          
        </div>
    );
  }
}