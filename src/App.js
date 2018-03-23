import React, {Component} from 'react';
import './styles/App.css';
import './styles/App.scss';
// import {Link} from 'react-router-dom';
import './styles/form.css';
import {Col, Grid, Row} from 'react-bootstrap';
// import NavBar from './Common/Navbar';
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
    Col;
  }
  render() {
    return (
      <div className="App">
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-heading text-uppercase">John Dulaney</div>
              <div className="intro-lead-in">Software Developer</div>
            </div>
          </div>
        </header>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>
                <p>hello</p>
              </code>
            </Col>
            <Col xs={12} md={8}>
              <code>
                <p>I'm the other side</p>
              </code>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default App;
