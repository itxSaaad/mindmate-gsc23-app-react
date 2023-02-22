import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";

function NavbarCmp() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">MindMate</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#appointments">Appointments</Nav.Link>
          <Nav.Link href="#articles">Articles</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            className="me-sm-2"
            type="search"
            placeholder="Search"
          />
          <Button
            variant="outline-secondary"
            className="my-2 my-sm-0"
            type="submit"
          >
            Search
          </Button>
        </Form>
        <Nav>
          <Nav.Link href="#notifications">
            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          </Nav.Link>
          <NavDropdown
            title={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
          <Button variant="outline-primary" className="ml-2">
            Login / Signup
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCmp;
