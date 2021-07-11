import Chart from "react-apexcharts";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form
        className="container basic"
        onSubmit={(e) => {
          e.preventDefault();
          toast.dark("Cảm ơn đã phản hồi 😁😍!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        <ToastContainer />
        {/* Same as */}
        <ToastContainer />
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
                className="form-control input_T"
                aria-describedby="helpId"
                placeholder="Tên của bạn..."
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
              ></textarea>
            </h3>
          </div>
          <div className="col-lg-12 text_center">
            <button className="btn btn-info">Gửi phản hồi</button>
          </div>
        </div>
      </form>
    );
  }
}
