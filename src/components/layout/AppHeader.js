import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

// Logo
import logo from '../../img/logo/logo.png';

const AppHeader = () => {
  return (
    <Navbar className="app-header" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="/">
      <img src={logo} style={{width: 100}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/spacecalculator">Storage Calculator</Nav.Link>
          <Nav.Link href="/locations">Locations</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">

            <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
            <NavDropdown.Item href="/testimonials">
              Testimonials
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button className="quote-button" size="lg" href="/contact" variant="warning">
          Get A Quote
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppHeader;
