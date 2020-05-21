import React, { Component } from 'react'
import ReactGA from 'react-ga';
import personalWebsite from '../img/Personal-Website.png'
import metronomeApp from '../img/Metronome App.jpg'
import baseballJava from '../img/Baseball-Java.png'

export default class Projects extends Component {
    render(){
        //Only makes another pageview if a user refreshes the page with the href in the url
        ReactGA.pageview(window.location.pathname + window.location.href);
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
                                            I built this site with React and CSS using the BootStrap Framework. Started with a HTML + CSS template then
                                            adapted it to React and modified the content, layout, and styling.
                                            <br></br><br></br>
                                            Take a look at the final product
                                            <a className = "page-scroll" href = "#header"> here </a>
                                            or look at the  
                                            <a href ="https://github.com/Cormac-C/Personal-Website" target="_blank" rel = "noopener noreferrer"> code </a>
                                            behind the scenes
                                        </p>
                                    </div>
                                </div>
                                <div className = "col-md-5">
                                    <img src = {personalWebsite} className = "img-responsive" alt = "Website Screenshot"/>
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
                                            A Metronome app with tap-tempo functionality. The tempo (speed) is calculated based on the spacing between a user tapping on a button.
                                            <br></br><br></br>
                                            I had written the main functionality as a Java applet with a Swing GUI. I adapted it to an Android App using Android Studio as an oppurtunity to learn about mobile development.
                                            Note: This project is still in progress, I am working on handling the audio in a separate thread so that the UI stays responsive while audio plays.
                                            <br></br><br></br>
                                            Take a look at the 
                                            <a href ="https://github.com/Cormac-C/Metronome-App" target="_blank" rel = "noopener noreferrer"> code </a>
                                            in progress, final product will be added once I reach my minimum viable product.
                                        </p>
                                    </div>
                                </div>
                                <div className = "col-md-5">
                                    <div className = "project-image">
                                        <img src = {metronomeApp} className = "img-responsive" alt = "Android Application Screenshot"/>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "card-colour-a">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-md-3">
                                    <p className = "project-title">
                                        Baseball Team Manager
                                    </p>
                                </div>
                                <div className = "col-md-4">
                                    <div className = "project-text">
                                        <p className = "h5">
                                            A Baseball Management program which tracks a roster of players, their statistics, and makes data driven lineup recommendations.
                                            <br></br><br></br>
                                            I built this program with Java using Object Oriented Programming techniques including inheiritance and polymorphism.
                                            The program also supports reading and writing to a csv in order to save information.
                                            <br></br><br></br>
                                            Take a look at the
                                            <a href ="https://github.com/Cormac-C/Baseball-Team-Manager" target="_blank" rel = "noopener noreferrer"> code here</a>
                                            .
                                        </p>
                                    </div>
                                </div>
                                <div className = "col-md-5">
                                    <img src = {baseballJava} className = "img-responsive" alt = "Java App Output"/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}