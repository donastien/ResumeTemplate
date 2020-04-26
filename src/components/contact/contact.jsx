import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='s-contact'>
          <div className='row narrower s-contact__top h-text-center'>
            <div className='column'>
              <h3 className='h6'>Get In Touch</h3>
              <h1 className='display-1'>
                Vous avez une idée ou un projet en tête ? Parlons-en.
                Travaillons ensemble et faisons quelque chose de grand.
                Envoyez-moi un message à
              </h1>
            </div>
          </div>{' '}
          {/* s-footer__top */}
          <div className='row h-text-center'>
            <div className='column'>
              <p className='s-contact__email'>
                <a className='h1' href='mailto:donastienkaroumbata@gmail.com'>
                  donastienkaroumbata@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
