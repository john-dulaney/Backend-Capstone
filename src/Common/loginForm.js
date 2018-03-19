import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppState from '../Appstate';
import '../styles/form.css';

class LoginForm extends Component {
  // --- Refactor starts here
  myInputEmail = React.createRef();
  myInputPassword = React.createRef();

  // This function handles the login form actions on button click.
  logUserInHandler = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const userEmail = this.myInputEmail.value.value;
    const userPassword = this.myInputPassword.value.value;
    
    console.log(this.myInputEmail.value.value);
    console.log(this.myInputPassword.value.value);
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/dashboard/${userEmail}`);
  };
  // --- //

  // Render block
  render() {
    return (
      <div>
        <form onSubmit={this.logUserInHandler}>
          <div>
            <label>
              Email:
              <input type="text" autoFocus required ref={this.myInputEmail} />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input type="text" autoFocus ref={this.myInputPassword} />
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
