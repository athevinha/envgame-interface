import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gameList from "../service/game.service";
export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    gameList.getAll().then((res) => {
      console.log(res.data);
      this.setState({ games: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.games.map((game, id) => {
          return <h1>{game.title}</h1>;
        })}
      </div>
    );
  }
}
