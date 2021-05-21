import React, { Component } from 'react'
import './main.css'
import './form.css'
/*import Form from "./form";*/

class Main extends Component {
  render() {
    return (
        <main>
            <section id="skills" className="skills">
              <h2>PROGRAMMING LANGUAGES & TOOLS</h2>
              <div>
                  <h4>SKILLS</h4>
                  <p>Able to create high-quality and user-friendly Web products</p>
                  <p> Got practical experience in developing adaptive websites and React Apps</p>
                  <p>Familiar with modern tools/libraries for web development</p>                  
                </div>
            </section>
              <div>
                <div className="services">
                  <div className="service__one">
                  <p className="service__icon"><i className="fab fa-react"></i></p>
                  </div>
                  <div className="service_two">
                  <p className="service__icon"><i className="fab fa-js"></i></p>
                  </div>
                  <div className="service__three">
                  <p className="service__icon"><i className="fab fa-html5"></i></p>
                  </div>
                  <div className="service__four">
                  <p className="service__icon"><i className="fab fa-css3-alt"></i></p>
                  </div>
                  <div className="service__five">
                  <p className="service__icon"><i className="fab fa-sass"></i></p>
                  </div>
                  <div className="service__six">
                  <p className="service__icon"><i className="fab fa-git"></i></p>
                  </div>
                  <div className="service__seven">
                  <p className="service__icon"><i className="fab fa-wordpress"></i></p>
                  </div>
                </div>
              </div>
              <div id="portfolio">
                <div id="works" className="gallery">            
                  <a href="https://olenakop3.github.io/Development-Studio-Website/" target="_blank" rel="noopener noreferrer">
                    <p className="service__title">Landing Page</p>
                    <div className="gallery__item__one"></div>
                  </a>
                  <a href="https://olenakop3.github.io/Movie-app-with-React/" target="_blank" rel="noopener noreferrer">
                    <p className="service__title">Movie App with react</p>
                    <div className="gallery__item__two"></div>
                  </a>
                  <a href="https://olenakop3.github.io/Progress-steps-bar-with-React/" target="_blank" rel="noopener noreferrer">
                    <p className="service__title">Progress step bar with react</p>
                    <div className="gallery__item__three"></div>
                  </a>
                  <a href="https://olenakop3.github.io/Expanding-photos-with-React/" target="_blank" rel="noopener noreferrer">
                    <p className="service__title">Expanding photos with react</p>
                    <div className="gallery__item__four"></div>
                  </a>
                  <a href="https://olenakop3.github.io/Expanding-photos-with-JS/" target="_blank" rel="noopener noreferrer">
                    <p className="service__title">Expanding photos with pure JS</p>
                    <div className="gallery__item__five"></div>
                  </a>
                  <a href="https://olenakop3.github.io/Movie-app-with-JS/" target="_blank" rel="noopener noreferrer">
                    <p className="service__title">Movie App with pure JS</p>
                    <div className="gallery__item__six"></div>
                  </a>
                </div>
              </div>
            <section id="education">
              <h2>Education</h2>
              <div>
                <p>Odessa National Economic University(Ukraine)</p>
                <p>Odessa Polytechnic State University(Ukraine)</p>
              </div>
            </section>

            {/*<section id="contact">
              <h2 className="form__h2">Education</h2>              
              {/*<Form />
            </section>*/}
        </main>
    )
  }
}

export default Main;





