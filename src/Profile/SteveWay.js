import React, {Component} from 'react';

class Xhr extends Component {
  constructor(props) {
    super(props);

    // Define initial state
    this.state = {
      userList: [],
      firstName: '',
      lastName: '',
      emailAddress: '',
      remoteURL: `http://localhost:5000/api/AspNetUsers/`,
      userLoadingMsg: 'Loading users...',
      error: null,
      isLoaded: false

    };

    // Bind event handler context to this component
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  emailRef = React.createRef();
  passwordRef = React.createRef();
  passwordConfirmRef = React.createRef();


  loadUsers() {
    fetch("http://localhost:5000/api/Users")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          userList: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    // xhr.send();
  }

  componentDidMount() {
    this.loadUsers();
  }

  handleSubmit = function(evt) {
    evt.preventDefault();

    const newUserInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
    };

    // this.setState(prevState => ({
    //   contactList: prevState.contactList.concat(newUserInfo),
    //   firstName: "",
    //   lastName: "",
    //   emailAddress: ""
    // }))
  };

  handleFormFieldChange(evt) {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;

    // this.setState(stateToChange)
  }

  render() {
    return (
      <div className="RegisterUser">
        <form onSubmit={this.handleSubmit}>
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

          <input
            type="text"
            value={this.state.emailAddress}
            onChange={this.handleFormFieldChange}
            placeholder="Enter your email address"
            id="emailAddress"
          />

          <button>Register</button>
        </form>
        {/* <UserList contactList={this.state.contactList} loadingMsg={this.state.contactLoadingMsg} /> */}
      </div>
    );
  }
}

export default Xhr;
