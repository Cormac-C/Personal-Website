import React, { Component } from 'react'

export default class About extends Component {
    render(){
        return(
            <div>
                <div id = "about">
                    <div className = "section-title text-center center">
                        <h2>About Me</h2>
                        <hr />
                    </div>

                    <div className = "row">
                        <div class = "col-md-12 text-center"><img src = "../img/face.jpg" className = "img-responsive" alt = "Cormac Cureton"/> </div>
                        <div class = "col-md-8 col-md-offset-2">
                            <div class = "about-text">
                                <p>This is some placeholder text, I'm going to replace it with a clever "about" paragraph</p>
                                <p>A second paragraph breaks up ideas and makes this section more easibly digestible.</p>
                                <p className = "text-center"><a className = "btn btn-primary" href = "#"><i class = "fa fa-download"></i> Resume</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}