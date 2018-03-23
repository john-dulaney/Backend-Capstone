// imports
import React, {Component} from 'react';
import './ChecklistCSS.css';
import Select from 'react-select';
import {LinkContainer} from 'react-router-bootstrap';
import { FormControl, FormGroup } from 'react-bootstrap';
import { log } from 'util';
class CreatListItem extends Component {
  constructor(props) {
    super(props);
    // Define initial state
    this.state = {
      ChecklistAction: '',
      TripTypeId: '',
      remoteURL: `http://localhost:5000/api/`,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeChecklistAction = this.handleChangeChecklistAction.bind(
      this
    );
    this.handleChangeType = this.handleChangeType.bind(this);
  }
  //   *************************************************************************************
  //   *
  //   *         *This function handles XHR request to the api to POST a new trip.
  //   *
  //   *************************************************************************************

  addChecklistItem = checklistItem => {
    console.log('Posting: ', checklistItem);
    fetch(
      `http://localhost:5000/api/ChecklistItem?ChecklistAction=${checklistItem.ChecklistAction}&TripTypeId=${checklistItem.TripTypeId}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  };

  //   *************************************************************************************
  //   *
  //   *         *This Block of functions are form handlers for the select form
  //   *         * Works in tandom with the JSX to set the selected values into state.
  //   *
  //   *************************************************************************************

  handleSubmit = event => {
    event.preventDefault();

    const checklistItem = {
      ChecklistAction: this.state.ChecklistAction,
      TripTypeId: this.state.TripTypeId,
    };
    console.log(checklistItem);
    
    this.addChecklistItem(checklistItem);
  };

  handleChangeChecklistAction = ChecklistAction => {
    this.setState({
      ChecklistAction: ChecklistAction.target.value,
    });
  };

  handleChangeType = TripTypeId => {
    this.setState({
      TripTypeId: TripTypeId.value,
    });
  };

  //   *************************************************************************************
  //   *         * R E N D E R *
  //   * variables set for some reason, I think just for ease of passing and shorthand for some of them
  //   *************************************************************************************
  render() {
    return (
      //   *************************************************************************************
      //   *         *Add a ChecklistItem form. this form collects user input for use in the API call
      //   *************************************************************************************
      <div className="ChecklistForm">
        <form
          id="form-horizontal"
          className="form-inline"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Enter the item you wish to add to the checklist</label>
            <br />
            <FormGroup bsSize="large">
              <FormControl
                type="text"
                value={this.state.ChecklistAction}
                onChange={this.handleChangeChecklistAction}
                id="ChecklistAction"
                placeholder="Item to save"
              />
            </FormGroup>
            {/* <input type="text" /> */}
          </div>
          <br />
          <br />
          <br />
          <div className="form-group">
            <label>
              Please Enter the type(s) of trips this item is relevant to
            </label>
            <br />
            <div>
              <Select
                name="TripTypeId"
                id="TripTypeId"
                required
                // value={this.state.TripTypeId}
                onChange={this.handleChangeType}
                options={[
                  {value: 1, label: 'Skii'},
                  {value: 2, label: 'Cruise'},
                  {value: 3, label: 'Beach Vacation'},
                  {value: 4, label: 'Mountain Climbing'},
                  {value: 5, label: 'Business'},
                  {value: 6, label: 'Backpacking'},
                ]}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="form-group">
              <button id="addItem_button" className="btn btn-success btn-md">Add Item</button>
              <LinkContainer to="/DisplayCheckList"><button id="addItem_button" className="btn btn-success btn-md">View Items</button></LinkContainer>
          </div>
        </form>
      </div>
    );
  }
}

// exports
export default CreatListItem;


// Skii
// Cruise
// Beach Vacation
// Mountain Climbing
// Business
// Backpacking