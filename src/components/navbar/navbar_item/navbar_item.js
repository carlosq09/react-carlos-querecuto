import React, { Component } from 'react';
import '../../navbar/navbar.sass'

export class Navbar_item extends Component {   
  render() {
    return (
        <a class="navbar-item " href={ `#${(this.props.item).toLowerCase()}`}>
          {this.props.image != "" ? <img class="logospace" src={this.props.image} width="20" height="20" /> : ""}
          {this.props.item}
        </a>
    );
  }
}