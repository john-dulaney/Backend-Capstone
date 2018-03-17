import React, { Component } from "react";
import AppState from "../Appstate";
import "../styles/form.css";

class LoginForm extends Component {
  // construct what this module deals with
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      Password: ""

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    // React.createRef()
  }

  

  componentDidMount() {
    // On page load
  }

  onChangeEmail(event) {
    this.setState({emailAddress: event.target.value})
  }
  onChangePassword(event) {
    this.setState({Password: event.target.value})
  }
  
  handleSubmit(event)  {
    console.log(this.state.emailAddress)

    console.log(this.state.Password) 
    event.preventDefault();

    // User API  Module Gets dinged here???
  }
  
  // Actual Form Code
  render() {
    return (
      <div>
        <form 
          onSubmit={this.handleSubmit}
        >
          <div>
            <label>
              Email:
              <input
                autoFocus
                type="text"
                value={this.props.emailAddress}
                onChange={this.onChangeEmail}
              />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input
                type="text"
                value={this.props.Password}
                onChange={this.onChangePassword}
              />
            </label>
          </div>
          <button
            type="submit"
            value="Login"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
};

export default LoginForm;
