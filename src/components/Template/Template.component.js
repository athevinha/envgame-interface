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
                Protect the environment with hours of your own entertainment!
              </p>
              <Link className="btn playButton text_center" to={"/Games"}>
                <i className="fa fa-gamepad"></i> Play the game now
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
              <div className="col-lg-12">
                <div className="text-container">
                  <h2 className=" text-uppercase title_T">ABOUT ENVGAME</h2>
                  <hr className="blue_dark_hr" />
                  {/* <li className="media">
                      <div className="media-body">
                        {" "}
                        <spam className="circle_blue_small"></spam>Area damaged
                        forest reduced by 270ha/year In 4 years from 2016-2019,
                        the damaged forest area has reached 7,283ha.
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-body">
                        <spam className="circle_blue_small"></spam>Highland has
                        the total natural area is 5,459,785ha, accounting for
                        16.8% of the total area nationwide. Results of
                        announcing the current state of forests in 2019
                        indicated that, the whole Central Highlands region has
                        3,239,600 ha of land forestry, in which the forest area
                        is 2,559,596 ha.
                      </div>
                    </li> */}
                  <Iframe
                    url="https://www.youtube.com/embed/dzYdvgIVwzA"
                    width="100%"
                    height="500px"
                    style={{ border: "none" }}
                  />
                </div>{" "}
                {/* end of text-container */}
              </div>{" "}
              {/* end of col */}
              {/* end of col */}
            </div>{" "}
            {/* end of row row_T */}
          </div>{" "}
          {/* end of container */}
        </div>{" "}
        {/* end of basic-2 basic */}
        {/* end of details 1 */}
        {/* Details 2 */}
        <div className="container basic-5 basic">
          <div className="row row_T">
            <div className="col-lg-12">
              <h3 className="contact text-uppercase text_left title_T">
                Information about the group
              </h3>
              <hr className="blue_dark_hr" />
            </div>

            <div className="col-lg-4 text_center">
              {/* <img src={Quynh_Nhu} className="image_team" />
              <p className="light_blue type_T">Member</p>
              <p className="white_color">
                <b>Dau Quynh Nhu</b>
              </p>
              <p className="white_color">Vinh University for Gifted Students</p> */}
            </div>
            <div className="col-lg-4 text_center">
              <img
                src={The_Vinh}
                width="224"
                height="224"
                alt="vinh"
                className="image_team"
              />
              <p className="light_blue type_T">
                <b>Captain</b>
              </p>

              <p className="white_color">
                <b>Nguyen The Vinh</b>
              </p>
              <p className="white_color ">
                Vinh University for Gifted Students
              </p>
            </div>
            <div className="col-lg-4 text_center">
              {/* <img src={Quan_Ngo} className="image_team" />
              <p className="light_blue type_T">Member</p>
              <p className="white_color">
                <b>Ngo Minh Quan</b>
              </p>
              <p className="white_color">Thai Lao High School</p> */}
            </div>
          </div>
        </div>
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
                    Forests are the lungs of the earth
                  </h2>
                  <hr className="blue_dark_hr" />
                  <ul className="list-unstyled li-space-lg">
                    <li className="media">
                      <spam className="circle_blue_small"> </spam>
                      <div className="media-body">Anti-climate change.</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Clean the air</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Supply oxygen to humans.</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Shadow.</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Conserves energy.</div>
                    </li>
                    <li className="media">
                      <spam className="circle_blue_small"></spam>
                      <div className="media-body">Soil erosion control</div>
                    </li>
                  </ul>
                  <a
                    className="btn btn-info more_in4"
                    href="https://jadiny.vn/blog/21-loi-ich-cua-viec-trong-cay-xanh-ma-ban-thay-ro_n507.html"
                  >
                    Details
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
                <spam className="circle_blue_small"></spam> MINI GAME is
                trending world direction to attract more customers
              </p>
              <h3 className="text-uppercase title_T">Green tree</h3>
              <hr className="blue_dark_hr" />
              <p className="light_blue">
                <spam className="circle_blue_small"></spam> Part of revenue
                <b>Envgame</b> is extracted to contribute to environmental
                protection such as: Planting trees, Using chemical methods,
                increasing fertility of the land, mobilizing teams/groups of
                volunteers to protect the environment field, cost of care and
                maintenance of plants.
              </p>
              <a
                className="btn btn-info more_in4"
                href="https://harafunnel.com/blogs/thu-hut-khach-hang-moi/5-mini-game-tao-duoc-nhieu-tuong-tac-nhat-tu-cac-thuong-hieu-noi -tieng"
              >
                Details
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
                  Revenue and revenue from investment in trees
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
        <Footer></Footer>
        <div className="footer basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_center title_T">
                  Contact Info
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
