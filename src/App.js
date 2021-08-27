import "./App.css";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Template from "./components/Template/Template.component";
import Games from "./components/Game/Games.component";
import CreateGame from "./components/Admin/Create-game.admin";
import ReadGame from "./components/Admin/Read-game.admin";
import UpdateGame from "./components/Admin/Update-game.admin";
import DeleteGame from "./components/Admin/Delete-game.admin";
import logoImg from "./components/Template/images/favicon.png";
import GameService from "./service/game.service";
import userService from "./service/user.service";
import Login from "./components/Login/login";
import Logup from "./components/Logup/logup";
import home_link from "./components/http_route/http-common";
import UserPage from "./components/Userpage/user.page";
import Game from "./components/Game/Game.component";
import Cookie from "./components/Cookies/Cookies.js";
import { ToastContainer, toast } from "react-toastify";
import { isMobile } from "react-device-detect";
import ReadUser from "./components/Admin/Read-user";
import OnTop from "./components/onTop/onTop.js";
import News from "./components/New/News.component.js";
import DL from "./components/DL/DL.component";
import DL_classes from "./components/DL/Dl_classes.component";
import NF_404 from "./components/404_error/404.component";
import Chat from "./components/Chat/Chat.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      users: [],
      user_current: [],
      theposition: window.pageYOffset,
      // Search and love value
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

    this.user_in4 = React.createRef();
    this.hover_side = React.createRef();
    this.ip11 = React.createRef();
  }
  onRouter = () => {
    alert("hgaha");
  };
  componentDidMount() {
    console.log(Switch);

    if (window.location.href == "http://3.0.241.73:5000/") {
      window.location = "https://envgame.online/";
    }
    let users = [];
    userService.getAll().then((req) => {
      users = req.data;
      let user_tooken = localStorage.getItem("tooken");
      this.show_side_bar();
      setTimeout(() => {
        this.hide_side_bar();
      }, 3000);
      if (user_tooken == null) {
      } else {
        users.map((user, id) => {
          if (user_tooken == user.tooken) this.setState({ user_current: user });
        });
      }
      this.setState({ users: users });
    });
  }

  hide_side_bar = () => {
    if (this.user_in4.current.classList) {
      this.user_in4.current.classList.add("hide_side");
      this.user_in4.current.classList.remove("show_side");
    }
  };
  show_side_bar = () => {
    if (this.user_in4.current.classList) {
      this.user_in4.current.classList.add("show_side");
      this.user_in4.current.classList.remove("hide_side");
    }
  };
  // Game======
  logout_click = () => {
    localStorage.removeItem("tooken");
  };
  read_new = () => {
    if (document.querySelector(".unread_new"))
      document.querySelector(".unread_new").className = "hidden";
  };
  render() {
    return (
      <div className="App dark_blue">
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <Cookie />
        <div
          className="w3-sidebar w3-bar-block ip11 text_center"
          onMouseOver={this.show_side_bar}
          onMouseOut={this.hide_side_bar}
          ref={this.ip11}
        ></div>
        <div
          className="w3-sidebar w3-light-info w3-bar-block width20 hide_side text_center"
          ref={this.user_in4}
          onMouseOver={this.show_side_bar}
          onMouseOut={this.hide_side_bar}
        >
          <h3 className="text_center break_word name_in4_side">
            {localStorage.tooken != null
              ? this.state.user_current.username
              : "Hãy đăng nhập"}
          </h3>
          <hr className="blue_dark_hr" />
          <div className="width20 text_center">
            <div
              className="grid-item-image avatar_show"
              style={{
                backgroundImage: `url(${this.state.user_current.avatar})`,
                backgroundColor: `rgb(0, 17, 51)`,
                display: `block`,
                marginLeft: `auto`,
                marginRight: `auto`,
              }}
            ></div>
          </div>
          <hr className="blue_dark_hr" />
          <p className="w3-bar-item break_word">
            {this.state.user_current.gmail}
          </p>
          <hr className="blue_dark_hr" />
          <p className="w3-bar-item break_word">
            <b>Description: </b>
            {this.state.user_current.description}
          </p>
          <hr className="blue_dark_hr" />
          <p className="w3-bar-item break_word">
            <b>User ID: </b>
            <Link to={`./users/${this.state.user_current._id}`}>
              {this.state.user_current._id}
            </Link>
          </p>
        </div>
        {/* ==========================================================
        *                       Nav Bar                           *
        ========================================================== */}
        <nav className="navbar navbar-expand-md navbar-dark nav_custom">
          {/* =================================== */}
          <Link to={"/"}>
            <img
              src={logoImg}
              alt="alternative"
              className=" navbar-brand logo"
            />
          </Link>
          {/* =============================================================================
          ============================= *MOBILE NAVBAR *===============================
          ============================================================================= */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* =====================================================================
          ========================= *END MOBILE NAVBAR *===========================
          ========================================================================= */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              {/* <li className="nav-link nav_link_custom">Envgame</li> */}
              <li className="nav-item">
                <Link id="home" className="nav-link nav_link_custom" to={"/"}>
                  {/* <i className="taskbar_icon fas fa-home"></i>
                  {isMobile == true ? " Giới thiệu" : ""} */}
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_link_custom" to={"/Games"}>
                  {/* <i className="taskbar_icon fas fa-gamepad"></i>
                  {isMobile == true ? " Chơi game" : ""} */}
                  Chơi game
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_link_custom" to={"/Charts"}>
                  {/* <i className="taskbar_icon fa fa-trophy"></i>
                  {isMobile == true ? " Bảng xếp hạng" : ""} */}
                  Bảng xếp hạng
                </Link>
              </li>

              <li className="nav-item" ref={this.login}>
                <Link className="nav-link nav_link_custom " to={"/DL-Plant"}>
                  {/* <i className="taskbar_icon fa fa-robot"></i>
                  {isMobile == true ? " Deep learning" : ""} */}
                  Deep learning
                </Link>
              </li>
              {/* <li className="nav-item" ref={this.login}>
                <Link className="nav-link nav_link_custom " to={"/Chat-Box"}>
                  <i className="taskbar_icon fa fa-comments"></i>
                  {isMobile == true ? " Chat box" : ""}
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link nav_link_custom new_link"
                  to={"/News"}
                  onClick={this.read_new}
                >
                  {/* <i className="taskbar_icon fa fa-bell"></i>
                  <b>
                    <span className="unread_new color_white">17 </span>
                  </b>
                  {isMobile == true ? " Thông báo" : ""} */}
                  Thông báo
                </Link>
              </li>
              {localStorage.tooken == null || localStorage.tooken == "" ? (
                <li className="nav-item" ref={this.login}>
                  <Link
                    className="nav-link nav_link_custom login_link"
                    to={"/Login"}
                  >
                    {/* <i className="taskbar_icon fas fa-sign-in-alt"></i> */}
                    Đăng nhập
                  </Link>
                </li>
              ) : (
                <li className="nav-item" ref={this.logout}>
                  <a
                    href={home_link.home_link().baseURL}
                    className="nav-link nav_link_custom logout_link"
                    onClick={this.logout_click}
                  >
                    {/* <i className="taskbar_icon fas fa-sign-out-alt"></i> */}
                    Đăng xuất
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
        <Switch onChange={this.changeRouter}>
          <Route
            exact
            path={["/", "/Home"]}
            render={(pr) => <Template className="width75" />}
          />
          <Route
            exact
            path="/Games"
            render={(pr) => (
              <Games
                className="width75"
                user={this.state.user_current}
                games={this.state.games}
              />
            )}
          />
          <Route
            exact
            path="/Admin/Games/Create"
            render={(pr) => <CreateGame />}
          />
          <Route exact path="/Admin/Games/Read" render={(pr) => <ReadGame />} />
          <Route
            exact
            path="/Admin/Games/Update"
            render={(pr) => <UpdateGame />}
          />
          <Route
            exact
            path="/Admin/Games/Delete"
            render={(pr) => <DeleteGame />}
          />
          <Route exact path="/News" render={(pr) => <News />} />
          <Route exact path="/DL-Plant" render={(pr) => <DL />} />
          <Route
            exact
            path="/DL-Plant/Classes"
            render={(pr) => <DL_classes />}
          />
          <Route exact path="/Charts" render={(pr) => <OnTop />} />
          <Route exact path="/Userin4" render={(pr) => <ReadUser />} />
          <Route exact path="/Logup" render={(pr) => <Logup />} />
          <Route exact path="/Login" render={(pr) => <Login />} />
          <Route
            exact
            path={`/Chat-Box`}
            render={(pr) => <Chat user={this.state.user_current} />}
          />
          {this.state.games.map((game, id) => {
            return (
              <Route
                key={id}
                exact
                path={`/Games/${game.title}`}
                render={(pr) => (
                  <Game game={game} user={this.state.user_current} />
                )}
              />
            );
          })}
          {this.state.users.map((user, id) => {
            return (
              <Route
                key={id}
                exact
                path={`/Users/${user._id}`}
                render={(pr) => <UserPage user={user} />}
              />
            );
          })}
          <Route path="*">
            <NF_404 />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
// Envgame - Nền tảng thiết kế game tăng tỷ lệ cây trồng cho môi trường
