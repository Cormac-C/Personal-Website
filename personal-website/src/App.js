import React, { Component } from 'react';
/*
import './css/style.css';
import './css/index.css';
import './css/prettyPhoto.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
*/
import ReactGA from 'react-ga';

import './css/formats.css';
import './css/bootstrap.css';
import './font-awesome/css/font-awesome.css';

import Header from './components/header.js'
import Navigation from './components/navigation.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
import Footer from './components/footer.js'

class App extends Component{
  render() {
    ReactGA.initialize("UA-166947896-1");
    ReactGA.pageview(window.location.pathname + "Main");
    return (
      <div id="personal-website-main-page">
          <div id="container-wrap">
          <div id="website-main">
            <Navigation></Navigation>
            <Header></Header>
            <About></About>   
            <Projects></Projects> 	
            <Contact></Contact>
            <Footer></Footer>
            </div>
          </div>
        </div>
    );
  }

}

export default App;
