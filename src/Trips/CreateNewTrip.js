import React, {Component} from 'react';
import Select from 'react-select';
// import 'react-select/dist/react-select.css';

class CreateNewTrip extends Component {
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
    const t = this.state;
    xhr.open(
      'POST',
      `${t.remoteURL}?username=${t.duration}&location=${t.location}&tripType=${t.tripType}`,
      true
    );

    xhr.onload = function() {
      debugger;
      let token = xhr.responseText;
      console.log(token);
      localStorage.setItem('token', token);
    };
    xhr.send();
  };

  handleSubmit = event => {
    event.preventDefault();
    this.AddNewTrip();
  };

  handleChange = duration => {
    this.setState({duration});
    console.log(`Selected: ${duration.label}`);
  };

  componentDidMount() {
    fetch('./countryList.json')
    //   .then(res => console.log(res))
      .then(res => res.json())
      .then(r => {
        r.forEach(e => {
          console.log(e);
        });
      });
  }

  handleFormFieldChange = event => {
    event.preventDefault();
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;

    this.setState(stateToChange);
  };

  render() {
    const {duration} = this.state;
    const value = duration && duration.value;
    return (
      <div className="AddTripForm">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div>
            <label for="duration">
              How long do you intend this trip to be?
            </label>
            <Select
              name="duration"
              id="duration"
              value={value}
              onChange={this.handleChange}
              options={[
                {value: '1', label: '1-3 Days'},
                {value: '2', label: 'About a week'},
                {value: '3', label: '2 weeks'},
                {value: '4', label: '3 weeks - 1 month'},
              ]}
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
            <Select
              name="duration"
              id="duration"
              value={value}
              onChange={this.handleChange}
              options={[
                {value: '1', label: '1-3 Days'},
                {value: '2', label: 'About a week'},
                {value: '3', label: '2 weeks'},
                {value: '4', label: '3 weeks - 1 month'},
              ]}
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.tripType}
              onChange={this.handleFormFieldChange}
              placeholder="What kind of Activities do you plan on doing?"
              id="tripType"
            />
            <Select
              name="duration"
              id="duration"
              value={value}
              onChange={this.handleChange}
              options={[
                {value: '1', label: '1-3 Days'},
                {value: '2', label: 'About a week'},
                {value: '3', label: '2 weeks'},
                {value: '4', label: '3 weeks - 1 month'},
              ]}
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

export default CreateNewTrip;
