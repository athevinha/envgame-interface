import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./user.page.css";

import "react-toastify/dist/ReactToastify.css";
import UserPageGraph from "./user.page.graph";
export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    console.log(this.props);
  }
  CheckArrNone = (Arr) => {
    if (Arr.length == 0) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    const user = this.props.user;
    return (
      <div>
        <div className="enter"></div>

        <div className="container">
          <h2>Trang cá nhân </h2>
          <hr className="black_hr block_hr" />
          <div className="row">
            <div className="col-sm-6 text_left">
              <p>
                <b>Access_tooken:</b> <spam>{user.tooken}</spam>
              </p>
              <p>
                <b>Type:</b> <spam>{user.type == 1 ? "USER" : "ADMIN"}</spam>
              </p>
              <p>
                <b>Image:</b> <spam>{user.avatar}</spam>
              </p>
            </div>
            <div className="col-sm-4 text_left">
              <p>
                <b>Username:</b> <spam>{user.username}</spam>
              </p>
              <p>
                <b>Gmail:</b> <spam>{user.gmail}</spam>
              </p>
              <p>
                <b>_id:</b> <spam>{user._id}</spam>
              </p>
            </div>
          </div>
          <hr className="black_hr block_hr" />
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text_left">
                <p>
                  <b>Game đã chơi:</b>{" "}
                  {this.CheckArrNone(user.played_games) == 0
                    ? user.played_games.map((game, id) => {
                        return (
                          <div>
                            <p>{game.name}</p>: <p>{game.time}</p>{" "}
                          </div>
                        );
                      })
                    : "Bạn chưa chơi game nào"}
                </p>
              </div>
              <div className="col-sm-6 text_left">
                <p>
                  <b>Game đã thích:</b>{" "}
                  {this.CheckArrNone(user.interests) == 0
                    ? user.interests.map((game, id) => {
                        return <spam>{game}</spam>;
                      })
                    : "Bạn chưa thích game nào"}
                </p>
              </div>
            </div>
          </div>
          <hr className="black_hr block_hr" />
          <p>
            <b>Số tiền trồng cây:</b>{" "}
            {this.CheckArrNone(user.earned_money) == 0 ? (
              <UserPageGraph earned_money={user.earned_money}></UserPageGraph>
            ) : (
              "None"
            )}
          </p>
        </div>
      </div>
    );
  }
}
