import React, { Component } from 'react';
/*
import './css/style.css';
import './css/index.css';
import './css/prettyPhoto.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
*/
import './css/formats.css';
import './css/bootstrap.css';

import Header from './components/header.js'
import Navigation from './components/navigation.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'
import Footer from './components/footer.js'

class App extends Component{
  render() {
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
