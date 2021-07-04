import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./user.page.css";

import "react-toastify/dist/ReactToastify.css";
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
                <b>Type_user:</b>{" "}
                <spam>{user.type == 1 ? "USER" : "ADMIN"}</spam>
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
          {/* <hr className="black_hr block_hr" /> */}
          <p>
            <b>Played_game:</b>{" "}
            {this.CheckArrNone(user.earned_money) == 0
              ? user.earned_money.map((e, id) => {
                  return <p>{e}</p>;
                })
              : "None"}
          </p>
        </div>
      </div>
    );
  }
}
