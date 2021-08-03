import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../service/user.service";
import "../../style/Games.css";
import Iframe from "react-iframe";
import { ToastContainer, toast } from "react-toastify";
let STime = 0;
export default class ChartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game,
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div className="background-iframe darker_blue">
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <div className="enter_game"></div>
      </div>
    );
  }
}
