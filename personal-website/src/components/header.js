import React, { Component } from "react";
import { HeaderText } from "../text";
import profilePhoto from "../img/face.jpg";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="intro">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-text">
                    <h1>
                      {HeaderText.TITLE}
                      <span className="name">{HeaderText.NAME}</span>
                    </h1>
                    <h3>{HeaderText.SUBTITLE}</h3>
                    <p>
                      {HeaderText.TAGLINE}
                      <b>{HeaderText.TAGLINE_BOLD}</b>
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="profile-photo">
                    <img
                      src={profilePhoto}
                      className="img-circle"
                      alt="Cormac Cureton Headshot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
