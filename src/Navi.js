import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/form1">form1</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/form2">form2</Link>
                </NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
