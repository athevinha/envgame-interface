import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import GameService from "../../service/game.service";
import "../../App.css";
export default class DeleteGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    GameService.getAll().then((res) => {
      console.log(res.data);
      this.setState({ games: res.data });
    });
  }
  Delete = (_id) => {
    GameService.delete(_id).then((res) => {});
    this.setState({
      games: this.state.games.filter((game) => game._id !== _id),
    });
  };
  render() {
    return (
      <div>
        <div className="enter"></div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Url</th>
              <th scope="col">Function</th>
            </tr>
          </thead>
          <tbody>
            {this.state.games.map((game, id) => {
              return (
                <tr key={id}>
                  <th>{game._id}</th>
                  <td>{game.title}</td>
                  <td>{game.description}</td>
                  <td>{game.url}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.Delete(game._id);
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
