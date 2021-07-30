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
          <h2 className="text_center">Bảng xếp hạng người chơi</h2>
          <table className="table table_admin_read onTopTable">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Gmail</th>
                <th scope="col">Tổng Thời Gian Chơi (phút)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, id) => {
                if (id < this.state.top_limit)
                  return (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>
                        <Link to={"/users/" + user._id}>{user.username} </Link>
                      </td>
                      <td>{user.gmail}</td>
                      <td>
                        {Math.round((user.sum_time * 100) / 1000 / 60) / 100}
                      </td>
                    </tr>
                  );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
