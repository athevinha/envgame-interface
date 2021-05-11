import React, { Component } from "react";
import Iframe from "react-iframe";
import "../style/Template.css";
export default class Template extends Component {
  render() {
    return (
      <div>
        <Iframe
          url="https://open.cruip.com/"
          width="100%"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          frameborder="0"
        />
      </div>
    );
  }
}
