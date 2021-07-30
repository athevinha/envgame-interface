import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import ICV3 from "./31072021/InceptionV3.png";
import ICV3acc from "./31072021/InceptionV3acc.png";
import RNV2 from "./31072021/ResnetV2.png";
import RNV2acc from "./31072021/ResnetV2acc.png";
import BXH from "./30072021/BXH.png";
import S20072021 from "./20072021/search.PNG";
import S120072021 from "./20072021/theme.jpg";
import "./New.css";
export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {}
  CheckArrNone = (Arr) => {
    if (Arr.length == 0) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    const user = this.props.user;
    return (
      <div className="dark_blue light_blue">
        <div className="enter"></div>
        <div className="enter"></div>
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i>3:24 AM | 31/07/2021 | Thành Phố Vinh, Nghệ An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Ứng dụng Deep Learning vào chăm sóc cây trồng (thử model)
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Hiện nay Envgame đang trong quá trình phát triển và thu hút
                  khách hàng. Vì nguồn nhân lực dùng để trồng cây chủ yếu là con
                  người làm, nên quá trình chăm sóc cây trồng rất tốn chi phí.
                  Thế nên mình quyết định thử ứng dụng <b>Deep Learning</b> vào
                  trong việc chăm sóc cây trồng xem có tiến triển gì không và
                  kết quả cũng khá bất ngờ. Xác suất ở mỗi mô hình của mình đều
                  đạt trên 90%.
                </p>
              </div>
              <div className="col-lg-6 back_white">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={ICV3}
                    alt="alternative"
                  />
                </div>{" "}
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={ICV3acc}
                    alt="alternative"
                  />
                </div>
              </div>
              <div className="col-lg-6 back_white">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={RNV2}
                    alt="alternative"
                  />
                </div>{" "}
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={RNV2acc}
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END 31072021 */}
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 7:21 PM | 30/07/2021 | Thành Phố Vinh, Nghệ An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Thêm bảng xếp hạng vào hệ thống
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Bảng xếp hạng gồm 10 bạn có thời gian chơi nhiều nhất. Chúc
                  mừng 10 bạn đã lọt vào top 10 người chơi trong tháng
                  5-6/2021😁🥳
                </p>
              </div>
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={BXH}
                    alt="alternative"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 11:43 PM | 28/07/2021 | Thành Phố Vinh, Nghệ An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Thêm các chức năng lọc, tìm kiếm game
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Bổ sung thêm tính năng game được ưa thích và tìm kiếm game
                  theo tên <br />
                  Bổ sung thêm tính năng lọc game: <br />
                  - Khi vào bằng điện thoại thì chỉ có game điện thoại mới được
                  hiển thị.
                  <br />- Khi vào bằng máy tính thì chỉ có game chơi được trên
                  máy tính mới hiển thị.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={S20072021}
                    alt="alternative"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 11:21 AM | 26/07/2021 | Thành Phố Vinh, Nghệ An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Thêm game
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Thêm game League Of Legends, 404 Laundry Not Found, Evil
                  Glitch vào hệ thống
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 2:54 AM | 12/07/2021 | Thành Phố Vinh, Nghệ An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Làm giao diện cho điện thoại
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Hầu hết các điện thoại hiện nay đều đã có giao diện riêng khi
                  vào web
                </p>
              </div>
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={S120072021}
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
