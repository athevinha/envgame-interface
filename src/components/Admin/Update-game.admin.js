import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameService from "../../service/game.service";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gameService from "../../service/game.service";
import home_route from "../http_route/http-common";
import "./admin.css";
export default class UpdateGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      newTitle: "",
      newDescription: "",
      newUrl: "",
      newIframe: "",
      newHow2play: "",
      newLove_game: false,
      newMobile_game: false,
      _id: "",
    };
    GameService.getAll().then((res) => {
      this.setState({ games: res.data });
      console.log(res.data);
    });
    this.updateForm = React.createRef();
  }
  componentDidMount() {
    let home_link = home_route.home_link().baseURL;
    if (localStorage.tooken != "U51Ff7qkyIids536my2RtQWQ0zl60OGHjybteQQd") {
      window.location = home_link;
    }
  }
  Space2Under = (txt) => {
    let new_txt = txt.split(" ").join("_");
    return new_txt;
  };
  Update = (_id) => {
    this.updateForm.current.className = "update-admin display";
    this.setState({ _id: _id });
  };
  CloseUpdate = (e) => {
    e.preventDefault();
    this.updateForm.current.className = "update-admin hidden";
    let CB = document.getElementsByClassName("form-check-input");
    for (let i = 0; i < CB.length; i++) {
      CB[i].check = false;
    }
  };
  UpdateGame = (e) => {
    e.preventDefault();
    const _id = this.state._id;
    let newData = {
      newTitle: this.state.newTitle,
      newDescription: this.state.newDescription,
      newUrl: this.state.newUrl,
      newIframe: this.state.newIframe,
      newHow2play: this.state.newHow2play,
      newLove_game: this.state.newLove_game,
      newMobile_game: this.state.newMobile_game,
    };
    gameService.update(_id, newData).then((req, res) => {
      toast.info("Cập nhật thành công ", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      let updateGames = this.state.games.map((game, id) => {
        if (game._id !== _id) {
          return game;
        } else {
          return {
            _id: _id,
            title: req.data.title,
            description: req.data.description,
            url: req.data.url,
            iframe: req.data.iframe,
            love_game: req.data.love_game,
            how2play: req.data.how2play,
            mobile_game: req.data.mobile_game,
          };
        }
      });
      this.setState({ games: updateGames });
    });
    //===================
    this.updateForm.current.className = "update-admin hidden";
    this.setState({
      newTitle: "",
      newDescription: "",
      newUrl: "",
      newIframe: "",
      newHow2play: "",
      newLove_game: null,
      newMobile_game: null,
    });
  };
  onUpdateGame = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <div className="update-admin hidden" ref={this.updateForm}>
          <div className="black-back"></div>
          <form onSubmit={this.UpdateGame} className="form-update">
            <input
              onChange={this.onUpdateGame}
              value={this.state.newTitle}
              name="newTitle"
              placeholder="Title..."
              className="form-control inputUpdate input_N"
            />
            <input
              name="newDescription"
              value={this.state.newDescription}
              placeholder="Description..."
              onChange={this.onUpdateGame}
              className="form-control inputUpdate input_N"
            />
            <input
              name="newUrl"
              value={this.state.newUrl}
              placeholder="Url..."
              onChange={this.onUpdateGame}
              className="form-control inputUpdate input_N"
            />
            <input
              name="newIframe"
              value={this.state.newIframe}
              placeholder="Iframe..."
              onChange={this.onUpdateGame}
              className="form-control inputUpdate input_N"
            />
            <input
              name="newHow2play"
              value={this.state.newHow2play}
              placeholder="How to play game..."
              onChange={this.onUpdateGame}
              className="form-control inputUpdate input_N"
            />
            {/* ==================== Form Check ====================== */}
            <p className="lovegame_lab table_admin_delete">Love game ❤ ?</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input formCreate "
                type="radio"
                id="inlineCheckbox1"
                name="newLove_game"
                value={false}
                onChange={this.onUpdateGame}
              />
              <label
                class="form-check-label table_admin_delete"
                for="inlineCheckbox1 input_N"
              >
                FALSE
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input formCreate "
                type="radio"
                id="inlineCheckbox2"
                name="newLove_game"
                value={true}
                onChange={this.onUpdateGame}
              />
              <label
                class="form-check-label table_admin_delete"
                for="inlineCheckbox2 input_N"
              >
                TRUE
              </label>
            </div>
            {/* ==================== Form Check Mobile ====================== */}
            <p className="lovegame_lab table_admin_delete">Mobile Game 📱 ?</p>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input formCreate "
                type="radio"
                id="inlineCheckbox1"
                name="newMobile_game"
                value={false}
                onChange={this.onUpdateGame}
              />
              <label
                class="form-check-label table_admin_delete"
                for="inlineCheckbox1 input_N"
              >
                FALSE
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input formCreate "
                type="radio"
                id="inlineCheckbox2"
                name="newMobile_game"
                value={true}
                onChange={this.onUpdateGame}
              />
              <label
                class="form-check-label table_admin_delete"
                for="inlineCheckbox2 input_N"
              >
                TRUE
              </label>
            </div>
            <input
              className="btn btn-block btn-info playButton createButton"
              type="submit"
              value="UPDATE"
            />
            <button
              className="btn btn-light close-update"
              onClick={this.CloseUpdate}
            >
              ❌
            </button>
          </form>
        </div>
        <div className="enter_admin"></div>
        <table className="table table_admin_update">
          <thead>
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Url</th>
              <th scope="col">Iframe</th>
              <th scope="col">Type</th>
              <th scope="col">Function</th>
            </tr>
          </thead>
          <tbody>
            {this.state.games.map((game, id) => {
              return (
                <tr
                  key={id}
                  className={game.love_game == true ? "love_game_tr" : ""}
                >
                  <th>
                    {/* {game._id} */}
                    {id}
                  </th>
                  <td>{game.title}</td>
                  <td>{game.description}</td>
                  <td className="width40">
                    {game.url && game.url.length >= 60 ? (
                      <i>(Nội dung quá dài)</i>
                    ) : (
                      game.url
                    )}
                  </td>
                  <td className="width40">
                    {game.iframe.length >= 60 ? (
                      <i>(Nội dung quá dài)</i>
                    ) : (
                      game.iframe
                    )}
                  </td>
                  <td>{game.mobile_game == true ? "MOBILE" : "PC"}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        this.Update(game._id);
                      }}
                    >
                      <i className="fa fa-refresh" aria-hidden="true"></i>
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
