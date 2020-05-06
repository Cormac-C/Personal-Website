import React, { Component } from 'react'

export default class Footer extends Component {
    render(){
        return(
            <div>
                <div className = "container">
                    <div id = "footer">
                        <div className = "footerText">
                            <p>Built by Cormac Cureton, 2020.
                                Built using React, BootStrap, icons from Font Awesome, layout adapted from TemplateWire</p>
                        </div>
                    </div>
                </div>           
            </div>
        )
    }
}