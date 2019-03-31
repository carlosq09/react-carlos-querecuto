import React, { Component } from 'react';
import WOW from 'wowjs';
import { Navbar_burger } from './navbar_burger/navbar_burger';
import { Navbar_item } from './navbar_item/navbar_item';
import '../navbar/navbar.sass'

import Logo from '../../img/logoc.png';

export class Navbar extends Component {
    state = {toggled: false};

    handleClick = () => {
      this.setState( state => ({
        toggled: !state.toggled
      }));
    }

    componentDidMount(){
      new WOW.WOW().init();
    } 
    render() {
      return (
        <div>
         <nav className="navbar is-fixed-top is-back " role="navigation" aria-label="main navigation">
              <div className="navbar-brand container">
                  <Navbar_burger toggle={this.handleClick} toggled={this.state.toggled}/>
                  <div id="navbarBasicExample " className={this.state.toggled ?"navbar-menu is-back is-active ":"navbar-menu"}>
                  <div className="navbar-start">
                  <Navbar_item item="Hello!" image={Logo} />
                  <Navbar_item item="About" image="" />
                  <Navbar_item item="Skills" image=""/>
                  <a class="navbar-item " href="https://www.linkedin.com/in/carlos-luis-querecuto-soto-9bbab8170/">
                    Linkedin
                  </a>
                  <a class="navbar-item " href="https://github.com/carlosq09">
                    Github
                  </a>
                  </div>
              </div>
              </div>
          </nav>  
          <div class="line wow slideInLeft"></div>
        </div>

        
      );
    }
  }
  
