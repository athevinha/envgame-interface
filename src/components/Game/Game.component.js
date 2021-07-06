import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../service/user.service";
import "../../style/Games.css";
import Iframe from "react-iframe";
let STime = 0;
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("tooken") == null) {
      this.updateForm.current.className = "update-admin display";
    }
    STime = new Date().getTime();
  }
  componentWillUnmount() {
    let { user } = this.props;
    let time_gaming = new Date().getTime() - STime;
    user.time_gaming.push({
      title: this.state.game.title,
      time: time_gaming,
    });
    UserService.update(user._id, user).then((req, res) => {});
  }
  render() {
    return (
      <div className="background-iframe darker_blue">
        <div className="enter"></div>
        <Iframe
          url={this.state.game.iframe}
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    );
  }
}
