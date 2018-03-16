import React, { Component } from "react";
import AppState from "../Appstate";


class LoginForm extends Component {
  // construct what this module deals with
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      Password: ""
    };
  }

  componentDidMount() {
    // On page load
  }
  
  handleSubmit(event) {
    debugger
    alert("This form actually worked: " + this.state.value);
    console.log("ayyy")
    event.preventDefault();

    // User API Module Gets dinged here???
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
                onChange={this.props.onChange}
              />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input
                type="text"
                value={this.props.Password}
                onChange={this.props.onChange}
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
}

export default LoginForm;
