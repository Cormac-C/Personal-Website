import React, { Component } from 'react'
import personalWebsite from '../img/Personal-Website.png'

export default class Projects extends Component {
    render(){
        return(
            <div>
                <div id = "projects">
                    <div className = "section-title text-center center">
                        <h2>Projects</h2>
                        <hr />
                    </div>

                    <div className = "card-colour-a">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-md-3">
                                    <p className = "project-title">
                                        Personal Website
                                    </p>
                                </div>
                                <div className = "col-md-4">
                                    <div className = "project-text">
                                        <p className = "h5">
                                            A landing place for all professional sites and place to showcase a portfolio of my personal projects.
                                            <br></br><br></br>
                                            As well, my introduction to any web development. This site gave me an introduction to React and CSS and a familiarity with the Bootstrap framework.
                                            I started from an HTML + CSS template then adopted it to react, modified the site and CSS from there. 
                                            In future, I would probably look for a pure Bootstrap template to start or build from scratch.
                                        </p>
                                    </div>
                                </div>
                                <div className = "col-md-5">
                                    <img src = {personalWebsite} class = "img-responsive" alt = "Website Screenshot"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className = "card-colour-b">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-md-3">
                                    <p className = "project-title">
                                        Metronome App
                                    </p>
                                </div>
                                <div className = "col-md-4">
                                    <div className = "project-text">
                                        <p className = "h5">
                                            An android app with the features I want blah blah blah.
                                            <br></br><br></br>
                                            Android studio java backend etc. multi-threading...
                                        </p>
                                    </div>
                                </div>
                                <div className = "col-md-5">
                                    <img src = {personalWebsite} class = "img-responsive" alt = "Website Screenshot"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}