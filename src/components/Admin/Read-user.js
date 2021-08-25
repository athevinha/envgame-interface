import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import userService from "../../service/user.service";
// import "../../App.css";
import { Link } from "react-router-dom";
import home_route from "../http_route/http-common";
export default class ReadUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    userService.getAll().then((req) => {
      this.setState({ users: req.data });
    });
  }
  componentDidMount() {
    // let home_link = home_route.home_link().baseURL;
    // if (localStorage.tooken != "U51Ff7qkyIids536my2RtQWQ0zl60OGHjybteQQd") {
    //   window.location = home_link;
    // }
  }
  render() {
    return (
      <div>
        <div className="enter"></div>
        <div className="enter"></div>
        <div className="enter"></div>
        <table className="table table_admin_read">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">name</th>
              <th scope="col">_id</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{user.username}</td>
                  <td>
                    <Link to={"/users/" + user._id}>{user._id} </Link>
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
