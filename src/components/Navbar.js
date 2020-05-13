import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navigate extends Component {
  constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
      }
  toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
  render(){
    return (
      <Navbar className={this.props.dark? "navbar-dark": "navbar-light"} expand="md">
          <div className="container">
              <NavbarBrand className="mr-auto">Mamoanwar</NavbarBrand>
              <NavbarToggler onClick={this.toggleNav}/>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar className="ml-auto">
                  <NavItem>
                      <NavLink className="nav-link" to='/home'>Home</NavLink>
                  </NavItem>
                <NavItem>
                    <a className="nav-link" href='#contact'>Contact</a>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='#projects'>Projects</NavLink>
                </NavItem>
                </Nav>
                <Nav navbar className="ml-auto">
                  <NavItem>
                    <Button outline className="nav-link" onClick={this.props.darkToggle}>{this.props.dark? "Light-mode": "Dark-mode"}</Button>
                  </NavItem>
                </Nav>
              </Collapse>
          </div>
      </Navbar>
    );
  }
}

export default Navigate;
