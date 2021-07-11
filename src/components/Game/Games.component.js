import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameService from "../../service/game.service";
import UserService from "../../service/user.service";
import "../../style/Games.css";
import { Link, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { isMobile } from "react-device-detect";
import Switch from "react-input-switch";

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      is_love_game: false,
      search: "",
    };
    GameService.getAll().then((res) => {
      if (isMobile == true) {
        this.setState({
          games: res.data.filter((game) => {
            return game.mobile_game == true;
          }),
        });
      } else {
        this.setState({ games: res.data });
      }
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
  // =====================Game=================
  onSearchGame = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    let { games } = this.props;
    console.log(this.state.games);
    this.setState({
      games: games.filter((game) => {
        return game.title.toLowerCase().includes(e.target.value) == true;
      }),
    });
  };
  onLoveGame = (on_love_game) => {
    this.setState({ on_love_game: on_love_game });
    let { games } = this.props;
    if (on_love_game == true)
      this.setState({
        games: games.filter((game) => {
          return game.love_game == on_love_game;
        }),
      });
    else {
      this.setState({ games: games });
    }
  };
  onSubmitSearch = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <form
          className="form-inline search_nav_bar"
          onSubmit={this.onSubmitSearch}
        >
          <input
            className="form-control mr-sm-2 input_N"
            type="search"
            placeholder="Search game..."
            name="search"
            onChange={this.onSearchGame}
            value={this.state.search}
            aria-label="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
          <div class="custom-control custom-switch btn_love_game">
            <Switch
              value={this.state.on_love_game}
              onChange={(on_love_game) => {
                this.onLoveGame(on_love_game);
              }}
              on={true}
              off={false}
              className="switch_love_game"
            />
            <label class="">Game yêu thích</label>
          </div>
        </form>
        <div
          className="update-admin fixed hidden"
          id="login_warn"
          ref={this.updateForm}
        >
          <div className="black-back"></div>
          <div className="login_warn">
            <p className="login_warn_1">
              Cố gắng <b> đăng nhập</b> để giúp mình có thêm một chút thông tin
              nhé. 1 xúy thui mà 🥺
            </p>
            <Link className="btn btn-info login_warn_2" to={"./login"}>
              Đăng nhập
            </Link>
          </div>
        </div>
        <div className="enter"></div>
        <div className="grid-container dark_blue">
          {this.state.games.reverse().map((game, id) => {
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
