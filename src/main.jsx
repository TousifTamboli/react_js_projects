import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routerreact from "./Routerreact";
import { BrowserRouter } from "react-router-dom";
import Useffecthook from "./Useeffecthook";

ReactDOM.render(
  <BrowserRouter>
    <Useffecthook></Useffecthook>
  </BrowserRouter>,
  document.getElementById("root")
);
