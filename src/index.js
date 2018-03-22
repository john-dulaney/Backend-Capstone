import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Router from "./Router"
import NavBar from "./Common/Navbar";


ReactDOM.render(
<div>
<NavBar />,
<Router/ >, 
</div>,

document.getElementById("root"));
registerServiceWorker();
