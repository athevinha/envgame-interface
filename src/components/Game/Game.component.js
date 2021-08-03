import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../service/user.service";
import GameService from "../../service/game.service";
import "../../style/Games.css";
import Iframe from "react-iframe";
import { ToastContainer, toast } from "react-toastify";
import gameService from "../../service/game.service";
let STime = 0;
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game,
    };
    this.iframe_ref = React.createRef();
  }
  componentDidMount() {
    window.addEventListener("message", this.receiveMessage, false);
    toast.info(this.props.game.how2play, {
      position: "top-right",
      autoClose: 2000,
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
    if (user.time_gaming) {
      let time_gaming = new Date().getTime() - STime;
      user.time_gaming.push({
        title: this.state.game.title,
        time: time_gaming,
      });
      UserService.update(user._id, user).then((req, res) => {});
    }
  }
  receiveMessage = (e) => {
    // const childFrameObj = document.getElementById("myId");
    // childFrameObj.contentWindow.postMessage(this.props.user, "*");

    let { user } = this.props;
    let { game } = this.state;
    game.rank.push({
      username: user.username,
      score: e.data.score,
    });
    gameService.update_rank(game._id, game).then((req, res) => {
      console.log(req.data);
    });
    // e.data.call_back_user(this.props.user);
  };
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
