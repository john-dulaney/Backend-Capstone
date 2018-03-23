// Imports
import React, {Component} from 'react';
import ChecklistCSS from './ChecklistCSS.css';
// import { ReactDOM } from 'react-dom';
import {Panel, Grid, Row, Col} from 'react-bootstrap';

class DisplayCheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/ChecklistItem')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
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
    const {error, isLoaded, items} = this.state;
    if (error) {
      return (
        <div>
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      {
        /*  // 1. We need to sort the checklistems by their corresponding checklist id . 

          // 2. We need to then hardcode the tryptypeId's to the corresponding activity.

          // 3. we need to then display the activity in the 

          // 4. Work on the tables, getting the relational data together. thats the mission. */
      }

      return (
        <div>
          <Grid id="topGrid">
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <Panel id="tripPanel" bsStyle="info">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">
                      Your Saved Checklist Items
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <ul>
                      {items.map(item =>
                        <li key={item.checklistItemId}>
                          <p>
                          · {item.checklistAction}, Which matches this to this type of trip ({item.tripTypeId})
                          </p>
                          <hr />
                        </li>
                      )}
                    </ul>
                  </Panel.Body>
                </Panel>
              </Col>
              <Col id="tripImg2" xs={12} md={8}>
                <img src={require('../Common/mountain.jpg')} />
              </Col>
            </Row>
          </Grid>
        </div>
      );
    }
  }
}
export default DisplayCheckList;
