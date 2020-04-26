import '../../../node_modules/aos/dist/aos.css';
import React, { Component } from 'react';
import AOS from 'aos';
export default class About extends Component {
  render() {
    AOS.init();
    AOS.refresh();
    return (
      <React.Fragment>
        <section id='about' className='s-about'>
          <div className='horizontal-line' />
          <div className='row'>
            <div className='column large-12'>
              <div className='section-title' data-num='01' data-aos='fade-up'>
                <h3 className='h6'>Qui suis-je ?</h3>
              </div>
            </div>
            <div className='column large-6 w-900-stack s-about__intro-text'>
              <h1 className='display-1' data-aos='fade-up'>
                Flare is a branding agency based in somewhere. We design
                thoughtful digital experiences and beautiful brand aesthetics.
              </h1>
              <p className='lead' data-aos='fade-up'>
                Non amet venenatis dolor id pellentesque mattis erat. Fermentum
                nunc, tincidunt sit elit amet scelerisque. Ac quisque quis eu
                nibh rutrum risus tellus egestas neque. Vestibulum ante ipsum
                primis in faucibus orci luctus et.
              </p>
            </div>
            <div className='column large-6 w-900-stack s-about__photo-block'>
              <div className='s-about__photo' data-aos='fade-up' />
            </div>
          </div>
          <div className='row block-large-1-2 block-tab-full s-about__process item-list'>
            <div className='column item item-process' data-aos='fade-up'>
              <h3 className='item-title'>Define</h3>
              <p>
                Deserunt rerum perspiciatis quaerat quam numquam assumenda
                neque. Quis dolores totam voluptatibus molestiae non. Quae
                exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex
                unde rem quod ipsum consequatur. blanditiis temporibus pariatur
                voluptatibus molestiae.
              </p>
            </div>
            <div className='column item item-process' data-aos='fade-up'>
              <h3 className='item-title'>Design</h3>
              <p>
                Deserunt rerum perspiciatis quaerat quam numquam assumenda
                neque. Quis dolores totam voluptatibus molestiae non. Quae
                exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex
                unde rem quod ipsum consequatur. blanditiis temporibus pariatur
                voluptatibus molestiae.
              </p>
            </div>
            <div className='column item item-process' data-aos='fade-up'>
              <h3 className='item-title'>Build</h3>
              <p>
                Deserunt rerum perspiciatis quaerat quam numquam assumenda
                neque. Quis dolores totam voluptatibus molestiae non. Quae
                exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex
                unde rem quod ipsum consequatur. blanditiis temporibus pariatur
                voluptatibus molestiae.
              </p>
            </div>
            <div className='column item item-process' data-aos='fade-up'>
              <h3 className='item-title'>Launch</h3>
              <p>
                Deserunt rerum perspiciatis quaerat quam numquam assumenda
                neque. Quis dolores totam voluptatibus molestiae non. Quae
                exercitationem cum numquam repudiandae. Beatae eum quae. Ut ex
                unde rem quod ipsum consequatur. blanditiis temporibus pariatur
                voluptatibus molestiae.
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
