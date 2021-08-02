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
        {/* <Iframe
          url={this.state.game.iframe}
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        /> */}
      </div>
    );
  }
}
