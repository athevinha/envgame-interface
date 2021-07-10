import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../service/user.service";
import "../../style/Games.css";
import Iframe from "react-iframe";
import { ToastContainer, toast } from "react-toastify";
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
    toast.info(this.props.game.how2play, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <div className="enter_game"></div>
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
