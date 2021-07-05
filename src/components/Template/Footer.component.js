import Chart from "react-apexcharts";
import React, { Component } from "react";
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container basic">
        <div className="row row_T text_left">
          <div className="col-lg-12">
            <h3 className="contact text-uppercase text_center title_T">
              Phản hồi
            </h3>
            <hr className="blue_dark_hr" />
          </div>
          <div className="col-lg-6">
            <h3 className="contact text-uppercase text_center title_T">
              <input
                type="text"
                class="form-control input_T"
                aria-describedby="helpId"
                placeholder="Tên của bạn..."
              />
            </h3>
          </div>
          <div className="col-lg-6">
            <h3 className="contact text-uppercase text_center title_T">
              <input
                type="text"
                class="form-control input_T"
                aria-describedby="helpId"
                placeholder="Gmail của bạn..."
              />
            </h3>
          </div>
          <div className="col-lg-12">
            <h3 className="contact text-uppercase text_center title_T">
              <textarea
                class="form-control input_T"
                name=""
                id=""
                rows="5"
                placeholder="Nội dung thư..."
              ></textarea>
            </h3>
          </div>
          <div className="col-lg-12 text_left">
            <button className="btn btn-info">Gửi phản hồi</button>
          </div>
        </div>
      </div>
    );
  }
}
