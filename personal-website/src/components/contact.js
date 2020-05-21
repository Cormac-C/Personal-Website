import React, { Component } from 'react'
import {LogEvent} from '../js/gAnalytics'

export default class Contact extends Component {
    render(){
        return(
            <div>
                <div id = "contact" className = "text-center">
                    <div className = "container">
                        <div className = "section-title center">
                            <h2>Contact</h2>
                            <hr/>
                        </div>

                        <div className = "col-md-8 col-md-offset-2">
                            <div className = "col-md-4"> 
                                <a href = "mailto: cormaccureton@gmail.com" target="_blank" rel = "noopener noreferrer" onClick={ () => LogEvent("Navigation", "Link from Contact", "Email")}> <i className = "fa fa-envelope fa-3x"></i></a>
                            </div>
                            <div className = "col-md-4"> 
                                <a href ="https://www.linkedin.com/in/cormaccureton/" target="_blank" rel = "noopener noreferrer" onClick={ () => LogEvent("Navigation", "Link from Contact", "Linkedin")}> <i className =  "fa fa-linkedin-square fa-3x"></i></a>
                            </div>
                            <div className = "col-md-4"> 
                                <a href ="https://github.com/Cormac-C" target="_blank" rel = "noopener noreferrer" onClick={ () => LogEvent("Navigation", "Link from Contact", "Github")}> <i className = "fa fa-github-square fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
        )
    }
}