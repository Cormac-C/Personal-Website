import React, { Component } from "react";
import { LogEvent } from "../js/gAnalytics";
import { ProjectText } from "../text";
import personalWebsite from "../img/Personal-Website.png";
import metronomeApp from "../img/Metronome App.jpg";
import baseballJava from "../img/Baseball-Java.png";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div id="projects">
          <div className="section-title text-center center">
            <h2>{ProjectText.TITLE}</h2>
            <hr />
          </div>

          <div className="card-colour-a">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <p className="project-title">
                    {ProjectText.PERSONAL_WEBSITE.TITLE}
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="project-text">
                    <p className="h5">
                      {ProjectText.PERSONAL_WEBSITE.DESCRIPTION_START}
                      <a
                        className="page-scroll"
                        href="#header"
                        onClick={() =>
                          LogEvent(
                            "Navigation",
                            "Scroll from Projects",
                            "Top of Page"
                          )
                        }
                      >
                        {ProjectText.PERSONAL_WEBSITE.NAV_LINK}
                      </a>
                      {ProjectText.PERSONAL_WEBSITE.DESCRIPTION_MIDDLE}
                      <a
                        href="https://github.com/Cormac-C/Personal-Website"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          LogEvent(
                            "Navigation",
                            "Link from Projects",
                            "Personal Website Code"
                          )
                        }
                      >
                        {ProjectText.PERSONAL_WEBSITE.GITHUB_LINK}
                      </a>
                      {ProjectText.PERSONAL_WEBSITE.DESCRIPTION_END}
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={personalWebsite}
                    className="img-responsive"
                    alt="Website Screenshot"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card-colour-b">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <p className="project-title">
                    {ProjectText.METRONOME_APP.TITLE}
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="project-text">
                    <p className="h5">
                      {ProjectText.METRONOME_APP.DESCRIPTION_START}
                      <a
                        href="https://github.com/Cormac-C/Metronome-App"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          LogEvent(
                            "Navigation",
                            "Link from Projects",
                            "Android app code"
                          )
                        }
                      >
                        {ProjectText.METRONOME_APP.GITHUB_LINK}
                      </a>
                      {ProjectText.METRONOME_APP.DESCRIPTION_END}
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="project-image">
                    <img
                      src={metronomeApp}
                      className="img-responsive"
                      alt="Android Application Screenshot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-colour-a">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <p className="project-title">
                    {ProjectText.BASEBALL_TEAM_MANAGER.TITLE}
                  </p>
                </div>
                <div className="col-md-4">
                  <div className="project-text">
                    <p className="h5">
                      {ProjectText.BASEBALL_TEAM_MANAGER.DESCRIPTION_START}
                      <a
                        href="https://github.com/Cormac-C/Baseball-Team-Manager"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          LogEvent(
                            "Navigation",
                            "Link from Projects",
                            "Baseball Code"
                          )
                        }
                      >
                        {ProjectText.BASEBALL_TEAM_MANAGER.GITHUB_LINK}
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={baseballJava}
                    className="img-responsive"
                    alt="Java App Output"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
