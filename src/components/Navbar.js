import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigate extends Component {

  render(){
    return (
      <Navbar dark expand="md">
          <div className="container">
              <NavbarBrand className="mr-auto">Mamoanwar</NavbarBrand>
              <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='#contact'>Contact</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='#projects'>Projects</NavLink>
              </NavItem>
              </Nav>
          </div>
      </Navbar>
    );
  }
}

export default Navigate;
