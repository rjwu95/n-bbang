import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">N빵</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#search">검색</Nav.Link>
          {/* <Nav.Link href="/">Home</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
