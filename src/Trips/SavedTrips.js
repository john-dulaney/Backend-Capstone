// Imports
import React, { Component } from "react";

class SavedTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      trips: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/Trip")
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
            <h1>Saved Trips</h1>
          {trips.map(trip => (
            <li key={trip.tripId}>
              <p>{trip.location} for {trip.duration}s where you intend to {trip.tripType} </p>
            </li>
          ))}
        </ul>
      );
    }
  }
}
export default SavedTrips;
