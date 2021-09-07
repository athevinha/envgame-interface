import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DL.css";
import Iframe from "react-iframe";
export default class DL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DL: [],
    };
  }

  render() {
    return (
      <div>
        <div className="enter_AI"></div>
        <div className="enter"></div>
        <Iframe
          url="https://envgame-leaf-disease.netlify.app/"
          id="myId"
          className="myClassname AI"
          display="initial"
          position="relative"
          width="100vw"
          height="100vh"
        />
      </div>
    );
  }
}
