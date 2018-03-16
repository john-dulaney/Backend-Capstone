import React, { Component } from "react";
import AppState from "../Appstate";
class LoginForm extends Component {
  // React Handlers
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: "",
      Password: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // this.emailAddress.focus();
  }

  onChange(event) {
    this.props.update({
      updatedYet: true,
      userInput: Object.assign({}, this.props.userInput, {
        text: event.target.value
      })
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  // Actual Form Code
  render() {
    return (
      <div>
        <form>
          <label>
            Email:
            <input
              autoFocus
              type="text"
              value={this.props.emailAddress}
              onChange={this.props.onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              value={this.props.Password}
              onChange={this.props.onChange}
            />
          </label>
          <button>Create Account</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
