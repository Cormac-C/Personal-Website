import React, { Component } from 'react'

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
                            <div className = "col-md-4"> <i className = "fa fa-envelope-o fa-2x"></i>
                                <p>cormaccureton@gmail.com</p>
                            </div>
                            <div className = "col-md-4"> <i className = "linked-in-icon"></i>
                                <p>linked in link</p>
                            </div>
                            <div className = "col-md-4"> <i className = "github-icon"></i>
                                <p>github</p>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
        )
    }
}