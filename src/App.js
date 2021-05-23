import "./App.css";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Template from "./components/Template/Template.component";
import Games from "./components/Games.component";
import CreateGame from "./components/Admin/Create-game.admin";
import ReadGame from "./components/Admin/Read-game.admin";
import UpdateGame from "./components/Admin/Update-game.admin";
import DeleteGame from "./components/Admin/Delete-game.admin";
import logoImg from "./components/images/favicon.png";
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <div className="container">
            <a class="navbar-brand logo-image" href="index.html">
              <img src={logoImg} alt="alternative" />
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
                  <Link className="nav-link page-scroll" to={"/"}>
                    Giới thiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to={"/Games"}>
                    Chơi game
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path={["/", "/Home"]} render={(pr) => <Template />} />
          <Route exact path="/Games" render={(pr) => <Games />} />
          <Route
            exact
            path="/Games/Admin/conchuot123/Create"
            render={(pr) => <CreateGame />}
          />
          <Route
            exact
            path="/Games/Admin/conchuot123/Read"
            render={(pr) => <ReadGame />}
          />
          <Route
            exact
            path="/Games/Admin/conchuot123/Update"
            render={(pr) => <UpdateGame />}
          />
          <Route
            exact
            path="/Games/Admin/conchuot123/Delete"
            render={(pr) => <DeleteGame />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
