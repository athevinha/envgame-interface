import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameService from "../../service/game.service";
import "../../App.css";
export default class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      url: "",
    };
  }
  onCreateGame = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  CreateGame = (e) => {
    e.preventDefault();
    console.log(this.state);
    GameService.create(this.state)
      .then((req, res) => {
        this.setState({
          title: "",
          description: "",
          url: "",
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
