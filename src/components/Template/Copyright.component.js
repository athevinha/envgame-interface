import Chart from "react-apexcharts";
import React, { Component } from "react";
export default class Copyright extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <div className="row row_T">
            <div className="col-lg-3">
              <ul className="list-unstyled li-space-lg p-small">
                <li>
                  <a
                    className="light_blue"
                    href="https://www.facebook.com/nguyen.thevinh.5496/"
                  >
                    Article Details
                  </a>
                </li>
                <li>
                  <a href="/" className="light_blue">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/" className="light_blue">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled li-space-lg p-small">
                <li>
                  <a
                    href="https://www.facebook.com/nguyen.thevinh.5496/"
                    className="light_blue"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="https://www.rmit.edu.vn/vi" className="light_blue">
                    Rmit University
                  </a>
                </li>
                <li>
                  <a href="https://hackathon.tiki.vn/" className="light_blue">
                    Hackathon Tiki
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled li-space-lg p-small">
                <li>
                  <a href="https://github.com/athevinha" className="light_blue">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.event.rmit.edu.vn/techgenius2021"
                    className="light_blue"
                  >
                    Tech Genius
                  </a>
                </li>
                <li>
                  <a href="https://hackathon.tiki.vn/" className="light_blue">
                    Tini App
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="p-small statement white_color ">
                Copyright ©{" "}
                <a href="/" className="light_blue">
                  envgame
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
