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
                        <div class = "col-md-8 col-md-offset-2">
                            <div class = "about-text">
                                <p>I like to learn and explore technologies then implement them so that they have real impact on real people’s lives. 
                                    I am motivated by building solutions in the real world that combine technical knowledge and innovation with strong design and a user-focus.</p>
                                <p>Some languages that I’ve used are Java, C++, JavaScript, and CSS. 
                                    Some other technologies I’ve explored are React, Git, Android Studio, Bootstrap, and Solidworks. Take a look at what I’ve done with these 
                                    <a className= "page-scroll" href="#projects"> here</a>.</p>
                                <p>You might also find me playing guitar, going for a run, or playing baseball or squash.</p>
                                <p>For more information about my experience, take a look at my Resume below or  
                                    <a className= "page-scroll" href="#projects"> let's get in touch</a>.</p>    
                                <p className = "text-center"><a className = "btn btn-primary" href = "#contact"><i class = "fa fa-download"></i> Resume</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}