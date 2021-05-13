import React, { Component } from "react";
import Iframe from "react-iframe";
import "../style/Template.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import content1 from "./images/content1.jpg";
import content2 from "./images/content2.jpg";
import content3 from "./images/content3.jpg";
import ReactStoreIndicator from "react-score-indicator";
import Footer from "./footer.component";
import Chart from "./chart.component";
export default class Template extends Component {
  render() {
    return (
      <div>
        {/* Navigation */}
        <header id="header" className="header black">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h1 className="h1-large h-name">Enviroment Games</h1>
                  <p className="p-large p-name">
                    Nền tảng thiết kế game tăng tỷ lệ cây trồng cho môi trường
                  </p>
                  <a
                    className="btn btn-success secondary playButton"
                    href="#your-link"
                  >
                    <i className="fa fa-gamepad"></i> Chơi game ngay
                  </a>
                </div>{" "}
                {/* end of text-container */}
              </div>{" "}
              {/* end of col */}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </header>{" "}
        <div id="details" className="basic-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="text-container">
                  <h2 className="content">Thực trạng</h2>
                  <hr />
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fa fa-chevron-right"></i>
                      <div className="media-body">
                        {" "}
                        Diện tích rừng bị thiệt hại giảm 270ha/năm Trong 4 năm
                        từ 2016-2019, diện tích rừng bị thiệt hại đã lên tới
                        7.283ha.
                      </div>
                    </li>
                    <li className="media">
                      <i className="fa fa-chevron-right"></i>
                      <div className="media-body">
                        Tây Nguyên có tổng diện tích tự nhiên 5.459.785ha, chiếm
                        16,8% diện tích cả nước. Kết quả công bố hiện trạng rừng
                        năm 2019 chỉ ra rằng, toàn khu vực Tây Nguyên có
                        3.239.600ha đất lâm nghiệp, trong đó diện tích có rừng
                        2.559.596ha.
                      </div>
                    </li>
                  </ul>
                  <a href="https://laodong.vn/xa-hoi/nhung-he-luy-tu-mat-rung-ngay-cang-nghiem-trong-817416.ldo#:~:text=H%E1%BA%ADu%20qu%E1%BA%A3%20c%E1%BB%A7a%20vi%E1%BB%87c%20ph%C3%A1,Trung%20b%E1%BB%99%2C%20T%C3%A2y%20Nguy%C3%AAn%20v%C3%A0">
                    laodong.vn.com
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
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of basic-2 */}
        {/* end of details 1 */}
        {/* Details 2 */}
        <div className="basic-3">
          <div className="black-background"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="image-container">
                  <img className="img-fluid" src={content2} alt="alternative" />
                </div>{" "}
                {/* end of image-container */}
              </div>{" "}
              {/* end of col */}
              <div className="col-lg-5">
                <div className="text-container">
                  <h2 id="title-2">Rừng là lá phổi của trái đất</h2>
                  <hr />
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <i className="fa fa-chevron-right"></i>
                      <div className="media-body">Chống biển đổi khí hậu.</div>
                    </li>
                    <li className="media">
                      <i className="fa fa-chevron-right"></i>
                      <div className="media-body">Làm sạch không khí</div>
                    </li>
                    <li className="media">
                      <i className="fa fa-chevron-right"></i>
                      <div className="media-body">
                        Cung cấp Oxy cho con người.
                      </div>
                      1
                    </li>
                    <li className="media">
                      <i className="fa fa-chevron-right"></i>
                      <div className="media-body">Tạo bóng mát.</div>
                    </li>
                    <li className="media">
                      <i className="fa fa-chevron-right"></i>
                      <div className="media-body">Bảo tồn năng lượng.</div>
                    </li>
                    <li className="media">
                      <i className="fa fa-chevron-right"></i>
                      <div className="media-body">Chống xói mòn đất</div>
                    </li>
                  </ul>
                  <a
                    className="btn-solid-reg btn btn-block"
                    href="https://jadiny.vn/blog/21-loi-ich-cua-viec-trong-cay-xanh-ma-ban-thay-ro_n507.html"
                  >
                    Chi tiết
                  </a>
                </div>{" "}
                {/* end of text-container */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of basic-3 */}
        {/* end of details 2 */}
        {/* Details Lightbox */}
        {/* Lightbox */}
        <div
          id="details-lightbox"
          className="lightbox-basic zoom-anim-dialog mfp-hide"
        >
          <div className="row">
            <div className="col-lg-4">
              <h3>MINI GAME</h3>
              <hr />
              <p>
                MINI GAME Đang là xu hướng thế giới để thu hút được nhiều khách
                hàng
              </p>
              <h3>Thời Gian</h3>
              <hr />
              <p>
                Mini game sẽ thu hút được rất nhiều người biết tới website,
                fanpage hay sản phẩm của bạn và rất nhiều nhãn hàng lớn đã sử
                dụng. Tuy nhiên chi phí lại quá đắt để ADgame cung cấp cho bạn
                một công cụ để dùng với chi phí thấp. Chỉ với 20 phút làm quen
                bạn đã có thể tạo ra nội dung có tương tác cao hơn nội dung
                truyền thống
              </p>
              <a
                className="btn-solid-reg btn btn-block"
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
          {/* end of row */}
        </div>{" "}
        <div className="counter">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Counter */}
                <div id="counter">
                  <Chart></Chart>
                </div>
                {/* end of counter */}
              </div>{" "}
              {/* end of col */}
            </div>{" "}
            {/* end of row */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* Footer */}
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="contact">Thông tin liên hệ</h1>
                <div className="social-container">
                  <span className="fa-stack">
                    <a href="https://www.facebook.com/nguyen.thevinh.5496/">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="https://github.com/athevinha">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-github fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="https://www.instagram.com/nguyen_the_vinh_lt/">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-instagram fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="https://www.youtube.com/channel/UC2LHhJZYclSyw2umXk7X6ow">
                      <i className="fa fa-circle fa-stack-2x"></i>
                      <i className="fa fa-youtube fa-stack-1x"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Copyright */}
        <div className="copyright">
          <Footer></Footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled li-space-lg p-small">
                  <li>
                    <a href="article.html">Article Details</a>
                  </li>
                  <li>
                    <a href="terms.html">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="privacy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <p className="p-small statement">
                  Copyright © <a href="#your-link">Your name</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
