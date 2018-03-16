// Funtionality Imports
import React, { Component } from "react";
// import createHistory from "history/createBrowserHistory"
import { browserHistory, Router, Route } from "react-router";

// Browser Component imports
import palm from "./Common/palm.png";
import NavBar from "./Common/Navbar";
import Jumbotron from "./Profile/Jumbotron";
import DisplayCheckList from "./Checklist/DisplayCheckList";
import ChecklistApi from "./Checklist/ChecklistApi";
import TripApi from "./Trips/TripApi";
import LoginForm from "./Common/LoginForm";
// styles
import "./styles/App.css";

// Class Begin
class App extends Component {
  render() {
    const state = this.props.appState;
    return (
      <div className="App">
        <NavBar />
        <header className="App-header" />

        {/* <Jumbotron /> */}
        <div className="">
          <LoginForm header={state.AppHeader} update={this.props.setAppState} />
          hello
        </div>




        <div className="" style={{ background: "green" }}>
          <div
            onMouseEnter={e => {
              this.props.setAppState({ hoverText: "ay watup" });
            }}
            onMouseLeave={e => {
              this.props.setAppState({ hoverText: false });
            }}
          >
          </div>
        </div>
        {/* <ChecklistApi pullRight/> */}
        {/* <TripApi pullLeft/> */}
      </div>
    );
  }
}
export default App;
