import React, {Component} from 'react';
import {
} from 'react-router-dom';
import ErrorBoundary from './Common/ErrorBoundary';
import NavBar from './Common/Navbar';
// import LoginForm from './Common/LoginForm';
import './styles/App.css';
import RegisterForm from './Profile/RegisterForm';

// Class Begin
class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <NavBar />
          <div className="">
            <h3>Register</h3>
            <RegisterForm />
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;