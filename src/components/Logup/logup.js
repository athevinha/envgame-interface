import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import UserService from "../../service/user.service";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default class Logup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      gmail: "",
      password: "",
      description: "",
      type: 1,
      avatar: "",
      time_playgame: 0,
      earned_money: [], // money make for month
      played_games: [], // list game played
      interests: [], // list hobby
      tooken: "",
    };
  }
  componentDidMount() {
    console.log(this.GenerateTooken());
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
  logup = (e) => {
    e.preventDefault();
    let finalUser = this.state;
    finalUser.tooken = this.GenerateTooken();
    console.log(finalUser);
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
      console.log(this.state);
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
                <p class="heading-section">Đăng ký</p>
                <hr />
              </div>
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                  <div class="login-wrap p-0">
                    <form class="signin-form" onSubmit={this.logup}>
                      <div class="form-group">
                        <input
                          type="text"
                          name="username"
                          value={this.state.username}
                          onChange={this.onLogup}
                          class="form-control"
                          placeholder="Username..."
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="gmail"
                          value={this.state.gmail}
                          onChange={this.onLogup}
                          class="form-control"
                          placeholder="Gmail..."
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          id="password-field"
                          name="password"
                          value={this.state.password}
                          onChange={this.onLogup}
                          type="password"
                          class="form-control"
                          placeholder="Password..."
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="avatar"
                          value={this.state.avatar}
                          onChange={this.onLogup}
                          class="form-control"
                          placeholder="Link your image..."
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          name="description"
                          value={this.state.description}
                          onChange={this.onLogup}
                          class="form-control"
                          placeholder="Description..."
                        />
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="form-control btn btn-primary submit px-3"
                        >
                          Sign up
                        </button>
                      </div>
                      <div class="form-group d-md-flex">
                        <div class="w-50">
                          <label class="checkbox-wrap checkbox-primary">
                            Remember Me
                            <input type="checkbox" checked />
                            <span class="checkmark"></span>
                          </label>
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
