import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className='s-header' id='home'>
          <div className='s-header__logo'>
            <a className='smoothscroll' href='index.html'>
              Donastien
            </a>
          </div>
          <div className='s-header__content'>
            <nav className='s-header__nav-wrap'>
              <ul className='s-header__nav'>
                <li>
                  <a className='smoothscroll' href='#hero' title='Intro'>
                    Home
                  </a>
                </li>
                <li>
                  <a className='smoothscroll' href='#about' title='About'>
                    About
                  </a>
                </li>
                <li>
                  <a className='smoothscroll' href='#services' title='Services'>
                    Services
                  </a>
                </li>
                <li>
                  <a className='smoothscroll' href='#portfolio' title='Works'>
                    Works
                  </a>
                </li>
              </ul>
            </nav>{' '}
            {/* end s-header__nav-wrap */}
            <a
              href='mailto:donastienkaroumbata@gmail.com'
              className='btn btn--primary btn--small'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
              >
                <path d='M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z' />
              </svg>
              Contactez-moi
            </a>
          </div>{' '}
          {/* end header-content */}
          <a className='s-header__menu-toggle' href='#0'>
            <span>Menu</span>
          </a>
        </header>
      </React.Fragment>
    );
  }
}
