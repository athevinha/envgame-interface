import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import UserService from "../../service/user.service";
import "../../App.css";
import "./logup.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Copyright from "../Template/Copyright.component";
import home_route from "../http_route/http-common";
import person_name from "../realName/person";
export default class Logup extends Component {
  random_x2y = (x, y) => {
    return Math.floor(Math.random() * y) + x;
  };
  constructor(props) {
    super(props);
    let earned_money = [];
    for (let i = 0; i < 12; i++) {
      earned_money[i] = this.random_x2y(100, 1000);
    }
    this.state = {
      username: "",
      gmail: "",
      password: "",
      description: "",
      type: 1,
      avatar: "",
      earned_money: earned_money, // money make for month
      played_games: [], // list game played
      time_gaming: [], // time game
      tooken: "",
    };
  }
  componentDidMount() {
    if (localStorage.getItem("tooken") != null) {
      window.location = home_route.home_link().baseURL;
    }
  }
  GenerateTooken = () => {
    let length = 40;
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  };
  onLogup = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  condition_real_account = (username) => {
    let condition = false;
    person_name.map((name, id) => {
      if (username.toLowerCase().includes(name)) {
        condition = true;
        console.log(name);
      }
    });
    return condition;
  };
  logup = (e) => {
    e.preventDefault();
    if (this.condition_real_account(this.state.username)) {
      let finalUser = this.state;
      finalUser.tooken = this.GenerateTooken();
      UserService.create(finalUser).then((req, res) => {
        toast.success("Đăng ký thành công!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        let clear = Object.keys(this.state);
        for (let i = 0; i < clear.length; i++) {
          this.setState({
            [clear[i]]: "",
          });
        }
        finalUser = {};
        setTimeout(() => {
          window.location = home_route.home_link().baseURL + "login";
        }, 2000);
      });
    } else {
      toast.error("Bạn đã nhập sai tên!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  render() {
    return (
      <div>
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <body
          className="img fullheight dark_blue"
          //   style="background-image: url(images/bg.jpg);"
        >
          <div className="container login_form">
            <div className="row border_radius darker_blue logup_row">
              <div className="col-lg-12 text_center">
                <h3 className="light_blue glx_fold_T">Đăng ký</h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <div className="login-wrap p-0">
                  <form onSubmit={this.logup}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onLogup}
                        className="form-control input_T logup_input"
                        placeholder="Username..."
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="gmail"
                        value={this.state.gmail}
                        onChange={this.onLogup}
                        className="form-control input_T logup_input"
                        placeholder="Gmail..."
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="password-field"
                        name="password"
                        value={this.state.password}
                        onChange={this.onLogup}
                        type="password"
                        className="form-control input_T logup_input"
                        placeholder="Password..."
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="avatar"
                        value={this.state.avatar}
                        onChange={this.onLogup}
                        className="form-control input_T logup_input"
                        placeholder="Link your image..."
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.onLogup}
                        className="form-control input_T logup_input"
                        placeholder="Description..."
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="logup_input form-control btn btn-primary submit px-3 glx_fold"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12 text_left no_margin copy_right_fold">
                <p className="p-small statement white_color glx_fold">
                  Copyright ©{" "}
                  <a href="/" className="light_blue">
                    envgame
                  </a>
                </p>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
