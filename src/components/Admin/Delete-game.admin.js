import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import GameService from "../../service/game.service";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    GameService.delete(_id).then((res) => {
      toast.error("Xóa game thành công ", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(res);
    });
    this.setState({
      games: this.state.games.filter((game) => game._id !== _id),
    });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <div className="enter"></div>
        <table className="table table">
          <thead>
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Url</th>
              <th scope="col">Iframe</th>
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
                  <td>{game.url.length >= 15 ? game.url.length : game.url}</td>
                  <td>
                    {game.iframe.length >= 15
                      ? game.iframe.length
                      : game.iframe}
                  </td>
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
