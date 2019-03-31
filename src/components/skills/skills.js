import React, { Component } from 'react';
import WOW from 'wowjs';
import '../skills/skills.sass'
import logoreact from '../../img/logoreact.png'
import logoback from '../../img/logoback.png'
import logosass from '../../img/logosass.png'
import skills from '../../img/skills.png'

export class Skills extends Component {  
  
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
        <div class="backgroundskill is-fullhd" id="skills">
            <div class="container containertext is-fullhd">
            <img class="iconqest wow fadeInUp"src={skills}></img>
              <br/>
              <br/>
              <div class="columns  wow fadeInUp textgroup">
                <div class="column">
                  <h3>Front-end</h3>
                  <div class="columns">
                    <div class="column">
                      <img class="picture react-logo " src={logoreact} width="100px"></img>
                      <p class="infotext">
                      I use HTML5, JavaScript, jQuery and
                      React to build websites and applications that your users will love
                      </p>
                    </div>
                    <div class="column">
                      <img class="picture wow rubberBand infinite slow delay-1s" src={logosass} width="80px"></img>
                      <p  class="infotext">
                        I use CSS3, SASS, and my skills with Photoshop and illustrator
                        to give some sick style on my projects 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <h3>Back-end</h3>
                  <img class="picture wow rollIn delay-1s" src={logoback} width="80px"></img>
                  <p class="infotext">
                      I use HTML5, JavaScript, jQuery and
                      React to build websites and applications that your users will love
                  </p>
                </div>

              </div>
          </div>
        </div>
    );
  }
}