// Imports
import React, {Component} from 'react';
import palm from './palm.png';
// import { LinkContainer } from 'react-router-bootstrap';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="nav staticTop">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src={palm} className="App-logo pullLeft" alt="logo" />
            </a>
            <button className="wildcard"></button>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {/* <LinkContainer to="/CreateNewTrip"> */}
              <NavItem eventKey={1} href="CreateNewTrip">
                Plan A New Trip to Take
              </NavItem>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="/CreateListItem"> */}
              <NavItem eventKey={2} href="SavedTripsDashboard">
                Add to your Checklist
              </NavItem>
            {/* </LinkContainer> */}
          </Nav>
          <Nav pullRight>
            {/* <LinkContainer to="/LoginForm"> */}
              <NavItem eventKey={1} href="LoginForm">
                Login
              </NavItem>
            {/* </LinkContainer> */}
            {/* <LinkContainer to="/CreateAccount"> */}
              <NavItem eventKey={2} href="createAccount">
                Create Account
              </NavItem>
            {/* </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
