import React, { Component } from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <a onClick={() => this.push('page1') }>Page 1</a>
          <a onClick={() => this.push('page2') }>Page 2</a>
        </ul>
      </div>
    )
  }
};
export default NavBar;



// Boot Strap example

// <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
//   <NavItem eventKey="1" href="/home">
//     NavItem 1 content
//   </NavItem>
//   <NavItem eventKey="2" title="Item">
//     NavItem 2 content
//   </NavItem>
//   <NavItem eventKey="3" disabled>
//     NavItem 3 content
//   </NavItem>
//   <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
//     <MenuItem eventKey="4.1">Action</MenuItem>
//     <MenuItem eventKey="4.2">Another action</MenuItem>
//     <MenuItem eventKey="4.3">Something else here</MenuItem>
//     <MenuItem divider />
//     <MenuItem eventKey="4.4">Separated link</MenuItem>
//   </NavDropdown>
// </Nav>

// render(<NavBar />);