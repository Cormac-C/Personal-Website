import React, { Component } from 'react';
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
    //Records the google analytics page view when the page loads
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
