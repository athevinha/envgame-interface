import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../../service/user.service";
import "./RankGame.css";
import "../../style/Games.css";
import Iframe from "react-iframe";
import { ToastContainer, toast } from "react-toastify";
let STime = 0;
export default class RankGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranks: this.props.ranks,
      top_limit: 5,
    };
  }
  hide_rank = () => {};
  show_rank = () => {};
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div className="background-iframe darker_blue">
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <table className="table rank_game_table">
          <thead>
            ` `
            <tr className="rank_game_tr">
              <th className="rank_game_th" scope="col"></th>
              <th className="rank_game_th" scope="col"></th>
              <th className="rank_game_th" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.ranks.map((rank, id) => {
              if (id < this.state.top_limit) {
                return (
                  <tr key={id} className="rank_game_tr">
                    <td className="rank_game_td">{id + 1}</td>
                    <td className="rank_game_td">{rank.username}</td>
                    <td className="rank_game_td">{rank.score}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
