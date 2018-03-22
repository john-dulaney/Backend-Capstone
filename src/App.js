import React, {Component} from 'react';
import ErrorBoundary from './Common/ErrorBoundary';
import './styles/App.css';
// import {Link} from 'react-router-dom';
import './styles/form.css';
import NavBar from './Common/Navbar';
// Class Begin
class App extends Component {
  componentDidMount() {
    this.getSavedToken();
  }

  getSavedToken() {
    const _token = {token: localStorage.getItem('token')};
    this.setState(_token, () => this.isUserLoggedIn());
  }

  isUserLoggedIn() {
    if (localStorage.getItem('token') !== null) {
      fetch(`http://localhost:5000/api/token`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(result => {
          if (result.ok) {
            return result.json();
          } else {
            return {
              username: null,
            };
          }
        })
        .then(r => {
          this.setState({
            userLoggedIn: r.username,
          });
        });
    } else {
      this.setState({
        userLoggedIn: null,
      });
    }
  }
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          {/* <NavBar /> */}
          <div className="">
            {/* <Link to="/CreateListItem"><button>ayyyyyy</button> </Link> */}
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
