import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(en);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
