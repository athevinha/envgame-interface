import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/Games.css";
import { ToastContainer, toast } from "react-toastify";
import "./404.css";
import main from "./main.png";
import { Link, Route } from "react-router-dom";
export default class NF_404 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //sgqwregwer    hello testingqweg
  componentDidMount() {}
  render() {
    return (
      <div className="full_img_404">
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <div className="container con_404">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 text_center text_white "></div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
