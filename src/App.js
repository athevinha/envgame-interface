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
import Iframe from "react-iframe";
import Login from "./components/Login/login";
import Logup from "./components/Logup/logup";
import home_link from "./components/http_route/http-common";
import UserPage from "./components/Userpage/user.page";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      users: [],
      user_current: [],
    };
    GameService.getAll().then((res) => {
      console.log(res.data);
      this.setState({ games: res.data });
    });
    this.login = React.createRef();
    this.user_in4 = React.createRef();
    this.hover_side = React.createRef();
    this.ip11 = React.createRef();
  }
  componentDidMount() {
    let users = [];
    userService.getAll().then((req) => {
      users = req.data;
      let user_tooken = localStorage.getItem("tooken");
      if (user_tooken == null) {
      } else {
        this.login.current.className = "nav-link hidden";
        this.show_side_bar();
        setTimeout(() => {
          this.hide_side_bar();
        }, 3000);

        users.map((user, id) => {
          if (user_tooken == user.tooken) this.setState({ user_current: user });
        });
      }
      this.setState({ users: users });
    });
  }
  hide_side_bar = () => {
    this.user_in4.current.classList.add("hide_side");
    this.user_in4.current.classList.remove("show_side");
  };
  show_side_bar = () => {
    this.user_in4.current.classList.add("show_side");
    this.user_in4.current.classList.remove("hide_side");
  };
  render() {
    return (
      <div className="App">
        <div
          class="w3-sidebar w3-light-black w3-bar-block ip11"
          onMouseOver={this.show_side_bar}
          onMouseOut={this.hide_side_bar}
          ref={this.ip11}
        ></div>
        <div
          class="w3-sidebar w3-light-info w3-bar-block width20 hide_side"
          ref={this.user_in4}
          onMouseOver={this.show_side_bar}
          onMouseOut={this.hide_side_bar}
        >
          <h3 class="w3-bar-item">
            {localStorage.tooken != null
              ? this.state.user_current.username
              : "Hãy đăng nhập"}
          </h3>
          <hr className="black_hr" />
          <div
            className="grid-item-image avatar_show"
            style={{
              backgroundImage: `url(${this.state.user_current.avatar})`,
            }}
          ></div>
          <hr className="black_hr" />
          <p class="w3-bar-item">{this.state.user_current.gmail}</p>
          {/* <p class="w3-bar-item">{this.state.user_current.earned_money}</p>
          <p class="w3-bar-item">{this.state.user_current.played_games}</p> */}
          <hr className="black_hr" />
          <p class="w3-bar-item">
            <b>Description: </b>
            {this.state.user_current.description}
          </p>
          <hr className="black_hr" />
          <p class="w3-bar-item">
            <b>User ID: </b>
            <Link to={`./users/${this.state.user_current._id}`}>
              {this.state.user_current._id}
            </Link>
          </p>
        </div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <div className="container">
            <a class="navbar-brand logo-image" href="index.html">
              <Link to={"/"}>
                <img src={logoImg} alt="alternative" />
              </Link>
            </a>
            <spam className="title">EnvGame</spam>
            <button
              class="navbar-toggler p-0 border-0"
              type="button"
              data-toggle="offcanvas"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="navbar-collapse offcanvas-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link id="home" className="nav-link page-scroll" to={"/"}>
                    Giới thiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to={"/Games"}>
                    Chơi game
                  </Link>
                </li>
                <li className="nav-item" ref={this.login}>
                  <Link className="nav-link page-scroll" to={"/Login"}>
                    Đăng nhập
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route
            exact
            path={["/", "/Home"]}
            render={(pr) => <Template className="width75" />}
          />
          <Route
            exact
            path="/Games"
            render={(pr) => <Games className="width75" />}
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
          <Route exact path="/Logup" render={(pr) => <Logup />} />
          <Route exact path="/Login" render={(pr) => <Login />} />
          {this.state.games.map((game, id) => {
            return (
              <Route
                exact
                path={`/Games/${game.title}`}
                render={(pr) => (
                  <div className="background-iframe">
                    <div className="enter"></div>
                    <Iframe
                      url={game.iframe}
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                    />
                  </div>
                )}
              />
            );
          })}
          {this.state.users.map((user, id) => {
            console.log(user);
            return (
              <Route
                exact
                path={`/Users/${user._id}`}
                render={(pr) => <UserPage user={user} />}
              />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
