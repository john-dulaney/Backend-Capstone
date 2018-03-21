import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  Button,
} from 'react-bootstrap';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    // Define initial state
    this.state = {
      userList: [],
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      remoteURL: `http://localhost:5000/api/token`,
      userLoadingMsg: 'Loading users...',
      error: null,
      isLoaded: false,
    };

    // Bind event handler context to this component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  registerUser = () => {
    let xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      `${this.state.remoteURL}?username=${this.state.emailAddress}&firstName=${this.state.firstName}&lastName=${this.state.lastName}&password=${this.state.password}`,
      true
    );

    xhr.onload = function() {
      debugger;
      let token = xhr.responseText;
      console.log(token);
      localStorage.setItem('token', token);
    };
    xhr.send();
  };

  handleSubmit = event => {
    event.preventDefault();
    this.registerUser();
  };

  handleFormFieldChange = event => {
    event.preventDefault();
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;

    this.setState(stateToChange);
  };

 
  render() {
    return (
  
      <div className="RegisterForm">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label class="control-label col-sm-2" for="emailAddress">
              Email:
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                required
                autoFocus
                autoComplete
                className="form-control"
                value={this.state.emailAddress}
                onChange={this.handleFormFieldChange}
                placeholder="Enter your email address"
                id="emailAddress"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2" for="firstName">
              First Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                required
                value={this.state.firstName}
                onChange={this.handleFormFieldChange}
                placeholder="Enter your first name"
                id="firstName"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="lastName">
              Last Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                required
                value={this.state.lastName}
                onChange={this.handleFormFieldChange}
                placeholder="Enter your last name"
                id="lastName"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="password">
              Select a Password:
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                required
                value={this.state.password}
                onChange={this.handleFormFieldChange}
                placeholder="Enter your password"
                id="password"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="confirmPassword">
              Confirm your Password:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                // value={this.state.emailAddress}
                onChange={this.handleFormFieldChange}
                placeholder="Confirm your password"
                id="confirmPassword"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember me</input>
                </label>
              </div>
            </div>
          </div>

          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
