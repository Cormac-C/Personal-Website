import React, { Component } from "react";
import { FooterText } from "../text";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div id="footer">
            <div className="footerText">
              <p>{FooterText.TEXT}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
