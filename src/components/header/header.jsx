import React, { Component } from 'react';
import Nav from './nav';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
          <div className="top" id="about">
              <div className="photo"></div>
              <div>
                  <p>Results-oriented Front-end Developer with 1+ years of practice, looking for a position
                    in this area. Passionate about learning and always improving. With Master’s degree in 
                    Economics and Engineering, but found my dream profession in IT.</p>
                  <p>+380992601852(telegram, viber)</p>
                  <p>OLENAKOP3@GMAIL.COM</p>
                  <p>Kiev, Ukraine</p>
                  <p><a href="https://github.com/Olenakop3" target="_blank" rel="noreferrer noopener">GitHub</a></p>        
              </div>
          </div>
      </header>
    )
  }
}

export default Header;