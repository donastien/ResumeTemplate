import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className='s-footer'>
          <div className='row row-y-top'>
            <div className='column large-8 medium-12'>
              <div className='row'>
                <div className='column large-5 tab-12 s-footer__block'>
                  <h4 className='h6'>Follow Me</h4>
                  <ul className='s-footer__list'>
                    <li>
                      <a href='#0'>LinkedIn</a>
                    </li>
                    <li>
                      <a href='#0'>Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='column large-4 medium-12 s-footer__block--end'>
              <div className='ss-copyright'>
                <span>Copyright Flare 2020</span>
                <span>
                  Design by <a href='https://www.styleshout.com/'>StyleShout</a>
                </span>
              </div>
            </div>
            <div className='ss-go-top'>
              <a className='smoothscroll' title='Back to Top' href='#top'>
                top
              </a>
            </div>{' '}
            {/* end ss-go-top */}
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
