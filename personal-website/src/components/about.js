import React, { Component } from 'react'
import ReactGA from 'react-ga';

export default class About extends Component {
    render(){
        ReactGA.pageview(window.location.pathname + window.location.href);
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
                                <p> I'm passionate about solving real-world problems with technology. <br></br>
                                    I combine technical skills with a strong user-centred design perspective to build innovative solutions.</p>
                                <p> Some languages that I’ve used are Java, C++, JavaScript, and CSS. <br></br>
                                    Some other technologies I’ve explored are React, Git, Android Studio, Bootstrap, and Solidworks. </p>
                                <p> Take a look at what I’ve built with these in the past
                                    <a className= "page-scroll" href="#projects"> here</a>.</p>
                                <p>You might also find me playing guitar, going for a run, or playing baseball or squash.</p>
                                <p>To discuss my experience, take a look at a resume, or chat for any reason, don't hesitate to  
                                    <a className= "page-scroll" href="#contact"> get in touch</a>.</p>    
                                
                                <p className = "text-center"><a className = "btn btn-primary" href = "#contact"><i class = "fa fa-comments"></i> Reach Out</a></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}