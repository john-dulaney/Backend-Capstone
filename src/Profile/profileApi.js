// Imports
import React, { Component } from "react";
const path = require("path");

class TripApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      trips: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/AspNetUser/")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            trips: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, trips } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {trips.map(trip => (
            <li key={trip.tripId}>
              {trip.location} {trip.duration} {trip.tripTypeId} {trip.tripType}
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default TripApi;