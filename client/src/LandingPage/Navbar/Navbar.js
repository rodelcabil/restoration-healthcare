import React from "react";
import { Nav, NavMenu, NavItem, NavLinks } from "./navbar-elements";

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavItem>
          <NavLinks>Home</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Service</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks >Beating Diabetes</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Testimonial</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Method</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Our Approach</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks>Contact</NavLinks>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
