import React, { Component } from 'react';
import WOW from 'wowjs';

import '../personalinfo/personalinfo.sass'
import likenid from '../../img/linkedin2.png'
import logoreact from '../../img/logoreact2.png'


export class Social extends Component { 
  componentDidMount(){
    new WOW.WOW().init();
  }
  render() {
    return (
        <div class="background personal  is-fullhd">
          <div class="container containertext is-fullhd">
              <div class="columns info wow slideInUp ">
                <div class="column ">
                  <p class="landingtext">See me on Likenid!</p>
                  <a href="https://www.linkedin.com/in/carlos-luis-querecuto-soto-9bbab8170/">
                    <img class=" wow fadeInUp" src={likenid}  width="400px"></img>
                  </a>
                </div>
                <div class="column ">
                  <p class="landingtext">Made with Love and React</p>
                  <img class="picture react-logo " src={logoreact} width="150px"></img>
                </div>
              </div>

          </div>

        </div>
    );
  }
}