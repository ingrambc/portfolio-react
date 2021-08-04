import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styled from "styled-components";

const StyledNav = styled.div`
  .navbar {
  color:rgb(44, 141, 44);
  background-color: rgb(187, 243, 187);
  margin: 0;
  padding: 0;
  }

  .navbar-brand{
    height: 60px;
    margin: 0;
    margin-left: 30px;
    padding: 10px;
    background-color: rgb(44, 141, 44);
    color:rgb(187, 243, 187);
    font-weight: bolder;
    font-size: 26px;
  }
  
`;

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNav>
      <Navbar color="rgb(44, 141, 44)" light expand="md">
        <NavbarBrand tag={Link} to="/portfolio-react">Brian Ingram</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/portfolio">Portfoilio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </StyledNav>
  );
}

export default Header;