import "./App.css";
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Template from "./components/Template.component";
import Games from "./components/Games.component";
import logoImg from "./components/images/favicon.png";
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
          <div className="container">
            <a class="navbar-brand logo-image" href="index.html">
              <img src={logoImg} alt="alternative" />
            </a>
            <spam className="title">EnvGame</spam>
            <button
              class="navbar-toggler p-0 border-0"
              type="button"
              data-toggle="offcanvas"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="navbar-collapse offcanvas-collapse"
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to={"/"}>
                    Giới thiệu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to={"/Games"}>
                    Chơi game
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path={["/", "/Home"]} render={(pr) => <Template />} />
          <Route exact path="/Games" render={(pr) => <Games />} />
        </Switch>
      </div>
    );
  }
}

export default App;

// <nav class="navbar navbar-expand-lg fixed-top navbar-light">
// <div class="container">
//   {/* Text Logo - Use this if you don't have a graphic logo */}
//   {/* <a class="navbar-brand logo-text page-scroll" href="index.html">Pavo</a> */}
//   {/* Image Logo */}
//   <a class="navbar-brand logo-image" href="index.html">
//     <img src="images/logo.svg" alt="alternative" />
//   </a>
//   <button
//     class="navbar-toggler p-0 border-0"
//     type="button"
//     data-toggle="offcanvas"
//   >
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div
//     class="navbar-collapse offcanvas-collapse"
//     id="navbarsExampleDefault"
//   >
//     <ul class="navbar-nav ml-auto">
//       <li class="nav-item">
//         <a class="nav-link page-scroll" href="#header">
//           Home <span class="sr-only">(current)</span>
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link page-scroll" href="#features">
//           Features
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link page-scroll" href="#details">
//           Details
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link page-scroll" href="#pricing">
//           Pricing
//         </a>
//       </li>
//       <li class="nav-item dropdown">
//         <a
//           class="nav-link dropdown-toggle"
//           href="#"
//           id="dropdown01"
//           data-toggle="dropdown"
//           aria-haspopup="true"
//           aria-expanded="false"
//         >
//           Drop
//         </a>
//         <div class="dropdown-menu" aria-labelledby="dropdown01">
//           <a class="dropdown-item page-scroll" href="article.html">
//             Article Details
//           </a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item page-scroll" href="terms.html">
//             Terms Conditions
//           </a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item page-scroll" href="privacy.html">
//             Privacy Policy
//           </a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link page-scroll" href="#download">
//           Download
//         </a>
//       </li>
//     </ul>
//     <span class="nav-item app-store-icons">
//       <a href="#your-link">
//         <i class="fab fa-apple"></i>
//       </a>
//       <a href="#your-link">
//         <i class="fab fa-android"></i>
//       </a>
//     </span>
//   </div>{" "}
//   {/* end of navbar-collapse */}
// </div>{" "}
// {/* end of container */}
// </nav>{" "}
// {/* end of navbar */}
// {/* end of navigation */}
// {/* Header */}
