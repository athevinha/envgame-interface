import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../service/user.service";
import "../../style/Games.css";
import Iframe from "react-iframe";
import { ToastContainer, toast } from "react-toastify";
import gameService from "../../service/game.service";
import RankGame from "./RankGame.component";
let STime = 0;
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.game,
      rank: [],
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
  compare = (a, b) => {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  };
  push_or_replace = (ranks, user) => {
    let push = true;
    ranks.map((rank, id) => {
      if (user.username == rank.username) {
        rank.score = Math.max(user.score, rank.score);
        push = false;
      }
    });
    if (push == true) {
      ranks.push({
        username: user.username,
        score: user.score,
      });
    }
    return ranks;
  };
  receiveMessage = (e) => {
    // const childFrameObj = document.getElementById("myId");
    // childFrameObj.contentWindow.postMessage(this.props.user, "*");

    let { user } = this.props;
    let { game } = this.state;
    var user_array = new Array();
    if (user.username) {
      game.rank = this.push_or_replace(game.rank, {
        username: user.username,
        score: e.data.score,
      });
      game.rank.sort(this.compare);
      this.setState({ rank: game.rank });
    }
    gameService.update_rank(game._id, game).then((req, res) => {});
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
          allow="camera;microphone"
          position="relative"
        />
        <RankGame ranks={this.state.game.rank} />
        {/* Chức năng bỏ quả đăng nhập của game */}
      </div>
    );
  }
}
