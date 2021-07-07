import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameService from "../../service/game.service";
import UserService from "../../service/user.service";
import "../../style/Games.css";
import { Link, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    GameService.getAll().then((res) => {
      this.setState({ games: res.data });
    });
    this.updateForm = React.createRef();
  }
  componentDidMount() {
    if (localStorage.getItem("tooken") == null) {
      this.updateForm.current.className = "update-admin display";
    }
  }
  Get_Played_Game = (game) => {
    let user = this.props.user;
    let time = new Date();
    time = time.toString();
    user.played_games.push({ title: game.title, time: time });
    UserService.update(user._id, user).then((req, res) => {
      // this.setState({ users: req.data });
    });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <div
          className="update-admin fixed hidden"
          id="login_warn"
          ref={this.updateForm}
        >
          <div className="black-back"></div>
          <div className="login_warn">
            <p className="login_warn_1">
              <b>Thông báo:</b> bạn cần <b>đăng nhập</b> để chơi game
            </p>
            <Link className="btn btn-info login_warn_2" to={"./login"}>
              Đăng nhập
            </Link>
          </div>
        </div>
        <div className="enter"></div>
        <div className="grid-container dark_blue">
          {this.state.games.map((game, id) => {
            return (
              <div className="grid-item darker_blue" key={id}>
                <div
                  className="grid-item-image"
                  style={{ backgroundImage: `url(${game.url})` }}
                ></div>
                <div className="container text_center">
                  <div className="play_des flex">
                    <div className="col-sm-6 des_game des_go_game">
                      <p className="light_blue title_G1">{game.title}</p>
                      <p className="light_blue title_G2">
                        {game.description} plays
                      </p>
                    </div>
                    <div className="col-sm-6 go_game des_go_game">
                      <Link
                        className="btn-info btn play-button light_blue"
                        to={`/Games/${game.title}`}
                        onClick={() => this.Get_Played_Game(game)}
                      >
                        Chơi ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
