import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../../App.css";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Route, Switch } from "react-router-dom";
import userService from "../../service/user.service";
import home_route from "../http_route/http-common";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gmail: "",
      password: "",
      users: [],
    };
    userService.getAll().then((req, res) => {
      this.setState({ users: req.data });
    });
  }
  componentDidMount() {
    if (localStorage.getItem("tooken") != null) {
      window.location = home_route.home_link().baseURL;
    }
  }
  onLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  Login = (e) => {
    e.preventDefault();
    let not_one = 0;
    this.state.users.map((user, id) => {
      if (
        user.gmail == this.state.gmail &&
        user.password == this.state.password
      ) {
        toast.info("Đăng nhập thành công!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem("tooken", user.tooken);
        let home = home_route.home_link().baseURL;
        setTimeout(() => {
          window.location = home;
        }, 1500);
      } else {
        not_one++;
        if (not_one == this.state.users.length) {
          toast.error("Đăng nhập thất bại, gmail hoặc mật khẩu không đúng!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    });
  };
  render() {
    return (
      <div>
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <div className="enter"></div>
        <body
          className="img fullheight dark_blue"
          //   style="background-image: url(images/bg.jpg);"
        >
          <div className="container login_form text_center">
            <div className="row text_center border_radius darker_blue login_row">
              <div className="col-lg-12 text_center">
                <h3 className="light_blue glx_fold_T">Đăng nhập </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12 text_center">
                <div className="login-wrap p-0">
                  <form action="#" onSubmit={this.Login}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input_T"
                        placeholder="Gmail..."
                        name="gmail"
                        value={this.state.gmail}
                        onChange={this.onLogin}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="password-field"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onLogin}
                        className="form-control input_T"
                        placeholder="Password..."
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control input_T btn btn-primary submit px-3 glx_fold"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="form-group d-md-flex red_forgot_pass ">
                      <div className="w-50">
                        {" "}
                        <Link
                          className="btn btn-primary nav-link page-scroll glx_fold"
                          to={"/Logup"}
                        >
                          Đăng Ký
                        </Link>
                      </div>
                      <div className="w-50 text-md-right forgot_pass">
                        {/* style="color: #fff" */}
                        <a href="" className="forgot_pass glx_fold">
                          Forgot Password
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12 text_left">
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
