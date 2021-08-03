import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./New.css";
export default class New extends Component {
  constructor(props) {
    super(props);
    this.description = React.createRef();
  }
  componentDidMount() {
    this.check();
  }
  check = () => {
    setTimeout(
      () => (this.description.current.innerHTML = this.props.description),
      500
    );
    {
    }
  };
  render() {
    let a = "hello";
    return (
      <div className="dark_blue light_blue">
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> {this.props.time}</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  {this.props.title}
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p ref={this.description}></p>
                {this.check()}
              </div>
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={this.props.img}
                    alt="alternative"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
