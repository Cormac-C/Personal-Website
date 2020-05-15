import React, { Component } from 'react'
import profilePhoto from '../img/face.jpg'

export default class Header extends Component {
    render(){
        return(
            <div>
                <header id = "header">
                    <div className = "intro">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-lg-8">
                                    <div className = "intro-text">
                                        <h1>Hi, I'm <span class = "name"> Cormac Cureton</span></h1>
                                        <h3>Systems Design Engineering Student</h3>
                                        <p> 
                                            Learning, Designing, and Developing
                                            <br></br> 
                                            Looking to make an <b>Impact</b>.
                                        </p>         
                                    </div> 
                                </div>
                                <div className = "col-lg-5">
                                    <div className = "profile-photo">
                                        <img src = {profilePhoto} className = "img-circle" alt = "Cormac Cureton Headshot"/>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </header>
            </div>

        )
    }
}