import React from "react";
import ReactDOM from "react-dom";
import ReactBootstrap from "react-bootstrap";
import "./styles/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Appstate from "./Appstate";

ReactDOM.render(
<Appstate><App /></Appstate>, 
document.getElementById("root"));
registerServiceWorker();
