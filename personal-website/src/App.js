import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
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
            <Header></Header>
            <Navigation></Navigation>
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
