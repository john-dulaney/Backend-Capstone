// Funtionality Imports
import React, { Component } from "react";
// import createHistory from "history/createBrowserHistory"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./Common/ErrorBoundary";

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
  state ={
    user: {},
    checklist: {},
    trip: {}
  }
  render() {
    const state = this.props.appState;
    return (
      <div className="App">
        <NavBar />
        <header className="App-header" />

        {/* <Jumbotron /> */}
        <div className="">
        <ErrorBoundary>
          <h3>Login</h3>
          <LoginForm header={state.AppHeader} update={this.props.setAppState} />
        </ErrorBoundary>
          
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
