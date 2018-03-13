// Imports
import React, { Component } from "react";

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
      fetch("http://localhost:5000/api/Trip")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({
              isLoaded: true,
              trips: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
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
  export default TripApi