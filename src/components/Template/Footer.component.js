import Chart from "react-apexcharts";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import Feedback from "../../service/feedback.service";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gmail: "",
      name: "",
      feedback: "",
    };
  }
  onFeedback = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form
        className="container basic"
        onSubmit={(e) => {
          e.preventDefault();
          Feedback.create(this.state).then((req, res) => {
            toast.dark(`Cảm ơn đã ${req.data.name} phản hồi 😁😍!`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            this.setState({
              gmail: "",
              name: "",
              feedback: "",
            });
          });
        }}
      >
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
        <div className="row row_T text_left">
          <div className="col-lg-12">
            <h3 className="contact text-uppercase text_center title_T PC_left">
              Phản hồi
            </h3>
            <hr className="blue_dark_hr" />
          </div>
          <div className="col-lg-6">
            <h3 className="contact text-uppercase text_center title_T">
              <input
                type="text"
                className="form-control input_T"
                aria-describedby="helpId"
                placeholder="Tên của bạn..."
                onChange={this.onFeedback}
                value={this.state.name}
                name="name"
              />
            </h3>
          </div>
          <div className="col-lg-6">
            <h3 className="contact text-uppercase text_center title_T">
              <input
                type="text"
                className="form-control input_T"
                aria-describedby="helpId"
                placeholder="Gmail của bạn..."
                onChange={this.onFeedback}
                value={this.state.gmail}
                name="gmail"
              />
            </h3>
          </div>
          <div className="col-lg-12">
            <h3 className="contact text-uppercase text_center title_T">
              <textarea
                className="form-control input_T"
                name=""
                id=""
                rows="5"
                placeholder="Nội dung thư..."
                onChange={this.onFeedback}
                value={this.state.feedback}
                name="feedback"
              ></textarea>
            </h3>
          </div>
          <div className="col-lg-12 text_center PC_left">
            <button className="btn btn-info more_in4">Gửi phản hồi</button>
          </div>
        </div>
      </form>
    );
  }
}
