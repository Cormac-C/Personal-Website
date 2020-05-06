import React, { Component } from 'react'

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
                                <a className = "navbar-brand page-scroll" href = "#header">Cormac Cureton</a> 
                            </div>

                            <div className = "navbar-collapse navbar-right navbar-main-collapse collapse in">
                                <ul className = "nav navbar-nav">
                                    <li> <a className = "page-scroll" href="#about"> About</a> </li>
                                    <li> <a className= "page-scroll" href="#projects"> Projects</a> </li>
                                    <li> <a className= "page-scroll" href="#contact"> Contact</a> </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}