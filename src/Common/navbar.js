// Imports
import React, {Component} from 'react';
import palm from './palm.png';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import Router from '../Router';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from '../Home/Dashboard';
import SteveWay from '../Profile/SteveWay';
import ChecklistApi from '../Checklist/ChecklistApi';
import RegisterForm from '../Profile/RegisterForm';
import TripApi from '../Trips/TripApi';
import App from '../App';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="nav staticTop">
        <BrowserRouter>
          <Switch>
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
                <Link to="/CreatNewTrip">
                  <NavItem eventKey={1}>Plan A New Trip to Take</NavItem>
                </Link>
                <Link to="/SavedChecklists">
                  <NavItem eventKey={2}>View Saved Trip Checklists</NavItem>
                </Link>

              </Nav>
              <Nav pullRight>
                <Link to="/Register">
                  <NavItem eventKey={1}>Register</NavItem>
                </Link>
                <Link to="/Login">
                  <NavItem eventKey={2}>Log in/out placholder dont forget this</NavItem>
                </Link>
              </Nav>
            </Navbar.Collapse>
            <Route exact path="/" component={App} />
            <Route path="/CreateNewTrip" component={TripApi} />
            <Route path="/SavedChecklists" component={ChecklistApi} />
            <Route path="/Register" component={RegisterForm} />
            <Route path="/Login" component={LoginForm} />
          </Switch>
        </BrowserRouter>
      </Navbar>
    );
  }
}
export default NavBar;
