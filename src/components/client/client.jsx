import React, { Component } from 'react';
export default class Client extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div id='clients' className='section s-clients'>
            <div className='row narrower s-clients__top h-text-center'>
              <div className='column'>
                <h1 className='display-1' data-aos='fade-up'>
                  We've had the priveledge with working with some of the largest
                  and most iconic brands
                </h1>
              </div>
            </div>{' '}
            {/* s-clients__top */}+
            <a href='#0' title className='clients__slide'>
              <img src='images/icons/clients/dropbox.svg' />
            </a>
            <a href='#0' title className='clients__slide'>
              <img src='images/icons/clients/atom.svg' />
            </a>
            <a href='#0' title className='clients__slide'>
              <img src='images/icons/clients/github.svg' />
            </a>
            <a href='#0' title className='clients__slide'>
              <img src='images/icons/clients/redhat.svg' />
            </a>
            <a href='#0' title className='clients__slide'>
              <img src='images/icons/clients/medium.svg' />
            </a>
            <a href='#0' title className='clients__slide'>
              <img src='images/icons/clients/messenger.svg' />
            </a>
            <a href='#0' title className='clients__slide'>
              <img src='images/icons/clients/steam.svg' />
            </a>
            <a href='#0' title className='clients__slide'>
              <img src='images/icons/clients/spotify.svg' />
            </a>
          </div>{' '}
          {/* end clients */}
          {/* end column */}
          {/* end clients-outer */}
          <div className='row testimonials collapse'>
            <div className='column large-12'>
              <div className='testimonial-slider' data-aos='fade-up'>
                <div className='testimonial-slider__slide'>
                  <p>
                    Molestiae incidunt consequatur quis ipsa autem nam sit enim
                    magni. Voluptas tempore rem. Explicabo a quaerat sint autem
                    dolore ducimus ut consequatur neque. Nisi dolores quaerat
                    fuga rem nihil nostrum. Laudantium quia consequatur
                    molestias delectus culpa.
                  </p>
                  <div className='testimonial-slider__author'>
                    <img
                      src='images/avatars/user-02.jpg'
                      alt='Author image'
                      className='testimonial-slider__avatar'
                    />
                    <cite className='testimonial-slider__cite'>
                      <strong>Tim Cook</strong>
                      <span>CEO, Apple</span>
                    </cite>
                  </div>
                </div>{' '}
                {/* end testimonials__slide */}
                <div className='testimonial-slider__slide'>
                  <p>
                    Excepturi nam cupiditate culpa doloremque deleniti repellat.
                    Veniam quos repellat voluptas animi adipisci. Nisi eaque
                    consequatur. Voluptatem dignissimos ut ducimus accusantium
                    perspiciatis. Quasi voluptas eius distinctio. Atque eos
                    maxime.
                  </p>
                  <div className='testimonial-slider__author'>
                    <img
                      src='images/avatars/user-01.jpg'
                      alt='Author image'
                      className='testimonial-slider__avatar'
                    />
                    <cite className='testimonial-slider__cite'>
                      <strong>Sundar Pichai</strong>
                      <span>CEO, Google</span>
                    </cite>
                  </div>
                </div>{' '}
                {/* end testimonials__slide */}
                <div className='testimonial-slider__slide'>
                  <p>
                    Repellat dignissimos libero. Qui sed at corrupti expedita
                    voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed
                    ipsam. Autem eaque officia cum exercitationem sunt
                    voluptatum accusamus. Quasi voluptas eius distinctio.
                    Voluptatem dignissimos ut.
                  </p>
                  <div className='testimonial-slider__author'>
                    <img
                      src='images/avatars/user-04.jpg'
                      alt='Author image'
                      className='testimonial-slider__avatar'
                    />
                    <cite className='testimonial-slider__cite'>
                      <strong>Satya Nadella</strong>
                      <span>CEO, Microsoft</span>
                    </cite>
                  </div>
                </div>{' '}
                {/* end testimonials__slide */}
                <div className='testimonial-slider__slide'>
                  <p>
                    Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc
                    ac augue. Fusce vel dui. In ac felis quis tortor malesuada
                    pretium. Curabitur vestibulum aliquam leo. Qui sed at
                    corrupti expedita voluptas odit. Nihil ea quia nesciunt.
                    Ducimus aut sed ipsam.
                  </p>
                  <div className='testimonial-slider__author'>
                    <img
                      src='images/avatars/user-05.jpg'
                      alt='Author image'
                      className='testimonial-slider__avatar'
                    />
                    <cite className='testimonial-slider__cite'>
                      <strong>Jeff Bezos</strong>
                      <span>CEO, Amazon</span>
                    </cite>
                  </div>
                </div>{' '}
                {/* end testimonials__slide */}
              </div>{' '}
              {/* end testimonial slider */}
            </div>{' '}
            {/* end column */}
          </div>{' '}
          {/* end row */}
          {/* end s-clients */}
        </div>
      </React.Fragment>
    );
  }
}
