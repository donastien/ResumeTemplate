import React, { Component } from 'react';
import Preloader from './components/preloader/preloader';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Client from './components/client/client';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Preloader />
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;
