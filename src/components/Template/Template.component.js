import React, { Component } from "react";
import Iframe from "react-iframe";
import "../../style/Template.css";
import "../../style/mobile_template/extra_small.css";
import "../../style/mobile_template/small.css";
import "../../style/mobile_template/medium.css";
import "../../style/mobile_template/large.css";
import "../../style/mobile_template/extra_large.css";
import "../../style/mobile_template/galaxy_fold.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import content1 from "./images/content1.jpg";
import content2 from "./images/content2.jpg";
import content3 from "./images/content3.jpg";
import ReactStoreIndicator from "react-score-indicator";
import { Link, Route, Switch } from "react-router-dom";
import Footer from "./Footer.component";
import Chart from "./Chart.component";
import Quynh_Nhu from "./images/Quynh_Nhu.jpg";
import The_Vinh from "./images/The_Vinh.jpg";
import Quan_Ngo from "./images/Quan_Ngo.jpg";
import Copyright from "./Copyright.component";
export default class Template extends Component {
  render() {
    return (
      <div className="dark_blue">
        {/* Navigation */}
        <header id="header" className="header">
          <div className="container text_center con_custom">
            <div className="text-container text_left row">
              <h1 className="h1-large h-name">Enviroment Games</h1>
              <p className="p-large p-name">
                Nền tảng thiết kế game tăng tỷ lệ cây trồng cho môi trường
              </p>
              <Link className="btn playButton text_center" to={"/Games"}>
                <i className="fa fa-gamepad"></i> Chơi game ngay
              </Link>

              {/* end of col */}
              {/* end of col */}
            </div>{" "}
            {/* end of row row_T */}
          </div>{" "}
          {/* end of container */}
        </header>{" "}
        <div id="details" className="basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-5">
                <div className="text-container">
                  <h2 className=" text-uppercase title_T">Thực trạng</h2>
                  <hr className="blue_dark_hr" />
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <div className="media-body">
                        {" "}
                        <spam className="circle_blue_small"></spam>Diện tích
                        rừng bị thiệt hại giảm 270ha/năm Trong 4 năm từ
                        2016-2019, diện tích rừng bị thiệt hại đã lên tới
                        7.283ha.
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-body">
                        <spam className="circle_blue_small"></spam>Tây Nguyên có
                        tổng diện tích tự nhiên 5.459.785ha, chiếm 16,8% diện
                        tích cả nước. Kết quả công bố hiện trạng rừng năm 2019
                        chỉ ra rằng, toàn khu vực Tây Nguyên có 3.239.600ha đất
                        lâm nghiệp, trong đó diện tích có rừng 2.559.596ha.
                      </div>
                    </li>
                  </ul>
                  <a
                    className="btn btn-info"
                    href="https://laodong.vn/xa-hoi/nhung-he-luy-tu-mat-rung-ngay-cang-nghiem-trong-817416.ldo#:~:text=H%E1%BA%ADu%20qu%E1%BA%A3%20c%E1%BB%A7a%20vi%E1%BB%87c%20ph%C3%A1,Trung%20b%E1%BB%99%2C%20T%C3%A2y%20Nguy%C3%AAn%20v%C3%A0"
                  >
                    Chi tiết
                  </a>
                </div>{" "}
                {/* end of text-container */}
              </div>{" "}
              {/* end of col */}
              <div className="col-lg-7">
                <div className="image-container">
                  <img className="img-fluid" src={content1} alt="alternative" />
                </div>{" "}
                {/* end of image-container */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row row_T */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of basic-2 basic */}
        {/* end of details 1 */}
        {/* Details 2 */}
        <div className="basic-3 basic">
          <div className="black-background"></div>
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-7">
                <div className="image-container">
                  <img className="img-fluid" src={content2} alt="alternative" />
                </div>{" "}
                {/* end of image-container */}
              </div>{" "}
              {/* end of col */}
              <div className="col-lg-5">
                <div className="text-container">
                  <h2 className="text-uppercase title_T">
                    Rừng là lá phổi của trái đất
                  </h2>
                  <hr className="blue_dark_hr" />
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <spam className="circle_blue_small"> </spam>
                      <div className="media-body">Chống biển đổi khí hậu.</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Làm sạch không khí</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">
                        Cung cấp Oxy cho con người.
                      </div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Tạo bóng mát.</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Bảo tồn năng lượng.</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Chống xói mòn đất</div>
                    </li>
                  </ul>
                  <a
                    className="btn btn-info"
                    href="https://jadiny.vn/blog/21-loi-ich-cua-viec-trong-cay-xanh-ma-ban-thay-ro_n507.html"
                  >
                    Chi tiết
                  </a>
                </div>{" "}
                {/* end of text-container */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row row_T */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        <div className="container basic-4 basic">
          <div className="row row_T">
            <div className="col-lg-4">
              <h3 className="title_T">MINI GAME</h3>
              <hr className="blue_dark_hr" />
              <p className="light_blue">
                <spam className="circle_blue_small"></spam> MINI GAME Đang là xu
                hướng thế giới để thu hút được nhiều khách hàng
              </p>
              <h3 className="text-uppercase title_T">Cây xanh</h3>
              <hr className="blue_dark_hr" />
              <p className="light_blue">
                <spam className="circle_blue_small"></spam> Một phần doanh thu
                của <b>Envgame </b>được trích ra để góp phần bảo vệ môi trường
                như là: Trồng cây, Sử dụng các biện pháp hóa học, tăng độ màu mỡ
                của đất đai, huy động các đội/nhóm tình nguyện viên bảo vệ môi
                trường, chi phí chăm sóc và duy trì cây trồng.
              </p>
              <a
                className="btn btn-info"
                href="https://harafunnel.com/blogs/thu-hut-khach-hang-moi/5-mini-game-tao-duoc-nhieu-tuong-tac-nhat-tu-cac-thuong-hieu-noi-tieng"
              >
                Chi tiết
              </a>{" "}
            </div>{" "}
            <div className="col-lg-8">
              <div className="image-container">
                <img className="img-fluid" src={content3} alt="alternative" />
              </div>{" "}
              {/* end of image-container */}
            </div>{" "}
            {/* end of col */}
            {/* end of col */}
          </div>{" "}
          {/* end of row row_T */}
        </div>{" "}
        <div className="counter">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Doanh thu và doanh thu đầu tư vào cây xanh
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                {/* Counter */}
                <div id="counter">
                  <Chart></Chart>
                </div>
                {/* end of counter */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row row_T */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* Footer */}
        <div className="container basic-5 basic">
          <div className="row row_T">
            <div className="col-lg-12">
              <h3 className="contact text-uppercase text_left title_T">
                Thông tin về nhóm
              </h3>
              <hr className="blue_dark_hr" />
            </div>
            <div className="col-lg-4 text_center">
              <img src={The_Vinh} className="image_team" />
              <p className="light_blue type_T">
                <b>Đội trưởng</b>
              </p>
              <p className="white_color">
                <b>Nguyễn Thế Vinh</b>
              </p>
              <p className="white_color ">THPT chuyên Đại Học Vinh</p>
            </div>
            <div className="col-lg-4 text_center">
              <img src={Quynh_Nhu} className="image_team" />
              <p className="light_blue type_T">Thành viên</p>
              <p className="white_color">
                <b>Đậu Quỳnh Như</b>
              </p>
              <p className="white_color">THPT chuyên Đại Học Vinh</p>
            </div>
            <div className="col-lg-4 text_center">
              <img src={Quan_Ngo} className="image_team" />
              <p className="light_blue type_T">Thành viên</p>
              <p className="white_color">
                <b>Ngô Minh Quân</b>
              </p>
              <p className="white_color">THPT Thái Lão</p>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <div className="footer basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_center title_T">
                  Thông tin liên hệ
                </h3>
                <div className="social-container text_center">
                  <a
                    className="fa-stack "
                    href="https://www.facebook.com/nguyen.thevinh.5496/"
                  >
                    <i className="fa fa-facebook i_ct"></i>
                  </a>
                  <a className="fa-stack " href="https://github.com/athevinha">
                    <i className="fa fa-github i_ct"></i>
                  </a>
                  <a
                    className="fa-stack "
                    href="https://www.instagram.com/nguyen_the_vinh_lt/"
                  >
                    <i className="fa fa-instagram i_ct"></i>
                  </a>
                  <a
                    className="fa-stack "
                    href="https://www.youtube.com/channel/UC2LHhJZYclSyw2umXk7X6ow"
                  >
                    <i className="fa fa-youtube i_ct"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Copyright */}
        <Copyright />
      </div>
    );
  }
}
