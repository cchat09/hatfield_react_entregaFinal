import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import CartWidget from './cartWidget.js';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Tridad Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <NavDropdown title="Destinations" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Europe</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Asia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">The Americas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Africa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Oceania</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Travel goals" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Culture and history</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Adventure</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Romantic getaways</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Seasonal delights</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Gourmet</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
