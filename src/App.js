import "./App.css";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Template from "./components/Template.component";
import Games from "./components/Games.component";
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/"}>
                  Giới thiệu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Games"}>
                  Chơi game
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path={["/", "/Home"]} render={(pr) => <Template />} />
          <Route exact path="/Games" render={(pr) => <Games />} />
        </Switch>
      </div>
    );
  }
}

export default App;
