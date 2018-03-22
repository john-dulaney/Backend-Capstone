// Imports
import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class TripTypeApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      TripType: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/TripType').then(res => res.json()).then(
      result => {
        console.log(result);
        this.setState({
          isLoaded: true,
          TripType: result,
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const {error, isLoaded, TripType} = this.state;
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
          <h1>Saved TripTypes</h1>
          {Object.keys(TripType).map(trip =>
            <li key={this.state.Key}>
              <p>
                {trip.UserId}
              </p>
              <p>
                {trip.ActivityType} for {trip.TravelMethod}s where you intend to{' '}
                {trip.WeatherType}{' '}
              </p>
            </li>
          )}
        </ul>
      );
    }
  }
}
export default TripTypeApi;
