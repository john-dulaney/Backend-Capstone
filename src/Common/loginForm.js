import React, {Component} from 'react';
import '../styles/form.css';
import Router from '../Router';
import RegisterForm from '../Profile/RegisterForm';

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
    // this.props.loginUser(user);
    // Change the page to /dashboard/whatever-they-entered
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
              <input type="email" autoFocus required ref={this.emailRef} />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input type="password" required ref={this.passwordRef} />
            </label>
          </div>
          <button type="submit">Login →</button>
          <br/>
          or
          <br/>
          <Router path="/register" component={RegisterForm} >
          <button type="submit">Register New Account →</button>
          </Router>
        </form>
      </div>
    );
  }
}

export default LoginForm;
