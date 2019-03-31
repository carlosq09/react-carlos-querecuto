import React, { Component } from 'react';

export class Navbar_burger extends Component {


  render() {
    return (
      <a 
        onClick={this.props.toggle}
        className={this.props.toggled ? "navbar-burger burger is-active" : "navbar-burger burger"}
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a>
    );
  }
}