import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameService from "../../service/game.service";
import "../../style/Games.css";
import { Link, Route, Switch } from "react-router-dom";
export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    GameService.getAll().then((res) => {
      console.log(res.data);
      this.setState({ games: res.data });
    });
    this.updateForm = React.createRef();
  }
  componentDidMount() {
    if (localStorage.getItem("tooken") == null) {
      this.updateForm.current.className = "update-admin display";
    }
  }
  render() {
    return (
      <div>
        <div
          className="update-admin hidden"
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
        <div class="grid-container">
          {this.state.games.map((game, id) => {
            return (
              <div className="grid-item" key={id}>
                <div
                  className="grid-item-image"
                  style={{ backgroundImage: `url(${game.url})` }}
                ></div>
                <div className="row">
                  <div className="grid-item-txt col-sm-6">
                    <p>{game.title}</p>
                    <p>{game.description} plays</p>
                  </div>
                  <div className=" col-sm-6">
                    <Link
                      className="btn-info btn play-button"
                      to={`/Games/${game.title}`}
                    >
                      Chơi ngay
                    </Link>
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
