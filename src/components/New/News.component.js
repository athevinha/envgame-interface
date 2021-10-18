import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import ICV3 from "./31072021/InceptionV3.png";
import ICV3acc from "./31072021/InceptionV3acc.png";
import RNV2 from "./31072021/ResnetV2.png";
import RNV2acc from "./31072021/ResnetV2acc.png";
import MBNacc from "./31072021/mobilenet_acc.png";
import MBNloss from "./31072021/mobilenet_loss.png";
import BXH from "./30072021/BXH.png";
import S20072021 from "./20072021/search.PNG";
import S120072021 from "./20072021/theme.jpg";
import S25052021 from "./25052021/1.jpg";
import game from "./25052021/game.PNG";
import TCN from "./20072021/TCN.png";
import New from "./New.component";
import CN from "./03082021/CN.PNG";
import H from "./04082021/H.png";
import F from "./04082021/F.png";
import chat from "./29082021/chat.png";
import "./New.css";
export default class News extends Component {
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
              <div className="col-lg-11">
                <small>
                  <i>4:06 AM | 31/07/2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-1 pin">
                {/* <small> */}{" "}
                <i>
                  {" "}
                  Pin <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                </i>
                {/* </small> */}
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Apply Deep Learning to plant care (try the model)
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Currently Envgame is in the process of developing and attracting
                  client. Because the human resources used to plant trees are mainly children
                  workers, so the process of taking care of plants is very expensive.
                  So I decided to try the <b>Deep Learning</b> app on
                  in the care of plants see if there is any progress and
                  The results were also quite surprising. The probability in each of our models is
                  over 90%.
                </p>
              </div>
              <div className="col-sm-12 text_center">
                <h4>InceptionV3 and Resnet Inception</h4>
              </div>
              <div className="col-lg-6 back_white">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={ICV3}
                    alt="alternative"
                  />
                </div>{" "}
              </div>
              <div className="col-lg-6 back_white">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={RNV2}
                    alt="alternative"
                  />
                </div>{" "}
              </div>
              <div className="col-sm-6 text_center acc_loss">
                loss: 0.2843 - <b>accuracy:</b> 0.9066 <br />
                val_loss: 0.2255 - <b>val_accuracy:</b> 0.9290
              </div>
              <div className="col-sm-6 text_center acc_loss">
                loss: 0.2223 - <b>accuracy:</b> 0.9256 <br />
                val_loss: 0.1486 - <b>val_accuracy:</b> 0.9513
              </div>
              <div className="col-sm-12 text_center">
                <h4>MobileNet model</h4>
              </div>
              <div className="col-lg-6 back_white">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={MBNloss}
                    alt="alternative"
                  />
                </div>{" "}
              </div>
              <div className="col-lg-6 back_white">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={MBNacc}
                    alt="alternative"
                  />
                </div>
              </div>
              <div className="col-sm-12 text_center acc_loss">
                loss: 0.2223 - <b>accuracy:</b> 0.9256 <br />
                val_loss: 0.1486 - <b>val_accuracy:</b> 0.9513
              </div>
            </div>
          </div>
        </div>
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i>9:36 PM | August 29, 2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Update chat system and improve interface
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                The "real time" chat system helps to create more connections between
                players together. The data of the messages is processed and saved
                in the database to facilitate re-reading the message history. Almost
                Most of Envgame's main interfaces have been replaced by Icons.
              </div>
              <div className="col-lg-12 ">
                <div className="image-container">
                  <img className="img-fluid " src={chat} alt="alternative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="counter basic-2 basic">
          <div className="container">
          <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i>11:36 PM | 04/08/2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Updated rankings for <i>Flappy Bird</i> and {" "} games
                  <i>Hextris</i>
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Only 5 excellent players with high scores will enter the system
                  rank system of the game. Games for which the rankings are applied
                  include: <br />
                  - Flappy Bird <br />
                  - Hextris <br />
                  <i> Both these games are supported on both Mobile and PC. </i>
                </p>
              </div>
              <div className="col-lg-6 ">
                <div className="image-container">
                  <img className="img-fluid " src={F} alt="alternative" />
                </div>
              </div>
              <div className="col-lg-6 ">
                <div className="image-container">
                  <img className="img-fluid" src={H} alt="alternative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
            <div className="col-lg-12">
                 <small>
                   <i>1:07 PM | 03/08/2021 | Vinh City, Nghe An</i>
                 </small>
               </div>
               <div className="col-lg-12">
                 <h3 className="contact text-uppercase text_left title_T">
                   Update: Demo application of Deep Learning to plant care.
                 </h3>
                 <hr className="blue_dark_hr" />
               </div>
               <div className="col-lg-12">
                 The system is available in the <b>Technology</b> section of envgame's website.
                 The model has the following classes:
                 <hr />
                <table className="table table table_admin_delete color_white">
                  <thead>
                    <tr>
                      <th scope="col" className="text_center">
                        Classes
                      </th>
                      <th scope="col" className="text_center">
                        Classes
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                  <tr>
                      <td className="text_center">Apple - fungal disease</td>
                      <td className="text_center">Apple - grape black rot</td>
                    </tr>
                    <tr>
                      <td className="text_center">Apple - leaf rust</td>
                      <td className="text_center">Apple - good development</td>
                    </tr>
                    <tr>
                      <td className="text_center">
                        Cherries - powdery mildew (sour)
                      </td>
                      <td className="text_center">
                        Cherries - well grown (sour)
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">
                        Maize & maize - gray leaf spot disease
                      </td>
                      <td className="text_center">
                        Maize & corn - dark brown 'rust' disease
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">Maize & maize - blight</td>
                      <td className="text_center">
                        Corn & corn - growing well
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">Grape - black rot of grapes</td>
                      <td className="text_center">Grape - black measles</td>
                    </tr>
                    <tr>
                      <td className="text_center">
                        Grapes - blight (Anthracnose)
                      </td>
                      <td className="text_center">Grape - growing well</td>
                    </tr>
                    <tr>
                      <td className="text_center">
                        Orange - yellow leaf disease with green veins
                      </td>
                      <td className="text_center">
                        Peach - Bacterial Leaf Spot
                        Disease
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">Digging - well developed</td>
                      <td className="text_center">
                        Bell peppers - Bacterial Leaf Spot
                        Disease
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">
                        Bell peppers - grow well
                      </td>
                      <td className="text_center">Potato - blight</td>
                    </tr>
                    <tr>
                      <td className="text_center">
                        Potato - late blight disease
                      </td>
                      <td className="text_center">
                        Potatoes - grow well
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">Raspberry - growing well</td>
                      <td className="text_center">
                        Soybeans - grow well
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">Pumpkin - powdery mildew</td>
                      <td className="text_center">
                        Strawberry - leaf scorch disease (drop, wilt)
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">Strawberry - good development</td>
                      <td className="text_center">
                        Blueberries - grow well
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">Tomato - blight</td>
                      <td className="text_center">Tomato - late blight</td>
                    </tr>
                    <tr>
                      <td className="text_center">
                        Tomato - leaf mold Passalora fulva
                      </td>
                      <td className="text_center">
                        Tomato - Septoria leaf spot disease
                      </td>
                    </tr>
                    <tr>
                      <td className="text_center">
                        Tomato - bacterial spot disease
                      </td>
                      <td className="text_center">Tomato - anthracnose</td>
                    </tr>
                    <tr>
                       <td className="text_center">
                         Tomato - yellow curl virus disease (leaf curl)
                       </td>
                       <td className="text_center">
                         Tomato - leaf curl disease (mosaic disease)
                       </td>
                     </tr>
                     <tr>
                       <td className="text_center">
                         Tomato - Bacterial Leaf Spot
                       </td>
                       <td className="text_center">Tomato - growing well</td>
                     </tr>
                  </tbody>
                </table>
              </div>
              {/* <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={CN}
                    alt="alternative"
                  />
                </div>{" "}
              </div> */}
            </div>
          </div>
        </div>
        {/* END 31072021 */}
        <New
          time="7:21 PM | 07/30/2021 | Vinh City, Nghe An"
          title="Add the chart to the system"
          description=" The ranking consists of the 10 players with the most playing time. Congratulations to the 10 players who made it to the top 10 players in May-June 2021😁🥳"
          img={BXH}
        />
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 11:43 PM | July 28, 2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Add filter functions, game search
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Add the feature of favorite games and search for games
                  by name <br />
                  Add more game filtering features: <br />
                  - Only mobile games can be entered when entering by phone
                  display.
                  <br />- When entering by computer, only the game can be played on
                  The new calculator displays.
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
                  <i> 11:21 AM | 26/07/2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  More games
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  More games League Of Legends, 404 Laundry Not Found, Evil
                  Glitch into the system
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
                  <i> 2:54 AM | 12/07/2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Make the interface for the phone
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Most phones today have their own interface when
                  go to the web
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

        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 4:53 AM | 08/07/2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  More games
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>A certain amount of games can be added to the system.</p>
              </div>
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={game}
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
                  <i> 0:23 AM | June 21, 2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Complete Fontend and Backend
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>The site is up and running.</p>
              </div>
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={S25052021}
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
                  <i> 1:34 AM | 03/06/2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Complete your personal page.
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  The profile page displays a lot of user information such as
                  are: play history, playing time of each game, name, gmail,
                  tooken... The data has many parameters such as playing time
                  Or is the number of trees planted on a graph?
                </p>
              </div>
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid no_mar_top"
                    src={TCN}
                    alt="alternative"
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* ==================================================== */}
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 4:07 AM | May 30, 2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Finishing the Side Bar
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  The Side Bar is used to display user information such as
                  is username, gmail, avatar...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =============================================== ===== */}
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 11:34 AM | May 29, 2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Complete login and registration.
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  The site has already been able to login, register. Add more system
                  User memory system
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =============================================== ===== */}
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 11:23 PM | May 25, 2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Making Backend for the system
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>
                  Connect to MongoDB Database. Set up Schema, function
                  API
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =============================================== ===== */}
        <div className="counter basic-2 basic">
          <div className="container">
            <div className="row row_T">
              <div className="col-lg-12">
                <small>
                  <i> 3:42 PM | 06/05/2021 | Vinh City, Nghe An</i>
                </small>
              </div>
              <div className="col-lg-12">
                <h3 className="contact text-uppercase text_left title_T">
                  Build Teamplate Website and Frontend with ReactJS
                </h3>
                <hr className="blue_dark_hr" />
              </div>
              <div className="col-lg-12">
                <p>Create a router for the website. Make Landing Page for website.</p>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================================== */}
        <div className="counter basic-2 basic">
           <div className="container">
             <div className="row row_T">
               <div className="col-lg-12">
                 <small>
                   <i> 2:23 PM | 02/05/2021 | Vinh City, Nghe An</i>
                 </small>
               </div>
               <div className="col-lg-12">
                 <h3 className="contact text-uppercase text_left title_T">
                   Start implementing ideas
                 </h3>
                 <hr className="blue_dark_hr" />
               </div>
               <div className="col-lg-12">
                 <p>Learn about the current situation of each topic in Vietnam.</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
   }
}