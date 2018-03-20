import React, {Component} from 'react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    // Define initial state
    this.state = {
      userList: [],
      firstName: '',
      lastName: '', 
      emailAddress: '',
      password: '',
      remoteURL: `http://localhost:5000/api/token`,
      userLoadingMsg: 'Loading users...',
      error: null,
      isLoaded: false,
    };

    // Bind event handler context to this component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  registerUser = () => {
    let xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      `${this.state.remoteURL}?username=${this.state.emailAddress}&firstName=${this.state.firstName}&lastName=${this.state.lastName}&password=${this.state.password}`,
      true
    );

    xhr.onload = function() {
      debugger
      let data = xhr.responseText
      // console.log(data)
      // localStorage.setItem("token", token);
    }
    xhr.send();
  };

  componentDidMount() {
    // this.loadUsers();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // const newUserInfo = {
    //   emailAddress: this.state.emailAddress,
    //   password: this.state.password,
    // };

    this.registerUser();

  }


  handleFormFieldChange = (event) => {
    // event.preventDefault();
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;

    this.setState(stateToChange)
  }

  render() {
    return (
      <div className="RegisterForm">
        <form onSubmit={this.handleSubmit}>
          <div>
          <input
            type="text"
            value={this.state.emailAddress}
            onChange={this.handleFormFieldChange}
            placeholder="Enter your email address"
            id="emailAddress"
          />
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleFormFieldChange}
            placeholder="Enter your first name"
            id="firstName"
          />
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleFormFieldChange}
            placeholder="Enter your last name"
            id="lastName"
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
            // value={this.state.emailAddress}
            onChange={this.handleFormFieldChange}
            placeholder="Confirm your password"
            id="confirmPassword"
          />
          </div>

          <button>Register</button>
        </form>
        {/* <UserList contactList={this.state.contactList} loadingMsg={this.state.contactLoadingMsg} /> */}
      </div>
    );
  }
}

export default RegisterForm;
