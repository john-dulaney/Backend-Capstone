import React, {Component} from 'react';
import './styles/App.css';
import './styles/form.css';
import {Col, Grid, Row, Clearfix} from 'react-bootstrap';

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
        <Grid id="topGrid">
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <h1>Welcome to Triplann!</h1>
              <p>
                Welcome to Triplann! This Application is designed to meet your
                travel needs by helping you organize items pertinent to you
                destination. Click create an Account from the navbar if it is
                your first time on this website, or Login if you are a returning
                user. Thanks for stopping by!
              </p>
            </Col>
            <Col id="splashPara" xs={12} md={8}>
              <img
                id="landingIMG"
                className="landingImg"
                src={require('./Common/download.jpeg')}
                alt="beach"
              />
            </Col>
          </Row>
        </Grid>

        <div id="belt">
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={3}>
              <img
              id=""
              className="iconGroup"
              src={require('./Common/001-location.png')}
              alt="beach"
            />
                <br />
              </Col>
              <Col sm={6} md={3}>
              <img
              id=""
              className="iconGroup"
              src={require('./Common/002-luggage.png')}
              alt="beach"
            />
                <br />
              </Col>
              <Clearfix visibleSmBlock>
              <img
              id=""
              className="iconGroup"
              src={require('./Common/003-globe.png')}
              alt="beach"
            />
              </Clearfix>
              <Col sm={6} md={3}>
              <img
              id=""
              className="iconGroup"
              src={require('./Common/005-backpack.png')}
              alt="beach"
            />
                <br />
              </Col>
              <Col sm={6} md={3}>
              <img
              id=""
              className="iconGroup"
              src={require('./Common/004-sunbed.png')}
              alt="beach"
            />
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <Row>
            <Col id="copyright" sm={6} md={3}>
            Copyright &#169; John Dulaney
            </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default App;
