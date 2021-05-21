import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="navigation">Olena <span>Kolesnyk</span></li>
        </ul>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#education">Education</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;