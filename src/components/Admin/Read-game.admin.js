import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GameService from "../../service/game.service";
import "../../App.css";
import home_route from "../http_routes/http-common";
export default class ReadGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
    GameService.getAll().then((req) => {
      this.setState({ games: req.data });
    });
  }
  componentDidMount() {
    let home_link = home_route.home_link().baseURL;
    if (localStorage.tooken != "U51Ff7qkyIids536my2RtQWQ0zl60OGHjybteQQd") {
      window.location = home_link;
    }
  }
  render() {
    return (
      <div>
        <div className="enter_admin"></div>
        <table className="table table_admin_read">
          <thead>
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Url</th>
              <th scope="col">Iframe</th>
              <th scope="col">Type</th>
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
                  <td>{game.url.length >= 100 ? game.url.length : game.url}</td>
                  <td>
                    {game.iframe.length >= 100
                      ? game.iframe.length
                      : game.iframe}
                  </td>
                  <td>{game.mobile_game == true ? "MOBILE" : "PC"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
