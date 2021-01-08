import React, { Component } from "react";
import { LogEvent } from "../js/gAnalytics";
import { AboutText } from "../text";

export default class About extends Component {
  render() {
    return (
      <div>
        <div id="about">
          <div className="section-title text-center center">
            <h2>{AboutText.TITLE}</h2>
            <hr />
          </div>

          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="about-text">
                <p> {AboutText.PARA_ONE}</p>
                <p>{AboutText.PARA_TWO}</p>
                <p>
                  {AboutText.PARA_THREE}
                  <a
                    className="page-scroll"
                    href="#projects"
                    onClick={() =>
                      LogEvent("Navigation", "Scroll from About", "Projects")
                    }
                  >
                    {AboutText.PROJECTS_LINK}
                  </a>
                </p>
                <p>{AboutText.PARA_FOUR}</p>
                <p>
                  {AboutText.PARA_FIVE}
                  <a
                    className="page-scroll"
                    href="#contact"
                    onClick={() =>
                      LogEvent("Navigation", "Scroll from About", "Contact")
                    }
                  >
                    {AboutText.CONTACT_LINK}
                  </a>
                </p>

                <p className="text-center">
                  <a
                    className="btn btn-primary"
                    href="#contact"
                    onClick={() =>
                      LogEvent("Navigation", "Scroll from Button", "Contact")
                    }
                  >
                    <i className="fa fa-comments"></i>{" "}
                    {AboutText.CONTACT_BUTTON}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
