// Imports
import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class SavedTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      trips: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/Trip').then(res => res.json()).then(
      result => {
        console.log(result)
        this.setState({
          isLoaded: true,
          trips: result,
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
        <div>
          <Grid id="topGrid">
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <Panel id="tripPanel" bsStyle="info">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">
                      Your Saved Trips
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <ul>
                      {trips.map(trip => 
                        <li key={trip.tripId}>
                          <p>
                            {trip.location} for {trip.duration}s where you
                            intend to {trip.tripTypeId}
                          </p>
                          <hr />
                        </li> 
                      )}
                    </ul>
                  </Panel.Body>
                </Panel>
              </Col>
              {/* <Col id="tripImg" xs={8} md={4}>
                <img width="800px" src={require('../Common/flightpath.png')} />
              </Col> */}
            </Row>
          </Grid>
        </div>
      );
    }
  }
}
export default SavedTrips;

 {/* let parsedType = ''
    if (trip.tripType === 1) {
      set: (parsedType = 'Skii');
    } else if (trip.tripType === 2) {
      set: (parsedType = 'Cruise');
    } else if (trip.tripType === 3) {
      set: (parsedType = 'Beach vacation');
    } else if (trip.tripType === 4) {
      set: (parsedType = 'Mountain Climbing');
    } else if (trip.tripType === 5) {
      set: (parsedType = 'Business');
    } else if (trip.tripType === 6) {
      set: (parsedType = 'Backpacking');
    }
    console.log(parsedType); */}