
import React, { Component } from 'react';

class AdminPost extends Component {
    constructor(props) {
      super(props);
  
      // Define initial state
      this.state = {
        duration: '',
        location: '', 
        tripType: '',
        remoteURL: `http://localhost:5000/api/token`,
        error: null,
        isLoaded: false,
      };
  
      // Bind event handler context to this component
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    }
  
    AddNewTrip = () => {
      let xhr = new XMLHttpRequest();
      const t = this.state
      xhr.open(
        'POST',
        `${t.remoteURL}?username=${t.duration}&location=${t.location}&tripType=${t.tripType}`,
        true
      );
  
      xhr.onload = function() {
        debugger
        let token = xhr.responseText
        console.log(token)
        localStorage.setItem("token", token);
      }
      xhr.send();
    };
  
    handleSubmit = (event) => {
      event.preventDefault();
      this.AddNewTrip();
    }
  
  
    handleFormFieldChange = (event) => {
      event.preventDefault();
      const stateToChange = {};
      stateToChange[event.target.id] = event.target.value;
  
      this.setState(stateToChange)
    }
  
    render() {
      return (
        <div className="AddTripForm">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div>
            <input
              type="text"
              value={this.state.duration}
              onChange={this.handleFormFieldChange}
              placeholder="Enter how long your trip is"
              id="duration"
            />
            </div>
            <div>
            <input
              type="text"
              value={this.state.location}
              onChange={this.handleFormFieldChange}
              placeholder="Where are you going?"
              id="location"
            />
            </div>
            <div>
            <input
              type="text"
              value={this.state.tripType}
              onChange={this.handleFormFieldChange}
              placeholder="Enter your last name"
              id="tripType"
            />
            </div>
            <div>
            <input
              type="text"
              value={this.state.password}
              onChange={this.handleFormFieldChange}
              placeholder="Enter your password"
              id="password"
            />
            </div>
            <div>
            <input
              type="text"
              // value={this.state.duration}
              onChange={this.handleFormFieldChange}
              placeholder="Confirm your password"
              id="confirmPassword"
            />
            </div>
  
            <button>Add a trip</button>
          </form>
        </div>
      );
    }
  }
  
export default AdminPost;