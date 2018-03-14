// Imports
import React, { Component } from "react";
import palm from './palm.png';
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  ButtonToolbar,
  Button,
  ButtonGroup,
} from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="nav staticTop">
        <Navbar.Header>
          <Navbar.Brand>
          <a href="#"><img src={palm} className="App-logo pullLeft" alt="logo" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="CreateNewTrip.js">
              Plan A New Trip to Take
            </NavItem>
            <NavItem eventKey={2} href="SavedTripsDashboard.js">
              View Saved Trip Checklists
            </NavItem>
            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Plan A New Trip to Take</MenuItem>
            <MenuItem eventKey={3.2}>View Saved Trip Checklists</MenuItem>
            <MenuItem eventKey={3.3}>.</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>.</MenuItem>
          </NavDropdown> */}
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="loginForm.js">
              Login
            </NavItem>
            <NavItem eventKey={2} href="createAccount.js">
              Create Account
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;

// Boot Strap example

{
  /* <div>
  <ul>
    <a onClick={() => this.push('page1') }>Page 1</a>
    <a onClick={() => this.push('page2') }>Page 2</a>
  </ul>
</div> */
}
