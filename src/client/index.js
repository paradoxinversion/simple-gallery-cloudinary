import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

var root = document.getElementById("root");
ReactDOM.render(<App user="Your Name" />, root);
