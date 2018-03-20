// import React, {Component} from 'react';

// class Xhr extends Component {
//   constructor(props) {
//     super(props);

//     // Define initial state
//     this.state = {
//       userList: [],
//       firstName: '',
//       lastName: '',
//       emailAddress: '',
//       password: '',
//       remoteURL: `http://localhost:5000/api/token`,
//       userLoadingMsg: 'Loading users...',
//       error: null,
//       isLoaded: false,
//     };

//     // Bind event handler context to this component
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
//   }

//   registerUser = () => {
//     let xhr = new XMLHttpRequest();
//     xhr.open(
//       'POST',
//       `${this.state.remoteURL}/${this.state.emailAddress}?${this.state
//         .password}`
//     );

//     xhr.onload = function() {
//       let data = JSON.parse(xhr.responseText);
//     }
//       .bind(this)
//       .then(console.log(this));

//     xhr.send();
//   };

//   componentDidMount() {
//     // this.loadUsers();
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const newUserInfo = {
//       emailAddress: this.state.emailAddress,
//       password: this.state.password,
//     };

//     registerUser();

//   }

//   handleFormFieldChange = (event) => {
//     event.preventDefault();
//     const stateToChange = {};
//     stateToChange[event.target.id] = event.target.value;

//     // this.setState(stateToChange)
//   }

//   render() {
//     return (
//       <div className="RegisterUser">
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.emailAddress}
//             onChange={this.handleFormFieldChange}
//             placeholder="Enter your email address"
//             id="emailAddress"
//           />
//           <input
//             type="text"
//             value={this.state.password}
//             onChange={this.handleFormFieldChange}
//             placeholder="Enter your password"
//             id="password"
//           />
//           <input
//             type="text"
//             // value={this.state.emailAddress}
//             // onChange={this.handleFormFieldChange}
//             placeholder="Confirm your password"
//             id="confirmPassword"
//           />

//           <button>Register</button>
//         </form>
//         {/* <UserList contactList={this.state.contactList} loadingMsg={this.state.contactLoadingMsg} /> */}
//       </div>
//     );
//   }
// }

// export default Xhr;
