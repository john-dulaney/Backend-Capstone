import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import ErrorBoundary from './Common/ErrorBoundary';
import palm from './Common/palm.png';
import NavBar from './Common/Navbar';
// import Jumbotron from './Profile/Jumbotron';
// import DisplayCheckList from './Checklist/DisplayCheckList';
// import ChecklistApi from './Checklist/ChecklistApi';
// import TripApi from './Trips/TripApi';
import LoginForm from './Common/LoginForm';
import './styles/App.css';


// Class Begin
class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <NavBar />
          <div className="">
            <h3>Login</h3>
            <LoginForm />
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}
export default App;

// <Jumbotron />
// <ChecklistApi pullRight/>
// <TripApi pullLeft/>
