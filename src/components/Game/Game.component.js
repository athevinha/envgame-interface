import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../service/user.service";
import "../../style/Games.css";
import Iframe from "react-iframe";
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game,
      STime: 0,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("tooken") == null) {
      this.updateForm.current.className = "update-admin display";
    }
    this.setState({ STime: new Date().getTime() });
  }
  componentWillUnmount() {
    let { user } = this.props;
    let time_gaming = new Date().getTime() - this.state.STime;
    user.time_gaming.push({ title: this.state.game.title, time: time_gaming });
    UserService.update(user._id, user).then((req, res) => {
      console.log(req.data);
    });
  }
  render() {
    return (
      <div className="background-iframe">
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
