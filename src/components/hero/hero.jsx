import React, { Component } from 'react';
export default class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='hero' className='s-hero target-section'>
          <div className='s-hero__bg'>
            <div className='gradient-overlay' />
          </div>
          <div className='row s-hero__content'>
            <div className='column'>
              <h1>Hello</h1>
              <div className='s-hero__content-about'>
                <p>
                  Développeur Web FullStack, <br />
                Expert en ReactJS & NodeJS,
                  <br />
                  Je vous accompagne dans le processus de création ou de mise à
                  jour de vos applications web sur mesure.
                  <br />
                </p>
                <footer>
                  <div className='s-hero__content-social'>
                    <a href='#0'>
                      <i className='fab fa-linkedin' aria-hidden='true' />
                    </a>
                    <a href='#0'>
                      <i className='fab fa-instagram' aria-hidden='true' />
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>

          <div className='s-hero__scroll'>
            <a href='#about' className='s-hero__scroll-link smoothscroll'>
              Scroll Down
            </a>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
