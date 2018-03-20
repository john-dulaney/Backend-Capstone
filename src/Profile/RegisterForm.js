import React, {Component} from 'react';
// import AppState from '../Appstate';
import '../styles/form.css';
// import Router from '../Router';
// import ProfileApi from './ProfileApi';

class RegisterForm extends Component {
  emailRef = React.createRef();
  passwordRef = React.createRef();
  passwordConfirmRef = React.createRef();

  // This function handles the login form actions on button click.
  RegisterNewUserHandler = event => {
    // Stop the form from submitting
    event.preventDefault();
    // apiCallHandler(user)
    // get the text from that input create a user object
    const user = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    }
    console.log(user);
    // login the user object
    // this.props.loginUser(user);
    // Change the page to /dashboard/whatever-they-entered
    // this.props.history.push(`/dashboard/${user}`);
    // form reset
    event.currentTarget.reset();
  };


  // apiCallHandler = (user) => {
  //   fetch('http://localhost:5000/api/AspNetUsers', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     credentials: 'same-origin',
  //   }).then(r => 
  //     console.log(r)
  //     ,
  //     function(error) {
  //       error.message; //=> String
  //     }
  //   );
  //   }





  // Render block
  render() {
    return (
      <div>
        <form onSubmit={this.RegisterNewUserHandler}>
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
          <div>
            <label>
              Confirm Password:
              <input type="password" required ref={this.passwordConfirmRef} />
            </label>
          </div>
          <button type="submit">Register! →</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
