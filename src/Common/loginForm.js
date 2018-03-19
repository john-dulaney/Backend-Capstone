import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppState from '../Appstate';
import '../styles/form.css';

class LoginForm extends Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();

  // This function handles the login form actions on button click.
  logUserInHandler = event => {
    // Stop the form from submitting
    event.preventDefault();

    // get the text from that input create a user object
    const user = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    };
    console.log(user);
    // login the user object
    this.props.loginUser(user);
    // Change the page to /dashboard/whatever-they-entered
    this.props.history.push(`/dashboard/${user}`);
    // form reset
    event.currentTarget.reset();
  };
  // Render block
  render() {
    return (
      <div>
        <form onSubmit={this.logUserInHandler}>
          <div>
            <label>
              Email:
              <input type="text" autoFocus required ref={this.emailRef} />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input type="text" required ref={this.passwordRef} />
            </label>
          </div>
          <button type="submit">Login →</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
