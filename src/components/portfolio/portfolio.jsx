import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id='portfolio' className='s-portfolio'>
          <div className='row s-porfolio__top'>
            <div className='column large-6 w-900-stack'>
              <div className='section-title' data-num='03' data-aos='fade-up'>
                <h3 className='h6'>Recent Works</h3>
              </div>
            </div>
            <div className='column large-6 w-900-stack'>
              <h1 className='display-1' data-aos='fade-up'>
                Here are some of our projects we done lately. Feel free to check
                them out.
              </h1>
            </div>
          </div>{' '}
          {/* end s-portfolio__top*/}
          <div className='row s-portfolio__list block-large-1-2 block-tab-full collapse'>
            <div className='column' data-aos='fade-up'>
              <div className='folio-item'>
                <div className='folio-item__thumb'>
                  <a
                    className='folio-item__thumb-link'
                    href='images/portfolio/gallery/g-red-wheel.jpg'
                    title='The Red Wheel'
                    data-size='1050x700'
                  >
                    <img
                      src='images/portfolio/red-wheel.jpg'
                      srcSet='images/portfolio/red-wheel.jpg 1x, images/portfolio/red-wheel@2x.jpg 2x'
                      alt=''
                    />
                  </a>
                </div>
                <div className='folio-item__info'>
                  <div className='folio-item__cat'>Branding</div>
                  <h4 className='folio-item__title'>The Red Wheel</h4>
                </div>
                <a
                  href='https://www.behance.net/'
                  title='Project Link'
                  className='folio-item__project-link'
                >
                  Project Link
                </a>
                <div className='folio-item__caption'>
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{' '}
            {/* end column */}
            <div className='column' data-aos='fade-up'>
              <div className='folio-item'>
                <div className='folio-item__thumb'>
                  <a
                    className='folio-item__thumb-link'
                    href='images/portfolio/gallery/g-music-life.jpg'
                    title='Music Life'
                    dataheader-size='1050x700'
                  >
                    <img
                      src='images/portfolio/music-life.jpg'
                      srcSet='images/portfolio/music-life.jpg 1x, images/portfolio/music-life@2x.jpg 2x'
                      alt=''
                    />
                  </a>
                </div>
                <div className='folio-item__info'>
                  <div className='folio-item__cat'>Frontend Design</div>
                  <h4 className='folio-item__title'>Music Life</h4>
                </div>
                <a
                  href='https://www.behance.net/'
                  title='Project Link'
                  className='folio-item__project-link'
                >
                  Project Link
                </a>
                <div className='folio-item__caption'>
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{' '}
            {/* end column */}
            <div className='column' data-aos='fade-up'>
              <div className='folio-item'>
                <div className='folio-item__thumb'>
                  <a
                    className='folio-item__thumb-link'
                    href='images/portfolio/gallery/g-oi-logo.jpg'
                    title='OI Logo'
                    data-size='1050x700'
                  >
                    <img
                      src='images/portfolio/oi-logo.jpg.jpg'
                      srcSet='images/portfolio/oi-logo.jpg 1x, images/portfolio/oi-logo@2x.jpg 2x'
                      alt=''
                    />
                  </a>
                </div>
                <div className='folio-item__info'>
                  <div className='folio-item__cat'>Branding</div>
                  <h4 className='folio-item__title'>OI Logo</h4>
                </div>
                <a
                  href='https://www.behance.net/'
                  title='Project Link'
                  className='folio-item__project-link'
                >
                  Project Link
                </a>
                <div className='folio-item__caption'>
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{' '}
            {/* end column */}
            <div className='column' data-aos='fade-up'>
              <div className='folio-item'>
                <div className='folio-item__thumb'>
                  <a
                    className='folio-item__thumb-link'
                    href='images/portfolio/gallery/g-corrugated-sheets.jpg'
                    title='Corrugated Sheets'
                    data-size='1050x700'
                  >
                    <img
                      src='images/portfolio/corrugated-sheets.jpg'
                      srcSet='images/portfolio/corrugated-sheets.jpg 1x, images/portfolio/corrugated-sheets@2x.jpg 2x'
                      alt=''
                    />
                  </a>
                </div>
                <div className='folio-item__info'>
                  <div className='folio-item__cat'>Frontend Design</div>
                  <h4 className='folio-item__title'>Corrugated Sheets</h4>
                </div>
                <a
                  href='https://www.behance.net/'
                  title='Project Link'
                  className='folio-item__project-link'
                >
                  Project Link
                </a>
                <div className='folio-item__caption'>
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{' '}
            {/* end column */}
            <div className='column' data-aos='fade-up'>
              <div className='folio-item'>
                <div className='folio-item__thumb'>
                  <a
                    className='folio-item__thumb-link'
                    href='images/portfolio/gallery/g-woodcraft.jpg'
                    title='Sand Dunes'
                    data-size='1050x700'
                  >
                    <img
                      src='images/portfolio/woodcraft.jpg'
                      srcSet='images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x'
                      alt=''
                    />
                  </a>
                </div>
                <div className='folio-item__info'>
                  <div className='folio-item__cat'>Frontend Design</div>
                  <h4 className='folio-item__title'>Wooocraft</h4>
                </div>
                <a
                  href='https://www.behance.net/'
                  title='Project Link'
                  className='folio-item__project-link'
                >
                  Project Link
                </a>
                <div className='folio-item__caption'>
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{' '}
            {/* end column */}
            <div className='column' data-aos='fade-up'>
              <div className='folio-item'>
                <div className='folio-item__thumb'>
                  <a
                    className='folio-item__thumb-link'
                    href='images/portfolio/gallery/g-lamp.jpg'
                    title='The Lamp'
                    data-size='1050x700'
                  >
                    <img
                      src='images/portfolio/lamp.jpg'
                      srcSet='images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x'
                      alt=''
                    />
                  </a>
                </div>
                <div className='folio-item__info'>
                  <div className='folio-item__cat'>Frontend Design</div>
                  <h4 className='folio-item__title'>The Lamp</h4>
                </div>
                <a
                  href='https://www.behance.net/'
                  title='Project Link'
                  className='folio-item__project-link'
                >
                  Project Link
                </a>
                <div className='folio-item__caption'>
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{' '}
            {/* end column */}
          </div>{' '}
          {/* folio-list */}
        </section>
      </React.Fragment>
    );
  }
}
