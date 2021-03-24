import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const FooterNav = () => {
  return (
    <React.Fragment>
      <Container fluid className="footer-nav bg-light py-3">
        <Container className="footer-container">
          <Navbar expand="md"
            className="footer-nav-navbar"
            bg="light"
            variant="light"
            sticky="bottom"
          >
            <Nav className="footer-nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/faqs">FAQs</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/spacecalculator">Space Calculator</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
        <p className="text-center">
          © {(new Date().getFullYear())} Copyright Citilinked Self Storage. All Rights Reserved.
        </p>
      </Container>
    </React.Fragment>
  );
};

export default FooterNav;
