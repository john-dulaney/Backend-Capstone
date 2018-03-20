import React, {Component} from 'react';
import {
} from 'react-router-dom';
import ErrorBoundary from './Common/ErrorBoundary';
import NavBar from './Common/Navbar';
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
    );
  }
}
export default App;