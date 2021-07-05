import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../../App.css";
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
      console.log(req.data);
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
      console.log(user);
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
        console.log(not_one);
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
          class="img js-fullheight"
          //   style="background-image: url(images/bg.jpg);"
        >
          <section class="ftco-section">
            <div class="container">
              <div class="row justify-content-center">
                <p class="heading-section">Đăng nhập </p>
                <hr />
              </div>
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                  <div class="login-wrap p-0">
                    <form action="#" class="signin-form" onSubmit={this.Login}>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Gmail..."
                          name="gmail"
                          value={this.state.gmail}
                          onChange={this.onLogin}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          id="password-field"
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onLogin}
                          class="form-control"
                          placeholder="Password..."
                          required
                        />
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="form-control btn btn-primary submit px-3"
                        >
                          Sign In
                        </button>
                      </div>
                      <div class="form-group d-md-flex">
                        <div class="w-50">
                          {" "}
                          <Link className="nav-link page-scroll" to={"/Logup"}>
                            Đăng Ký
                          </Link>
                        </div>
                        <div class="w-50 text-md-right">
                          {/* style="color: #fff" */}
                          <a href="#">Forgot Password</a>
                        </div>
                      </div>
                    </form>
                    <p class="w-100 text-center">
                      &mdash; Or Sign In With &mdash;
                    </p>
                    <div class="social d-flex text-center">
                      <a href="#" class="px-2 py-2 mr-md-1 rounded">
                        <span class="ion-logo-facebook mr-2"></span> Facebook
                      </a>
                      <a href="#" class="px-2 py-2 ml-md-1 rounded">
                        <span class="ion-logo-twitter mr-2"></span> Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>
      </div>
    );
  }
}
