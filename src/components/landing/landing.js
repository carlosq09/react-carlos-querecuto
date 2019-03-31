import React, { Component } from 'react';
import WOW from 'wowjs';

//import logo from '../../img/logoc.png'
import '../landing/landing.sass'
import '../landing/logoanimation.sass'

import { Navbar } from '..//navbar/navbar';

export class Landing extends Component {   

  componentDidMount(){
    new WOW.WOW().init();
  }

  render() {
    return (
        <div id="hello!" className=" landing is-fullhd ">
            <div  className="container header ">
                <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" width="30vh" height=""  viewBox="0 0 566 577.38"><defs>
                    </defs><title>logoc</title>
                    <polygon class="cls-1" points="223.72 3.51 125.09 174.35 322.36 174.35 223.72 3.51"/>
                    <polygon class="cls-1" points="102.72 214.51 4.09 385.36 201.36 385.36 102.72 214.51"/>
                    <polygon class="cls-2" points="212.36 363.3 311 192.46 113.72 192.46 212.36 363.3"/>
                    <polygon class="cls-2" points="344.36 577.38 443 406.53 245.72 406.53 344.36 577.38"/>
                    <polygon class="cls-1" points="98.64 577.38 197.27 406.53 0 406.53 98.64 577.38"/>                        
                    <polygon class="cls-1" points="345.36 170.84 444 0 246.72 0 345.36 170.84"/>
                    <polygon class="cls-1" points="467.36 363.3 566 192.46 368.73 192.46 467.36 363.3"/>
                    <polygon class="cls-1" points="220.72 406.53 122.09 577.38 319.36 577.38 220.72 406.53"/>
                    <polygon class="cls-2" points="466.36 406.53 367.73 577.38 565 577.38 466.36 406.53"/>
                    <polygon class="cls-1" points="466.36 3.51 367.73 174.35 565 174.35 466.36 3.51"/>
                </svg>
                <div class="  wow slideInUp ">
                  <p class="landingtext">Hi! My name is Carlos Luis Querecuto.</p>
                </div>
            </div>
            
        </div>
    );
  }
}