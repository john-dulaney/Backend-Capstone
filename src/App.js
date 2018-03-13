// Funtionality Imports
import React, { Component } from 'react';
// import createHistory from "history/createBrowserHistory"
// import { browserHistory, Router, Route } from 'react-router';

// Browser Component imports
import palm from './Common/palm.png';
import NavBar from './Common/navbar';
import Jumbotron from './Profile/jumbotron';
import Login from './Common/loginForm';
import DisplayCheckList from './Checklist/DisplayCheckList';
import ChecklistApi from './Checklist/checklistApi';
import TripApi from './Trips/TripApi';

// styles
import './styles/App.css';


// Class Begin
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
        </header>

       <Jumbotron />
        
        <ChecklistApi pullRight/>
        <TripApi pullLeft/>
      </div>
    );
  }
}


export default App;
