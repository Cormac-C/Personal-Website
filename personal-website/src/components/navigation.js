import React, { Component } from 'react'
import {LogEvent} from '../js/gAnalytics'

export default class Header extends Component {
    render(){
        return(
            <div>
                <div id = "nav">
                    <nav className = "navbar-custom">
                        <div className = "container">
                            <div className = "navbar-header">
                                <button type = "button" className = "navbar-toggle" data-toggle = "collapse" data-targets = ".navbar-main-collapse"> 
                                    <i className = "fa fa-bars"></i>
                                </button>
                                <a className = "navbar-brand page-scroll" href = "#header" onClick={ () => LogEvent("Navigation", "Scroll from Navbar", "Top of Page")}>Cormac Cureton</a> 
                            </div>

                            <div className = "navbar-collapse navbar-right navbar-main-collapse collapse in">
                                <ul className = "nav navbar-nav">
                                    <li> <a className = "page-scroll" href="#about" onClick={ () => LogEvent("Navigation", "Scroll from Navbar", "About")}> About</a> </li>
                                    <li> <a className= "page-scroll" href="#projects" onClick={ () => LogEvent("Navigation", "Scroll from Navbar", "Projects")}> Projects</a> </li>
                                    <li> <a className= "page-scroll" href="#contact" onClick={ () => LogEvent("Navigation", "Scroll from Navbar", "Contact")}> Contact</a> </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}