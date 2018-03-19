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
    debugger
    const user = {
      email: this.emailRef.value,
      password: this.passwordRef.value
    };
    // login the user object
    this.props.loginUser(user)
    // const userPassword = this.passwordRef.value.value;
    console.log(user);
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
          <button type="submit" value="Login">
            Login →
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;

// // construct what this module deals with
// constructor(props) {
//   super(props);
//   this.state = {
//     emailAddress: "",
//     Password: ""
//   };

//   this.handleSubmit = this.handleSubmit.bind(this);
//   this.onChangeEmail = this.onChangeEmail.bind(this);
//   this.onChangePassword = this.onChangePassword.bind(this);
//   // React.createRef()
// }

 // firstName: this.firstNameRef.value.value,
      // lastName: this.lastNameRef.value.value,