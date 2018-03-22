// imports
import React, {Component} from 'react';
import '../styles/form.css'
class CreatListItem extends Component {
  constructor(props) {
    super(props);
    // Define initial state
    this.state = {
      ChecklistAction: '',
      TripType: '',
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

  addChecklistItem = ChecklistItem => {
    console.log('Posting: ', ChecklistItem);
    fetch(
      `http://localhost:5000/api/ChecklistItem=${ChecklistItem.ChecklistAction}&TripType=${ChecklistItem.TripType}`,
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
    
    const ChecklistItem = {
      ChecklistAction: this.state.ChecklistAction,
      TripType: this.state.TripType,
    };
    this.addChecklistItem(ChecklistItem);
  };

  handleChangeChecklistAction = ChecklistAction => {
    this.setState(
      {
        ChecklistAction: ChecklistAction.target.value,
      },
    );
  };

  handleChangeType = TripType => {
    this.setState(
      {
        TripType: TripType.target.value,
      }
    );
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
          action="#"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
          <label>Enter the item you wish to add to the checklist</label>
          <br/>
            <input
              type="text"
              value={this.state.ChecklistAction}
              onChange={this.handleChangeChecklistAction}
              placeholder="Enter the item you wish to add to the checklist"
              id="ChecklistAction"
            />
          </div>
          <br />
          <br />
          <br />
          <div className="form-group">
          <label>Please Enter the type(s) of trips this item is relevant to</label>
          <br/>
            <input
              type="text"
              value={this.state.TripType}
              onChange={this.handleChangeType}
              placeholder="Please Enter the type(s) of trips this item is relevant to"
              id="TripType"
            />
          </div>
          <br/>
          <br/>
          <br/>
          <div className="form-group">
            <button
              id="addItem_button"
              className="btn btn-success btn-md"
            >
              Log in / Recover Pass
            </button>
          </div>
        </form>
        {/* <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={TripType}
              onChange={this.state.handleChangeChecklistAction}
              placeholder="Enter the item you wish to add to the checklist"
              id="ChecklistAction"
            />
          </div>
          <div>
            <input
              type="text"
              value={ChecklistAction}
              onChange={this.state.handleChangeType}
              placeholder="Please Enter the type(s) of trips this item is relevant to"
              id="TripType"
            />
          </div>
          <button>Add it!</button>
        </form> */}
      </div>
    );
  }
}

// exports
export default CreatListItem;
