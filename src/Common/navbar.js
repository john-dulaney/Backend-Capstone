// Imports
import React, {Component} from 'react';
import palm from './palm.png';
import { LinkContainer } from 'react-router-bootstrap';
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
          {/* <LinkContainer> */}
              <NavItem eventKey={1} href="CreateNewTrip">
                Plan A New Trip to Take
              </NavItem>
          {/* </LinkContainer> */}
              <NavItem eventKey={2} href="CreateListItem">
                Add to your Checklist
              </NavItem>
          </Nav>
          <Nav pullRight>
              <NavItem eventKey={1} href="Login ">
                Login
              </NavItem>
              <NavItem eventKey={2} href="RegisterUser">
                Create Account
              </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
