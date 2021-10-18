import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./onTop.css";
import "react-toastify/dist/ReactToastify.css";
import userService from "../../service/user.service";
import { Link } from "react-router-dom";
export default class OnTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top_limit: 10,
      users: [],
    };
    userService.getAll().then((req) => {
      let users = req.data;
      users.map((user, id) => {
        let SUM_TIME = 0;
        if (user.time_gaming) {
          user.time_gaming.map((TT, id) => {
            SUM_TIME += TT.time;
          });
        }
        user.sum_time = SUM_TIME;
      });
      users.sort(this.compare);
      this.setState({ users: users });
      // this.setState({ users: req.data });
    });
  }
  compare = (a, b) => {
    if (a.sum_time < b.sum_time) {
      return 1;
    }
    if (a.sum_time > b.sum_time) {
      return -1;
    }
    return 0;
  };

  render() {
    return (
      <div className="dark_blue light_blue">
      <div className="enter"></div>
      <div className="enter"></div>
      <div className="container">
        <h2 className="text_center">Player Ranking</h2>
        <table className="table table_admin_read onTopTable">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              {window.innerWidth >= 600 ? <th scope="col">Gmail</th> : ""}
              {window.innerWidth >= 600 ? (
                <th scope="col">Total Play Time (minutes)</th>
              ) : (
                <th scope="col">Time(Minute)</th>
              )}
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, id) => {
              if (id < this.state.top_limit) {
                console.log(window.innerWidth);
                return (
                  <tr key={id} className={id < 3 ? "top3" : ""}>
                    <td>{id + 1}</td>
                    <td>
                      <Link
                        className={id < 3 ? "top3" : ""}
                        to={"/users/" + user._id}
                      >
                        {user.username}{" "}
                      </Link>
                    </td>
                    {window.innerWidth >= 600 ? <td>{user.gmail}</td> : ""}
                    <td>
                      {Math.round((user.sum_time * 100) / 1000 / 60) / 100}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
    );
  }
}
