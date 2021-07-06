import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./user.page.css";

import "react-toastify/dist/ReactToastify.css";
import home_route from "../http_route/http-common";
import UserPageGraph from "./user.page.graph";
import UserPageGraphTime from "./user.page.graph_time";
export default class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    if (
      localStorage.tooken != this.props.user.tooken &&
      localStorage.tooken != "U51Ff7qkyIids536my2RtQWQ0zl60OGHjybteQQd"
    ) {
      window.location = home_route.home_link().baseURL;
    }
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
      <div className="dark_blue light_blue">
        <div className="enter"></div>

        <div className="container">
          <h2>Trang cá nhân </h2>
          <hr className="green_dark_hr block_hr" />
          <div className="row">
            <div className="col-sm-6 text_left">
              <p>
                <b>Access_tooken:</b>{" "}
                <spam className="title_T">{user.tooken}</spam>
              </p>
              <p>
                <b>Type:</b>{" "}
                <spam className="title_T">
                  {user.type == 1 ? "USER" : "ADMIN"}
                </spam>
              </p>
              <p>
                <b>Image:</b> <spam className="title_T">{user.avatar}</spam>
              </p>
            </div>
            <div className="col-sm-4 text_left">
              <p>
                <b>Username:</b>{" "}
                <spam className="title_T">{user.username}</spam>
              </p>
              <p>
                <b>Gmail:</b> <spam className="title_T">{user.gmail}</spam>
              </p>
              <p>
                <b>_id:</b> <spam className="title_T">{user._id}</spam>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <hr className="green_dark_hr block_hr" />
          <div className="row">
            <div className="col-sm-6 text_left">
              <p>
                <b>Lịch sử chơi:</b>{" "}
                {this.CheckArrNone(user.played_games) == 0
                  ? user.played_games.map((game, id) => {
                      if (id % 2 == 0)
                        return (
                          <div>
                            <spam>
                              <b>{game.title}:</b>{" "}
                              <spam className="title_T">{game.time}</spam>
                            </spam>{" "}
                          </div>
                        );
                    })
                  : "Bạn chưa chơi game nào"}
              </p>
            </div>
            <div className="col-sm-6 text_left">
              <p>
                <b>---------------</b>{" "}
                {this.CheckArrNone(user.played_games) == 0
                  ? user.played_games.map((game, id) => {
                      if (id % 2 != 0)
                        return (
                          <div>
                            <spam>
                              <b>{game.title}:</b>{" "}
                              <spam className="title_T">{game.time}</spam>
                            </spam>{" "}
                          </div>
                        );
                    })
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <p>
            <b>Thời gian chơi game:</b>{" "}
            <hr className="green_dark_hr block_hr" />
            <UserPageGraphTime time_gaming={user.time_gaming} />
          </p>

          <p>
            <b>Số tiền trồng cây:</b> <hr className="green_dark_hr block_hr" />
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
