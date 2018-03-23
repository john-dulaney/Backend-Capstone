import React, {Component} from 'react';
import './ProfileFormStyle.css';
import {FormControl, FormGroup} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CreateNewTrip from '../Trips/CreateNewTrip';

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
    const r = this.state;
    xhr.open(
      'POST',
      `${r.remoteURL}?username=${r.emailAddress}&firstName=${r.firstName}&lastName=${r.lastName}&password=${r.password}`,
      true
    );

    xhr.onload = function() {
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
        <label>Please enter your Email Address:</label>
          <FormGroup bsSize="large">
            <FormControl
              type="email"
              required
              autoFocus
              value={this.state.emailAddress}
              onChange={this.handleFormFieldChange}
              placeholder="Enter your email address"
              id="emailAddress"
            />
        <label>Your First Name:</label>
            <FormControl
              type="text"
              required
              value={this.state.firstName}
              onChange={this.handleFormFieldChange}
              placeholder="Enter your first name"
              id="firstName"
            />
        <label>Your Last Name:</label>
            <FormControl
              type="text"
              required
              value={this.state.lastName}
              onChange={this.handleFormFieldChange}
              placeholder="Enter your last name"
              id="lastName"
            />
        <label>Password:</label>
            <FormControl
              type="password"
              required
              value={this.state.password}
              onChange={this.handleFormFieldChange}
              placeholder="Enter your password"
              id="password"
            />
        <label>Confirm Password:</label>
            <FormControl
              type="text"
              required
              // value={this.state.emailAddress}
              onChange={this.handleFormFieldChange}
              placeholder="Confirm your password"
              id="confirmPassword"
            />
          </FormGroup>

          <LinkContainer to="/CreateNewTrip"><button type="submit" pclassName="btn btn-success btn-md">Register</button></LinkContainer>
          
        </form>
      </div>
    );
  }
}

export default RegisterForm;
