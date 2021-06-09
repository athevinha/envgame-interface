import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import GameService from "../../service/game.service";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Route, Switch } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <div>
        <div className="enter"></div>
        <body
          class="img js-fullheight"
          //   style="background-image: url(images/bg.jpg);"
        >
          <section class="ftco-section">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                  <h2 class="heading-section">Login #10</h2>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                  <div class="login-wrap p-0">
                    <h3 class="mb-4 text-center">Have an account?</h3>
                    <form action="#" class="signin-form">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          id="password-field"
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          required
                        />
                        <span
                          toggle="#password-field"
                          class="fa fa-fw fa-eye field-icon toggle-password"
                        ></span>
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
