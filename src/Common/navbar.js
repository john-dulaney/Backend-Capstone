// Imports
import React, {Component} from 'react';
import palm from './palm.png';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Router from '../Router';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import LoginForm from './LoginForm';
import Dashboard from '../Home/Dashboard';
import ChecklistApi from '../Checklist/ChecklistApi';
import RegisterForm from '../Profile/RegisterForm';
import TripApi from '../Trips/TripApi';
import App from '../App';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="nav staticTop">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <img src={palm} className="App-logo pullLeft" alt="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <BrowserRouter>
              <Switch>
                <LinkContainer to="/CreatNewTrip">
                  <NavItem eventKey={1}>Plan A New Trip to Take</NavItem>
                </LinkContainer>
                <LinkContainer to="/SavedChecklists">
                  <NavItem eventKey={2}>View Saved Trip Checklists</NavItem>
                </LinkContainer>

                <Route exact path="/" component={App} />
                <Route path="/CreateNewTrip" component={TripApi} />
                <Route path="/SavedChecklists" component={ChecklistApi} />
              </Switch>
            </BrowserRouter>
          </Nav>
          <Nav pullRight>
            <BrowserRouter>
              <Switch>
                <LinkContainer to="/RegisterUser">
                  <NavItem eventKey={1}>Register</NavItem>
                </LinkContainer>
                <LinkContainer to="/Login">
                  <NavItem eventKey={2}>
                    Log in/out placholder dont forget this
                  </NavItem>
                </LinkContainer>
                <Route path="/RegisterUser" component={RegisterForm} />
                <Route path="/Login" component={LoginForm} />
              </Switch>
            </BrowserRouter>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
