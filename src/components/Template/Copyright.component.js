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
                {/* <li>
                  <a href="https://www.rmit.edu.vn/vi" className="light_blue">
                    Rmit University Competition
                  </a>
                </li> */}
                <li>
                  <a href="https://hackathon.tiki.vn/" className="light_blue">
                    Tiki Hackathon
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
                {/* <li>
                  <a href="https://hackathon.tiki.vn/" className="light_blue">
                    Tini App
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="list-unstyled li-space-lg p-small">
                <li className="p-small statement white_color ">
                  <a
                    href="http://dosttn.gov.vn/thong-bao/thong-bao-to-chuc-cuoc-thi-hackathon-nghe-an-nam-2021--41694/"
                    className="light_blue"
                  >
                    Nghe An Hackathon
                  </a>
                </li>
                {/* <li className="p-small statement white_color ">
                  <br />
                </li> */}
                <li className="p-small statement white_color ">
                  Copyright ©{" "}
                  <a href="/" className="light_blue">
                    Envgame
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
