import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "font-awesome/css/font-awesome.min.css";
import ReactCursorPosition from "react-cursor-position";
ReactDOM.render(
  <ReactCursorPosition>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReactCursorPosition>,
  document.getElementById("root")
);

serviceWorker.unregister();
