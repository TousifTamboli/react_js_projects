import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routerreact from "./Routerreact";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routerreact></Routerreact>
  </BrowserRouter>,
  document.getElementById("root")
);
