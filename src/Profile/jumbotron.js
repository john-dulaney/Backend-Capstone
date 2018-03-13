// Imports
import React, { Component } from "react";
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

class Jumbotron extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </div>
    );
  }
}
export default Jumbotron;
