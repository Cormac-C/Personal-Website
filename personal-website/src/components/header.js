import React, { Component } from 'react'
import '../css/style.css';

export default class Header extends Component {
    render(){
        return(
            <div>
                <header id = "header">
                    <div className = "intro">
                        <div className = "container">
                            <div className = "row">
                                <div className = "intro-text">
                                    <h1>Hello, I'm <span class = "name"> Cormac Cureton</span></h1>
                                    <p>Systems Design Engineering Student</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        )
    }
}