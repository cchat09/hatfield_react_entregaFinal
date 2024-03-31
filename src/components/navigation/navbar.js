import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import CartWidget from './cartWidget.js';
import SearchFilter from '../../data/SearchFilters.jsx';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">Tridad Travel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
            <NavDropdown title="Destinations" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/continent/4">Europe</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/continent/3">Asia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/continent/2">The Americas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/continent/1">Africa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/continent/5">Oceania</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Travel goals" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/type/1">Culture and history</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/type/2">Active</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/type/3">Romantic getaways</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/type/4">Seasonal delights</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/type/5">Gourmet</NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
            <Nav.Link href="/checkout">View cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <SearchFilter /> */}
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
