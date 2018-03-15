// Funtionality Imports
import React, { Component } from "react";
// import createHistory from "history/createBrowserHistory"
import { browserHistory, Router, Route } from "react-router";

// Browser Component imports
import palm from "./Common/palm.png";
import NavBar from "./Common/navbar";
import Jumbotron from "./Profile/jumbotron";
import Login from "./Common/loginForm";
import DisplayCheckList from "./Checklist/DisplayCheckList";
import ChecklistApi from "./Checklist/checklistApi";
import TripApi from "./Trips/TripApi";
import LoginForm from "./Common/loginForm";
// styles
import "./styles/App.css";

// Class Begin
class App extends Component {
  render() {
    const state = this.props.appState;
    return class App extends Component {
      render() {
        const state = this.props.appState;
        return (
          <div>
            {state.hoverText && (
              <div
                className="w-100 pa4 bg-near-black"
                style={{ position: "fixed", bottom: 0 }}
              >
                <h1 className="measure ma0 near-white center tc">
                  {state.hoverText}
                </h1>
              </div>
            )}
            <div className="pv1 pv3-ns tc bg-near-black">
              <img src={state.header.logo} className="mw5" alt="logo" />
              <h2 className="near-white">{state.header.text}</h2>
            </div>
            <a href="https://github.com/blairanderson/react-no-redux/">
              <h4 className="tc near-black">Fork me on GitHub</h4>
            </a>
            <div className="cf">
              <div className="fl w-50">
                <StringState
                  header={state.header}
                  update={this.props.setAppState}
                  updatedYet={state.updatedYet}
                />
              </div>
              <div className="fl w-50">
                <Form header={state.header} update={this.props.setAppState} />
              </div>
            </div>
            <div className="cf">
              <Description
                header={state.header}
                updatedYet={state.updatedYet}
              />
            </div>
            <h3 className="tc">What does it look like?</h3>
            <div className="cf pb6" style={{ background: "rgb(40,44,52)" }}>
              <div
                onMouseEnter={e => {
                  this.props.setAppState({ hoverText: ay });
                }}
                onMouseLeave={e => {
                  this.props.setAppState({ hoverText: false });
                }}
                className="fl w-100 w-50-ns"
              >
                {/* <img
                  src={indexjsImage}
                  className="db center"
                  title= ay}
                  alt= ay}
                /> */}
              </div>
              <div
                onMouseEnter={e => {
                  this.props.setAppState({ hoverText: ay });
                }}
                onMouseLeave={e => {
                  this.props.setAppState({ hoverText: false });
                }}
                className="fl w-100 w-50-ns"
              >
                {/* <img
                  src={}
                  className="db center"
                  alt={ay}
                  title={ay}
                /> */}
              </div>
            </div>
            <AsyncExample update={this.props.setAppState} data={state.async} />
          </div>
        );
      }
    };
  }
}
export default App;

//       <div className="App">
//       <NavBar />
//         <header className="App-header">
//         </header>

//        {/* <Jumbotron /> */}
//         <div className="fl w-50">
//             <loginForm header={state.header} update={this.props.setAppState} />
//             hello
//         </div>

//         <div className="cf pb6" style={{ background: 'rgb(40,44,52)' }}>
//           <div
//             onMouseEnter={e => {
//               this.props.setAppState({ hoverText: 'ay watup' });
//             }}
//             onMouseLeave={e => {
//               this.props.setAppState({ hoverText: false });
//             }}
//             className="fl w-100 w-50-ns"
//           >
//             <img
//               className="db center"
//             />
//           </div>
//           </div>
//         {/* <ChecklistApi pullRight/> */}
//         {/* <TripApi pullLeft/> */}
//       </div>
//     );
//   }
// }
