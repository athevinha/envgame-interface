import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameService from "../../service/game.service";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import { Link, Route, Switch } from "react-router-dom";
import home_route from "../http_route/http-common";
export default class CreateGame extends Component {
  random_x2y = (x, y) => {
    return Math.floor(Math.random() * y) + x;
  };
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: this.random_x2y(2000, 5000).toString(),
      url: "",
      iframe: "",
    };
  }
  onCreateGame = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    let home_link = home_route.home_link().baseURL;
    if (localStorage.tooken != "U51Ff7qkyIids536my2RtQWQ0zl60OGHjybteQQd") {
      window.location = home_link;
    }
  }
  CreateGame = (e) => {
    e.preventDefault();
    GameService.create(this.state)
      .then((req, res) => {
        this.setState({
          title: "",
          description: this.random_x2y(2000, 5000).toString(),
          url: "",
          iframe: "",
        });
        toast.info("Thêm game thành công ", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        if (!error.response) {
          // network error
          this.errorStatus = "Error: Network Error";
        } else {
          this.errorStatus = error.response.data.message;
        }
      });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <form onSubmit={this.CreateGame} className="form">
          <input
            onChange={this.onCreateGame}
            value={this.state.title}
            name="title"
            placeholder="Title..."
            className="form-control formCreate"
          />
          <input
            name="description"
            value={this.state.description}
            placeholder="Description..."
            onChange={this.onCreateGame}
            className="form-control formCreate"
          />
          <input
            name="url"
            value={this.state.url}
            placeholder="Url..."
            onChange={this.onCreateGame}
            className="form-control formCreate"
          />
          <input
            name="iframe"
            value={this.state.iframe}
            placeholder="Iframe..."
            onChange={this.onCreateGame}
            className="form-control formCreate"
          />
          <input
            className="btn btn-block btn-danger"
            type="submit"
            value="create
          "
          />
        </form>
      </div>
    );
  }
}
