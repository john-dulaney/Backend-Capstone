// Imports
import React, {Component} from 'react';
const path = require('path');

class TripApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      trips: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/AspNetUsers', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    }).then(
      function(response) {
        return response.text();
      },
      function(error) {
        error.message; //=> String
      }
    );
  }

  render() {
    const {error, isLoaded, trips} = this.state;
    if (error) {
      return (
        <div>
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          SHITS POSTED
        </ul>
      );
    }
  }
}
export default TripApi;
